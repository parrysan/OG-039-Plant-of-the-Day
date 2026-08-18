# Review

Judge work against this before calling it done.

## Always

Before calling work done:

- Matches `roadmap.md` (this week, not a side quest)
- Small enough to review in one sitting
- Plan stated before any change that affects what a visitor sees
- Main scroll still works: Cover → Closer → Ledger → Practice → Questions → Stories
- No mobile layout issues (narrow viewport)
- No Firebase, no deploy, no new cloud, no production data
- No unnecessary complexity (no new framework, no second app, no CMS)
- Diff summarized: what changed, what you tested, what a human must look at
- A first-time visitor understands the offer in five seconds
- Copy uses words from `customers/language.md`

## The page

- **Cover** stays minimal: date, common name, latin, photo. Nothing else on the first fold.
- Look is Kinfolk: white, ink, sharp frames, no cards-as-chrome, no stickers, no icon grid.
- Voice is How Many Plants *About the plant*, not their layout.
- Head Gardener is a signed person, not a widget.
- Deeper layers (Closer, Ledger, Practice, Questions, Stories) appear only as you scroll.
- Green thumbs, tag clouds, “Beyond the Basics” panels: reject.

## Share and search

- A plant will need a **permanent URL**. A midnight-rotating homepage cannot rank.
- Questions are real questions people type, 40–60 word answers, real headings.
- Do not write a second “for AI” version of the same copy.
- Articles only exist if there was something to say. Empty Stories is fine.

## Preview

- Open `http://localhost:8081/prototype/daily-page/`
- Check desktop and a narrow viewport
- Arrow keys still flip structure variants A / B / C
- If you changed `data/plants.json`, reload and confirm Cover did not grow extra chrome
