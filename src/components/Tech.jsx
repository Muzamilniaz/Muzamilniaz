import { lazy, Suspense, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { HiArrowDownTray, HiArrowUpRight, HiChevronDown, HiOutlineBeaker, HiOutlineBolt, HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineCubeTransparent, HiOutlineServerStack, HiOutlineSwatch } from "react-icons/hi2";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";
import TechMark from "./TechMark";
import { education, languages, skillGroups } from "../constants/profile";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));
const categoryIcons = [HiOutlineCodeBracket, HiOutlineCubeTransparent, HiOutlineSwatch, HiOutlineServerStack, HiOutlineBolt, HiOutlineBeaker, HiOutlineCpuChip];
const categoryDescriptions = [
  "Interfaces that make complex products feel simple.",
  "Predictable state and reliable data, from request to render.",
  "Responsive, accessible design with a consistent visual language.",
  "Secure connections between interfaces, services, and data.",
  "Smarter rendering and loading for faster experiences.",
  "Confidence in every change, from a unit test to a release.",
  "Practical AI features and dependable delivery workflows.",
];
const coreStack = [{ name: "React" }, { name: "Next.js" }, { name: "TypeScript" }];

const SkillDirectory = () => {
  const [openCategory, setOpenCategory] = useState(0);
  return (
        <div className='skills-disciplines'>
          <div className='skills-disciplines-heading'><span>Areas of expertise</span><span>{skillGroups.length} disciplines</span></div>
          {skillGroups.map(({ title, skills }, index) => {
            const Icon = categoryIcons[index];
            const isOpen = index === openCategory;
            return <div key={title} className={`skill-discipline ${isOpen ? "skill-discipline--open" : ""}`}><h3><button type='button' id={`skill-trigger-${index}`} aria-expanded={isOpen} aria-controls={`skill-panel-${index}`} onClick={() => setOpenCategory(isOpen ? null : index)}><span className='skill-discipline-icon'><Icon aria-hidden='true' /></span><span className='skill-discipline-title'>{title}</span><span className='skill-discipline-count'>{String(index + 1).padStart(2,"0")}</span><HiChevronDown className='skill-discipline-chevron' aria-hidden='true' /></button></h3><div id={`skill-panel-${index}`} role='region' aria-labelledby={`skill-trigger-${index}`} hidden={!isOpen} className='skill-discipline-panel'><p>{categoryDescriptions[index]}</p><ul>{skills.map((skill) => <li key={skill}><TechMark name={skill} /><span>{skill}</span></li>)}</ul></div></div>;
          })}
        </div>
  );
};

const Tech = () => {
  const workspace = useRef(null);
  const loaded = useInView(workspace, { once: true, margin: "200px" });
  const visible = useInView(workspace, { amount: 0.1 });
  return (
    <div className='skills-studio'>
      <div className='editorial-rule mb-9'><span>03 / THE TOOLKIT</span><span>BEHIND THE BUILD</span></div>
      <SectionHeading eyebrow='My engineering toolkit' title={<>Skills & <span className='project-heading-accent'>expertise</span></>} description='The tools behind the work. A practical stack for building polished interfaces, reliable systems, and useful AI features.' />
      <div className='skills-core-strip'>{coreStack.map(({ name }) => <div key={name}><TechMark name={name} /><span>{name}</span><span className='skills-core-label'>CORE STACK</span></div>)}</div>
      <div className='skills-studio-layout'>
        <div className='skills-workspace'>
          <div className='preview-chrome' aria-hidden='true'><span className='preview-dots'><i /><i /><i /></span><span>workspace / engineer</span><span className='preview-code'>&lt;/&gt;</span></div>
          <div ref={workspace} className='skills-computer-preview'>
            <div className='workspace-orbit workspace-orbit--one' aria-hidden='true' /><div className='workspace-orbit workspace-orbit--two' aria-hidden='true' />
            {loaded ? <Suspense fallback={<div className='workspace-loading' aria-label='Loading 3D workstation'>&lt;/&gt;</div>}><ComputersCanvas visible={visible} /></Suspense> : <div className='workspace-loading' aria-hidden='true'>&lt;/&gt;</div>}
          </div>
          <div className='skills-workspace-caption'><p className='section-eyebrow !mb-2'><span aria-hidden='true' />The developer's desk</p><h3>Good tools.<br /><span>Thoughtful engineering.</span></h3><p>From the first component to the final release, every choice serves the product.</p></div>
          <a href='/Muzamil_Niaz_Resume.docx' download className='skills-resume-link'>Explore my full resume<HiArrowDownTray aria-hidden='true' /></a>
        </div>
        <SkillDirectory />
      </div>
      <div className='skills-studio-footer'><details><summary>Education & languages<HiArrowUpRight aria-hidden='true' /></summary><ul>{education.map((item) => <li key={item}>{item}</li>)}<li>{languages}</li></ul></details><p><span aria-hidden='true' />Open to remote opportunities / UTC+5</p></div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
