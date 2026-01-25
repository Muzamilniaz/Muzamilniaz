import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[90px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'> Muzamil</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            <TypeAnimation
              sequence={[
                "I Turn Ideas into Digital Products",
2000,
"I Design & Build Beautiful Interfaces",
2000,
"I Help Brands Grow Online",
2000,
"I Create High-Performance Web Apps",
2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

        <ComputersCanvas />
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#intro'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
