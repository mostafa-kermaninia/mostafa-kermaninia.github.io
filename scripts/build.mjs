import { mkdir, rm, cp, writeFile, readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { site, projects } from "../src/content.mjs";
import {
  document,
  home,
  work,
  caseStudy,
  research,
  about,
  notFound,
  escape,
} from "../src/render.mjs";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "dist");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "public"), output, { recursive: true });
await mkdir(resolve(output, "assets"), { recursive: true });
for (const [source, target] of [
  ["styles.css", "site.css"],
  ["site.js", "site.js"],
]) {
  await cp(resolve(root, "src", source), resolve(output, "assets", target));
}
const pages = [
  { path: "/", body: home() },
  {
    path: "/work/",
    title: "Selected work",
    description:
      "Selected AI systems, retrieval, data engineering, and product work by Mostafa Kermani Nia.",
    body: work(),
  },
  {
    path: "/research/",
    title: "Research & teaching",
    description:
      "Robust federated learning, vision-language models, academic leadership, and project-based Speech & Audio AI instruction.",
    body: research(),
  },
  {
    path: "/about/",
    title: "About",
    description:
      "AI/ML engineer, researcher, and builder. Explore Mostafa Kermani Nia’s experience in AI, data systems, frontend, and mobile engineering.",
    body: about(),
  },
  ...projects.map((p) => ({
    path: `/work/${p.slug}/`,
    title: p.name,
    description: p.summary,
    body: caseStudy(p),
  })),
];
for (const page of pages) {
  const file = resolve(output, "." + page.path, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, document(page));
}
await writeFile(
  resolve(output, "404.html"),
  document({
    path: "/404.html",
    title: "Page not found",
    body: notFound(),
    noindex: true,
  }),
);
for (const slug of ["grantia", "majara", "momis"]) {
  const target = `/work/${slug}/`;
  const folder = resolve(output, "case-study", slug);
  await mkdir(folder, { recursive: true });
  await writeFile(
    resolve(folder, "index.html"),
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Project moved — ${escape(site.name)}</title><link rel="canonical" href="${site.url}${target}"><meta http-equiv="refresh" content="0;url=${target}"><meta name="robots" content="noindex"></head><body><p>This project has moved. <a href="${target}">Read the case study</a>.</p></body></html>`,
  );
}
await writeFile(
  resolve(output, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((p) => `<url><loc>${site.url}${p.path}</loc><lastmod>${site.updated}</lastmod></url>`).join("")}</urlset>\n`,
);
await writeFile(
  resolve(output, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`,
);
await writeFile(
  resolve(output, "build-info.json"),
  JSON.stringify(
    {
      version: "2.0.0",
      updated: site.updated,
      pages: pages.map((p) => p.path),
    },
    null,
    2,
  ) + "\n",
);
await writeFile(resolve(output, ".nojekyll"), "");
const script = await readFile(resolve(output, "assets/site.js"), "utf8");
console.log(
  `Built ${pages.length} content pages + 404 + 3 legacy redirects. Client script: ${Buffer.byteLength(script)} bytes.`,
);
