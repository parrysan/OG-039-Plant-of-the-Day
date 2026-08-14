---
title: "OG-039-Plant-of-the-Day — Plant of the Day"
type: project-bootstrap
created: "2026-08-12"
---

# OG-039-Plant-of-the-Day — Plant of the Day

> **Bootstrap order — read these in order before doing any work in this project:**
>
> 1. `~/.claude/CLAUDE.md` → `Open-Memory-Vault/system/identity/MASTER-PROMPT.md` — Phil's identity (auto-loaded via symlink in Claude Code; other tools should mirror this).
> 2. `~/AGENT.md` → `agent-config/AGENT.md` — global operating manual (work style, skills routing, secrets policy, layering rules in §2.10).
> 3. `Open-Memory-Vault/AGENTS.md` — vault operating contract (read **only** if you will write to the vault during this session).
> 4. `Open-Memory-Vault/projects/OG-039-Plant-of-the-Day/README.md` — durable project page (status, decisions, recent activity, vault-side context).
> 5. **This file (`AGENTS.md`)** — project-specific overrides and live operational references (below). `CLAUDE.md` in this folder is a one-line `@AGENTS.md` shim so Claude Code loads it too.
>
> **The project's `AGENTS.md` is a bootstrap manifest, not a knowledge dump.** It points at everything else. Durable knowledge lives in the vault project page. Do not duplicate.

---

## At a glance

- **Code**: `OG-039`
- **Name**: Plant of the Day
- **Stakeholder**: Phil (self)
- **Type**: `product`
- **Status**: `active`
- **Priority**: `medium`
- **Revenue lane**: `2-pod`
- **Autonomy mode**: `autopilot` — daily leaderboard rotation (pick winner, generate content, publish, archive) runs end-to-end via cron; Phil reviews at checkpoints and curates domain/launch/merch decisions. See master prompt.
- **Purpose** (one sentence): Publish a new "Plant of the Day" each day, chosen automatically from a public suggest-and-upvote leaderboard — core web app first, with print-on-demand merch, a mailing list, and an iOS app as later phases.
- **Client dashboard**: _(not deployed yet)_
- **Last touched**: `2026-08-12`

---

## Where things live

| Resource | Location |
|---|---|
| **Code root** | this folder (`dev/OG-039-Plant-of-the-Day/`) |
| **Project docs** | `./docs/` |
| **Design spec** | `./docs/superpowers/specs/2026-08-12-core-app-design.md` |
| **Vault project page** | `Open-Memory-Vault/projects/OG-039-Plant-of-the-Day/README.md` |
| **GitHub repo** | https://github.com/parrysan/OG-039-Plant-of-the-Day |
| **External systems** | none yet — merch phase will reuse OG-026-01-POD-Oganiko-Shop (Shopify + Printify) rather than new infra |

---

## Live references

> **Operational facts that should never have to be re-discovered.** Deployed URLs, store handles, theme IDs, API endpoints, credentials *location* (never the credentials themselves — those live in the global `.env`, see global AGENT.md §2.5). Update this section whenever a fact changes — it is the canonical source.

- **Production URL**: (tbd — placeholder domain until validated; see design spec)
- **Staging / preview URL**: none
- **Platform handle / project ID**: (tbd — Firebase project not yet created)
- **Other identifiers**: none yet
- **Credentials**: stored in global `.env` under `PLANT_OF_DAY_*` (once created)

---

## Tech stack

Inherits OS-000-Design-System defaults (see global AGENT.md §2.7), overridden per the approved design:
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4 + OS-000 design tokens
- **Backend/data**: Firebase (Cloud Functions for cron + API routes, Firestore for plants/votes/subscribers)
- **Hosting**: Firebase Hosting
- **Design viewer**: /design-system route

Overrides: Firebase chosen over Supabase (matches OG-019/OG-021/OG-026-01 tooling continuity, Firestore real-time listeners suit live leaderboard counts).

---

## Project-specific rules

> Domain rules, naming conventions, "do not" lists. Anything an LLM working in this project must know that isn't true globally. If empty, write "None — global rules apply" and stop.

- **Scope discipline**: this repo is the core web app (daily plant page + leaderboard) only. Merch, mailing-list send infrastructure, and the iOS app are separate future specs — do not fold them in without a new brainstorming pass.
- **No login/auth for v1**: suggestions and votes are anonymous, device-cookie scoped. Do not add a full auth provider without a new design decision.
- **Email capture is soft-opt-in only**: capture points ("notify me if this wins", "email me tomorrow's plant") store to `subscribers`, but no sending/ESP integration exists yet — do not wire up sends without an explicit go-ahead.
- **Merch reuse**: when the merch phase starts, check `OG-026-01-POD-Oganiko-Shop` first before building new Printify/Shopify plumbing.

---

## Skills

> List any project-specific skills in `./.claude/skills/`. If none, the project uses the global library at `~/OG/shared-skills/`. Do not duplicate the global skills inventory here — see global AGENT.md §2.2.

- **Project-local skills**: none — uses global library
- **Most relevant global skills for this project**: `frontend-design`, `ods`, `oganiko-branding`, `media-gen`/`nanobanana`, `og-deploy`

---

## Notes for the next session

> **Optional, ephemeral.** A 2–3 line free-form scratch pad of "where I left off" — not durable knowledge. Durable decisions belong in the vault project page. Wipe and rewrite freely.

Last action: scaffolded project, wrote core-app design spec. Next action: self-review spec, get Phil's review, then invoke writing-plans for the implementation plan. Open question: none — domain deferred to placeholder by design.
