import { useReducedMotionPreference } from "../hooks/useReducedMotionPreference";
﻿import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { experiences } from "../constants";
import { placed, atrule } from "../assets";
import hospitalVisual from "../assets/web-dev/bihhis.png";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

const companyVisuals = {
  "Buch International Hospital": hospitalVisual,
  "placed.today, USA": placed,
  "Atrule Technologies Pvt Ltd": atrule,
};

const CareerShowcase = ({ experience, index }) => {
  const track = useRef(null);
  const panel = useRef(null);
  const [canPin, setCanPin] = useState(false);
  const reduced = useReducedMotionPreference();
  const { scrollYProgress } = useScroll({ target: track, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.91, 1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.9, 1], [0.45, 1, 1, 0.6]);
  const imageScale = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [1.1, 1, 1, 1.04]);
  const visual = companyVisuals[experience.company_name];
  useLayoutEffect(() => {
    const measure = () => setCanPin(window.innerWidth >= 1024 && panel.current.offsetHeight <= window.innerHeight - 128);
    const observer = new ResizeObserver(measure);
    observer.observe(panel.current);
    window.addEventListener("resize", measure);
    measure();
    return () => { observer.disconnect(); window.removeEventListener("resize", measure); };
  }, []);
  return (
    <article ref={track} className={`career-track ${canPin && !reduced ? "career-track--pinned" : ""}`}>
      <motion.div ref={panel} data-career-scene className='career-showcase' style={reduced ? { scale: 1, opacity: 1 } : { scale, opacity }}>
        <div className='career-visual'>
          <div className='preview-chrome' aria-hidden='true'><span className='preview-dots'><i /><i /><i /></span><span>career / {String(index + 1).padStart(2, "0")}</span><span className='preview-code'>&lt;/&gt;</span></div>
          {visual ? <div className='career-visual-image'><motion.img src={visual} alt={`${experience.company_name} product showcase`} loading='lazy' decoding='async' className='h-full w-full object-contain' style={{ scale: reduced ? 1 : imageScale }} /></div> : <div className='career-brand-visual'><span className='career-brand-watermark' aria-hidden='true'>&lt;/&gt;</span><img src={experience.icon} alt={`${experience.company_name} logo`} className='career-brand-logo' style={{ backgroundColor: experience.iconBg }} loading='lazy' /><p className='mt-7 text-xs uppercase tracking-[0.15em] text-secondary'>{experience.company_name}</p><p className='mt-3 text-3xl font-semibold tracking-tight text-white'>{index === 0 ? "Aladine" : "Frontend foundations"}</p><p className='mt-3 max-w-xs text-sm leading-7 text-secondary'>{experience.focus}</p><div className='mt-6 flex flex-wrap gap-2'>{experience.technologies.map((item) => <span key={item} className='stack-tag'>{item}</span>)}</div></div>}
          <div className='career-visual-footer'><span>{experience.company_name}</span><span>{String(index + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}</span></div>
        </div>
        <div className='career-copy'>
          <div className='mb-4 flex flex-wrap items-center gap-3'><span className='font-mono text-xs text-[#cbb6ff]'>{experience.date}</span>{experience.date.includes("Present") && <span className='career-current'><span aria-hidden='true' />Current role</span>}</div>
          <h3>{experience.title}</h3>
          {experience.company_link ? <a href={experience.company_link} target='_blank' rel='noopener noreferrer' className='portfolio-text-link mt-3'>{experience.company_name}<HiArrowUpRight aria-hidden='true' /></a> : <p className='mt-3 text-sm font-medium text-[#c9b4ff]'>{experience.company_name}</p>}
          <ul className='mt-5 space-y-3'>{experience.points.map((point) => <li key={point} className='flex items-start gap-3 text-[13px] leading-7 text-secondary'><span className='mt-3 h-1 w-1 shrink-0 rounded-full bg-[#a987ff]' aria-hidden='true' /><span>{point}</span></li>)}</ul>
          <div className='mt-6 flex flex-wrap gap-x-3 gap-y-2 border-t border-[#915EFF]/20 pt-5'>{experience.technologies.map((item) => <span className='project-tech' key={item}>{item}</span>)}</div>
        </div>
      </motion.div>
    </article>
  );
};

const Experience = () => (
  <div>
    <div className='editorial-rule mb-9'><span>02 / THE JOURNEY</span><span>EXPERIENCE IN ACTION</span></div>
    <SectionHeading eyebrow='The teams behind the work' title='Work Experience' description='The products, people, and challenges that shaped my journey. Scroll through each chapter.' />
    <div className='career-showcases'>
      {experiences.map((experience, index) => <CareerShowcase key={experience.company_name} experience={experience} index={index} />)}
    </div>
  </div>
);

export default SectionWrapper(Experience, "work");
