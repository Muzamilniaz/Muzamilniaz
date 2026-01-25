import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, rgba(29, 24, 54, 0.95) 0%, rgba(15, 15, 40, 0.9) 100%)",
        color: "#fff",
        border: "1px solid rgba(145, 94, 255, 0.2)",
        borderRadius: "1rem",
        boxShadow: "0 8px 32px rgba(145, 94, 255, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        padding: "1.75rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(145, 94, 255, 0.4)" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: `0 0 20px ${experience.iconBg}80, inset 0 1px 1px rgba(255, 255, 255, 0.2)`,
        border: "2px solid rgba(145, 94, 255, 0.3)",
      }}
      icon={
        <motion.div 
          className='flex justify-center items-center w-full h-full'
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain drop-shadow-lg'
          />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className='text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 bg-gradient-to-r from-white to-[#915EFF] bg-clip-text text-transparent'>
          {experience.title}
        </h3>
        <p
          className='text-secondary text-sm sm:text-base font-semibold mb-4'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        
        <p className='text-xs sm:text-sm text-[#C1C2D3] font-light italic mb-4 border-l-2 border-[#915EFF] pl-3'>
          {experience.date}
        </p>

        <ul className='mt-4 space-y-2.5 sm:space-y-3'>
          {experience.points.map((point, index) => (
            <motion.li
              key={`experience-point-${index}`}
              className='text-[#C1C2D3] text-xs sm:text-sm leading-relaxed pl-4 relative'
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className='absolute left-0 top-1.5 w-1.5 h-1.5 bg-gradient-to-r from-[#915EFF] to-[#c946e6] rounded-full' />
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 right-1/4 w-96 h-96 bg-[#915EFF]/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-80 h-80 bg-[#c946e6]/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <motion.div 
        className='mt-12 sm:mt-16 md:mt-20 flex flex-col'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
