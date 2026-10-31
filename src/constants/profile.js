export const resumeUrl =
  "https://docs.google.com/document/d/16UIlvvWIGc8XzVNT8EJ6n5QLppLpqZk5/edit?usp=sharing";

export const profileSummary =
  "I'm a Senior Software Engineer with 5+ years building production React, Next.js, and TypeScript applications, including AI-powered SaaS, CRM, and e-commerce products. I've delivered complex enterprise applications, including a hospital management system with 16+ modules and 250+ screens. I work with REST APIs, .NET and Node.js backends, authentication, and web performance, and have experience collaborating remotely with a US-based team.";

export const availability =
  "Based in Multan, Pakistan (UTC+5). Open to remote roles worldwide and available for full-time or contract work.";

export const skillGroups = [
  { title: "Frontend", skills: ["React", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "Vue.js", "HTML5", "CSS3"] },
  { title: "State & data", skills: ["TanStack Query", "Redux Toolkit", "Zustand", "Context API", "REST", "GraphQL"] },
  { title: "UI & design", skills: ["Tailwind CSS", "shadcn/ui", "MUI", "Responsive design", "Accessibility (a11y)", "Figma"] },
  { title: "Backend & authentication", skills: ["Node.js", "Express", "MongoDB", "Supabase", "ASP.NET Core (API integration)", "JWT", "OAuth 2.0", "RBAC"] },
  { title: "Performance", skills: ["SSR", "SSG", "ISR", "Code splitting", "Lazy loading", "Core Web Vitals", "Lighthouse"] },
  { title: "Testing & tooling", skills: ["Jest", "Vitest", "React Testing Library", "Playwright", "k6", "Vite", "Webpack", "ESLint"] },
  { title: "DevOps & AI", skills: ["Git", "GitHub Actions", "Docker", "Vercel", "Netlify", "OpenAI API", "Cursor", "GitHub Copilot", "Lovable"] },
];

export const experienceSummary = `
- Aigency Solutions: Software Engineer (Full Stack), remote, Sep 2026–Present. Builds Aladine with React and Supabase for backend, database, and authentication. Uses Lovable AI for UI scaffolding, reviews generated code, and ships asynchronously across time zones.
- Buch International Hospital, Multan: Senior Software Engineer, Mar 2026–Present. Leads the frontend of a hospital management system with 16+ modules and 250+ screens for a 500+ bed hospital. Uses React, TanStack Query, Tailwind CSS, shadcn/ui, RBAC for 10+ staff roles, and ASP.NET Core APIs.
- placed.today, USA: Full Stack Developer, remote and part-time, Jun 2023–Aug 2024. Built React, Next.js, Node.js, and MongoDB features, JWT authentication, third-party API integrations, and SSR/SSG performance improvements.
- Atrule Technologies, Multan: Senior Software Engineer, Feb 2021–Oct 2025. Grew from Frontend Intern to Senior Software Engineer, reduced bundle sizes by up to 40% on key projects, built React/Next.js/Vue.js applications, and mentored junior developers.
- Soft Infinity Technology, Multan: Frontend Designer, Feb 2020–Aug 2020. Designed responsive Figma layouts and delivered cross-browser WordPress interfaces.
`;

export const education = [
  "BS Computer Science, University of Southern Punjab, Multan — 2019",
  "Full Stack Web Development Certificate, EVS, Rawalpindi — 2019",
];

export const languages = "English: Professional working proficiency (C1) · Urdu: Native";

export const skillsSummary = skillGroups
  .map(({ title, skills }) => `${title}: ${skills.join(", ")}`)
  .join("\n");
