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
- **Client dashboard**: `docs/client-area/` — localhost only (see Live references)
- **Last touched**: `2026-08-14`

---

## Where things live

| Resource | Location |
|---|---|
| **Code root** | this folder (`dev/OG-039-Plant-of-the-Day/`) |
| **Project docs** | `./docs/` |
| **Client area** | `./docs/client-area/` (Overview + Research seeded; Client Area style) |
| **Design spec** | not written yet — do not invent a path |
| **Vault project page** | `Open-Memory-Vault/projects/OG-039-Plant-of-the-Day/README.md` |
| **GitHub repo** | https://github.com/parrysan/OG-039-Plant-of-the-Day |
| **Research store** | [OG-Research/OG-039-Plant-of-the-Day](https://drive.google.com/drive/folders/1Da8uc3XUc_-rfUqMucxAz0kCxkcwBM3_) (`research/`, `assets/`, `deliverables/`) |
| **External systems** | none — localhost only until a Firebase slot is available. Merch phase will reuse OG-026-01-POD-Oganiko-Shop (Shopify + Printify) rather than new infra |

---

## Live references

> **Operational facts that should never have to be re-discovered.** Deployed URLs, store handles, theme IDs, API endpoints, credentials *location* (never the credentials themselves — those live in the global `.env`, see global AGENT.md §2.5). Update this section whenever a fact changes — it is the canonical source.

- **Production URL**: none — no cloud host. Local only until a Firebase slot is free
- **Local client area**: http://localhost:8080 (from `docs/client-area/`)
- **Local app**: not built yet
- **Staging / preview URL**: none
- **Platform handle / project ID**: none — do **not** create a Firebase project (no slot available)
- **Other identifiers**: none yet
- **Credentials**: none yet. When needed, store in global `.env` under `PLANT_OF_DAY_*`

---

## Tech stack

Inherits OS-000-Design-System defaults (see global AGENT.md §2.7), with hosting overridden because there is no Firebase project slot:
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4 + OS-000 design tokens
- **Backend/data**: local only for now (files / in-process). Do not provision Firestore, Cloud Functions, or any Firebase project until Phil confirms a slot is free
- **Hosting**: localhost (`python3 -m http.server` for the client area; `npm run dev` for the app once it exists)
- **Design viewer**: /design-system route (when the app exists)

Overrides: Firebase is the intended later host (continuity with OG-019/OG-021/OG-026-01), but it is **deferred**. Do not create a Firebase project, do not add `firebase.json`, do not deploy.

---

## Project-specific rules

> Domain rules, naming conventions, "do not" lists. Anything an LLM working in this project must know that isn't true globally. If empty, write "None — global rules apply" and stop.

- **The Plant list is given**: Phil writes `data/plants.json`. Do not build suggestion, vote, leaderboard, or starter-set machinery unless the destination is redrawn.
- **Display first**: the work is the Plant of the Day page structure and how the Head Gardener sits on it.
- **Head Gardener is a person**: credit + Note. Do not build a curator CMS.
- **Localhost only**: no Firebase project, no hosting deploy, no cloud database until Phil confirms a slot is free.
- **Merch reuse**: when the merch phase starts, check `OG-026-01-POD-Oganiko-Shop` first before building new Printify/Shopify plumbing.

---

## Skills

> List any project-specific skills in `./.claude/skills/`. If none, the project uses the global library at `~/OG/shared-skills/`. Do not duplicate the global skills inventory here — see global AGENT.md §2.2.

- **Project-local skills**: none — uses global library
- **Most relevant global skills for this project**: `wayfinder`, `grill-me`, `domain-modeling`, `frontend-design`, `ods`, `oganiko-branding`, `media-gen`/`nanobanana`

## Agent skills

### Issue tracker

Local markdown under `tickets/`. No GitHub Issues. External PRs are not a triage surface. See `docs/agents/issue-tracker.md`.

### Triage labels

Default role strings (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `CONTEXT.md` at the repo root. See `docs/agents/domain.md`.

---

## Notes for the next session

> **Optional, ephemeral.** A 2–3 line free-form scratch pad of "where I left off" — not durable knowledge. Durable decisions belong in the vault project page. Wipe and rewrite freely.

Last action: locked copy from How Many Plants, look/IA from Kinfolk. Prototype still at localhost:8081.
