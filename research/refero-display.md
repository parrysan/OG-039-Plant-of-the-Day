# Refero — shipped pages for Plant of the Day

Date: 2026-08-14  
Source: [refero.design](https://refero.design/) MCP (styles + screens). Not a component kit — these are real sites.

Use with the 21st.dev shortlist: Refero decides the *look*; 21st.dev supplies the *blocks*.

## Visual language (styles)

| Source | Steal | Leave |
|---|---|---|
| [Kinfolk](https://www.kinfolk.com) — style `a5a4f6ab-4955-452a-93bc-b9f4dd6dda2f` | White canvas, ink-black type, 0 radius, full-bleed photo, no cards, no shadow. Photo is the page. | Their burger-only nav; we have one page. |
| [How Many Plants](https://howmanyplants.com) — `dfe6f5ea-69c9-473d-94d1-b55382466bad` | Cream `#f9f5f1`, hard edges, plant-journal mood. Closest *subject* match. | Zine collage, typewriter body, chartreuse offset shadows — noisy next to OGANIKO Helvetica. |
| [Piet Oudolf](https://oudolf.com) — `addc3ec0-a802-4708-98d6-97bfcedcc73f` | Restraint. A garden voice can be quiet. | Whisper-grey type and almost no photo. Too thin for a daily plant. |

Primary: **Kinfolk**. Subject flavour: **How Many Plants**, not its decoration.

## Page structure (screens)

| Screen | Why it matters |
|---|---|
| [New Yorker article](https://refero.design/pages/617974a7-7178-4562-b568-c384b6aaf619) | Kicker → headline → italic dek → **author avatar + name + date** → then the photo. That is how a Head Gardener sits on the page without a CMS. |
| [ARKET recipe](https://refero.design/pages/032c19fa-56ca-4991-a99f-2a989f501833) | One subject, centred name, short note, photos below. Closest “today’s plant” layout. |
| [Prose ingredient](https://refero.design/pages/fca4494d-e46b-4585-b486-6bb6776d6370) | Specimen photo left, name under the photo, long note + pull-quote right. This is prototype B. |

Avoid: newspaper grids (WaPo, NYT home), shop catalogs, SaaS landings.

## Map onto what we already have

- Prototype **A** + 21st [Editorial Image Hero](https://21st.dev/@felipemenezes098/components/hero-07) ← Kinfolk / ARKET
- Prototype **B** + 21st [Feature with image](https://21st.dev/@tommyjepsen/components/feature-with-image) ← Prose
- Head Gardener + 21st [Testimonial 2](https://21st.dev/@ncdai/components/testimonial-2) ← New Yorker byline, not a review carousel

Do not copy Kinfolk wholesale. Steal: photo first or name first, signed person, sharp frames, no cards.
