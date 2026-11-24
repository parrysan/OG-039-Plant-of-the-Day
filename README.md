# OG-039-Plant-of-the-Day

## Run the plant record

```bash
npm install
npm run dev
```

Open http://localhost:3000/plant/urtica-dioica . The access control is a form on the page (Public, Member, Expert). It changes which reader layer is filled in. The database is optional for that page: the same three seed plants are in `data/seed/plants.json`.

Apply the SQL to a local Postgres (no Docker):

```bash
npm run db:apply
```

That runs `supabase/migrations/*.sql`, writes `supabase/seed.sql` from the JSON, and checks the row-level gates. With Docker, `supabase start` in this repo uses `supabase/config.toml` and the same seed. Point a pipeline at it with `SUPABASE_URL` and `SUPABASE_ANON_KEY`. Reads go through the `plants_for_reader` view. The anon key is the public tier. `access_tier` and `avatar_role` are JWT claims. See `src/lib/supabase/sdk.ts`.

The static prototype is still `prototype/daily-page/`. Serve the repo root with `python3 -m http.server 8081` if you want that page.

Checks: `npm test`, `npm run lint`, `npm run typecheck`, `npm run build`.

> Publish a new "Plant of the Day" each day, chosen automatically from a public suggest-and-upvote leaderboard — core web app first, with print-on-demand merch, a mailing list, and an iOS app as later phases.

## Where to start

- **For working on this project**: read `AGENTS.md` in this folder. It is the canonical bootstrap manifest — it tells any agent (or human) which files to read and in what order. `CLAUDE.md` is a one-line shim that imports it.
- **For project status, decisions, and history**: see the vault project page at `vault/projects/OG-039-Plant-of-the-Day/README.md`.

## Quick facts

- **Project code**: OG-039-Plant-of-the-Day
- **Created**: 2026-08-12
- **GitHub**: https://github.com/parrysan/OG-039-Plant-of-the-Day

## Structure

```
.
├── AGENTS.md    # canonical bootstrap manifest — read this first
├── CLAUDE.md    # one-line @AGENTS.md shim (Claude Code compatibility)
├── README.md    # this file
├── src/         # application code
├── tests/       # tests
└── docs/        # technical docs (code-adjacent only)
```

All durable knowledge — decisions, research, status narrative — lives in the vault project page, **not** in `docs/`. The code repo holds code, config, and build artefacts.
