# Build status — Nurse Path Frankenstein

updated: 2026-11-01 09:30 CST (Asia/Shanghai)

## Works
- `cd web && npm install && npm run build` → **OK** (tsc + vite production build)
- Chat SPA: country chips, quick prompts, keyword retrieval over bundled fact cards
- Knowledge cards: `knowledge/{us,au,nz,sg}-nursing.md` + runtime `web/src/data/facts.ts`
- Citations: NCSBN, NYSED, CGFNS, USCIS EB-3, AHPRA, NMBA, Home Affairs, NCNZ, Immigration NZ, SNB, MOM
- Uncertain badges + notes; no invented fee/salary/wait-time numbers
- Docs: `docs/KIRO_USAGE.md`, `docs/VIDEO_SCRIPT.md`, `docs/DEVPOST.md`
- `.kiro/` present and **not** listed in root `.gitignore` (will be tracked when repo is initialized)

## Deploy URL
**pending** — `gh` CLI not logged in; no GitHub Pages / Cloudflare Pages publish this turn. Local preview: `cd web && npm run preview` after build (`web/dist/`).

## Remaining blockers
1. GitHub auth + public repo `iiileo99/nurse-path-frankenstein`
2. Static hosting URL for judges
3. Demo video / blog / social (out of this MVP file pass)
4. Devpost join + Kiro credits form (human login / CONFIRM)

## Artifact paths
- `/workspace/kiroween/web/src/main.ts`
- `/workspace/kiroween/web/src/search.ts`
- `/workspace/kiroween/web/src/data/facts.ts`
- `/workspace/kiroween/web/src/style.css`
- `/workspace/kiroween/knowledge/*.md`
- `/workspace/kiroween/docs/{KIRO_USAGE,VIDEO_SCRIPT,DEVPOST}.md`
- `/workspace/kiroween/web/dist/` (build output)
