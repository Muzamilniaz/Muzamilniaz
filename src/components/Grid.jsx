import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { HiArrowUpRight, HiCheck, HiOutlineCodeBracket, HiOutlineEnvelope, HiOutlineGlobeAlt, HiPause, HiPlay } from "react-icons/hi2";
import { muzamilProfile } from "../assets";
import { SectionWrapper } from "../hoc";
import TechMark from "./TechMark";
import { useReducedMotionPreference } from "../hooks/useReducedMotionPreference";

const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Supabase', 'Tailwind CSS', 'ASP.NET Core'];
const StackRow = ({ duplicate = false }) => <ul className='intro-stack-group' aria-label={duplicate ? undefined : 'Technologies I build with'} aria-hidden={duplicate || undefined}>{stack.map(name => <li key={name}><TechMark name={name} /><span>{name}</span></li>)}</ul>;

const Grid = () => {
  const [copied, setCopied] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const section = useRef(null);
  const visible = useInView(section, { amount: 0.08 });
  const reduced = useReducedMotionPreference();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerX, { stiffness: 100, damping: 22 });
  const rotateY = useSpring(pointerY, { stiffness: 100, damping: 22 });
  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 3000);
    return () => window.clearTimeout(timer);
  }, [copied]);
  useEffect(() => { if (reduced || motionPaused) { pointerX.set(0); pointerY.set(0); } }, [reduced, motionPaused, pointerX, pointerY]);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText("muzamilniaz.pro@gmail.com"); setCopied(true); }
    catch { window.location.href = "mailto:muzamilniaz.pro@gmail.com"; }
  };
  const movePortrait = (event) => {
    if (reduced || motionPaused || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((0.5 - (event.clientY - rect.top) / rect.height) * 5);
    pointerY.set(((event.clientX - rect.left) / rect.width - 0.5) * 5);
  };
  const resetPortrait = () => { pointerX.set(0); pointerY.set(0); };
  return (
    <div ref={section} className={`intro-atlas ${visible && !motionPaused ? 'intro-atlas--active' : ''}`}>
      <div className='editorial-rule'><span>01 / MEET THE DEVELOPER</span><span>CRAFT. CURIOSITY. CODE.</span></div>
      <header className='intro-atlas-heading'><div><p className='section-eyebrow'><span aria-hidden='true' />The person behind the pixels</p><h2>Code is my craft.<br /><span>Building is my nature.</span></h2></div><p className='intro-heading-aside'><span aria-hidden='true'>&lt;/&gt;</span>Thoughtful by design.<br />Engineered with intent.</p></header>
      <div className='intro-atlas-grid'>
        <div className='intro-portrait-perspective' onPointerMove={movePortrait} onPointerLeave={resetPortrait}>
          <motion.figure className='intro-portrait-scene' style={{ rotateX: reduced ? 0 : rotateX, rotateY: reduced ? 0 : rotateY }}>
            <div className='intro-orbital-art' aria-hidden='true'><div /><div /><span>{'{ }'}</span></div>
            <div className='intro-portrait-topline'><span><i aria-hidden='true' />A BUILDER AT HEART</span><HiOutlineCodeBracket aria-hidden='true' /></div>
            <div className='intro-portrait-image'><img src={muzamilProfile} alt='Muzamil Niaz, with his development technologies illustrated around him' width={1254} height={1254} loading='lazy' /></div>
            <figcaption className='intro-portrait-identity'><span>Muzamil<span>.</span></span><div><HiOutlineGlobeAlt aria-hidden='true' /><span>Multan, Pakistan<br /><span>Connected worldwide / UTC+5</span></span></div></figcaption>
          </motion.figure>
        </div>
        <div className='intro-atlas-side'>
          <div className='intro-bio-tile'>
            <div className='intro-bio-topline'><span>about.me<span aria-hidden='true'>()</span></span><span className='intro-open-status'><i aria-hidden='true' />OPEN TO OPPORTUNITIES</span></div>
            <p className='intro-bio-hello'>HELLO, I'M</p><h3>Muzamil Niaz<span>.</span></h3><p className='intro-bio-role'>Senior Software Engineer</p>
            <p className='intro-bio-lead'>I connect the <span>way it looks</span><br className='intro-desktop-break' /> with the <span>way it works.</span></p>
            <p className='intro-bio-text'>From AI-powered SaaS to enterprise healthcare, I turn complex ideas into intuitive products. I care about thoughtful interfaces, clean architecture, and the details that make software feel right.</p>
            <div className='intro-bio-actions'><a href='#projects'>Explore my work<HiArrowUpRight aria-hidden='true' /></a><button type='button' onClick={copyEmail} aria-live='polite'>{copied ? <HiCheck aria-hidden='true' /> : <HiOutlineEnvelope aria-hidden='true' />}{copied ? 'Email copied' : 'Copy email'}</button></div>
          </div>
          <div className='intro-atlas-bottom'>
            <div className='intro-experience-tile'><span className='intro-small-label'>ALWAYS BUILDING</span><p><strong>5<span>+</span></strong><span>years of turning<br />ideas into products</span></p><div className='intro-experience-bars' aria-hidden='true'>{Array.from({length: 18}, (_, index) => <i key={index} style={{ '--bar-height': `${18 + ((index * 13) % 32)}px`, '--bar-delay': `${index * 0.08}s` }} />)}</div></div>
            <a href='#contact' className='intro-connect-tile'><span className='intro-connect-arrow'><HiArrowUpRight aria-hidden='true' /></span><span className='intro-small-label'>LET'S MAKE IT HAPPEN</span><span className='intro-connect-title'>Your idea.<br />Our next build.</span><span className='intro-connect-note'>Start a conversation<HiArrowUpRight aria-hidden='true' /></span></a>
          </div>
        </div>
      </div>
      <div className='intro-stack-ribbon'><div className='intro-ribbon-heading'><HiOutlineCodeBracket aria-hidden='true' /><span>MY EVERYDAY TOOLKIT</span>{!reduced && <button type='button' className='intro-motion-control' onClick={() => setMotionPaused(value => !value)} aria-label={motionPaused ? 'Play introduction motion' : 'Pause introduction motion'}>{motionPaused ? <HiPlay aria-hidden='true' /> : <HiPause aria-hidden='true' />}</button>}</div><div className='intro-stack-window'><div className='intro-stack-track'><StackRow /><StackRow duplicate /></div></div></div>
    </div>
  );
};

export default SectionWrapper(Grid, "intro");
