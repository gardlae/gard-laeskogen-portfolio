# Gard Laeskogen Portfolio

Recruiter-first portfolio for technical work, experience, personal background, and contact.

## Project Location

```text
/Users/gardlaeskogen/Documents/Codex/2026-07-11/i
```

GitHub: [gardlae/gard-laeskogen-portfolio](https://github.com/gardlae/gard-laeskogen-portfolio)

Production: [www.gardlaeskogen.com](https://www.gardlaeskogen.com)

## Site Structure

The public navigation has four sections:

- `Work` at `/portfolio`
- `Experience` at `/cv`
- `About` at `/about`
- `Contact` at `/request`

Every public project has a direct URL at `/projects/[slug]`. Sports and principles are sections within About. Investment, Flipper Zero, and Cutlery Sorting remain unpublished drafts.

## Gard-Owned Content

All substantive wording lives in four plain TypeScript files:

```text
app/content/profile.ts
app/content/projects.ts
app/content/experience.ts
app/content/about.ts
```

The page components control layout only. Gard owns these content fields:

### Profile

Edit `app/content/profile.ts` for:

- name, email, location, LinkedIn, and role
- homepage summary and proof metrics
- canonical domain
- optional story video and poster

### Projects

Edit `app/content/projects.ts`. Each project supports:

```ts
{
  visibility: "public" | "draft",
  featured: true | false,
  context: "",
  role: "",
  challenge: "",
  contribution: "",
  outcome: "",
  constraints: "",
  methods: [],
  cover: {},
  media: [],
}
```

Optional sections are not rendered when their fields are missing. Do not add instruction text or placeholders to a public field. Set `visibility: "draft"` until the evidence and wording are ready.

The three featured projects are shown on the homepage. A public project can use an approved local image or a text-based technical graphic as its cover.

### Experience

Edit `app/content/experience.ts` for:

- chronology and positions
- summaries
- responsibilities
- impact
- local evidence images
- education and additional experience

Missing responsibility or impact fields stay hidden.

### About

Edit `app/content/about.ts` for:

- personal background
- sports results and source links
- principles, desired character, and quotes

Sports imagery must be user-owned. External articles are text links only.

## Images And Video

Store public media in:

```text
public/media/
```

Reference media with site-root paths such as:

```ts
src: "/media/fpv-drone-build.jpg"
```

Generate local 640 px and 1280 px AVIF/WebP variants after changing a published image:

```bash
pnpm media:optimize
```

The optimization source list is in `scripts/optimize-media.mjs`. Add a new published filename there before running the command.

Published video should have a poster, use `preload="none"` away from the first view, and remain close to or below 4 MB. Do not put private reports, a detailed CV, or a restricted portfolio in `public/`; every file there is publicly downloadable.

## Contact Configuration

Create a local `.env.local` based on `.env.example`:

```bash
NEXT_PUBLIC_BOOKING_URL=https://cal.com/your-page
NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=your-token
NEXT_PUBLIC_STORY_VIDEO=/media/story-final.mp4
```

- Without `NEXT_PUBLIC_BOOKING_URL`, Contact shows email and copy-email fallbacks.
- The Cal.com iframe is created only after the visitor opens the calendar.
- Cloudflare Web Analytics is absent unless its token is configured.
- The detailed-document request prepares an email and never sends files automatically.

Approved detailed files should be shared manually through a restricted OneDrive or equivalent link.

## Run Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Required Checks

Run everything before deployment:

```bash
pnpm check
```

Or run each stage separately:

```bash
pnpm content:check
pnpm lint
pnpm build
```

The content check fails for duplicate or invalid slugs, invalid dates, missing public text, missing media and responsive variants, draft leakage, invalid project links, and unknown static internal routes.

## Deployment And Domain

The canonical URL is configured as:

```text
https://www.gardlaeskogen.com
```

The site includes canonical metadata, Open Graph and Twitter metadata, Person and CreativeWork structured data, `robots.txt`, and `sitemap.xml`. Draft projects and Investment are excluded from public discovery.

Push source updates to GitHub:

```bash
git add .
git commit -m "Describe the change"
git push github main
```

The production host is configured separately through the Sites project in `.openai/hosting.json`.
