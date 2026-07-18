import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const targetDirectory = join(root, "dist", ".openai");

mkdirSync(targetDirectory, { recursive: true });
copyFileSync(
  join(root, ".openai", "hosting.json"),
  join(targetDirectory, "hosting.json"),
);

console.log("Copied Sites hosting metadata into dist/.openai/hosting.json.");
