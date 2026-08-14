# Voice vs look — locked 2026-08-14

Phil: like how plants are *described* on [How Many Plants / Nerve Plant](https://howmanyplants.com/plant/nerve-plant). Do **not** take that site's visual style or IA. Visual style and IA from [Kinfolk](https://www.kinfolk.com/).

## Steal from How Many Plants (words only)

On Nerve Plant they do this well:

- Common name as the title
- Official name (latin), also-known-as, origins & climate — a few identity lines
- **About the plant** first: how it looks and feels, in spoken sentences  
  ("This little plant packs a punch. Their bright green leaves are strongly contrasted by veins…")
- A one-line pro tip, if it earns its place

That is the Head Gardener's Note.

## Do not take from How Many Plants

The page is a **care encyclopedia**: icon grid (water / light / humidity / temp / toxicity / size / format / leaf / pro tip), then the same facts again as accordions, then Beyond the Basics, then Troubleshooting. Stickers, thumbs, tags, Plant Club. That IA is rejected.

## Steal from Kinfolk (page only)

- One featured story at a time
- Photo as the page, not a card
- Title + one-line dek + person
- "Latest stories" as a quiet archive — not a dashboard
- White, ink, sharp frames, no chrome

Kinfolk's shop, subscribe walls, and issue-shop grid are not our IA. The *story* is.

## What a Plant row is, then

`common`, `latin`, `also_known_as`, `origins`, `note`, optional `photo`, optional `ledger`.

## Three depths (locked)

Disclosure is **scroll**, Kinfolk-style. Not HMP accordions. Not a "Read more" that dumps the encyclopedia.

| Depth | Name | What appears | How you get there |
|---|---|---|---|
| 1 | **Cover** | Date, common name, latin, photo | First fold. Always the same. Always quiet. |
| 2 | **Closer** | Note, also-known-as, origins, Head Gardener | Scroll once. Still prose. |
| 3 | **Ledger** | Water, light, size, toxic, one pro tip — labeled lines | Scroll again. Typography, not icons. |
| 4 | **Practice** | Soil, repot, feed, groom, propagate — short essays | Keep scrolling. H2s, no arrow menu. |
| 5 | **Questions** | Real questions people type, 40–60 word answers | Last. FAQ in the HTML. |

The first fold never changes. Depths 4–5 exist so a crawler (and a worried owner) can find them. They are not on the Cover.

## AEO / SEO (the screens Phil sent)

Those How Many Plants blocks are **information types**, not a layout to copy.

| Their block | Ours | Why it ranks / gets cited |
|---|---|---|
| Official name / also known as / origins | **Identity** (Closer) | Entity: latin + synonyms + place. Google and LLMs need this to know the plant. |
| About the plant | **Note** (Closer) | One citable passage. Head Gardener is the expert quote. |
| How many green thumbs? | **Drop** | Not a query. Subjective. Looks like a widget. Hurts Kinfolk. |
| The Basics / Pro tip | **Ledger** | Direct answers to "how much water / light". Lines, not icons. |
| Beyond the Basics | **Practice** | How-to cluster (repot, propagate). `HowTo` schema later. |
| Troubleshooting questions | **Questions** | The AEO prize. "Why are my nerve plant leaves wilting?" = FAQPage + H2s that match the query. |

**The hard SEO rule:** a URL that changes at midnight cannot rank. The **plant** has a permanent address (`/plant/aloe`). Today is a Cover of that plant. Share either the day-link (ritual) or the plant-link (the document). Same HTML depths on the plant page.

In the HTML always: one `h1` (common name), Identity in the body, Note as a short paragraph, Questions as `<h2>` + answer. Schema later (`Article` + author = Head Gardener, `FAQPage`, `HowTo` on Practice). No separate "for AI" copy.

## Articles on the back of a Plant

The Plant page is the **front** (Cover through Questions). **Stories** are the back: dated Articles that only exist because that plant gave you something to write.

- `/plant/aloe` — the entity. Depths 1–5. Then a quiet list of Stories.
- `/stories/aloe-in-august` — one Article. Points back. Shareable on its own.
- `/2026-08-14` — today's Cover. Points at the Plant.

Do not flip a card. Do not stand up a blog. Do not generate an article per keyword. Write when he has a sentence. The cluster (plant + stories) is what search and AI can cite; the Cover is what someone sends today.
