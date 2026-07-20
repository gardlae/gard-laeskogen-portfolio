# Repository guidance

## Scope

- This repository contains Gard Laeskogen's public CV and technical portfolio.
- Gard owns substantive wording in `app/content/`; presentation belongs in page components and `app/globals.css`.
- Do not infer photo assignments. Follow `PHOTO-MAPPING.md`.
- Never place private CVs, reports, credentials, or restricted portfolio files in `public/`.
- Do not edit generated output in `dist/` or `.next/`.

## Build and verification

- Setup: `pnpm install`
- Full publication gate: `pnpm check`
- Content checks: `pnpm content:check`
- Lint and type-check: `pnpm lint && pnpm typecheck`
- Production build: `pnpm build`

Use the bundled Bun runtime for equivalent checks when Node and pnpm are not on `PATH`.

## Engineering rules

- Preserve unrelated working-tree changes.
- Prefer the smallest behavior-preserving change.
- Add or update tests when behavior changes.
- Do not add production dependencies without explicit approval.
- Keep the canonical origin at `https://www.gardlaeskogen.com`.

## Completion criteria

- The publication gate passes.
- Public routes have no broken internal links or referenced media.
- Phone, tablet, and desktop layouts have no horizontal overflow.
- Security headers and canonical redirects are present on the live domain.
