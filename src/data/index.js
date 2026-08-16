import {
  scriptcraftHero,
  heroImg,
  aporiaHeroCard,
  duoHeroCard,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const experiences = [
  {
    title: "UI / UX Design",
    company_name: "Primary Focus",
    date: "2024 - Present",
    details: [
      "Designing user interfaces, wireframes, and interactive prototypes using <span style='color: white;'>Figma</span>.",
      "Creating visual assets, layouts, and graphic elements using <span style='color: white;'>Adobe Photoshop</span>.",
      "Focusing on user-centered design principles, responsive layout structures, and intuitive workflows.",
    ],
  },
  {
    title: "Web Development",
    company_name: "Frontend & Full-Stack Fundamentals",
    date: "Coursework & Practice",
    details: [
      "Building responsive user interfaces with <span style='color: white;'>HTML, CSS, Tailwind CSS, JavaScript, and React</span>.",
      "Completed full-stack web development coursework covering <span style='color: white;'>Node.js, Express, and database fundamentals</span>.",
      "Applying web development knowledge to design practical, developer-ready UI systems.",
    ],
  },
  {
    title: "3D & Creative Coding",
    company_name: "Exploration & Learning",
    date: "Ongoing",
    details: [
      "Creating 3D models and stylized visual assets inside <span style='color: white;'>Blender</span>.",
      "Building interactive 3D web scenes using <span style='color: white;'>Three.js</span> and currently learning <span style='color: white;'>React Three Fiber (R3F)</span>.",
    ],
  },
  {
    title: "B.Sc. Mathematics",
    company_name: "Govt. Degree College Ghumarwin (HPU)",
    date: "Undergraduate",
    details: [
      "Pursuing a Bachelor of Science with a major in <span style='color: white;'>Mathematics</span> and minors in <span style='color: white;'>Physics and Computer Science</span>.",
      "Applying structured <span style='color: white;'>analytical problem-solving</span> and mathematical logic to technical design challenges.",
    ],
  },
  {
    title: "B.A. Philosophy",
    company_name: "IGNOU",
    date: "Distance Learning",
    details: [
      "Studying formal systems, <span style='color: white;'>logical argumentation</span>, and epistemological frameworks.",
      "Applying philosophical analysis to software reasoning, interface design, and <span style='color: white;'>argument modeling</span>.",
    ],
  },
];

export const portfolio = [
  {
    name: "ScriptCraft — Document Engine",
    quote:
      "How might we design a handwriting synthesizer that mirrors authentic physical document structure rather than applying superficial text filters?",
    description:
      "A privacy-first handwriting engine designed for academic assignments. Features automatic two-zone margin routing, dual-ink palettes, deterministic procedural baseline jitter, and built-in PDF/ZIP export pipelines.",
    focus: "Spatial & Systems UI",
    tools: "HTML5 Canvas / GSAP",
    methods: "Two-Zone Margin Routing",
    outcome: "100% Client-Side",
    image: scriptcraftHero,
    link: "https://ankit-kumar1907.github.io/ScriptCraft-Studio-UX-Engineering-Case-Study/",
  },
  {
    name: "Latt — Subscription Manager",
    quote:
      "How might we redesign the opaque subscription management interfaces of subscription trackers to prevent payment failures?",
    description:
      "A comprehensive case study analyzing the friction points in current subscription trackers. I conducted a heuristic evaluation to identify \"dark patterns\" and designed a transparent, user-centric interface.",
    focus: "UX Audit & Redesign",
    tools: "Figma",
    methods: "Heuristic Eval",
    outcome: "Reduced Friction",
    image: heroImg,
    link: "https://ankit-kumar1907.github.io/LATT-case-study/",
  },
  {
    name: "Aporia — AI Logic Interface",
    quote:
      "Can we design an AI that prioritizes logical integrity over user satisfaction?",
    description:
      "A research-driven interface that replaces linear chat with argument trees. It uses \"Epistemic Neutrality\" to visually flag logical gaps without judging the user.",
    focus: "AI Epistemics",
    tools: "Figma, CSS",
    methods: "Argument Mapping",
    outcome: "DAG Visualizer",
    image: aporiaHeroCard,
    link: "https://ankit-kumar1907.github.io/Aporia-Case-Study/",
  },
  {
    name: "Duolingo — UX Redesign",
    quote:
      "Why does a system designed for engagement create barriers to acquisition?",
    description:
      "How might Duolingo's engagement-focused interface affect vocabulary comprehension for adult learners? An evaluation addressing usability gaps and retention.",
    focus: "UX & Usability",
    tools: "Figma, HTML",
    methods: "Heuristic Eval",
    outcome: "Comprehension Flow",
    image: duoHeroCard,
    link: "https://ankit-kumar1907.github.io/UX-Duolingo-CaseStudy/",
  },
];