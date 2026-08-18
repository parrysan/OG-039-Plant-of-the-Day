# Spec — Plant of the Day (v1 localhost)

Canonical glossary: `../CONTEXT.md`.

## Surfaces

| URL (intended) | What it is |
|---|---|
| `/` or `/YYYY-MM-DD` | Today’s **Cover**. Ritual. Shareable for the day. |
| `/plant/<slug>` | Permanent plant document. All five depths + Stories. Ranks. |
| `/stories/<slug>` | One Article on the back of a plant. Optional. |

Today only the prototype exists: `../prototype/daily-page/`.

## Depths (same HTML, disclosed by scroll)

1. **Cover** — date, common name, latin, photo
2. **Closer** — Note, also-known-as, origins, Head Gardener
3. **Ledger** — water, light, size, toxic, pro tip (lines, not icons)
4. **Practice** — soil, repot, feed, groom, propagate
5. **Questions** — real questions, 40–60 word answers
6. **Stories** — list of Articles, may be empty

## Data

`../data/plants.json` — Phil / Head Gardener write plants. Agents do not invent a suggestion board.

## Plant row (minimum)

`common`, `latin`, `also_known_as`, `origins`, `note`. Optional: `photo`, `ledger`, `practice`, `questions`, `stories`.

Written by Phil / Head Gardener in `../data/plants.json`. Empty Stories is fine.

## Not in v1

Votes, accounts, Firebase, merch, ESP, iOS, green thumbs, article factory.
