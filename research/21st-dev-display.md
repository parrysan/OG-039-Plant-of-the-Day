# 21st.dev — what is actually useful for Plant of the Day

Date: 2026-08-14  
Catalog searched via 21st MCP (`search`, `get_inspiration`). Code not retrieved. Do not paste these into the app — assimilate keepers through `og-ods-designcapture`.

Phil's **ODS-Components** list is five tab components. **pre-shortlist** held one shader. Neither helps this page. `og-tab-rail` stays the tab if we ever need one.

21st.dev is a React + Tailwind catalog. Most of it is SaaS heroes, shaders, marquees, and glow. The daily plant page needs quiet editorial structure: one photo, a name pair, a signed Note, a thin archive.

## Steal (shortlist)

| Area | Component | Why |
|---|---|---|
| Today's plant (maps to prototype A) | [Editorial Image Hero](https://21st.dev/@felipemenezes098/components/hero-07) · id 19077 | Full-width picture on top, small kicker + large headline under it. Closest match to a Plant of the Day. Drop the CTAs. |
| Layered plate (maps to C / yesterday peek) | [Editorial Collage Hero](https://21st.dev/@felipemenezes098/components/hero-04) · id 19074 | Two overlapping pictures. Could be today's plate + a small yesterday card. Same author as 19077 — one family. |
| Note + Head Gardener | [Testimonial 2](https://21st.dev/@ncdai/components/testimonial-2) · id 18912 | Serif pull-quote + signed name/role. Use as the Note, not as social proof. |
| Head Gardener byline | [Editorial Testimonial](https://21st.dev/@jatin-yadav05/components/editorial-testimonial) · id 9637 | Avatar + name + role under a large quote. Steal the byline only. Do **not** take the 01/03 carousel — he is one person. |
| Split page (maps to B) | [Feature with image](https://21st.dev/@tommyjepsen/components/feature-with-image) · id 1337 | Image left, type right. Generic SaaS copy in the preview; the **structure** is the field-notebook layout. Drop buttons. |

Same author's quieter sibling: [Editorial Hero](https://21st.dev/@felipemenezes098/components/hero-05) · id 19075 (type first, image below). Use if we want the name before the photo.

## Avoid

- **Classy Hero** and almost every other "hero" — dark SaaS waitlist pages.
- **Shaders / 光晕背景** already on pre-shortlist — animated mesh behind a plant is the wrong product.
- **3D marquee, hover-position galleries, polaroid globes** — archive of 3 past Days does not need a carnival.
- **Team Showcase** — magazine team grid for a whole staff. We have one Head Gardener.
- **Timelines** — startup journey cards. Archive is a strip, not a roadmap.
- **Tabs** already in ODS-Components — not this page.

## How to use them

Do not `npx shadcn add` into OG-039. Translate the **layout** into the existing localhost HTML prototype (or later Next.js), restyle with OGANIKO tokens. If a keeper should live in OS-000, run `/og-ods-designcapture` on the 21st URL.

Recommended first pair to react to: **19077 + 18912** (picture page + signed note). That is prototype A with a real Note treatment.
