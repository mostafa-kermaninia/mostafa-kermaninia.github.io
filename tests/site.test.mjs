import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { runInNewContext } from "node:vm";
import { site, projects } from "../src/content.mjs";
import { server } from "../scripts/serve.mjs";

const dist = resolve(import.meta.dirname, "../dist");
async function files(folder) {
  const out = [];
  for (const ent of await readdir(folder, { withFileTypes: true })) {
    const p = resolve(folder, ent.name);
    if (ent.isDirectory()) out.push(...(await files(p)));
    else out.push(p);
  }
  return out;
}
const decode = (s) =>
  s
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");

test("every internal link, asset and fragment resolves in the published output", async () => {
  const htmlFiles = (await files(dist)).filter((p) => p.endsWith(".html"));
  for (const file of htmlFiles) {
    const source = await readFile(file, "utf8");
    const path = "/" + file.slice(dist.length + 1).replace(/index\.html$/, "");
    for (const match of source.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
      const link = decode(match[1]);
      if (/^(mailto:|data:)/.test(link)) continue;
      const url = new URL(link, site.url + path);
      if (url.origin !== site.url) continue;
      const relative = decodeURIComponent(url.pathname);
      let target = resolve(dist, "." + relative);
      const info = await stat(target).catch(() => null);
      assert.ok(info, `${path}: missing target ${link}`);
      if (info.isDirectory()) target = resolve(target, "index.html");
      assert.ok(
        (await stat(target)).isFile(),
        `${path}: missing index for ${link}`,
      );
      if (url.hash) {
        const targetSource = await readFile(target, "utf8");
        assert.ok(
          targetSource.includes(
            `id="${decodeURIComponent(url.hash.slice(1))}"`,
          ),
          `${path}: missing fragment ${link}`,
        );
      }
    }
  }
});

test("all primary pages contain real content, unique metadata, and one main heading without client rendering", async () => {
  const pages = [
    "/",
    "/work/",
    "/research/",
    "/about/",
    ...projects.map((p) => `/work/${p.slug}/`),
  ];
  const titles = new Set();
  for (const path of pages) {
    const source = await readFile(
      resolve(dist, "." + path, "index.html"),
      "utf8",
    );
    assert.equal((source.match(/<h1>/g) || []).length, 1, path);
    assert.match(source, /<main id="main">[\s\S]+<\/main>/);
    assert.ok(source.includes(`rel="canonical" href="${site.url}${path}"`));
    const title = source.match(/<title>(.*?)<\/title>/)[1];
    assert.ok(!titles.has(title), "duplicate title");
    titles.add(title);
    const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(ids.length, new Set(ids).size, "duplicate IDs on " + path);
    const json = source.match(
      /<script type="application\/ld\+json">(.*?)<\/script>/s,
    )[1];
    assert.equal(JSON.parse(json).name, site.name);
  }
});

test("confirmed academic facts are consistent; graduation and 16-video claims are absent", async () => {
  const about = await readFile(resolve(dist, "about/index.html"), "utf8");
  const research = await readFile(resolve(dist, "research/index.html"), "utf8");
  assert.match(about, /19\.72\/20/);
  assert.match(research, /19\.72 \/ 20/);
  assert.match(research, /35\+ video lessons/);
  assert.ok(
    !/19\.78|19\.76|16-video|Currently Enrolled|ninth semester|eight credits/i.test(
      about + research,
    ),
  );
  assert.match(about, /Full-Stack Engineer/);
  assert.match(about, /Co-Founder &amp; CEO/);
});

test("legacy case-study URLs lead to their exact replacements and 404 stays a real error page", async () => {
  for (const slug of ["grantia", "majara", "momis"]) {
    const source = await readFile(
      resolve(dist, "case-study", slug, "index.html"),
      "utf8",
    );
    assert.ok(source.includes(`content="0;url=/work/${slug}/"`));
    assert.ok(source.includes(`href="/work/${slug}/"`));
  }
  const error = await readFile(resolve(dist, "404.html"), "utf8");
  assert.match(error, /noindex/);
  assert.match(error, /Page not found/);
  assert.ok(!error.includes("location.replace"));
});

test("preview HTTP routing handles direct pages, unknown URLs and encoded paths", async () => {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const path of [
      "/",
      "/work/videomap/",
      "/research/",
      "/assets/site.js",
      "/assets/download/CV.pdf",
    ]) {
      const response = await fetch(base + path);
      assert.equal(response.status, 200, path);
    }
    const missing = await fetch(base + "/not-a-real-page/");
    assert.equal(missing.status, 404);
    assert.match(await missing.text(), /Page not found/);
    const redirect = await fetch(base + "/work", { redirect: "manual" });
    assert.equal(redirect.status, 301);
    assert.equal(redirect.headers.get("location"), "/work/");
    const malformed = await fetch(base + "/%ZZ");
    assert.equal(malformed.status, 400);
    const download = await fetch(base + "/assets/download/CV.pdf");
    assert.equal(download.headers.get("content-type"), "application/pdf");
    assert.equal(
      Buffer.from(await download.arrayBuffer())
        .subarray(0, 4)
        .toString(),
      "%PDF",
    );
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

class Element {
  constructor(dataset = {}) {
    this.dataset = dataset;
    this.attributes = {};
    this.handlers = {};
    this.hidden = false;
    this.textContent = "";
    this.focused = false;
    this.classes = new Set();
    this.classList = {
      add: (v) => this.classes.add(v),
      remove: (v) => this.classes.delete(v),
      toggle: (v, on) => (on ? this.classes.add(v) : this.classes.delete(v)),
    };
  }
  addEventListener(type, handler) {
    this.handlers[type] = handler;
  }
  setAttribute(k, v) {
    this.attributes[k] = v;
  }
  getAttribute(k) {
    return this.attributes[k] ?? null;
  }
  focus() {
    this.focused = true;
  }
}
function clientFixture(clipboard) {
  const menu = new Element(),
    nav = new Element(),
    status = new Element(),
    copy = new Element({ copyEmail: site.email }),
    count = new Element(),
    empty = new Element();
  const filters = ["all", "ai", "data", "product"].map(
    (filter) => new Element({ filter }),
  );
  const items = ["ai data", "ai", "data", "product", "ai product"].map(
    (category) => new Element({ category }),
  );
  const document = {
    documentElement: new Element(),
    handlers: {},
    addEventListener(type, handler) {
      this.handlers[type] = handler;
    },
    querySelector(s) {
      return (
        {
          ".menu-toggle": menu,
          "#main-navigation": nav,
          "[data-filter-count]": count,
          "[data-filter-empty]": empty,
          "[data-copy-email]": copy,
          "[data-copy-status]": status,
        }[s] ?? null
      );
    },
    querySelectorAll(s) {
      return s === "[data-filter]"
        ? filters
        : s === "[data-project]"
          ? items
          : [];
    },
  };
  return {
    context: {
      document,
      window: { matchMedia: () => ({ addEventListener() {} }) },
      navigator: { clipboard },
      Element,
      HTMLElement: Element,
    },
    menu,
    nav,
    status,
    copy,
    count,
    empty,
    filters,
    items,
    document,
  };
}
test("actual client script filters work, updates accessible state, and restores all results", async () => {
  const f = clientFixture({ writeText: async () => {} });
  runInNewContext(
    await readFile(resolve(dist, "assets/site.js"), "utf8"),
    f.context,
  );
  f.filters[3].handlers.click();
  assert.deepEqual(
    f.items.map((x) => x.hidden),
    [true, true, true, false, false],
  );
  assert.equal(f.count.textContent, "2 projects");
  assert.equal(f.filters[3].getAttribute("aria-pressed"), "true");
  f.filters[0].handlers.click();
  assert.ok(f.items.every((x) => !x.hidden));
  assert.equal(f.count.textContent, "5 projects");
});
test("mobile menu Escape restores focus and clipboard failures never claim success", async () => {
  const script = await readFile(resolve(dist, "assets/site.js"), "utf8");
  const f = clientFixture({
    writeText: async () => {
      throw Error("denied");
    },
  });
  runInNewContext(script, f.context);
  f.menu.handlers.click();
  assert.equal(f.menu.getAttribute("aria-expanded"), "true");
  f.document.handlers.keydown({ key: "Escape" });
  assert.equal(f.menu.getAttribute("aria-expanded"), "false");
  assert.equal(f.menu.focused, true);
  await f.copy.handlers.click({ currentTarget: f.copy });
  assert.equal(f.status.textContent, "Select the email address to copy it.");
  const ok = clientFixture({
    writeText: async (text) => assert.equal(text, site.email),
  });
  runInNewContext(script, ok.context);
  await ok.copy.handlers.click({ currentTarget: ok.copy });
  assert.equal(ok.status.textContent, "Email copied.");
});
