# Gard Laeskogen Portfolio

Personal CV and technical portfolio for Gard Laeskogen.

- Production: [www.gardlaeskogen.com](https://www.gardlaeskogen.com)
- GitHub: [gardlae/gard-laeskogen-portfolio](https://github.com/gardlae/gard-laeskogen-portfolio)
- Local project: `/Users/gardlaeskogen/Documents/personlig/CV/gard-laeskogen-portifolio`

## Public Structure

The primary navigation is:

- `CV` at `/cv`
- `Portfolio` at `/portfolio`
- `Story` at `/about`
- `Contact` at `/request`

Every public project has a direct route at `/projects/[slug]`. Flipper Zero exploration and the coming-soon Cutlery Sorting Machine are intentionally public. The unfinished standalone Investment section remains excluded from navigation and search indexing.

## Edit Content

Gard owns the substantive wording in four plain TypeScript modules:

```text
app/content/profile.ts
app/content/projects.ts
app/content/experience.ts
app/content/about.ts
```

Page components control presentation. Optional project and experience fields remain hidden when empty. Do not publish placeholder instructions. Set a project to `visibility: "draft"` until its wording and evidence are approved.

Photo assignments are tracked in [`PHOTO-MAPPING.md`](PHOTO-MAPPING.md). Do not assign an image to a project or experience by appearance alone.

## Public Media

Store approved public media in `public/media/` and reference it with a root path such as `/media/fpv-drone-flight.jpg`.

After adding or replacing a published image, update the source list in `scripts/optimize-media.mjs` and generate responsive AVIF/WebP variants:

```bash
pnpm media:optimize
```

Keep videos close to or below 4 MB, provide a poster, and avoid offscreen preloading. Never put a private CV, restricted portfolio, or confidential report in `public/`; every file in that directory is downloadable.

## Local Setup

Requirements: Node.js 22.13 or newer and pnpm 11.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Create `.env.local` from `.env.example` for contact delivery and optional integrations:

```dotenv
NEXT_PUBLIC_BOOKING_URL=https://cal.com/gard-laeskogen-s4byyh/quick-chat
RESEND_API_KEY=
CONTACT_TO_EMAIL=gard@sundvolden.no
CONTACT_FROM_EMAIL=website@gardlaeskogen.com
NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=
NEXT_PUBLIC_STORY_VIDEO=
```

The sender domain must be verified in Resend. `RESEND_API_KEY` is a secret and must only exist in local or hosting environment variables. Contact includes a copy-email fallback. Detailed documents are shared manually through a restricted OneDrive or equivalent link.

## Quality Checks

Run the complete publication gate:

```bash
pnpm check
```

It runs content validation, contact-route tests, lint, TypeScript checking, and a production build. Useful individual commands are:

```bash
pnpm content:check
pnpm test:contact
pnpm lint
pnpm typecheck
pnpm build
pnpm audit --prod
```

The content validator checks slugs, dates, public copy, media and responsive variants, draft leakage, project links, experience evidence, and internal routes.

## Deployment

The canonical origin is `https://www.gardlaeskogen.com`. The application includes canonical and social metadata, Person and CreativeWork structured data, `robots.txt`, and a sitemap containing only public routes.

Source is mirrored to GitHub and the OpenAI Sites remote. The current Sites project ID is stored in `.openai/hosting.json`. Publishing through the Sites deployment flow builds from `main` and serves the custom domain.

For a direct Cloudflare Worker deployment, configure the required environment variables and run:

```bash
pnpm deploy
```

That command builds the vinext application and deploys the generated `dist/server/wrangler.json` configuration. The root `wrangler.jsonc` supplies the Worker entry point and non-secret defaults; never commit `RESEND_API_KEY` there.

Push source changes to GitHub with:

```bash
git add .
git commit -m "Describe the change"
git push github main
```
