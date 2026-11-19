# Gard Laeskogen Portfolio

Personal CV and technical portfolio for Gard Laeskogen.

- Production: [www.gardlaeskogen.com](https://www.gardlaeskogen.com)
- GitHub: [gardlae/gard-laeskogen-portfolio](https://github.com/gardlae/gard-laeskogen-portfolio)
- Local project: `/Users/gardlaeskogen/Documents/personlig/CV/gard-laeskogen-portifolio`

## Public Structure

The homepage (`/`) introduces Gard (with a portrait once `site.portrait` is set in `app/content/profile.ts`), the research, three selected projects and a short experience list. The navigation has three pages:

- `Research` at `/research`: the research page, generated outside this repository (see below)
- `Portfolio` at `/portfolio`: every public project
- `CV` at `/cv`: the full CV, with the PDF at `/Gard-Laeskogen-CV.pdf`

Every public project has a direct route at `/projects/[slug]`. Research (TickJEPA) is not a portfolio project: it has its own page and the homepage's Research section. The old Drive section is gone: athletics are on the CV (`/cv#athletics`), and `/about`, `/sports` and `/philosophy` redirect. Flipper Zero exploration and the coming-soon Cutlery Sorting Machine are intentionally public. The unfinished standalone Investment section remains excluded from navigation and search indexing. Contact details live in the footer.

### The research page

`/research` is a complete HTML page written by the research repository's site generator (`YouOnAI/site/build.py`), which reads every number from the experiment run log:

```bash
python3 site/build.py --portfolio ~/Github/gard-laeskogen-portfolio
```

It writes `app/research/research-page.ts` (served by `app/research/route.ts`) and `public/research/` (status JSON, social image, and the paper files once the PDF is public). Do not edit those files by hand; rebuild instead, then commit and deploy as usual. The page repeats this site's header, footer, fonts and colours, so a change to `app/globals.css` tokens or to `SiteHeader`/`SiteFooter` needs the same change in `YouOnAI/site/template.html`. It stays `noindex` until the research project sets `publish` to true.

## Edit Content

Gard owns the substantive wording in four plain TypeScript modules:

```text
app/content/profile.ts
app/content/projects.ts
app/content/experience.ts
app/content/about.ts
```

Page components control presentation. Optional project and experience fields remain hidden when empty. Do not publish placeholder instructions. Set a project to `visibility: "draft"` until its wording and evidence are approved.

The Sundvolden Hotel project is intentionally draft-only until Gard supplies the approved public narrative: goal, context, Gard's role, work performed, outcome, constraints, and any approved media.

Photo assignments are tracked in [`PHOTO-MAPPING.md`](PHOTO-MAPPING.md). Do not assign an image to a project or experience by appearance alone.

## Public Media

Store approved public media in `public/media/` and reference it with a root path such as `/media/fpv-drone-flight.jpg`.

After adding or replacing a published image, update the source list in `scripts/optimize-media.mjs` and generate responsive AVIF/WebP variants:

```bash
pnpm media:optimize
```

Keep videos close to or below 4 MB, provide a poster, and avoid offscreen preloading. Never put a private CV, restricted portfolio, or confidential report in `public/`; every file in that directory is downloadable. The approved public CV is `public/Gard-Laeskogen-CV.pdf`.

## Local Setup

Requirements: Node.js 22.13 or newer and pnpm 11.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Create `.env.local` only for optional public integrations:

```dotenv
NEXT_PUBLIC_BOOKING_URL=https://cal.com/gard-laeskogen-s4byyh/quick-chat
NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=
NEXT_PUBLIC_STORY_VIDEO=
```

## Quality Checks

Run the complete publication gate:

```bash
pnpm check
```

It runs content validation, lint, TypeScript checking, and a production build. Useful individual commands are:

```bash
pnpm content:check
pnpm lint
pnpm typecheck
pnpm build
pnpm audit --prod
```

The content validator checks slugs, dates, public copy, media and responsive variants, draft leakage, project links, experience evidence, and internal routes.

## Deployment

The canonical origin is `https://www.gardlaeskogen.com`. The application includes canonical and social metadata, Person and CreativeWork structured data, `robots.txt`, and a sitemap containing only public routes.

The site runs on Cloudflare Workers (worker `gard-laeskogen-portfolio`). **Cloudflare Workers Builds** is connected to this GitHub repository, so deploying is a push:

- A push to `main` builds and deploys production, `www.gardlaeskogen.com`.
- A push to any other branch builds a preview version that does not touch production. Its link appears on the commit's "Workers Builds" check on GitHub (and in the Cloudflare dashboard under the worker's deployments). Use it to share a change before merging.

```bash
git switch -c my-change
git commit -am "Describe the change"
git push -u origin my-change     # preview link on the commit's check
```

Merge the branch into `main` (a pull request or `git push origin my-change:main`) to publish it.

To update the research page: run `python3 site/build.py --portfolio ~/Github/gard-laeskogen-portfolio` in the YouOnAI repository, then commit `app/research/` and `public/research/` here and push as above.

A manual deployment from this machine is also possible after `wrangler login`: `pnpm deploy` builds the vinext application and deploys `dist/server/wrangler.json`; the root `wrangler.jsonc` supplies the Worker entry point and non-secret defaults. `.openai/hosting.json` is left from the earlier OpenAI Sites setup.
