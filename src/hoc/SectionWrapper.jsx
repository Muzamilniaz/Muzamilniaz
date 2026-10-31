import { useReducedMotionPreference } from "../hooks/useReducedMotionPreference";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";

const SectionWrapper = (Component, idName) => function ScrollSection() {
  const section = useRef(null);
  const reducedMotion = useReducedMotionPreference();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "end start"] });
  const longSection = idName === "work" || idName === "projects";
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.78, 1], [0.86, 1, 1, longSection ? 1 : 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.55]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.78, 1], [90, 0, 0, longSection ? 0 : -45]);
  return (
    <section ref={section} id={idName || undefined} className={`${styles.padding} content-section max-w-7xl mx-auto relative z-0`}>
      <motion.div data-scroll-scene style={reducedMotion || idName === "projects" ? { scale: 1, opacity: 1, y: 0 } : { scale, opacity, y }} className='scroll-scene'>
        <Component />
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
