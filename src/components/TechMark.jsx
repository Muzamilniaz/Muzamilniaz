import { HiOutlineCodeBracket } from "react-icons/hi2";
import { SiNextdotjs, SiVuedotjs, SiSupabase, SiExpress, SiGraphql, SiMui, SiShadcnui, SiReactquery, SiJest, SiVitest, SiTestinglibrary, SiK6, SiVite, SiWebpack, SiEslint, SiGithubactions, SiVercel, SiNetlify, SiOpenai, SiGithubcopilot, SiJsonwebtokens } from "react-icons/si";
import react from "../assets/tech/reactjs.png";
import typescript from "../assets/tech/typescript.png";
import javascript from "../assets/tech/javascript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import node from "../assets/tech/nodejs.png";
import mongo from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";
import docker from "../assets/tech/docker.png";
import figma from "../assets/tech/figma.png";
import dotnet from "../assets/tech/aspnet.png";

const images = { react, typescript, javascript, html, css, redux, tailwind, node, mongo, git, docker, figma, dotnet };
const brands = {
  next: [SiNextdotjs, "#eee7fa"], vue: [SiVuedotjs, "#74cda3"], supabase: [SiSupabase, "#6bd2a2"], express: [SiExpress, "#ddd5ed"], graphql: [SiGraphql, "#e991cd"], mui: [SiMui, "#78baff"], shadcn: [SiShadcnui, "#eee7fa"], tanstack: [SiReactquery, "#f0a2a9"], jest: [SiJest, "#df94a4"], vitest: [SiVitest, "#b4cd73"], testing: [SiTestinglibrary, "#ecaaa2"], k6: [SiK6, "#bd9aff"], vite: [SiVite, "#c1a0ff"], webpack: [SiWebpack, "#8ac6ee"], eslint: [SiEslint, "#b9a3ff"], actions: [SiGithubactions, "#82b9ff"], vercel: [SiVercel, "#eee7fa"], netlify: [SiNetlify, "#6ccecf"], openai: [SiOpenai, "#b2d8bd"], copilot: [SiGithubcopilot, "#c9b9e6"], jwt: [SiJsonwebtokens, "#e29acb"],
};
const aliases = [["github actions", "actions"], ["github copilot", "copilot"], ["react testing", "testing"], ["tanstack", "tanstack"], ["shadcn", "shadcn"], ["asp.net", "dotnet"], [".net", "dotnet"], ["next", "next"], ["vue", "vue"], ["html", "html"], ["css", "css"], ["redux", "redux"], ["tailwind", "tailwind"], ["node", "node"], ["mongodb", "mongo"], ["openai", "openai"], ["jwt", "jwt"], ["react", "react"]];

const TechMark = ({ name }) => {
  const normalized = name.toLowerCase().replace(/\s*\(.*\)/, "");
  const key = aliases.find(([prefix]) => normalized.startsWith(prefix))?.[1] || normalized;
  if (images[key]) return <img className='tech-mark' src={images[key]} alt='' width='18' height='18' loading='lazy' decoding='async' />;
  const [Icon, color] = brands[key] || [HiOutlineCodeBracket, "#aa94c5"];
  return <Icon className='tech-mark' style={{ color }} aria-hidden='true' />;
};

export default TechMark;
