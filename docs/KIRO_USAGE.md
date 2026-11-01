# How Kiro was used (honest)

Project: **Nurse Path Frankenstein** · Kiroween 2026 · category **Frankenstein**

## Artifacts under `.kiro/`

| Path | Role |
|---|---|
| `.kiro/steering/product.md` | Product intent: stitch overseas nurse path intel into one queryable agent; non-goals (no legal advice / fake stats). |
| `.kiro/steering/tech.md` | Stack: Vite + TypeScript static SPA; markdown fact cards; static deploy. |
| `.kiro/steering/structure.md` | Repo layout: `web/`, `knowledge/`, `docs/`, `log/`, `.kiro/`. |
| `.kiro/specs/nurse-path/requirements.md` | EARS requirements (sourced answers, uncertain marks, US/AU/NZ/SG). |
| `.kiro/specs/nurse-path/design.md` | Chat UI over bundled cards; keyword retrieval; citations visible. |
| `.kiro/specs/nurse-path/tasks.md` | Build checklist (scaffold → cards → Q&A → docs → deploy). |
| `.kiro/hooks/test-on-save.json` | Post-save `tsc --noEmit` on `*.ts` / `*.tsx`. |

## What Kiro steered

1. **Frankenstein stitch** — path-intel fact cards + agent-style chat UX that usually ship separately.
2. **Safety rails** — never invent salaries / wait times / pass rates; mark uncertain; always link official boards.
3. **Ship shape** — static Vite app so judges get a public URL without a backend.

## What was hand-built

- `knowledge/*.md` cards and `web/src/data/facts.ts` runtime index.
- Chat SPA (`web/src/main.ts`, `search.ts`, styles).
- `docs/VIDEO_SCRIPT.md`, `docs/DEVPOST.md`, this file.

## What was not claimed

- No live government crawl in MVP.
- No guarantee of visa outcomes.
- Deploy URL may still be pending if GitHub Pages / Cloudflare credentials are unavailable.
