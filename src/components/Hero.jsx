import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown, HiArrowUpRight, HiOutlineDocumentText } from "react-icons/hi2";
import { SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import { resumeUrl } from "../constants/profile";
import { useReducedMotionPreference } from "../hooks/useReducedMotionPreference";

const profileLines = [
  <><span className='code-keyword'>const</span> engineer = {'{'}</>,
  <>  name: <span className='code-string'>"Muzamil Niaz"</span>,</>,
  <>  role: <span className='code-string'>"Software Engineer"</span>,</>,
  <>  experience: <span className='code-number'>"5+ years"</span>,</>,
  <>  stack: [</>,
  <>    <span className='code-string'>"React"</span>, <span className='code-string'>"Next.js"</span>,</>,
  <>    <span className='code-string'>"TypeScript"</span></>,
  <>  ],</>,
  <>  focus: <span className='code-string'>"AI & full-stack"</span>,</>,
  <>  remote: <span className='code-keyword'>true</span></>,
  <>{'}'};</>,
  <>&nbsp;</>,
  <><span className='code-comment'>// Good ideas deserve great software.</span></>,
  <><span className='code-keyword'>export default</span> engineer;</>,
];

const typingThemes = ["Product engineering", "AI-powered products", "Interface design", "Scalable web applications"];

const Hero = () => {
  const section = useRef(null);
  const [typingTheme, setTypingTheme] = useState(0);
  const reduced = useReducedMotionPreference();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  return (
    <section ref={section} id='home' className='hero-modern' aria-labelledby='hero-title'>
      <div className='hero-modern-grid' aria-hidden='true' />
      <div className='hero-modern-glow' aria-hidden='true' />
      <span className='hero-background-symbol' aria-hidden='true'>&lt;/&gt;</span>
      <motion.div className='hero-modern-inner' style={reduced ? { scale: 1, opacity: 1, y: 0 } : { scale, opacity, y }}>
        <div className='hero-modern-layout'>
          <motion.div className='hero-modern-copy' initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <p className='hero-availability'><span aria-hidden='true' />Open to full-time & contract roles</p>
            <h1 id='hero-title'><span className='hero-introduction'>Hi, I'm Muzamil.</span><span className='sr-only'>I build ideas into products, useful AI features, clean interfaces, and scalable web applications.</span><span className='hero-typewriter-slot' aria-hidden='true'>{reduced ? <span className='hero-typewriter'>I build ideas<br />into products.</span> : <TypeAnimation className='hero-typewriter' wrapper='span' sequence={[() => setTypingTheme(0), "I build ideas\ninto products.", 2800, () => setTypingTheme(1), "I build useful\nAI products.", 2600, () => setTypingTheme(2), "I craft clean\ninterfaces.", 2600, () => setTypingTheme(3), "I ship scalable\nweb apps.", 2600]} speed={62} deletionSpeed={80} repeat={Infinity} cursor />}</span></h1>
            <div className='hero-typing-caption' aria-hidden='true'><span><i />{typingThemes[reduced ? 0 : typingTheme]}</span><span className='hero-typing-indicators'>{typingThemes.map((theme, index) => <i key={theme} className={index === (reduced ? 0 : typingTheme) ? "is-active" : ""} />)}</span></div>
            <p className='hero-modern-description'>Senior Software Engineer building thoughtful web products with React, Next.js, and TypeScript. From AI-powered SaaS to enterprise platforms.</p>
            <div className='hero-modern-actions'>
              <a href='#projects' className='portfolio-button portfolio-button--primary'>View my work<HiArrowUpRight aria-hidden='true' /></a>
              <a href={resumeUrl} target='_blank' rel='noopener noreferrer' className='hero-resume-link'><HiOutlineDocumentText aria-hidden='true' />View resume<HiArrowUpRight aria-hidden='true' /></a>
            </div>
            <p className='hero-location'><span aria-hidden='true' className='hero-location-dot' />Multan, Pakistan<span aria-hidden='true'>/</span>Working worldwide<span aria-hidden='true'>/</span>UTC+5</p>
          </motion.div>
          <motion.figure className='hero-editor' initial={reduced ? false : { opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} aria-label='Muzamil Niaz: software engineer with over five years of experience in React, Next.js, TypeScript, AI, and full-stack development.'>
            <div className='hero-editor-bar' aria-hidden='true'><span className='preview-dots'><i /><i /><i /></span><span>muzamil.ts</span><span className='code-comment'>&lt;/&gt;</span></div>
            <div className='hero-editor-tab' aria-hidden='true'><span className='hero-ts-icon'>TS</span>developer.profile<span className='hero-file-dot' /></div>
            <ol className='hero-code' aria-hidden='true'>{profileLines.map((line, index) => <li key={index} className={index === [8, 8, 4, 3][reduced ? 0 : typingTheme] ? "hero-code-active" : ""}><span className='hero-line-number'>{index + 1}</span><code>{line}</code></li>)}</ol>
            <div className='hero-editor-status' aria-hidden='true'><span><span className='hero-status-dot' />Ready to collaborate</span><span>TypeScript</span></div>
            <figcaption className='hero-editor-caption'><span className='hero-editor-caption-icon' aria-hidden='true'>{'{ }'}</span><span>Code with intention.<br /><strong>Build with impact.</strong></span><span className='hero-cursor' aria-hidden='true'>_</span></figcaption>
          </motion.figure>
        </div>
        <div className='hero-modern-bottom'>
          <a href='#intro' className='hero-scroll-link'><span className='hero-scroll-icon'><HiArrowDown aria-hidden='true' /></span>Scroll to explore</a>
          <ul className='hero-stack' aria-label='Core technologies'><li><SiReact aria-hidden='true' />React</li><li><SiNextdotjs aria-hidden='true' />Next.js</li><li><SiTypescript aria-hidden='true' />TypeScript</li></ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
