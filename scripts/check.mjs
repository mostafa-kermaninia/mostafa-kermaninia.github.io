import { readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
for (const folder of ["src", "scripts", "tests"]) {
  for (const f of await readdir(new URL(`../${folder}/`, import.meta.url))) {
    if (!/\.(mjs|js)$/.test(f)) continue;
    const path = new URL(`../${folder}/${f}`, import.meta.url).pathname;
    const result = spawnSync(process.execPath, ["--check", path], {
      stdio: "inherit",
    });
    if (result.status !== 0) process.exit(result.status || 1);
  }
}
console.log("JavaScript syntax checks passed.");
