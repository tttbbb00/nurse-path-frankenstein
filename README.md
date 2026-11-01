# Nurse Path Frankenstein

Kiroween 2026 · **Frankenstein** category.

Stitches nurse overseas pathway facts (US / Australia / New Zealand / Singapore) into one queryable chat UI. Every card links to official sources (NCSBN, NYSED, AHPRA/NMBA, NCNZ, SNB, USCIS, Home Affairs, Immigration NZ, MOM). Uncertain items are marked. **No invented salaries, wait times, or pass rates.**

Built with Kiro steering, specs, and hooks under [`.kiro/`](.kiro/).

## Run

```bash
cd web
npm install
npm run dev
```

Production build:

```bash
cd web
npm run build
npm run preview
```

## Layout

| Path | Purpose |
|---|---|
| `web/` | Vite + TypeScript SPA |
| `knowledge/` | Markdown fact cards |
| `docs/` | KIRO_USAGE, VIDEO_SCRIPT, DEVPOST |
| `.kiro/` | Steering / specs / hooks (**tracked in git**) |

## Judges

- Public app URL: see `log/build-status.md` or Devpost submission
- This is **not** legal or immigration advice

## License

MIT
