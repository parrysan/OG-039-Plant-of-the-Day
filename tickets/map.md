---
title: "Spec for the localhost core app"
labels: [wayfinder:map]
status: open
created: 2026-08-14
tracker: local-markdown
---

# Map — Spec for the localhost core app

## Destination

A written spec for the localhost core web app: today's Plant of the Day plus a public suggest-and-upvote Leaderboard, ready to hand to an implementation session. The way is clear when Suggestion shape, lock aftermath, the two screens, and the starter set are decided and nothing blocks drafting that spec.

## Notes

- Domain: OG-039 Plant of the Day. Localhost only — no Firebase, no production host.
- Glossary: `CONTEXT.md`. Skills per session: `/grilling` + `/domain-modeling` for HITL; `/research` subagents for research tickets.
- Standing preferences locked while charting (not ticket resolutions):
  - A Plant can be anything — edible, wild, houseplant, ornamental.
  - No suitability filter in v1. Votes pick the Day.
  - Lock at 00:00 Europe/Warsaw. Most Votes wins. Tie: earliest Suggestion at that count. Empty board needs a starter set.
  - One Vote per device per Plant. No downs, no retracts. Cookie-scoped. No login.
- Plan, don't do. The map is done when the spec can be drafted. Drafting the spec is not this charting session.

## Decisions so far

<!-- the index — one line per closed ticket -->

## Not yet specified

- **Featured blurb** — who writes the Plant of the Day text (you, an agent, the suggester, nobody). Waits on what the page contains.
- **Visual design beyond ODS** — layout, photography vs illustration, type. Waits on the two screens being ticketed as prototypes.
- **Oganiko brand relationship** — standalone product vs a series on oganiko.com. Not required to draft a localhost spec; revisit if the spec needs a name on the chrome.
- **UI language** — spec is drafted in English. Whether the app UI is EN, PL, or both is not sharp enough until the screens exist.
- **Flood control** — one device suggesting dozens of plants. Real, but the rule depends on Suggestion shape.

## Out of scope

- **Merch / Printify / OG-026-01** — later phase. Returns as its own effort.
- **Mailing list / ESP** — later phase. Soft-opt-in capture is not in this spec.
- **iOS app** — later phase.
- **Firebase / cloud deploy** — no project slot. Hosting stays localhost.
- **Accounts / auth** — v1 is anonymous and cookie-scoped.
- **Suitability filter** — Phil, 2026-08-14: not in v1. Any named Plant can be suggested.
