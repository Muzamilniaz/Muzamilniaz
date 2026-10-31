import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  aspnet,
  aspnetMvc,
  webApi,
  sqlServer,
  atruleLogo,
  techscopeLogo,
  softinfinityLogo,
  buchHospitalLogo,
} from "../assets";
import aigencyLogo from "../assets/company/aigency-logo.png";
import placedLogo from "../assets/company/placed-logo.svg";

export const navLinks = [
  {
    id: "intro",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Senior Software Engineer",
    icon: web,
  },
  {
    title: "React & Next.js Engineer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "AI-Powered SaaS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "ASP.NET",
    icon: aspnet,
  },
  {
    name: "ASP.NET MVC",
    icon: aspnetMvc,
  },
  {
    name: "Web API",
    icon: webApi,
  },
  {
    name: "SQL Server",
    icon: sqlServer,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer (Full Stack) · Remote",
    company_name: "Aigency Solutions",
    focus: "AI-powered product development",
    technologies: ["React", "Supabase", "Lovable AI"],
    icon: aigencyLogo,
    iconBg: "#ffffff",
    date: "Sep 2026 - Present",
    points: [
      "Build the Aladine web product remotely using React and Supabase for the backend, database, and authentication.",
      "Use Lovable AI to speed up UI scaffolding and iteration, then review and refine the generated code to production standards.",
      "Ship features in a small remote team, working asynchronously across time zones.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Buch International Hospital",
    focus: "Enterprise healthcare at scale",
    technologies: ["React", "TanStack Query", "shadcn/ui", "ASP.NET Core APIs"],
    company_link: "https://buchhospital.com",
    icon: buchHospitalLogo,
    iconBg: "#b1cf60",
    wideIcon: true,
    date: "Mar 2026 - Present",
    points: [
      "Lead the frontend of a hospital management system with 16+ clinical and administrative modules and 250+ screens, used across a 500+ bed hospital.",
      "Architected the React app around TanStack Query for server state, caching, and optimistic updates, keeping data in sync across departments.",
      "Built a reusable Tailwind CSS and shadcn/ui component library shared by all modules, speeding up screen delivery and keeping the UI consistent.",
      "Implemented role-based access control and protected routing for 10+ staff roles, including doctors, nurses, lab technicians, radiologists, pharmacists, HR, and admin.",
      "Worked with .NET backend engineers on API contracts, payload structure, and error handling for reliable clinical data flow.",
    ],
  },
  {
    title: "Full Stack Developer · Remote, Part-time",
    company_name: "placed.today, USA",
    focus: "Full-stack products for a US-based team",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    company_link: "https://placed.today",
    icon: placedLogo,
    iconBg: "#ffffff",
    wideIcon: true,
    date: "Jun 2023 - Aug 2024",
    points: [
      "Built full-stack features for multiple client projects using React, Next.js, Node.js, and MongoDB.",
      "Implemented JWT authentication, session management, and protected routes, and integrated third-party APIs with error handling and rate limiting.",
      "Improved Core Web Vitals and SEO through SSR and SSG strategies in Next.js.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Atrule Technologies Pvt Ltd",
    focus: "From intern to senior engineer",
    technologies: ["React", "Next.js", "Vue.js"],
    company_link: "https://atrule.com",
    icon: atruleLogo,
    iconBg: "#ffffff",
    date: "Feb 2021 - Oct 2025",
    points: [
      "Grew from Frontend Intern to Senior Software Engineer over 4+ years on enterprise e-commerce and SaaS platforms.",
      "Reduced bundle sizes by up to 40% on key projects using code splitting, lazy loading, and memoisation, improving Core Web Vitals.",
      "Built applications in React, Next.js, and Vue.js, and turned Figma and PSD designs into responsive, pixel-accurate interfaces.",
      "Mentored junior developers through code reviews and pair programming.",
    ],
  },

  {
    title: "Frontend Designer",
    company_name: "Soft Infinity Technology",
    focus: "The start of my frontend journey",
    technologies: ["Figma", "WordPress", "Responsive UI"],
    company_link: "https://softinfinitytechnology.com",
    icon: softinfinityLogo,
    iconBg: "#383E56",
    date: "Feb 2020 - Aug 2020",
    points: [
      "Designed responsive UI layouts in Figma and delivered them as cross-browser WordPress interfaces.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Muuzamil proved me wrong.",
    name: "Rohan Hossain",
    designation: "CEO",
    company: "Techscope",
  },
  {
    testimonial:
      "I've never met a software engineer who truly cares about their clients' success like Muzamil does.",
    name: "Chris Brown",
    designation: "COO",
    company: "Software Company",
  },
  {
    testimonial:
      "After Muzamil optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Zaeem Khan",
    designation: "CTO",
    company: "6 Enterprises",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
