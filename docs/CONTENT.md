# Content maintenance

Edit structured records in `src/content.mjs`; edit shared page prose and layout in `src/render.mjs`. Rebuild to generate all page content and metadata.

## Profile facts

The author confirmed on 15 October 2026:

- Current cumulative GPA: **19.72/20**.
- Ranked **1st for eight consecutive semesters**.
- Computer Engineering studies at the University of Tehran; the site does not claim graduation or foreground remaining coursework.
- The Speech & Audio AI curriculum contains **35+ video lessons**, not 16. No enrollment link is shown without a verified public course destination.

## Employment and contribution conventions

- Company start dates and role start dates are separate. ModAI frontend/mobile starts June 2026; AI starts August 2026. RamonAI frontend starts May 2026; AI starts July 2026.
- ONTON is described as Full-Stack Engineer. Co-Founder & CEO applies to MOMIS, April 2025–September 2026.
- Technical leadership is described as responsibility where it accompanies the AI Software Engineer title. “Principal Engineer” is not carried over from the older portfolio.
- Pikan/Majara is a contract/project relationship; concurrent projects are not summed into additional years of employment.
- Research remains ongoing. Behavioral analytics and the related LLM search-evaluation work are identified as in development.

## Metrics and evidence

- VideoMap’s roughly 50K posts and 5K video candidates describe historical crawl scope. They do not mean all candidates matched or were ingested.
- The CLS improvement from approximately 1.2 to below 0.1 belongs to ModAI commerce engineering, not to this website’s measured performance.
- TA counts and student counts retain their specific course context.
- Do not add latency, accuracy, conversion, revenue, current availability, publication, or user-scale claims without a relevant source and clear attribution.

Source material includes the author-supplied CV, LinkedIn profile export, project READMEs, and direct factual corrections. The public site intentionally omits private LinkedIn analytics, third-party sidebar identities, operational endpoints, and private source code.

## Add a project

Give it a unique URL-safe `slug`, categories (`ai`, `data`, `product`), problem statement, contribution, engineering decisions, and outcome. Add a public repository URL only when it resolves to the specific project. `scripts/build.mjs` generates its route and sitemap entry automatically.

Replace the main CV at `public/assets/download/CV.pdf`. Older academic download paths remain available for link compatibility, but the visible CV actions all point to the primary file.

## Current transcript

The Research & teaching page links to `public/assets/download/transcript-2026-10.pdf`. It is a three-page landscape PDF assembled from the three screenshots supplied by Mostafa on 15 October 2026, not a digitally issued university PDF. Course names, grades and academic information are preserved as screenshot images. Student number, national ID and date of birth are burned out of the public image copy before PDF embedding. The original uploads remain unchanged and are not published in the repository. The legacy `transcript.pdf` path contains the same current public copy. Use a new dated filename for future replacements so existing browser caches do not serve an outdated transcript.
