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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "React.js Engineer",
    icon: mobile,
  },
  {
    title: "ASP.NET Engineer",
    icon: backend,
  },
  {
    title: "API Engineer",
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
    title: "Software Engineer",
    company_name: "Buch International Hospital",
    company_link: "https://buchhospital.com",
    icon: buchHospitalLogo,
    iconBg: "#ffffff",
    date: "Mar 2026 - Present",
    points: [
      "Lead software engineering for a comprehensive Hospital Management System (HMS) spanning 16+ clinical and administrative modules including Patient Management, Scheduling, Billing, Laboratory, Radiology, Pharmacy, Inventory, HR & Payroll, Blood Bank, and E-Claims.",
      "Architect a scalable React.js application with TanStack Query for server-state management, delivering real-time data synchronization across 250+ screens while consuming .NET (ASP.NET Core) REST APIs.",
      "Built a reusable, component-based UI library with Tailwind CSS, significantly reducing per-screen development time and enforcing visual consistency across all 16 modules.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Techscope (Remote)",
    company_link: "https://techscope.org",
    icon: techscopeLogo,
    iconBg: "#000000",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designing the layout, selecting color schemes, and choosing fonts.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing user interface components and implementing them using React.js concepts and workflows such as Redux, Flux, and Webpack.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Atrule Technologies Pvt Ltd",
    company_link: "https://atrule.com",
    icon: atruleLogo,
    iconBg: "#ffffff",
    date: "February 2021 - October 2025 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Software Engineer",
    company_name: "Soft Infinity",
    company_link: "https://softinfinitytechnology.com",
    icon: softinfinityLogo,
    iconBg: "#383E56",
    date: "Feb 2020 - Aug 2020",
    points: [
      "Designing and implementing user interface components for web applications.",
      "Collaborating with UX designers to create intuitive and visually appealing designs.",
      "Optimizing components for maximum performance across a vast array of web-capable devices and browsers.",
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
