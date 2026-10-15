export const site = {
  name: "Mostafa Kermani Nia",
  title: "AI/ML Engineer · Applied AI & Data Systems",
  url: "https://mostafa-kermaninia.github.io",
  email: "mostafakermaninia@gmail.com",
  academicEmail: "kermaninia@ut.ac.ir",
  github: "https://github.com/mostafa-kermaninia",
  linkedin: "https://www.linkedin.com/in/mostafakermaninia/",
  cv: "/assets/download/CV.pdf",
  updated: "2026-10-15",
  description:
    "Applied AI, visual search, LLM pipelines and data systems — with the product engineering to bring them into the real world.",
};

export const projects = [
  {
    slug: "videomap",
    name: "VideoMap",
    company: "ModAI",
    number: "01",
    categories: ["ai", "data"],
    label: "Applied AI / Data pipelines",
    status: "Industry project",
    period: "2026",
    heading: "From merchant videos to product-linked media.",
    summary:
      "LLM-based extraction, merchant-scoped catalog matching, and media delivery in one operational pipeline.",
    role: "Pipeline architecture & implementation",
    stack: ["Python", "LLMs", "PostgreSQL", "S3-compatible storage", "SQLite"],
    art: "video",
    artTitle: ["VIDEO", "TO PRODUCT."],
    artNote: "Content → Extraction → Catalog",
    problem:
      "Merchant videos contain useful product information, but captions, media formats, and catalog references are inconsistent. Turning that content into a commerce capability requires catalog matching, media delivery, and a recoverable processing workflow.",
    contribution:
      "I designed and implemented an end-to-end workflow that ingests merchant social content, identifies video candidates, extracts SKUs with an LLM, matches them to the merchant’s existing products, and delivers media through object storage and backend APIs.",
    decisions: [
      [
        "Scope the match to the merchant",
        "A product code is not globally unique. Matching within the merchant’s catalog preserves the context needed to identify the correct product.",
      ],
      [
        "Make progress persistent",
        "Persistent processing states, incremental crawling, and structured reports support recovery and make repeated runs inspectable.",
      ],
      [
        "Represent real catalog complexity",
        "Multi-product posts and duplicate SKUs need explicit association rules rather than a one-video, one-product assumption.",
      ],
      [
        "Connect the complete delivery path",
        "Media ingestion, S3-compatible storage, backend callbacks, scheduling, and reporting are part of the operational system.",
      ],
    ],
    outcome:
      "Historical crawls covered roughly 50,000 posts and 5,000 video candidates. These figures describe processing scope, not the number of successful catalog matches or ingested videos.",
    takeaway:
      "The work connects LLM extraction with the integration, data integrity, and recovery decisions required by a real product.",
  },
  {
    slug: "visual-search",
    name: "Visual Search",
    company: "RamonAI",
    number: "02",
    categories: ["ai"],
    label: "Computer vision / Retrieval",
    status: "Industry project",
    period: "2026",
    heading: "From a screenshot to a product match.",
    summary:
      "Connecting social-media imagery to real commerce catalogs through image representations and vector retrieval.",
    role: "Visual-search design & implementation",
    stack: ["Computer vision", "Embeddings", "Elasticsearch", "Backend APIs"],
    art: "search",
    artTitle: ["SEE IT.", "FIND IT."],
    artNote: "Image regions → Vector retrieval",
    problem:
      "Social-media screenshots rarely arrive as isolated, catalog-ready product photographs. The system needs to identify a useful image region and connect it with products in a merchant’s catalog.",
    contribution:
      "I built an automated visual-search pipeline combining dynamic screenshot-region extraction, image representations, and Elasticsearch dense-vector retrieval. I also worked on descriptive-search embeddings and vector-search efficiency.",
    decisions: [
      [
        "Prepare the visual input",
        "Dynamic cropping separates the relevant screenshot region from surrounding interface and unrelated content.",
      ],
      [
        "Retrieve against a real catalog",
        "Image representations connect to Elasticsearch vector retrieval on commerce data.",
      ],
      [
        "Integrate the complete workflow",
        "Backend APIs make the matching capability usable inside the product.",
      ],
      [
        "Build evaluation separately",
        "A related LLM-based API is in development to classify fully relevant, partially relevant, irrelevant, and no-result retrieval outcomes.",
      ],
    ],
    outcome:
      "The visual-search workflow was implemented for production commerce data, connecting social-media images to catalog retrieval. Related search-quality evaluation and business-opportunity analytics remain in development.",
    takeaway:
      "Computer vision becomes useful when input preparation, representations, retrieval, and application behavior work together.",
  },
  {
    slug: "grantia",
    name: "Grantia",
    company: "Pikan Ventures AB",
    number: "03",
    categories: ["ai", "data"],
    label: "RAG / Data engineering",
    status: "Industry project",
    period: "Nov 2025 — Jun 2026",
    heading: "Matching grants with rules, retrieval, and reasoning.",
    summary:
      "Explainable grant matching, combining eligibility rules with semantic retrieval and LLM reasoning.",
    role: "AI Software Engineer · Technical leadership",
    stack: ["Python", "PostgreSQL", "pgvector", "Gemini", "n8n"],
    art: "grantia",
    artTitle: ["MATCH.", "EXPLAIN."],
    artNote: "Rules + Retrieval + Reasoning",
    problem:
      "European grant information is fragmented. Useful matching requires deterministic eligibility checks and a contextual understanding of the organization seeking funding.",
    contribution:
      "I architected a multi-stage matching system using SQL eligibility filters, pgvector semantic retrieval, and Gemini reasoning. I built Python/n8n ingestion and normalization workflows, with administration and monitoring tooling.",
    decisions: [
      [
        "Keep eligibility deterministic",
        "Hard requirements belong in explicit SQL filters, where they can be inspected and maintained.",
      ],
      [
        "Retrieve meaningful candidates",
        "Semantic similarity connects a business context with potentially relevant grant records.",
      ],
      [
        "Explain recommendations",
        "LLM reasoning adds context and explanations rather than replacing every pipeline stage.",
      ],
      [
        "Own the ingestion workflow",
        "Cleaning, normalization, execution logs, and failure reporting support the data foundation.",
      ],
    ],
    outcome:
      "The work brought fragmented grant information into an integrated discovery and matching workflow, with structured data, eligibility rules, semantic retrieval, contextual explanations, and operational monitoring.",
    takeaway:
      "Rules, retrieval, and generative reasoning solve different parts of the matching problem.",
  },
  {
    slug: "orbit",
    name: "ORBIT",
    company: "Independent project",
    number: "04",
    categories: ["ai", "product"],
    label: "Voice AI / Agents",
    status: "Public repository",
    period: "2026",
    heading: "A local-first voice agent, built to be inspected.",
    summary:
      "Speech, local reasoning, tools, and memory — connected in a documented Python application.",
    role: "Independent implementation",
    stack: [
      "Python",
      "faster-whisper",
      "Ollama / Qwen",
      "Tool calling",
      "Local memory",
    ],
    art: "orbit",
    artTitle: ["VOICE.", "TO ACTION."],
    artNote: "Listen / Reason / Act / Respond",
    repo: "https://github.com/mostafa-kermaninia/Orbit-Local-AI-Agent",
    problem:
      "A voice agent needs more than speech and language models. Audio state, tool boundaries, memory, application integration, and feedback shape the interaction.",
    contribution:
      "I built an inspectable stack with on-device ASR, local inference, tool selection, speech synthesis, memory, desktop automation, telemetry, and action controls. The public repository includes architecture documentation and tests.",
    decisions: [
      [
        "Choose deliberate audio behavior",
        "Default half-duplex audio gates the microphone during speech synthesis so the agent does not transcribe its own output.",
      ],
      [
        "Separate orchestration from tools",
        "Configuration, memory, tools, audio, and interface responsibilities live in distinct modules.",
      ],
      [
        "Make failures visible",
        "Tool outcomes feed back into the interaction instead of unconditional success messages.",
      ],
      [
        "Define local-first",
        "Inference runs locally, while web search and some external tools still need internet connectivity.",
      ],
    ],
    outcome:
      "A public project exposing implementation, architecture, configuration, and limitations. Desktop automation currently targets Windows and depends on installed applications and model configuration.",
    takeaway:
      "An inspectable implementation makes it possible to discuss behavior beyond the model’s response.",
  },
  {
    slug: "commerce-experience",
    name: "Commerce Experience",
    company: "ModAI & RamonAI",
    number: "05",
    categories: ["product"],
    label: "Frontend / Mobile / UX",
    status: "Industry work",
    period: "2026",
    heading: "From interface friction to a better commerce experience.",
    summary:
      "Production web interfaces, Core Web Vitals, responsive UX, and a shipped hybrid Android application.",
    role: "Senior Frontend & Mobile Engineering",
    stack: ["Next.js", "React", "TypeScript", "Android WebView", "PWA"],
    art: "commerce",
    artTitle: ["LESS FRICTION.", "MORE FLOW."],
    artNote: "Web / Mobile / Product experience",
    problem:
      "Commerce experiences combine dynamic media, discovery, checkout, account states, and mobile platform behavior. Interface and loading decisions create noticeable friction across that journey.",
    contribution:
      "At ModAI, I improved dynamic media loading and DOM behavior, reducing CLS from approximately 1.2 to below 0.1, and built and shipped the Android application through Cafe Bazaar and Myket. At RamonAI, I redesigned and implemented major web surfaces and conversational-commerce interfaces.",
    decisions: [
      [
        "Stabilize dynamic content",
        "At ModAI, media loading and infinite-scroll discovery were addressed alongside ISR caching and lazy loading.",
      ],
      [
        "Handle mobile as a platform",
        "Android work included Persian input, camera/gallery access, navigation history, and differences between web and app execution.",
      ],
      [
        "Design for user context",
        "At RamonAI, responsive drawers and feature visibility were adapted to different user states and plans.",
      ],
      [
        "Complete the commerce details",
        "Billing, discounts, invoices, product cards, and order tracking were implemented in production SaaS and chat experiences.",
      ],
    ],
    outcome:
      "At ModAI, the work delivered a measured layout stability improvement and Android releases through Cafe Bazaar and Myket. At RamonAI, it delivered redesigned frontend surfaces and production commerce flows.",
    takeaway:
      "Product engineering follows the experience across rendering, interaction, business flows, and platform integration.",
  },
  {
    slug: "majara",
    name: "Majara",
    company: "Pikan Ventures AB",
    number: "06",
    categories: ["ai", "data", "product"],
    label: "AI workflows / Orchestration",
    status: "Industry project",
    period: "Nov 2025 — Jun 2026",
    heading: "From fragmented events to coordinated workflows.",
    summary:
      "AI-assisted extraction, normalization, and operational automation for event information.",
    role: "AI Software Engineer · Technical leadership",
    stack: ["Python", "n8n", "PostgreSQL / Supabase", "Gemini"],
    art: "majara",
    artTitle: ["EVENTS.", "ALIGNED."],
    artNote: "Collect / Structure / Coordinate",
    problem:
      "Event information arrives from heterogeneous sources and needs consistent structure before it can support discovery, publishing, and operations.",
    contribution:
      "I engineered Python/n8n workflows with LLM-assisted extraction, translation, cleaning, and normalization, and designed PostgreSQL-backed validation and application integration. I led development from requirements through deployment.",
    decisions: [
      [
        "Create a consistent data layer",
        "Heterogeneous information is normalized into structured records with explicit validation.",
      ],
      [
        "Choose tools by responsibility",
        "Custom application logic and n8n operational orchestration serve different needs and are used together.",
      ],
      [
        "Include operational visibility",
        "Execution logs, failure alerts, monitoring, and scheduled workflows are part of the delivery path.",
      ],
    ],
    outcome:
      "An integrated event-information and automation system for a Swedish-market project. This describes delivered engineering work rather than claiming a currently available public service.",
    takeaway:
      "Useful automation joins data preparation, application logic, and operations.",
  },
  {
    slug: "momis",
    name: "MOMIS Studio",
    company: "Co-founded product",
    number: "07",
    categories: ["product"],
    label: "Product / Technical leadership",
    status: "Product initiative",
    period: "Apr 2025 — Sep 2026",
    heading: "Building games, communities, and the systems behind them.",
    summary:
      "Game systems and backend workflows, technical direction, and distributed-team delivery.",
    role: "Co-Founder & CEO · Technical leadership",
    stack: [
      "Telegram Mini Apps",
      "Backend systems",
      "TON integration",
      "Heuristic anti-cheat",
    ],
    art: "momis",
    artTitle: ["PLAY.", "BUILD. REPEAT."],
    artNote: "Product / Engineering / Community",
    problem:
      "A competitive gaming product needs engineering, fair-play mechanisms, iteration, and contributor coordination — not just individual games.",
    contribution:
      "I co-founded MOMIS and led product strategy and technical development, including early mini-games, gameplay systems, backend integration, and heuristic anti-cheat. I coordinated a distributed team and translated roadmaps into releases.",
    decisions: [
      [
        "Connect behavior with integrity",
        "Gameplay timing, behavioral rules, and anomaly signals were used to identify suspicious activity.",
      ],
      [
        "Follow the product lifecycle",
        "Work spanned concepts, architecture, implementation, testing, releases, and community feedback.",
      ],
      [
        "Coordinate distributed delivery",
        "Technical planning and stakeholder coordination connected contributor work with product priorities.",
      ],
    ],
    outcome:
      "Hands-on technical ownership across product development and team coordination: early games, backend integration, fair-play mechanisms, and roadmap execution with distributed contributors.",
    takeaway:
      "Leadership and engineering connect through concrete decisions and completed product work.",
  },
];

export const additionalProjects = [
  {
    name: "Behavioral Intelligence",
    company: "ModAI",
    categories: ["ai", "data"],
    state: "In development",
    description:
      "User- and device-level profiles, analytical metrics, dashboards, and APIs across ClickHouse, PostgreSQL, and Elasticsearch.",
  },
  {
    name: "Mathematics Misconception Pipeline",
    company: "Independent project",
    categories: ["data"],
    state: "Public repository",
    description:
      "Reproducible educational-text ETL, relational storage, normalization, and feature engineering.",
    url: "https://github.com/mostafa-kermaninia/Math-Misconception-Analytics-Pipeline",
  },
  {
    name: "Speech Processing ML Toolkit",
    company: "Independent project",
    categories: ["ai"],
    state: "Public repository",
    description:
      "Audio cleaning, MFCC and prosodic features, and speaker-related classification experiments.",
    url: "https://github.com/mostafa-kermaninia/speech-processing-toolkit",
  },
];

export const experience = [
  {
    company: "ModAI",
    context: "AI-powered fashion discovery & commerce",
    period: "Jun 2026 — Present",
    roles: [
      [
        "Senior Applied AI & Data Engineer",
        "Aug 2026 — Present",
        "Video-to-product intelligence, catalog enrichment, and behavioral analytics in development.",
      ],
      [
        "Senior Front-End & Mobile Engineer",
        "Jun 2026 — Present",
        "Core Web Vitals, commerce UX, and the Android WebView/PWA app released through Cafe Bazaar and Myket.",
      ],
    ],
  },
  {
    company: "RamonAI",
    context: "Intelligent commerce & visual search",
    period: "May 2026 — Present",
    roles: [
      [
        "Applied AI Engineer",
        "Jul 2026 — Present",
        "Visual retrieval, embeddings, and search-quality evaluation in development.",
      ],
      [
        "Senior Frontend Engineer",
        "May 2026 — Present",
        "Responsive SaaS interfaces, navigation, and conversational-commerce flows.",
      ],
    ],
  },
  {
    company: "Grantia",
    context: "European grant discovery & matching",
    period: "Nov 2025 — Jun 2026",
    roles: [
      [
        "AI Software Engineer · Technical leadership",
        "Nov 2025 — Jun 2026",
        "Grant ingestion, explainable matching, React administration, and monitoring tooling.",
      ],
    ],
  },
  {
    company: "Pikan / Majara",
    context: "Swedish-market event information & automation",
    period: "Nov 2025 — Jun 2026",
    roles: [
      [
        "AI Software Engineer · Technical leadership",
        "Nov 2025 — Jun 2026",
        "Python/n8n ETL, extraction, validation, orchestration, and application integration.",
      ],
    ],
  },
  {
    company: "MOMIS Studio",
    context: "Social gaming & product engineering",
    period: "Apr 2025 — Sep 2026",
    roles: [
      [
        "Co-Founder & CEO",
        "Apr 2025 — Sep 2026",
        "Product strategy, technical leadership, gameplay systems, backend work, and distributed-team coordination.",
      ],
    ],
  },
  {
    company: "ONTON",
    context: "TON-based community platform",
    period: "Nov 2025 — Jun 2026",
    roles: [
      [
        "Full-Stack Engineer",
        "Nov 2025 — Jun 2026",
        "Frontend and application logic, transaction verification, wallet authentication, and payment/reward reliability.",
      ],
    ],
  },
];

export const teaching = [
  [
    "Machine Learning · B.Sc. & M.Sc.",
    "Head Teaching Assistant",
    "University of Tehran",
    "Sep 2026 — Present",
    "Coordination, assignment design, project mentoring, and assessment under Prof. Mostafa Tavassolipour and Prof. Mohammadreza Abolghasemi Dehaqani.",
  ],
  [
    "Data Science",
    "Head Teaching Assistant",
    "University of Tehran",
    "Sep 2025 — Sep 2026",
    "Co-led 20+ TAs supporting 100+ students across statistical learning, ML/DL, SQL, LLMs, and data systems.",
  ],
  [
    "Probability & Statistics",
    "Head Teaching Assistant",
    "University of Tehran",
    "Jul 2025 — Jun 2026",
    "Led 33 TAs supporting 180+ students; coordinated assignments, assessment, and academic operations.",
  ],
  [
    "Speech & Audio AI",
    "Course Instructor",
    "Maktabkhooneh",
    "Apr 2026 — Present",
    "A project-based curriculum with 35+ video lessons: DSP, speech ML, ASR, TTS, speaker verification, and an integrated voice-agent project.",
  ],
];

export const earlierTeaching = [
  [
    "Natural Language Processing",
    "Teaching Assistant",
    "K. N. Toosi University of Technology",
    "Sep 2026 — Present",
  ],
  [
    "Data Science & Simulation",
    "Teaching Assistant · Doctoral coursework",
    "Tehran University of Medical Sciences",
    "Sep 2026 — Present",
  ],
  [
    "Computer Vision",
    "Teaching Assistant",
    "University of Tehran",
    "Sep 2025 — Aug 2026",
  ],
  [
    "Artificial Intelligence",
    "Teaching Assistant",
    "University of Tehran",
    "Sep 2025 — Aug 2026",
  ],
  [
    "Database Design",
    "Teaching Assistant",
    "University of Tehran",
    "Sep 2025 — Jul 2026",
  ],
  [
    "Computer Architecture Laboratory",
    "Laboratory Teaching Assistant",
    "University of Tehran",
    "Sep 2025 — Jul 2026",
  ],
  [
    "Machine Learning · M.Sc.",
    "Teaching Assistant",
    "University of Tehran",
    "Jan 2025 — Jun 2026",
  ],
  [
    "Speech & Audio Signal Processing",
    "Teaching Assistant · Recorded project material",
    "Bu-Ali Sina University",
    "Sep 2025 — Aug 2026",
  ],
  [
    "Formal Languages & Automata",
    "Teaching Assistant",
    "University of Tehran",
    "Sep 2024 — Jun 2026",
  ],
  [
    "Probability & Statistics",
    "Teaching Assistant",
    "University of Tehran",
    "Jul 2024 — Jan 2025",
  ],
  [
    "Introduction to Computing & Programming",
    "Laboratory Teaching Assistant",
    "University of Tehran",
    "Sep 2023 — Jan 2025",
  ],
  [
    "Fundamentals of Programming",
    "Teaching Assistant",
    "University of Tehran",
    "Jan 2024 — Jul 2024",
  ],
  [
    "Discrete Mathematics",
    "Teaching Assistant",
    "University of Tehran",
    "Jan 2024 — Jul 2024",
  ],
  ["Physics Olympiad", "Teacher", "Sampad", "Nov 2021 — Dec 2022"],
];

export const capabilities = [
  [
    "Applied AI & retrieval",
    "LLM integration, structured extraction, embeddings, visual search, RAG, and evaluation workflows.",
    "VideoMap · RamonAI · Grantia",
  ],
  [
    "Data & production systems",
    "Python, SQL, PostgreSQL, ClickHouse, Elasticsearch, ETL, APIs, and operational workflows.",
    "VideoMap · Grantia · Behavioral Intelligence",
  ],
  [
    "Product engineering & ownership",
    "Frontend architecture, responsive UX, mobile integration, implementation, and distributed-team delivery.",
    "ModAI · RamonAI · MOMIS",
  ],
];
