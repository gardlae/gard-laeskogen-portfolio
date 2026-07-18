# Photo Mapping

This file is the source of truth for assigning images to website content. A photo should not be moved to a project or experience based on appearance alone. Gard confirms every assignment.

## Send A Mapping

Use this format in a message:

```text
Photo: IMG_2411.jpg
Use for: Project
Project or experience: fpv-drone-builds
Placement: Cover or supporting
Caption: Optional caption written by Gard
Approved for public website: Yes
```

`Project or experience` should use the website slug or the exact experience name. Send one block per image. If placement or public approval is missing, the image stays unmapped.

## Project Images

| Published file | Current assignment | Placement | Approval |
| --- | --- | --- | --- |
| `distributed-elevator-system.jpg` (source: `signal-2026-07-11-07-30-23-935.png`) | `distributed-elevator-system` | Cover | Confirmed by Gard |
| `fpv-drone-build.jpg` | `fpv-drone-builds` | Cover | Needs confirmation |
| `fpv-drone-flight.jpg` (source: `drone.jpg`) | `fpv-drone-builds` | Supporting | Confirmed by Gard |
| `story-clip-2.mp4` | `fpv-drone-builds` | Supporting video | Needs confirmation |
| `fpv-drone-table.jpg` | `fpv-drone-builds` | Supporting | Needs confirmation |
| `signal-box-exterior.jpg` | `fpv-drone-builds` | Supporting | Needs confirmation |
| `signal-box-interior.jpg` | `fpv-drone-builds` | Supporting | Needs confirmation |
| `servo-labeled-system.png` (English version of `signal-2026-07-11-07-26-27-941.jpg`) | `analog-servo-controller` | Cover | Confirmed by Gard |
| `control-system-diagram.png` (source: `control-system-diagram-english.png`) | `analog-servo-controller` | Supporting | Confirmed by Gard |
| `servo-breadboard-full.jpg` (source: `IMG_6505.jpg`) | `analog-servo-controller` | Supporting | Confirmed by Gard |
| `servo-schematic.png` (source: `signal-2026-07-11-07-26-27-941_002.png`) | `analog-servo-controller` | Supporting | Confirmed by Gard |
| `tieup-first-sketch.png` (source: `IMG_3466.PNG`) | `tieup-social-platform` | Cover | Confirmed by Gard |
| `family-business.jpg` | `hospitality-investment-analysis` | Cover | Needs confirmation |

## Experience Images

| Published file | Current assignment | Placement | Approval |
| --- | --- | --- | --- |
| `stealth-startup-mark.jpg` | Stealth startup | Mark | Needs confirmation |
| `norwegian-armed-forces-mark.jpg` | Norwegian Armed Forces roles | Mark | Needs confirmation |
| `sundvolden-mark.png` | Sundvolden Hotel | Mark | Needs confirmation |
| `contactor-ntnu-team.jpeg` | Contactor NTNU | Supporting | Needs confirmation |
| `contactor-ntnu-leadership.jpeg` | Contactor NTNU | Supporting | Needs confirmation |

## Site Images

| Published file | Current assignment | Placement | Approval |
| --- | --- | --- | --- |
| `family-business-portrait.jpg` | Homepage | Hero poster | Needs confirmation |
| `cv-portrait.jpg` (source: `IMG_3082.jpg`) | Experience page | Hero portrait | Confirmed by Gard |

When a mapping is confirmed, update the approval column to `Confirmed by Gard`, update the relevant entry in `app/content/projects.ts`, `app/content/experience.ts`, or `app/content/profile.ts`, and run `pnpm check` before deployment.
