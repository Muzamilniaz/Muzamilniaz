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
  atruleLogo,
  techscopeLogo,
  softinfinityLogo,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "MERN Stack Developer",
    company_name: "Techscope (Remote)",
    icon: techscopeLogo,
    iconBg: "#000000",
    date: "June 2023 - Currently Working",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designing the layout, selecting color schemes, and choosing fonts.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing user interface components and implementing them using React.js concepts and workflows such as Redux, Flux, and Webpack.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "Atrule Technologies Pvt Ltd",
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
    title: "Frontend Designer",
    company_name: "Soft Infinity",
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
      "I've never met a web developer who truly cares about their clients' success like Muzamil does.",
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
