# Existing daily-plant products — steal / avoid for localhost v1

Date: 2026-08-14  
Branch: `research/existing-daily-plant-products`  
Question: what do real "plant of the day" products do, and what is worth stealing for a localhost v1 with a public Leaderboard, cookie Votes, and no accounts?

Locked here (do not reopen): any Plant can be suggested; Votes pick the Day; lock 00:00 Europe/Warsaw; most Votes wins; tie = earliest Suggestion; one Vote per device per Plant; no downs, no retracts.

## Pattern

Almost nobody runs a **public daily vote**. Real products fall into three families:

| Family | How the day is picked | User suggest / vote? | Examples |
|---|---|---|---|
| Editorial / catalog daily | Curator or FIFO from a pre-vetted pool | Rarely. Suggest is backstage, if at all | Wikipedia POTD, Go Botany, AZNPS, Flora app, garden.org |
| Deterministic daily game | Same plant for everyone, seeded by date | No. Play, don't pick | Plantle, PlantRef Daily Plant, Metaflora, Austraits finder |
| Slow contest (week / year) | Shortlist then vote, then announce | Yes — but not daily | PPA Plant of the Year, Woodland Trust Tree of the Year, RHS Chelsea POTY |

Our spec is the missing fourth: **public Suggestion + daily Vote + midnight lock**. Steal page shape from family 1, lock/reset cadence from family 2, vote hygiene from family 3. Do not become a quiz, a shop, or an annual awards show.

---

## 1. Wikipedia Picture of the Day

https://en.wikipedia.org/wiki/Wikipedia:Picture_of_the_day  
Guidelines: https://en.wikipedia.org/wiki/Wikipedia:Picture_of_the_day/Guidelines  
Promotion vote: https://en.wikipedia.org/wiki/Wikipedia:Featured_picture_candidates  
Archive: https://en.wikipedia.org/wiki/Wikipedia:Picture_of_the_day/Archive

- **How the day is chosen.** Two stages. Anyone may nominate a picture; registered editors vote (~10 days, 2/3 support, 5+ supporters, 25-day / 100-edit gate). Promoted pictures then wait in a FIFO unused queue. A small editorial group schedules POTD, with date exceptions for anniversaries. The Main Page swaps automatically each calendar day.
- **Featured page.** One hero image, short cited blurb, photographer credit, "Recently featured" (yesterday + two), archive, "more featured pictures". No vote count on the page.
- **Suggest / vote / accounts.** Suggest and vote are backstage, account-gated, and for *quality*, not for "which plant today". Anonymous votes discarded.
- **Steal.** The page recipe: image + short blurb + credit + recently-featured strip + archive. Keep the featured surface thin. Publish tomorrow's template before midnight so lock is a swap, not a rewrite.
- **Avoid.** FIFO-from-a-queue instead of Votes. Account-gated promotion. Do not put Vote counts on the featured page.

## 2. Go Botany — Native Plant Trust

https://gobotany.nativeplanttrust.org/  
Example: https://gobotany.nativeplanttrust.org/species/hieracium/kalmii/

- **How the day is chosen.** Editorial homepage rotation of New England natives / naturalized plants. No public vote. No stated lock time; it is "today's plant" on the site.
- **Featured page.** Photo, Latin + common name, 2–3 sentence anecdote (etymology, ethnobotany), "Full Profile" into a species record (ID keys, range, traits).
- **Suggest / vote / accounts.** None on the daily card. PlantShare (IDs, sightings) is a separate logged-in community.
- **Steal.** Latin + common as the name pair. One memorable sentence beats a care sheet. Deep facts live one click away.
- **Avoid.** Region-only / native-only filter. We already locked "any Plant".

## 3. Arizona Native Plant Society

https://aznps.com/  
Plant list: https://aznps.com/the-plant-list/

- **How the day is chosen.** Homepage "AZNPS Plant of the Day" points at a species in their native Plant List. Curated rotation. No vote.
- **Featured page.** Common name(s), Latin, "Click here to learn about this plant" into the list record.
- **Suggest / vote / accounts.** None.
- **Steal.** Homepage card is a pointer, not an encyclopedia. The Day can be a name + photo + one line.
- **Avoid.** Shipping a full plant-database product in v1.

## 4. Garden.org — Plants of the Day (National Gardening Association)

How it started: https://garden.org/thread/view/39607/Plant-of-the-Day-feature/  
Example day: https://garden.org/thread/view/188417/Rose-of-the-Day-Rose-Rosa-Josephs-Coat/

- **How the day is chosen.** Per-genus automated daily thread, fed from the site's plant database. First month of Daylily of the Day was seeded by a member "top 10 favorites" poll so featured plants had owners who would write. Moderators still edit the auto-post. Hero photos = those with the most thumbs-up in the database.
- **Featured page.** Common + cultivar + Latin, 3 member photos, link to the database record, open thread for performance reviews. Threads persist after the day.
- **Suggest / vote / accounts.** Members do not vote the *day*. They vote photos, write reviews (account + "acorn" reward), and once polled favorites to seed the queue. Must be logged in to reply.
- **Steal.** Seed the first week from plants people already care about (see 0006). Persist past Days as an archive, not a live contest. Pick the hero image by existing Votes if a Suggestion has more than one photo later.
- **Avoid.** Account-gated participation. One empty thread per day as the product. Requiring a database ID before a Suggestion can exist.

## 5. Austraits / iNaturalist "Plant of the Day" finder

App: https://app.austraits.org/plant-of-the-day/  
Repo: https://github.com/adelegem/plant-of-the-day

- **How the day is chosen.** Deterministic: date + searched location → one nearby iNaturalist species. Stable all day; rolls over each calendar day. Same spot, same plant, for everyone.
- **Featured page.** CC photo with attribution, scientific + common name, family, native status, Wikipedia description, map of nearby records, walkable route.
- **Suggest / vote / accounts.** None. Filters (native / family / research-grade) are personal, not a vote.
- **Steal.** One shared plant per Day, not a personalized feed. Photo attribution if we ever pull third-party images. Localhost-friendly: no API key, date-seeded pick.
- **Avoid.** Location-personalized "YOUR plant of the day". That is a scavenger hunt, not a Leaderboard.

## 6. Flora — Flower of the Day (iOS)

https://apps.apple.com/au/app/flora-flower-of-the-day/id6759986494

- **How the day is chosen.** Preloaded catalog. One new flower every morning, 365 days. Offline. Editorial, not voted.
- **Featured page.** Common name, Latin, short description, one fun fact. Home/lock-screen widget. Save-to-favorites locally.
- **Suggest / vote / accounts.** None. "Completely private. Completely offline. No account."
- **Steal.** No-account, device-local identity matches our cookie Votes. Featured card = name pair + one fact. Widget/home-screen thinking is later, not v1.
- **Avoid.** Closed catalog with no Suggestion path. That is a calendar, not a Leaderboard.

## 7. Daily plant ID games (Plantle, PlantRef, Metaflora)

Plantle: https://www.plantle.app/how-to-play  
PlantRef Daily Plant: https://www.plantref.org/daily-plant  
Metaflora: https://flora.metazooa.com/

- **How the day is chosen.** One shared mystery plant per local calendar day. Countdown to next midnight. Past days sit in an archive / practice mode. PlantRef: play free with no account; sign up to save streak, pick a themed track, and compete on *their* leaderboard (player scores, not plants).
- **Featured page.** After the guess: botanical name, common names, short description, "how to tell it apart". During play: photo only.
- **Suggest / vote / accounts.** Players do not pick the plant. Account is optional and only for streak portability.
- **Steal.** Visible countdown to lock. Play (or Vote) without an account; persist identity on the device. Yesterday lives in an archive, not on the live board.
- **Avoid.** Making the POTD page a quiz. Making "Leaderboard" mean player streaks. Requiring a photo to exist before a Plant can be suggested (these apps only work because photos are preloaded).

## 8. Proven Winners Direct — Plant of the Day

https://provenwinnersdirect.com/collections/plant-of-the-day

- **How the day is chosen.** Merchandising calendar. 24-hour SKU sale from 10:00 ET. Monday = all of the week's plants; Tue–Sun = one SKU.
- **Featured page.** Product card: cultivar, brand, price, hardiness zip lookup.
- **Suggest / vote / accounts.** "YOU ASKED — WE LISTENED" is marketing, not a vote. Account for checkout.
- **Steal.** Nothing for v1 except the reminder that a hard 24-hour window is understandable to civilians.
- **Avoid.** Sale framing. Clock starting at 10:00 store time instead of midnight local Day. Treating the Day as inventory.

## 9. Slow votes (contrast, not daily products)

**Perennial Plant of the Year** — https://perennialplantoftheyear.com/ · process: https://perennialplantoftheyear.com/the-process/  
Members nominate; board shortlists 3–4; hundreds of PPA professionals vote each summer; one winner announced; archive since 1990. Criteria: wide climate, low maintenance, pest/disease resistance.

**RHS Chelsea Plant of the Year** — https://www.rhs.org.uk/plants/new-plants/philadelphus-petite-perfume-pink  
Exhibitors submit; expert panel shortlists <20; Expert Groups vote on Press Day (e.g. 57/130). Public vote is People's Choice *gardens*, not the plant. Featured write-up: story, grow notes, where to buy, shortlist.

**Woodland Trust Tree of the Year** — https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/tree-of-the-year/  
Public nominations → expert shortlist of 10 → public vote (Google Form) with a published close time → winner announced later. Each card: photo, credit, species, age, "survived", 150-word story.

- **Steal.** Published close time (we already have 00:00 Warsaw). Winner page is a story, not a tally. Shortlist exists so the public is not voting a blank page — that is our starter set. Credit the photographer.
- **Avoid.** Expert-only electorate (PPA, RHS). Suitability criteria (PPA). Multi-month cycle. A Google Form as the Vote UI. Announcing days after lock instead of at lock.

---

## Cross-cutting

**What a featured page actually contains** (intersection of 1, 2, 3, 6, 9):

1. Hero image (with credit if not ours)
2. Common name + Latin
3. One short blurb (1–3 sentences)
4. A way to yesterday / archive
5. A way onward (profile, Leaderboard, "suggest the next")

Usually **absent** from the featured surface: vote totals, suggester identity, care sheets, shop links, quizzes.

**Who writes the blurb.** Editorial (Wikipedia, Go Botany, Flora, Woodland Trust). Suggester prose is extra (garden.org reviews happen *after* the day is posted). Nobody successful leaves the featured page as a bare name.

**Identity.** Catalog products use a database taxon (garden.org `Rosa 'Joseph's Coat'`, Go Botany `Hieracium kalmii`). Free-text products barely exist — because they are not doing Suggestion. We will be the rare free-text Suggestion board; duplicates are our problem, not theirs.

**Accounts.** Every product that lets the public *write* requires an account. Every product that is pleasant on day one does not. Our cookie Vote is closer to Plantle/Flora than to garden.org.

---

## Implications for tickets 0001–0006

Implications only — not resolutions.

- **0001 lock aftermath.** Daily games and Wikipedia treat lock as a *swap*: today's plant becomes archive, a new contest (or the next queued item) takes the featured slot. Garden.org keeps the old thread visible but no longer "today". Yearly contests retire the winner from the next ballot. Decide whether yesterday's Plant of the Day can be re-suggested the same morning, and whether loser Vote counts survive the swap — no analog daily-votes, so this is ours to invent. Cheap proven piece: a "recently featured" strip of 1–3 past Days.

- **0002 suggestion shape.** Minimum typed field in the wild is a name. Almost every featured page also needs a photo and a 1–3 sentence blurb, but those are usually filled by the *house* from a catalog, not by the suggester. Do not require a photo or Latin to put garlic on the Leaderboard. Optional extras that pay rent later: Latin, one-line from the suggester, photo URL. House-written blurb can wait until lock.

- **0003 same-plant identity.** Catalog products never accept "Tomato" / "tomato" / "Solanum lycopersicum" as three rows — they bind to a taxon id. We have no taxon database in v1. Case-fold + trim is the only cheap merge that every product already assumes. Latin-vs-common aliases need a table we do not have; leaving duplicates and letting Votes sort them will look broken the first time both sit on the Leaderboard.

- **0004 Plant of the Day page.** Steal Wikipedia/Flora/Go Botany: hero image, common + Latin, short blurb, credit, recently featured, door to the Leaderboard. Skip Vote count and suggester-as-byline on the featured surface (those belong on the Leaderboard). Blurb author is still open (map: "featured blurb") — analogs all use an editor, not the voter.

- **0005 Leaderboard after lock.** Games wipe the live contest and keep history elsewhere. Wikipedia hides the queue entirely. Garden.org leaves yesterday's thread in a list. For us the Leaderboard is a first-class screen, so after 00:00 visitors still need a suggest control and a live ranking for *tomorrow's* Day. Pinning today's Plant of the Day at the top of a reset board is closer to Wikipedia's Main Page than to a scoreboard that still shows yesterday's race.

- **0006 starter set.** Every daily product ships with a catalog so day one is not empty. Garden.org's working seed was a short "favorites" list so the first days had something to say. Flora/AZNPS/Go Botany are editorial lists. A seed file of ~7–14 rows (name, optional Latin, optional photo, one-line blurb) is enough for the first week if Votes reset; more if losers persist. Who writes: a one-off seed file, not live suggesters on an empty board.

- **0004 + 0002 together.** Photo-on-the-POTD-page does not imply photo-on-the-Suggestion. Catalog products resolve this by having the photo already. v1 either accepts a nameless Day (weak — no analog does this) or attaches a house image / placeholder at lock.

- **Flood / identity (out of tickets, but every analog is loud).** Account-gated votes (Wikipedia FPC, garden.org) exist because anonymous daily votes get gamed. Cookie scope is the v1 answer already locked; do not import their login wall. Do import their lesson: one Vote per identity per Plant, published lock time, no retracts.
