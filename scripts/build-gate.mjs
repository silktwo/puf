// Builds the React gate app (gate-app/) and copies its output into the
// static site root so Vercel can serve it as the plain index.html entry
// point, with hashed JS/CSS bundles under /gate-assets/.
import { execSync } from "node:child_process";
import { cpSync, existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const gateApp = path.join(root, "gate-app");
const dist = path.join(gateApp, "dist");

execSync("npm run build", { cwd: gateApp, stdio: "inherit" });

const distIndex = path.join(dist, "index.html");
const distAssets = path.join(dist, "gate-assets");
if (!existsSync(distIndex) || !existsSync(distAssets)) {
  throw new Error("gate-app build did not produce the expected output");
}

const rootAssets = path.join(root, "gate-assets");
rmSync(rootAssets, { recursive: true, force: true });
cpSync(distAssets, rootAssets, { recursive: true });
cpSync(distIndex, path.join(root, "index.html"));

console.log("Gate app built and copied to site root.");
