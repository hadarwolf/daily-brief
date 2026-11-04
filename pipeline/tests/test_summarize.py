import json
from dataclasses import replace
from datetime import date

import pytest

from daily_brief.config import Settings
from daily_brief.summarize import prepare as prepare_mod
from daily_brief.summarize.assemble import LETTER_REFERENCE, assemble, shuffle_quiz
from daily_brief.summarize.inputs import build_inputs, israel_date
from daily_brief.summarize.matchday import detect_match_day

TODAY = date(2026, 10, 10)
SOURCES_CFG = {
    "football_data": {"favorite_teams": {"arsenal": 57}},
    "rss": [{"id": "bbc_world", "name": "BBC World"}],
}


def _rss(source_id, section, titles):
    items = [
        {"title": t, "url": f"https://ex.com/{source_id}/{i}", "published": "2026-10-10T04:00:00+00:00",
         "summary": f"summary of {t}", "lang": "en"}
        for i, t in enumerate(titles)
    ]
    return {"source_id": source_id, "section": section, "kind": "rss", "ok": True, "items": items, "data": {}}


def _fd_match(home_id, away_id, utc):
    return {
        "utcDate": utc, "status": "TIMED", "competition": {"name": "Premier League", "code": "PL"},
        "homeTeam": {"id": home_id, "shortName": f"T{home_id}"}, "awayTeam": {"id": away_id, "shortName": f"T{away_id}"},
        "score": {"fullTime": {"home": None, "away": None}},
    }


def make_raw(arsenal_kickoff="2026-10-10T14:00:00Z"):
    return {
        "bbc_world": _rss("bbc_world", "geopolitics", ["Big world story", "Other story"]),
        "ynet_news": _rss("ynet_news", "israeli_politics", ["כותרת"]),
        "ft_home": _rss("ft_home", "business", ["Company does thing"]),
        "aeon": _rss("aeon", "ideas", ["An essay"]),
        "espn_nba": _rss("espn_nba", "sports", ["NBA news"]),
        "football_data": {"source_id": "football_data", "section": "sports", "kind": "api", "ok": True, "items": [],
                          "data": {"matches_window": {"matches": [_fd_match(57, 61, arsenal_kickoff)]}, "standings": {}, "favorite_teams": {}}},
        "wikipedia": {"source_id": "wikipedia", "section": "learn", "kind": "api", "ok": True, "items": [],
                      "data": {"en": [{"year": 1967, "text": "Something happened.", "pages": [{"url": "https://w/1", "extract": "ctx"}]}]}},
        "markets": {"source_id": "markets", "section": "business", "kind": "api", "ok": True, "items": [],
                    "data": {"quotes": {"SP500": {"last": 1.0}}}},
    }


# ---------------------------------------------------------------- units


def test_israel_date_handles_naive_and_z_timestamps():
    # 22:30 UTC is already the next day in Israel (UTC+3 in October).
    assert israel_date("2026-10-09T22:30:00Z") == date(2026, 10, 10)
    assert israel_date("2026-10-09T22:30:00") == date(2026, 10, 10)
    assert israel_date("2026-10-09T20:00:00+00:00") == date(2026, 10, 9)


def test_match_day_detects_favorite_playing_today():
    md = detect_match_day(make_raw(), SOURCES_CFG, TODAY)
    assert md["is_match_day"] and md["events"][0]["home"] == "T57"


def test_match_day_ignores_other_days():
    assert not detect_match_day(make_raw("2026-10-11T14:00:00Z"), SOURCES_CFG, TODAY)["is_match_day"]


def test_build_inputs_assigns_refs_and_uses_feed_names():
    inputs = build_inputs(make_raw(), TODAY, SOURCES_CFG, history={})
    geo = inputs["geopolitics"]
    assert set(geo.refs) == {"bbc_world#0", "bbc_world#1"}
    assert geo.refs["bbc_world#0"].url == "https://ex.com/bbc_world/0"
    assert geo.payload["news_feeds"][0]["outlet"] == "BBC World"
    assert "football_data" in inputs["sports"].refs
    assert inputs["learn"].refs["wikipedia#0"].url == "https://w/1"


# ---------------------------------------------------------------- prepare -> drafts -> assemble


@pytest.fixture
def settings(tmp_path, monkeypatch):
    raw_dir = tmp_path / "raw" / TODAY.isoformat()
    raw_dir.mkdir(parents=True)
    for sid, res in make_raw().items():
        (raw_dir / f"{sid}.json").write_text(json.dumps(res), encoding="utf-8")

    async def fake_fetch(client, url):
        return "full essay text " * 200

    monkeypatch.setattr(prepare_mod, "fetch_article_text", fake_fetch)
    monkeypatch.setattr(prepare_mod, "load_sources", lambda: SOURCES_CFG)
    # Never carry real API keys into tests: pytest prints fixture values when a test fails.
    s = replace(Settings.from_env(), data_dir=tmp_path, football_data_token=None, balldontlie_token=None)
    prepare_mod.prepare(TODAY, s)
    return s


def _versions(tag):
    return {"headline": f"H {tag}", "scroll": "s", "coffee": "c", "deep": "d"}


def _story(sid, refs, kind="news"):
    return {"id": sid, "kind": kind, "en": _versions("en"), "he": _versions("he"), "source_refs": refs, "tags": ["t"]}


def _quiz_q(qid, section, story_id):
    text = {"question": "q?", "options": ["a", "b", "c", "d"], "explanation": "e"}
    return {"id": qid, "section": section, "story_id": story_id, "answer_index": 1, "en": text, "he": text}


def write_drafts(settings, **overrides):
    drafts = settings.data_dir / "inbox" / "drafts"
    drafts.mkdir(parents=True, exist_ok=True)
    docs = {
        "sports": {"stories": [_story("arsenal-preview", ["football_data", "espn_nba#0"])],
                   "israeli_players": [{"name": "Deni Avdija", "team": "POR", "en": "x", "he": "y"}]},
        "geopolitics": {"stories": [_story("world", ["bbc_world#0"], "analysis")]},
        "israeli_politics": {"stories": [_story("knesset", ["ynet_news#0"])]},
        "business": {"stories": [_story("company", ["ft_home#0"], "analysis")]},
        "ideas": {"stories": [_story("essay", ["aeon#0"], "essay")]},
        "learn": {"stories": [_story("word", [], "word"), _story("otd", ["wikipedia#0"], "on_this_day")]},
        "quiz": {"questions": [_quiz_q("q1", "geopolitics", "world"), _quiz_q("q2", "business", "company"),
                               _quiz_q("q3", "learn", "word")]},
    }
    docs.update(overrides)
    for name, doc in docs.items():
        (drafts / f"{name}.json").write_text(doc if isinstance(doc, str) else json.dumps(doc, ensure_ascii=False), encoding="utf-8")


def test_prepare_writes_inbox(settings):
    inbox = settings.data_dir / "inbox"
    meta = json.loads((inbox / "meta.json").read_text(encoding="utf-8"))
    assert meta["date"] == TODAY.isoformat()
    assert meta["order"][0] == "sports"  # match-day mode
    assert meta["essays_fetched"] == 1
    ideas = (inbox / "sections" / "ideas.md").read_text(encoding="utf-8")
    assert '"full_text_file": "essays/aeon_0.txt"' in ideas
    assert (inbox / "essays" / "aeon_0.txt").exists()
    assert "drafts/sports.json" in (inbox / "sections" / "sports.md").read_text(encoding="utf-8")
    assert (inbox / "schemas" / "quiz.schema.json").exists()


def test_assemble_publishes_valid_drafts(settings):
    write_drafts(settings)
    rep = assemble(settings)
    assert rep.ok, rep.errors

    out = settings.data_dir / "briefs" / TODAY.isoformat()
    story = json.loads((out / "geopolitics.json").read_text(encoding="utf-8"))["stories"][0]
    assert story["sources"] == [{"outlet": "BBC World", "title": "Big world story", "url": "https://ex.com/bbc_world/0"}]
    assert "source_refs" not in story
    sports = json.loads((out / "sports.json").read_text(encoding="utf-8"))
    assert sports["match_day"]["is_match_day"] and sports["israeli_players"][0]["name"] == "Deni Avdija"
    assert json.loads((out / "business.json").read_text(encoding="utf-8"))["markets"] == {"SP500": {"last": 1.0}}
    brief = json.loads((out / "brief.json").read_text(encoding="utf-8"))
    assert brief["order"][0] == "sports" and brief["quiz"] == "quiz.json"
    assert json.loads((settings.data_dir / "briefs" / "index.json").read_text())["latest"] == TODAY.isoformat()


def test_assemble_reports_fixable_errors_and_publishes_nothing(settings):
    bad_story = _story("world", ["bbc_world#0", "invented#7"])
    bad_story["he"]["deep"] = ""
    write_drafts(
        settings,
        geopolitics={"stories": [bad_story]},
        ideas='{"stories": [',  # truncated JSON
        quiz={"questions": [_quiz_q("q1", "geopolitics", "nope")] * 3},
    )
    (settings.data_dir / "inbox" / "drafts" / "learn.json").unlink()

    rep = assemble(settings)
    errors = "\n".join(rep.errors)
    assert "geopolitics: stories.0.he.deep" in errors
    assert "ideas.json: invalid JSON" in errors
    assert "learn: missing drafts/learn.json" in errors
    assert "quiz/q1: no story 'nope'" in errors
    assert not (settings.data_dir / "briefs" / TODAY.isoformat()).exists()


def test_assemble_rejects_hallucinated_refs(settings):
    write_drafts(settings, geopolitics={"stories": [_story("world", ["invented#7"])]})
    rep = assemble(settings)
    assert any("unknown source_refs ['invented#7']" in e for e in rep.errors)


# ---------------------------------------------------------------- quiz shuffling


def _quiz(n=12):
    """n questions whose correct answer is always option A, like the model tends to write."""
    questions = []
    for i in range(n):
        en = {"question": f"q{i}?", "options": [f"right-en-{i}", f"x-en-{i}", f"y-en-{i}", f"z-en-{i}"], "explanation": "e"}
        he = {"question": f"ש{i}?", "options": [f"נכון-{i}", f"א-{i}", f"ב-{i}", f"ג-{i}"], "explanation": "ה"}
        questions.append({"id": f"q{i}", "section": "s", "story_id": "x", "answer_index": 0, "en": en, "he": he})
    return {"questions": questions}


def test_shuffle_keeps_the_correct_answer_correct_in_both_languages():
    shuffled = shuffle_quiz(_quiz(), "2026-10-10")
    for i, q in enumerate(shuffled["questions"]):
        assert q["en"]["options"][q["answer_index"]] == f"right-en-{i}"
        assert q["he"]["options"][q["answer_index"]] == f"נכון-{i}"
        assert sorted(q["en"]["options"]) == sorted(_quiz()["questions"][i]["en"]["options"])  # nothing lost


def test_shuffle_is_deterministic_and_spreads_answers_out():
    a, b = shuffle_quiz(_quiz(), "2026-10-10"), shuffle_quiz(_quiz(), "2026-10-10")
    assert a == b  # re-running assemble must not reshuffle
    assert shuffle_quiz(_quiz(), "2026-10-11") != a  # but a new day shuffles differently
    positions = {q["answer_index"] for q in a["questions"]}
    assert len(positions) >= 3  # 12 questions that were all "A" no longer are


def test_shuffle_does_not_mutate_its_input():
    original = _quiz()
    shuffle_quiz(original, "2026-10-10")
    assert original == _quiz()


def test_assemble_publishes_a_shuffled_quiz_with_a_valid_key(settings):
    write_drafts(settings)
    assert assemble(settings).ok
    quiz = json.loads((settings.data_dir / "briefs" / TODAY.isoformat() / "quiz.json").read_text(encoding="utf-8"))
    for q in quiz["questions"]:
        assert 0 <= q["answer_index"] < 4 and len(q["en"]["options"]) == len(q["he"]["options"]) == 4


@pytest.mark.parametrize(
    "option",
    ["All of the above", "None of the above", "כל התשובות נכונות", "אף אחת מהתשובות"],
)
def test_assemble_rejects_options_that_depend_on_order(settings, option):
    bad = _quiz_q("q1", "geopolitics", "world")
    bad["en"] = {**bad["en"], "options": ["a", "b", "c", option]}
    bad["he"] = {**bad["he"], "options": ["a", "b", "c", option]}
    write_drafts(settings, quiz={"questions": [bad, _quiz_q("q2", "business", "company"), _quiz_q("q3", "learn", "word")]})
    rep = assemble(settings)
    assert any("must not depend on order" in e for e in rep.errors)


def test_assemble_rejects_explanations_that_name_an_option_letter(settings):
    bad = _quiz_q("q1", "geopolitics", "world")
    bad["en"] = {**bad["en"], "explanation": "Option B is right because of X."}
    write_drafts(settings, quiz={"questions": [bad, _quiz_q("q2", "business", "company"), _quiz_q("q3", "learn", "word")]})
    assert any("must not depend on order" in e for e in assemble(settings).errors)


def test_letter_reference_matches_option_letters_but_not_ordinary_prose():
    assert LETTER_REFERENCE.search("Option B is right because of X.")
    assert LETTER_REFERENCE.search("The correct answer C reflects the cost.")
    assert not LETTER_REFERENCE.search("Analysts answer a basic question: who pays?")
    assert not LETTER_REFERENCE.search("It was the best choice and a bold one.")
