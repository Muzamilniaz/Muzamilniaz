import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import { cn } from "../../lib/utils";
import MagicButton from "./MagicButtons";

// Enhanced background animation wrapper
const BackgroundGradientAnimation = ({ children }) => (
  <div className="relative">
    <motion.div
      className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#915EFF] via-[#c946e6] to-[#915EFF] opacity-70 blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    {children}
  </div>
);

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-6 mx-auto p-4", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, id, title, description, img, imgClassName, titleClassName, spareImg, }) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);
  const [playConfetti, setPlayConfetti] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: null,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  const handleCopy = () => {
    const text = "muzamilniaz.pro@gmail.com";
    try {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setPlayConfetti(true);
      setTimeout(() => setPlayConfetti(false), 3000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <motion.div 
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/card transition-all duration-500",
        "bg-gradient-to-br from-[rgba(4,7,29,0.95)] via-[rgba(15,15,40,0.9)] to-[rgba(4,7,29,0.95)]",
        "border border-white/[0.1] hover:border-white/[0.3]",
        "backdrop-blur-md shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#915EFF]/20",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
    >

      
      {/* Gradient border glow on hover */}
      <motion.div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, #915EFF 0%, #c946e6 50%, #915EFF 100%)',
          filter: 'blur(0.5px)',
        }}
      />

      {/* Radial glow effect on top */}
      <motion.div
        className="absolute -top-32 -right-32 w-64 h-64 opacity-0 group-hover:opacity-100 pointer-events-none rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(145,94,255,0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dynamic animated orbs */}
      <motion.div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-[#915EFF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-48 h-48 bg-[#c946e6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.9, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>



      {/* image layer */}
      {img && (
        <div className="absolute inset-0 w-full h-full">
          <motion.img 
            src={img} 
            alt={String(title) || "grid-item"} 
            className={cn(imgClassName, "w-full h-full object-cover object-center opacity-50 group-hover:opacity-70 transition-opacity duration-500")} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-[#04071d] via-[#04071d]/50 to-transparent group-hover:from-[#915EFF]/20 group-hover:via-transparent" 
            transition={{ duration: 0.5 }}
          />
        </div>
      )}

      {/* spare image bottom-right */}
      {spareImg && (
        <div className="absolute right-0 bottom-0 w-44 opacity-80 pointer-events-none">
          <img src={spareImg} alt="spare" className="w-full h-full object-contain" />
        </div>
      )}

      {/* special background for id 2 - enhanced glassmorphism */}
      {id === 2 && (
        <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#915EFF]/20 via-[#c946e6]/15 to-[#915EFF]/20 backdrop-blur-md"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(145,94,255,0.2) 0%, rgba(201,70,230,0.15) 50%, rgba(145,94,255,0.2) 100%)',
                'linear-gradient(135deg, rgba(201,70,230,0.2) 0%, rgba(145,94,255,0.15) 50%, rgba(201,70,230,0.2) 100%)',
                'linear-gradient(135deg, rgba(145,94,255,0.2) 0%, rgba(201,70,230,0.15) 50%, rgba(145,94,255,0.2) 100%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -left-10 top-1/4 w-56 h-56 rounded-full blur-3xl" 
            style={{ background: "radial-gradient(circle, rgba(145,94,255,0.3), transparent)" }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -right-12 bottom-1/4 w-48 h-48 rounded-full blur-3xl" 
            style={{ background: "radial-gradient(circle, rgba(201,70,230,0.25), transparent)" }}
            animate={{
              x: [0, -25, 0],
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Floating light particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#915EFF] rounded-full"
              style={{
                left: `${30 + i * 20}%`,
                top: `${30 + i * 15}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      )}

      {/* main content */}
      <div className={cn(titleClassName, "relative p-5 sm:p-6 md:p-7 flex flex-col gap-3 sm:gap-4 h-full justify-between z-10")}>
        {description && (
          <motion.div 
            className="text-xs sm:text-sm text-[#C1C2D3] font-light tracking-wide group-hover:text-white/90 transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {description}
          </motion.div>
        )}
        
        <motion.div 
          className="text-base sm:text-lg lg:text-3xl font-bold text-white leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#915EFF] group-hover:bg-clip-text transition-all duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.div>

        {/* Tech Stack for id 3 */}
        {id === 3 && (
          <div className="flex gap-2 sm:gap-3 absolute -right-2 sm:-right-3 lg:-right-2 top-10 sm:top-12">
            <div className="flex flex-col gap-2 sm:gap-3">
              {leftLists.map((item, i) => (
                <motion.span 
                  key={i} 
                  className="py-2 px-3 rounded-lg bg-gradient-to-r from-[#915EFF]/10 to-[#c946e6]/10 border border-[#915EFF]/30 text-xs text-white/90 font-medium backdrop-blur-md hover:border-[#915EFF]/70 hover:from-[#915EFF]/20 hover:to-[#c946e6]/20 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              {rightLists.map((item, i) => (
                <motion.span 
                  key={i} 
                  className="py-2 px-3 rounded-lg bg-gradient-to-r from-[#915EFF]/10 to-[#c946e6]/10 border border-[#915EFF]/30 text-xs text-white/90 font-medium backdrop-blur-md hover:border-[#915EFF]/70 hover:from-[#915EFF]/20 hover:to-[#c946e6]/20 transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* Copy email button for id 6 */}
        {id === 6 && (
          <motion.div 
            className="mt-2 sm:mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="absolute -bottom-8 sm:-bottom-12 right-0 pointer-events-none"
              animate={{ scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Lottie 
                options={defaultOptions} 
                height={120} 
                width={220} 
                isStopped={!playConfetti} 
                isPaused={false} 
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <MagicButton 
                title={copied ? "Email is Copied!" : "Copy my email address"} 
                icon={<IoCopyOutline />} 
                position="left" 
                handleClick={handleCopy} 
                otherClasses="bg-gradient-to-r from-[#915EFF] to-[#c946e6] shadow-lg shadow-[#915EFF]/50 hover:shadow-[#915EFF]/80 transition-all duration-300"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};


export default BentoGrid;