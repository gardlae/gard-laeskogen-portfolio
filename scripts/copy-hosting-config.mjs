import { appendFileSync, copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const targetDirectory = join(root, "dist", ".openai");

mkdirSync(targetDirectory, { recursive: true });
copyFileSync(
  join(root, ".openai", "hosting.json"),
  join(targetDirectory, "hosting.json"),
);

const headersPath = join(root, "dist", "client", "_headers");
const mediaCachePolicy = [
  "",
  "/media/*",
  "  Cache-Control: public, max-age=86400, stale-while-revalidate=604800",
  "",
].join("\n");

if (existsSync(headersPath) && !readFileSync(headersPath, "utf8").includes("/media/*")) {
  appendFileSync(headersPath, mediaCachePolicy);
}

console.log("Copied Sites hosting metadata and media cache policy into dist/.");
