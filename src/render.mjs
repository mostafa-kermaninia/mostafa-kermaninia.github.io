import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import {
  site,
  projects,
  additionalProjects,
  experience,
  teaching,
  earlierTeaching,
  capabilities,
} from "./content.mjs";

// New CSS receives a new URL so cached Pages assets cannot crop a new portrait
// using an older layout. The renderer runs only at build time.
export const stylesheetPath = `/assets/site-${createHash("sha256")
  .update(readFileSync(new URL("./styles.css", import.meta.url)))
  .digest("hex")
  .slice(0, 12)}.css`;

export const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
const e = escape,
  ext = 'target="_blank" rel="noopener noreferrer"',
  arrow = '<span aria-hidden="true">↗</span>';
const sectionTitle = (n, label, title, desc = "") =>
  `<div class="section-heading"><div><p class="eyebrow">${e(n)} / ${e(label)}</p><h2>${title}</h2></div>${desc ? `<p class="section-intro">${e(desc)}</p>` : ""}</div>`;
const cv = `<a class="text-link" href="${site.cv}" download="Mostafa-Kermani-Nia-CV.pdf">Download CV <span aria-hidden="true">↓</span></a>`;

export function artwork(p, large = false) {
  return `<figure class="project-art art-${p.art}${large ? " art-large" : ""}" aria-label="Concept illustration for ${e(p.name)}"><div class="art-top"><span>${e(p.name)}</span><span>${e(p.number)} / SYSTEMS</span></div><div class="art-shapes" aria-hidden="true"><span></span><span></span><span></span></div><div class="art-title" aria-hidden="true">${p.artTitle.map(e).join("<br>")}</div><figcaption class="art-bottom"><span>${e(p.artNote)}</span><span>Concept illustration</span></figcaption></figure>`;
}
function card(p) {
  return `<article class="project-card" data-project data-category="${p.categories.join(" ")}"><a href="/work/${p.slug}/" aria-label="Read ${e(p.name)} case study">${artwork(p)}<div class="project-caption"><div><p class="project-kicker">${e(p.label)}</p><h3>${e(p.name)} <span>/ ${e(p.company)}</span></h3><p>${e(p.summary)}</p></div><span class="card-arrow" aria-hidden="true">↗</span></div></a></article>`;
}
function jobs(items = experience) {
  return items
    .map(
      (j) =>
        `<details class="experience-row"><summary><span class="experience-company"><strong>${e(j.company)}</strong><span>${e(j.context)}</span></span><span class="experience-period">${e(j.period)}</span><span class="expand-mark" aria-hidden="true">+</span></summary><div class="experience-detail">${j.roles.map((r) => `<div class="role"><div><h3>${e(r[0])}</h3><p class="role-date">${e(r[1])}</p></div><p>${e(r[2])}</p></div>`).join("")}</div></details>`,
    )
    .join("");
}

function researchTeaser() {
  return `<section class="section wrap research-teaser"><div><p class="eyebrow">04 / Research & teaching</p><h2>Building systems.<br>Studying the foundations.</h2><p class="body-copy">I combine applied engineering with research in robust federated learning and vision-language models — and help others learn the foundations behind them.</p><a class="text-link" href="/research/">Research & teaching ${arrow}</a></div><div class="research-list"><a href="/research/#research"><span class="eyebrow">Research in progress</span><h3>Robust learning.<br>Multimodal understanding.</h3>${arrow}</a><a href="/research/#teaching"><span class="eyebrow">University of Tehran</span><h3>Head TA, Machine Learning</h3>${arrow}</a><a href="/research/#course"><span class="eyebrow">Project-based instruction</span><h3>Speech & Audio AI</h3><p>35+ video lessons, from DSP to voice agents.</p>${arrow}</a></div></section>`;
}

export function home() {
  return `<section class="hero wrap"><div class="hero-copy"><p class="person-name">${site.name}</p><p class="eyebrow">${e(site.title)}</p><h1>Intelligence,<br>engineered.</h1><p class="hero-intro">I build AI systems that connect messy real-world data to useful products — from LLM pipelines and visual search to analytics, APIs, and automation.</p><div class="actions"><a class="button" href="/work/">Explore selected work ${arrow}</a>${cv}</div></div><figure class="portrait"><img src="/images/mostafa-studio.webp" width="1122" height="1402" alt="Mostafa Kermani Nia" fetchpriority="high"><figcaption>Engineer. Researcher. Builder.</figcaption></figure></section>
<div class="hero-bottom wrap"><p>Based in Tehran <span aria-hidden="true">/</span> Working across AI & software</p><div class="social"><a href="${site.github}" ${ext}>GitHub ${arrow}</a><a href="${site.linkedin}" ${ext}>LinkedIn ${arrow}</a><a href="mailto:${site.email}">Email ${arrow}</a></div></div>
<section class="proof wrap" aria-label="Selected evidence"><div><strong>~50K posts</strong><p>Historical crawl scope for a video-to-product pipeline.</p></div><div><strong>1.2 → &lt;0.1</strong><p>CLS improvement in a production commerce application.</p></div><div><strong>Ranked 1st</strong><p>Eight consecutive semesters at the University of Tehran.</p></div></section>
<section class="section wrap" id="selected-work">${sectionTitle("01", "Selected work", "Selected systems.<br>Real engineering.", "A closer look at the decisions, pipelines, and product work behind my projects.")}<div class="project-grid">${projects.slice(0, 4).map(card).join("")}</div><div class="section-action"><a class="text-link" href="/work/">View all selected work ${arrow}</a></div></section>
<section class="product-spotlight wrap"><div><p class="eyebrow">Beyond the model / Product engineering</p><h2>The interface<br>matters, too.</h2><p class="body-copy">Production web experiences, responsive UX, and mobile integration — including a shipped Android app and a measurable improvement in layout stability.</p><a class="text-link" href="/work/commerce-experience/">Explore the product work ${arrow}</a></div><a class="spotlight-art" href="/work/commerce-experience/" aria-label="Read Commerce Experience case study">${artwork(projects[4])}</a></section>
<section class="section wrap">${sectionTitle("02", "What I bring", "From the model.<br>To the whole system.")}<div class="capabilities">${capabilities.map((c, i) => `<div class="capability"><span class="index">0${i + 1}</span><h3>${e(c[0])}</h3><div><p>${e(c[1])}</p><p class="evidence">${e(c[2])}</p></div></div>`).join("")}</div></section>
<section class="section experience-section"><div class="wrap">${sectionTitle("03", "Industry experience", "Built across products,<br>teams, and disciplines.", "Selected contributions in AI, commerce, and product engineering.")}<div>${jobs(experience.slice(0, 3))}</div><a class="text-link" href="/about/#experience">Explore my background ${arrow}</a></div></section>${researchTeaser()}`;
}

export function work() {
  return `<section class="page-hero wrap"><p class="eyebrow">Selected work / AI · Data · Software</p><h1>Systems, shipped<br>and explored.</h1><p>Industry work, independent builds, and experiments across AI, data, and software.</p></section><section class="wrap section work-section" aria-label="Project collection"><div class="filters" role="group" aria-label="Filter projects"><button type="button" data-filter="all" aria-pressed="true">All work</button><button type="button" data-filter="ai" aria-pressed="false">Applied AI</button><button type="button" data-filter="data" aria-pressed="false">Data systems</button><button type="button" data-filter="product" aria-pressed="false">Product engineering</button><span class="filter-count" data-filter-count aria-live="polite">10 projects</span></div><div class="project-grid">${projects.map(card).join("")}</div><div class="additional-work">${additionalProjects.map((p) => `<article data-project data-category="${p.categories.join(" ")}" class="additional-row"><div><p class="eyebrow">${e(p.company)} / ${e(p.state)}</p><h3>${e(p.name)}</h3></div><p>${e(p.description)}</p>${p.url ? `<a class="text-link" href="${p.url}" ${ext}>Repository ${arrow}<span class="sr-only"> for ${e(p.name)}</span></a>` : '<span class="development-label">In development</span>'}</article>`).join("")}</div><p class="empty-state" data-filter-empty hidden>No projects in this category yet.</p></section>`;
}

export function caseStudy(p) {
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return `<section class="page-hero case-hero wrap"><a class="back-link" href="/work/">← All work</a><p class="eyebrow">${e(p.company)} / ${e(p.status)}</p><h1>${e(p.heading)}</h1><p>${e(p.summary)}</p><dl class="case-meta"><div><dt>My role</dt><dd>${e(p.role)}</dd></div><div><dt>Period</dt><dd>${e(p.period)}</dd></div><div><dt>Key technologies</dt><dd>${p.stack.map(e).join(" · ")}</dd></div></dl></section><div class="wrap">${artwork(p, true)}</div><div class="case-layout wrap"><nav class="case-toc" aria-label="On this page"><span class="eyebrow">Inside the project</span><a href="#problem">The problem</a><a href="#contribution">What I built</a><a href="#decisions">Engineering decisions</a><a href="#outcome">Outcome & context</a></nav><article class="case-body"><section id="problem"><p class="eyebrow">01 / Context</p><h2>The problem.</h2><p>${e(p.problem)}</p></section><section id="contribution"><p class="eyebrow">02 / My contribution</p><h2>What I built.</h2><p>${e(p.contribution)}</p></section><section id="decisions"><p class="eyebrow">03 / Approach</p><h2>Engineering decisions.</h2><ol class="decisions">${p.decisions.map((d) => `<li><h3>${e(d[0])}</h3><p>${e(d[1])}</p></li>`).join("")}</ol></section><section id="outcome"><p class="eyebrow">04 / Outcome & context</p><h2>What this work shows.</h2><p>${e(p.outcome)}</p><p class="takeaway">${e(p.takeaway)}</p>${p.repo ? `<a class="button" href="${p.repo}" ${ext}>Explore the repository ${arrow}</a>` : '<p class="case-note">Industry project / The cover is a concept illustration. This case study focuses on my contribution and system-level decisions.</p>'}</section></article></div><section class="next-project wrap"><p class="eyebrow">Keep exploring</p><a href="/work/${next.slug}/"><h2>${e(next.name)}</h2><span aria-hidden="true">↗</span></a></section>`;
}

export function research() {
  return `<section class="page-hero wrap"><p class="eyebrow">Research & teaching</p><h1>Research with<br>engineering in mind.</h1><p>I study how intelligent systems behave under imperfect data, adversarial conditions, and controlled multimodal changes — and help others learn the foundations behind them.</p></section><section class="wrap research-projects" id="research"><article><p class="eyebrow">Ongoing research / Federated learning</p><h2>FedMed-Defender.</h2><p>Investigating Byzantine-robust federated aggregation under non-IID medical data and malicious client updates, using a PyTorch experimental framework.</p><p>My work includes implementing aggregation baselines, adversarial scenarios, and evaluation workflows while exploring robust statistics and update filtering.</p><p class="advisor">Research collaborator<br>Advisor: Dr. Mohammadreza Shokournia</p></article><article><p class="eyebrow">Ongoing research / Multimodal AI</p><h2>Vision-language models<br>& interpretability.</h2><p>Exploring how controlled image and question variations affect predictions and internal representations in vision-language models.</p><p>This involves exploratory multimodal experiments, hypothesis refinement, and evaluation design.</p><p class="advisor">Research collaborator<br>Advisor: Prof. Mostafa Tavassolipour</p></article></section>
<section class="section experience-section" id="teaching"><div class="wrap">${sectionTitle("02", "Teaching & leadership", "Making complex<br>ideas teachable.", "Academic leadership, practical coursework, and project-based instruction.")}<div class="teaching-list">${teaching.map((t) => `<article class="teaching-row"${t[0] === "Speech & Audio AI" ? ' id="course"' : ""}><div><p class="eyebrow">${e(t[2])}</p><h3>${e(t[0])}</h3><p class="role-date">${e(t[1])} / ${e(t[3])}</p></div><p>${e(t[4])}</p></article>`).join("")}</div><details class="earlier-teaching"><summary>More teaching experience <span aria-hidden="true">+</span></summary><div class="earlier-list">${earlierTeaching.map((t) => `<article><div><h3>${e(t[0])}</h3><p>${e(t[1])} · ${e(t[2])}</p></div><p>${e(t[3])}</p></article>`).join("")}</div></details></div></section>
<section class="section wrap">${sectionTitle("03", "Education & honors", "A strong foundation.")}<div class="education-head"><h3>University of Tehran</h3><p>B.Sc. studies in Computer Engineering</p></div><div class="proof education-proof"><div><strong>19.72 / 20</strong><p>Current cumulative GPA.</p></div><div><strong>8 semesters</strong><p>Ranked 1st in cohort for eight consecutive semesters.</p></div><div><strong>Silver medal</strong><p>Iranian National Physics Olympiad, 2021.</p></div></div><p class="education-note">National university entrance examination: top 0.6% nationwide.</p><div class="actions"><a class="text-link" href="mailto:${site.academicEmail}">Discuss research collaboration ${arrow}</a><a class="text-link" href="/assets/download/transcript.pdf" ${ext}>Academic transcript ${arrow}</a></div></section>`;
}

export function about() {
  return `<section class="page-hero wrap"><p class="eyebrow">About / ${site.name}</p><h1>Engineer, researcher,<br>and builder.</h1></section><section class="about-intro wrap"><div><p>I’m Mostafa Kermani Nia, an AI/ML engineer working across applied AI, retrieval, and data systems. My work connects model capabilities with the software, data, and operational workflows needed to make them useful in real products.</p><p>At ModAI and RamonAI, that includes visual retrieval, LLM-based data workflows, production web experiences, and mobile integration. Earlier product and backend work shaped how I approach reliability, technical ownership, and collaboration.</p><p>My academic background is in Computer Engineering at the University of Tehran, where I have ranked first in my cohort for eight consecutive semesters with a current GPA of 19.72/20. Alongside engineering, I conduct research and serve in machine-learning teaching and academic leadership roles.</p><p class="personal-note">Beyond engineering, classical guitar is another part of my life.</p><div class="actions">${cv}<a class="text-link" href="${site.linkedin}" ${ext}>LinkedIn profile ${arrow}</a></div></div><figure class="about-portrait"><img src="/images/mostafa-studio.webp" alt="Portrait of Mostafa Kermani Nia" width="1122" height="1402" loading="lazy"></figure></section>
<section class="section wrap" id="experience">${sectionTitle("01", "Industry contributions", "Experience through<br>the work itself.", "Open a company to explore responsibilities and role dates.")}<div>${jobs()}</div><details class="earlier-teaching"><summary>Earlier experience & community <span aria-hidden="true">+</span></summary><div class="earlier-list"><article><div><h3>Data Analyst</h3><p>Iran’s National Elites Foundation</p></div><p>Jun 2023 — Oct 2023</p></article><article><div><h3>Data Quality Analyst</h3><p>CADA</p></div><p>Jul 2022 — Oct 2022</p></article><article><div><h3>Official Member</h3><p>University of Tehran ACM Student Chapter</p></div><p>Jun 2024 — Oct 2025</p></article><article><div><h3>Educational Manager</h3><p>The Olympiads Club of Alborz</p></div><p>Sep 2021 — Apr 2022</p></article></div></details></section>
<section class="section stack-section"><div class="wrap">${sectionTitle("02", "Engineering stack", "Tools, with context.")}<div class="capabilities"><div class="capability"><span class="index">AI</span><h3>Models & retrieval</h3><p>PyTorch, TensorFlow, scikit-learn, LLM integration, RAG, embeddings, Whisper, Ollama, and evaluation workflows.</p></div><div class="capability"><span class="index">Data</span><h3>Data & operations</h3><p>Python, SQL, PostgreSQL, ClickHouse, Elasticsearch, pgvector, ETL, Docker, Linux, n8n, SQLite, and S3-compatible storage.</p></div><div class="capability"><span class="index">Web</span><h3>Product engineering</h3><p>React, Next.js, TypeScript, responsive UI/UX, Android WebView/PWA, and commerce integrations. Kafka: working familiarity.</p></div></div><p class="languages">Persian: native · English: professional working proficiency · Arabic: elementary</p></div></section>`;
}

export function notFound() {
  return `<section class="page-hero wrap not-found"><p class="eyebrow">404 / Page not found</p><h1>A different<br>kind of unknown.</h1><p>This page may have moved, or the address may be incomplete.</p><div class="actions"><a class="button" href="/">Back to home ${arrow}</a><a class="text-link" href="/work/">Explore my work ${arrow}</a></div></section>`;
}

export function document({
  path = "/",
  title,
  description = site.description,
  body,
  noindex = false,
}) {
  const current = path.startsWith("/work/")
    ? "work"
    : path.startsWith("/research/")
      ? "research"
      : path.startsWith("/about/")
        ? "about"
        : "home";
  const nav = [
    ["work", "/work/", "Work"],
    ["research", "/research/", "Research & teaching"],
    ["about", "/about/", "About"],
  ]
    .map(
      ([id, url, label]) =>
        `<a href="${url}"${current === id ? ' aria-current="page"' : ""}>${label}</a>`,
    )
    .join("");
  const fullTitle = title
    ? `${title} — ${site.name}`
    : `${site.name} — Applied AI & Data Systems`;
  const structured = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "AI/ML Engineer",
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "Applied AI",
      "Information retrieval",
      "Data engineering",
      "Computer vision",
      "Product engineering",
    ],
  };
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#f8f8f8"><title>${e(fullTitle)}</title><meta name="description" content="${e(description)}"><link rel="canonical" href="${site.url}${path}">${noindex ? '<meta name="robots" content="noindex">' : ""}<meta property="og:type" content="website"><meta property="og:title" content="${e(fullTitle)}"><meta property="og:description" content="${e(description)}"><meta property="og:url" content="${site.url}${path}"><meta property="og:image" content="${site.url}/images/social-card.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Mostafa Kermani Nia — Intelligence, engineered."><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="preload" href="/fonts/Manrope-variable.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="${stylesheetPath}"><script src="/assets/site.js" defer></script><script type="application/ld+json">${JSON.stringify(structured).replace(/</g, "\\u003c")}</script></head><body>
<a href="#main" class="skip-link">Skip to content</a><header class="site-header"><div class="wrap header-inner"><a class="brand" href="/" aria-label="Mostafa Kermani Nia, home">MK.</a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-navigation">Menu <span aria-hidden="true">+</span></button><nav id="main-navigation" class="main-navigation" aria-label="Main navigation">${nav}<a href="${site.cv}" download="Mostafa-Kermani-Nia-CV.pdf">CV <span aria-hidden="true">↓</span></a><a class="contact-link" href="#contact">Let’s talk ${arrow}</a></nav></div></header>
<main id="main">${body}</main>
<footer id="contact" class="site-footer"><div class="wrap"><p class="eyebrow">Have a meaningful problem?</p><h2>Let’s build<br>something useful.</h2><p class="footer-intro">For AI engineering roles, research collaboration, or product conversations, get in touch.</p><div class="email-row"><a class="email-link" href="mailto:${site.email}">${site.email} ${arrow}</a><button class="copy-email" type="button" data-copy-email="${site.email}" aria-label="Copy email address">Copy email</button><span class="copy-status" data-copy-status role="status"></span></div><div class="footer-bottom"><p>© 2026 ${site.name}</p><div class="social"><a href="${site.github}" ${ext}>GitHub ${arrow}</a><a href="${site.linkedin}" ${ext}>LinkedIn ${arrow}</a><a href="${site.cv}" download="Mostafa-Kermani-Nia-CV.pdf">CV ↓</a></div><p>Applied AI · Data systems · Software</p></div></div></footer></body></html>`;
}
