import { mkdirSync, rmSync } from "node:fs";
import { basename, dirname, extname, join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const mediaDirectory = join(root, "public", "media");
const widths = [640, 768, 1280];
const sources = [
  "family-business-portrait.jpg",
  "family-business.jpg",
  "military-field.jpg",
  "profile-contactor.jpg",
  "contactor-ntnu-team.jpeg",
  "contactor-ntnu-leadership.jpeg",
  "fpv-drone-build.jpg",
  "fpv-drone-flight.jpg",
  "fpv-drone-table.jpg",
  "signal-box-exterior.jpg",
  "signal-box-interior.jpg",
  "servo-labeled-system.png",
  "control-system-diagram.png",
  "servo-breadboard-full.jpg",
  "servo-schematic.png",
];

function run(command, args) {
  const result = spawnSync(command, args, { stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error(`${command} failed with status ${result.status}`);
  }
}
mkdirSync(join(root, "tmp"), { recursive: true });

for (const sourceName of sources) {
  const input = join(mediaDirectory, sourceName);
  const stem = basename(sourceName, extname(sourceName));
  const isPhotograph = /\.jpe?g$/i.test(sourceName);

  for (const width of widths) {
    const resized = join(root, "tmp", `${stem}-${width}.png`);
    const webp = join(mediaDirectory, `${stem}-${width}.webp`);
    const avif = join(mediaDirectory, `${stem}-${width}.avif`);

    run("sips", ["--resampleWidth", String(width), "--setProperty", "format", "png", input, "--out", resized]);
    run("cwebp", ["-quiet", "-mt", "-q", "82", resized, "-o", webp]);
    run("avifenc", [
      "--jobs", "all",
      "--speed", "8",
      "--qcolor", isPhotograph ? "55" : "62",
      "--yuv", isPhotograph ? "420" : "444",
      "--ignore-exif",
      "--ignore-xmp",
      resized,
      avif,
    ]);
    rmSync(resized, { force: true });
  }
}

console.log(`Generated AVIF and WebP variants for ${sources.length} images.`);
