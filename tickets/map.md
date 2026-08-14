---
title: "Spec for the localhost core app"
labels: [wayfinder:map]
status: open
created: 2026-08-14
tracker: local-markdown
---

# Map — Spec for the localhost core app

## Destination

An elegant localhost Plant of the Day page, fed by a Plant list that already exists (Phil writes it). The way is clear when the page structure and the Head Gardener's place on it are decided by reacting to a prototype — not by configuring how plants get onto a board.

## Notes

- Domain: OG-039 Plant of the Day. Localhost only — no Firebase, no production host.
- Glossary: `CONTEXT.md`. The list lives at `data/plants.json`. Display prototype: `prototype/daily-page/`.
- Phil, 2026-08-14: stop spending time on how the list is assembled. The list is given. The work is structure and display.
- Head Gardener is a real person (friend, 30 years). Credit + notes on the page. Not an admin app, not a role engine.
- Public Suggestion / Vote / Leaderboard are parked. They are not this destination.
- Phil, 2026-08-14: copy voice from [How Many Plants — Nerve Plant](https://howmanyplants.com/plant/nerve-plant). Visual style and IA from [Kinfolk](https://www.kinfolk.com/). Do not take HMP's look, icon grid, or care-encyclopedia layout.
- Description is five depths, disclosed by scroll: **Cover** → **Closer** → **Ledger** → **Practice** → **Questions**. Top fold stays Kinfolk-minimal. HMP's information types (identity, about, basics, beyond, troubleshooting Qs) live in those depths. Green thumbs are out. The plant has a permanent URL; the Day is a Cover of that plant.
- Phil, 2026-08-14: Articles can be published on the back of each Plant. A Plant is the entity; an Article is a dated story that points at it. Not a content mill. Stories sit after Questions, Kinfolk-quiet.

## Decisions so far

- [Existing daily-plant products — what mechanics should we steal or avoid?](0007-existing-daily-plant-products.md) — nobody runs a public daily vote; steal featured-page recipe + midnight swap + a seeded first week; avoid quizzes, shops, and login walls.
- [Starter set: how many Plants, and who writes them?](0006-starter-set.md) — Phil writes the list. There is no starter-set feature.
- [What happens to Suggestions at lock?](0001-lock-aftermath.md) — out of scope; no public contest.
- [What must a Suggestion contain?](0002-suggestion-shape.md) — out of scope; the row is the Plant list file.
- [How do we treat two names for the same Plant?](0003-same-plant-identity.md) — out of scope; the list will not duplicate.
- [What does the Leaderboard show the morning after lock?](0005-leaderboard-after-lock.md) — out of scope; no Leaderboard screen.

## Not yet specified

- **Head Gardener's name** — we have the role, not the name yet. Add it to `data/plants.json` when Phil has it.
- **How much of the note he writes** — locked in spirit: HMP-style About the plant, not a full care guide. Length still settles on the page.
- **Oganiko brand relationship** — standalone vs a series on oganiko.com.
- **UI language** — spec and prototype in English.

## Out of scope

- **How the Plant list is crowdsourced** — Phil, 2026-08-14: not necessary. See closed tickets 0001, 0002, 0003, 0005.
- **Merch / Printify / OG-026-01** — later phase.
- **Mailing list / ESP** — later phase.
- **iOS app** — later phase.
- **Firebase / cloud deploy** — no project slot. Hosting stays localhost.
- **Accounts / auth** — not needed to display a list.
- **Suitability filter** — the Head Gardener's list is the filter.
- **A curator CMS** — weaving him in is a byline and a note, not software.
