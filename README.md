# OG-039-Plant-of-the-Day

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
