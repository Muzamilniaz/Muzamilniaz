import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { HiArrowLeft, HiArrowRight, HiArrowUpRight, HiPause, HiPlay } from "react-icons/hi2";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { useReducedMotionPreference } from "../hooks/useReducedMotionPreference";

const SLIDE_INTERVAL = 6500;
const Quote = ({ item }) => <><span aria-hidden='true' className='quote-mark'>&ldquo;</span><blockquote className='testimonial-display'>{item.testimonial}</blockquote><figcaption className='mt-8 text-base font-semibold text-white'>{item.name}<span className='mt-2 block text-xs font-normal text-secondary'>{item.designation} / {item.company}</span></figcaption></>;

const Feedbacks = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const stage = useRef(null);
  const inView = useInView(stage, { amount: 0.2 });
  const reduced = useReducedMotionPreference();
  const playing = autoPlay && inView && pageVisible && !hovered && !focused && !reduced;
  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => { setDirection(1); setActive((current) => (current + 1) % testimonials.length); }, SLIDE_INTERVAL);
    return () => window.clearTimeout(timer);
  }, [active, playing]);
  const move = (offset) => { setDirection(offset); setActive((current) => (current + offset + testimonials.length) % testimonials.length); };
  const select = (index) => { setDirection(index >= active ? 1 : -1); setActive(index); };
  return (
    <div>
      <h2 className='sr-only'>Client testimonials</h2>
      <div className='editorial-rule'><span>05 / CLIENT NOTES</span><span>PEOPLE OVER PIXELS</span></div>
      <div ref={stage} className='testimonial-stage' role='region' aria-roledescription='carousel' aria-label='Client testimonials' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
        <div className='flex flex-wrap items-center justify-between gap-5'><p className='section-eyebrow !mb-0'><span aria-hidden='true' />A few words from the people I've worked with</p><div className='flex items-center gap-3'><span className='font-mono text-xs text-secondary'>{String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>{!reduced && <button className='quote-control' type='button' onClick={() => setAutoPlay((value) => !value)} aria-label={autoPlay ? 'Pause automatic testimonials' : 'Play automatic testimonials'}>{autoPlay ? <HiPause /> : <HiPlay />}</button>}<button className='quote-control' type='button' onClick={() => move(-1)} aria-label='Previous testimonial'><HiArrowLeft /></button><button className='quote-control' type='button' onClick={() => move(1)} aria-label='Next testimonial'><HiArrowRight /></button></div></div>
        <div className='testimonial-slide-progress' aria-hidden='true'>{playing && <motion.span key={active} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: SLIDE_INTERVAL / 1000, ease: 'linear' }} />}</div>
        <div className='testimonial-slides' aria-live={playing ? 'off' : 'polite'} aria-atomic='true'>
          <AnimatePresence initial={false} mode='wait' custom={direction}>
            <motion.figure key={active} custom={direction} className='testimonial-current-slide' initial={reduced ? false : { opacity: 0, x: direction * 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction * -28 }} transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }} aria-label={`${active + 1} of ${testimonials.length}`}><Quote item={testimonials[active]} /></motion.figure>
          </AnimatePresence>
          {testimonials.map((item) => <figure key={item.name} className='testimonial-size-reference' aria-hidden='true'><Quote item={item} /></figure>)}
        </div>
        <div className='testimonial-people' role='group' aria-label='Choose a testimonial'>
          {testimonials.map(({ name, company }, index) => <button key={name} type='button' aria-pressed={active === index} onClick={() => select(index)}><span className='quote-avatar' aria-hidden='true'>{name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span><span className='min-w-0'><span className='block text-sm font-semibold'>{name}</span><span className='mt-1 block text-xs font-normal text-secondary'>{company}</span></span></button>)}
        </div>
      </div>
      <a href='mailto:muzamilniaz.pro@gmail.com' className='portfolio-text-link mt-5'>Have a project in mind? Let's talk<HiArrowUpRight aria-hidden='true' /></a>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
