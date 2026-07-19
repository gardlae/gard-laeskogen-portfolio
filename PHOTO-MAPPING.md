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
| `fpv-drone-flight.jpg` (source: `drone.jpg`) | `fpv-drone-builds` | Cover | Confirmed by Gard |
| `story-clip-2.mp4` (first five seconds of source video) | `fpv-drone-builds` | Supporting video | Confirmed by Gard |
| `servo-labeled-system.png` (English version of `signal-2026-07-11-07-26-27-941.jpg`) | `analog-servo-controller` | Supporting | Confirmed by Gard |
| `control-system-diagram.png` (source: `control-system-diagram-english.png`) | `analog-servo-controller` | Supporting | Confirmed by Gard |
| `servo-breadboard-full.jpg` (source: `IMG_0168.jpg`) | `analog-servo-controller` | Cover | Confirmed by Gard |
| `servo-schematic.png` (source: `signal-2026-07-11-07-26-27-941_002.png`) | `analog-servo-controller` | Supporting | Confirmed by Gard |
| `tieup-first-sketch.png` (source: `IMG_3466.PNG`) | `tieup-social-platform` | Cover | Confirmed by Gard |
| `family-business.jpg` | `hospitality-investment-analysis` and Story | Cover / story image | Confirmed by Gard |

## Experience Images

| Published file | Current assignment | Placement | Approval |
| --- | --- | --- | --- |
| `stealth-startup-mark.jpg` | Stealth startup | Mark | Confirmed by Gard |
| `norwegian-armed-forces-mark.jpg` | Norwegian Armed Forces roles | Mark | Confirmed by Gard |
| `sundvolden-mark.png` | Sundvolden Hotel | Mark | Confirmed by Gard |
| `nfea-mark.jpeg` | NFEA board membership | Mark | Confirmed by Gard |
| `contactor-ntnu-mark.jpeg` | Contactor NTNU | Mark | Confirmed by Gard |
| `holevaeringen-il-mark.jpeg` | Cross-country skiing coach | Mark | Confirmed by Gard |

## Site Images

| Published file | Current assignment | Placement | Approval |
| --- | --- | --- | --- |
| `family-business-portrait.jpg` | Homepage | Hero poster | Confirmed by Gard |
| `military-field.jpg` (source: `IMG_9094.jpg`) | Story | Supporting image | Confirmed by Gard |

When a mapping is confirmed, update the approval column to `Confirmed by Gard`, update the relevant entry in `app/content/projects.ts`, `app/content/experience.ts`, or `app/content/profile.ts`, and run `pnpm check` before deployment.
