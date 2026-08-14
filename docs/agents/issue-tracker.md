# Issue tracker: Local Markdown

Issues for this repo live as markdown files in `tickets/`. No GitHub Issues. `/setup-matt-pocock-skills` was not run as a wizard — this file is the default local-markdown tracker wayfinder requires.

## Conventions

- The wayfinder map is `tickets/map.md`
- Tickets are `tickets/<NNNN>-<slug>.md`, numbered from `0001`
- Identity is the four-digit number in the filename
- Status lives in frontmatter: `open` | `claimed` | `resolved`
- A claim is `assignee:` plus `status: claimed`
- Comments append under `## Comments`
- Resolution is a `## Resolution` section; then set `status: resolved`

## Pull requests as a triage surface

**PRs as a request surface: no.**

## When a skill says "publish to the issue tracker"

Create a new file under `tickets/`.

## When a skill says "fetch the relevant ticket"

Read `tickets/<NNNN>-<slug>.md`.

## Wayfinding operations

- **Create the map**: write `tickets/map.md` with `labels: [wayfinder:map]`
- **Create a child ticket**: write `tickets/<NNNN>-<slug>.md` with a `wayfinder:<type>` label (`research` | `prototype` | `grilling` | `task`)
- **Blocking**: `blocked_by: ["NNNN", ...]` in frontmatter. A ticket is unblocked when every listed blocker has `status: resolved`
- **Frontier**: open or claimed tickets whose `blocked_by` is empty or fully resolved, and that have no `assignee`
- **Claim**: set `assignee` and `status: claimed` before any work
- **Resolve**: write `## Resolution`, set `status: resolved`, append one gist line to the map's Decisions so far
- **Native dependencies**: this tracker has no UI graph — `blocked_by` is the dependency
