# Gard Laeskogen Portfolio

Personal website for portfolio projects, CV, sports, investment notes, videos, and "The why".

## Project Folder

The local project is here:

```bash
/Users/gardlaeskogen/Documents/Codex/2026-07-11/i
```

This folder is already a Git repository.

## How The Site Is Built

This is a Vinext/Next-style React site.

- `app/page.tsx` controls the home page layout.
- `app/content.ts` is the main text/content file you should edit first.
- `app/PortfolioCarousel.tsx` controls the swipeable portfolio project viewer.
- `app/sports/page.tsx` controls `/sports`.
- `app/investment/page.tsx` controls `/investment`.
- `app/philosophy/page.tsx` controls `/philosophy`, currently titled "The why".
- `app/globals.css` controls the visual style.
- `public/media/` contains images and videos used on the site.

## Editing Text Yourself

Edit this file:

```bash
app/content.ts
```

That file contains:

- `site`: name, intro, contact-level text
- `videos`: video clips on the home page
- `cvItems`: CV timeline blocks
- `projects`: portfolio projects, durations, descriptions, skills, links, media
- `sportsIntro`, `sportsAchievements`, `sportsExtraLinks`
- `investmentText`, `investmentLinks`
- `why`: life rules, what you want to be described as, favorite quotes

The Word documents remain your source documents. I did not edit them. The website uses copied text from them.

## Editing Images And Videos

Put files in:

```bash
public/media/
```

Then reference them from `app/content.ts` like:

```ts
images: ["/media/my-image.jpg"]
video: "/media/my-video.mp4"
```

## Suggested Image Mapping Workflow

Use `app/content.ts` as the map between projects and images. Each project has:

```ts
images: ["/media/image-name.jpg"]
video: "/media/video-name.mp4"
```

Recommended mapping:

- `FPV-drone builds`: drone builds, FPV frames, fixed-wing, GNSS/EW test equipment, production-oriented drone cases.
- `Analog servo controller`: servo motor rig, breadboard circuits, control system diagrams, schematics.
- `Distributed elevator system`: screenshots, diagrams, code architecture, terminal/demo images. Use a fallback label until you have real media.
- `Social platform (TieUp)`: Marvel prototype screenshots, old logo/product sketches, company setup material.
- `Flipper-zero exploration`: Flipper Zero device, WiFi devboard, signal testing photos.
- `Hospitality Investment analysis`: Sundvolden/family business photos, analysis screenshots only if they are safe to share.
- `Cutlery sorting machine`: CAD, prototype photos, sensor/actuator tests, mechanism sketches.

Practical rule: rename files by project before adding them, for example:

```text
drone-fpv-frame-01.jpg
servo-breadboard-01.jpg
investment-sundvolden-01.jpg
```

Then add only the correct filenames to the matching project in `app/content.ts`.

## Run Locally

From the project folder:

```bash
pnpm install
pnpm dev
```

Then open the local URL printed in the terminal, usually:

```bash
http://localhost:3000
```

## Check Before Publishing

```bash
pnpm lint
pnpm build
```

## Put This On Your GitHub

Because `gh` is not installed in this shell, create an empty repository on GitHub in the browser first. Suggested repo name:

```text
gard-laeskogen-portfolio
```

Then run these commands from the project folder:

```bash
cd /Users/gardlaeskogen/Documents/Codex/2026-07-11/i
git remote add github https://github.com/YOUR-USERNAME/gard-laeskogen-portfolio.git
git push -u github main
```

If `github` remote already exists, use:

```bash
git remote set-url github https://github.com/YOUR-USERNAME/gard-laeskogen-portfolio.git
git push -u github main
```

After that, you can clone the project on another device with:

```bash
git clone https://github.com/YOUR-USERNAME/gard-laeskogen-portfolio.git
```
