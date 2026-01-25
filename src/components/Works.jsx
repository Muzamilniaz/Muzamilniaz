import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsByCategory } from "../constants/data";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Works = () => {
  const [activeTab, setActiveTab] = useState("webDevelopment");
  const [expandedCategories, setExpandedCategories] = useState({});

  const categories = [
    { id: "webDevelopment", label: "Web Development", icon: "💻" },
    { id: "landingPages", label: "Landing Pages", icon: "🚀" },
    { id: "uiuxDesigns", label: "UI/UX Designs", icon: "🎨" },
    { id: "ecommerce", label: "Ecommerce", icon: "🛍️" },
  ];

  const currentProjects = projectsByCategory[activeTab] || [];
  const isExpanded = expandedCategories[activeTab] || false;
  const projectsPerPage = 3;
  const displayedProjects = isExpanded ? currentProjects : currentProjects.slice(0, projectsPerPage);
  const hasMoreProjects = currentProjects.length > projectsPerPage;

  const toggleExpanded = () => {
    setExpandedCategories({
      ...expandedCategories,
      [activeTab]: !isExpanded,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Header - Section Title and Description */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="w-full flex"
      >
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </motion.div>

      {/* Tab Navigation - Modern Animated Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-start gap-2 xs:gap-2 sm:gap-3 md:gap-4 mt-16 mb-16 pb-6 border-b border-[#915EFF]/20"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            type="button"
            className="relative group outline-none"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Background pill for active tab */}
            {activeTab === category.id && (
              <>
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-gradient-to-r from-[#915EFF] via-[#c946e6] to-[#915EFF] opacity-90 rounded-xl sm:rounded-2xl"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#915EFF] via-[#c946e6] to-[#915EFF] opacity-30 blur-lg rounded-xl sm:rounded-2xl"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </> 
            )}

            {/* Content Container */}
            <div
              className={`relative px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3 rounded-xl sm:rounded-2xl font-semibold text-xs xs:text-sm sm:text-base transition-all duration-300 flex items-center gap-2 overflow-hidden backdrop-blur-sm z-10 ${
                activeTab === category.id
                  ? "text-white shadow-lg shadow-[#915EFF]/50"
                  : "text-gray-400 hover:text-white hover:shadow-md hover:shadow-[#915EFF]/20 border border-[#915EFF]/20 group-hover:border-[#915EFF]/50"
              }`}
            >
              {/* Icon */}
              <span className="text-base xs:text-base sm:text-lg inline-block group-hover:scale-110 transition-transform">
                {category.icon}
              </span>
              {/* Label */}
              <span>{category.label}</span>
            </div>

            {/* Animated underline for inactive tabs */}
            {activeTab !== category.id && (
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-[#c946e6] rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeTab}
        className={`w-full grid gap-7 sm:gap-8 md:gap-9 ${
          activeTab === "landingPages" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {displayedProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className={`group relative bg-tertiary rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#915EFF]/40 cursor-pointer h-full flex flex-col border border-[#915EFF]/10 hover:border-[#915EFF]/30 ${
              activeTab === "landingPages" ? "flex-col" : ""
            }`}
            whileHover={{ y: -8 }}
          >
            {/* Gradient Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/20 via-transparent to-[#c946e6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Animated background elements */}
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-[#915EFF]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{ scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Content */}
            <div className={`relative z-10 flex flex-col h-full`}>
              {/* Image Section */}
              <div className={`relative w-full ${
                activeTab === "landingPages" 
                  ? "h-56 sm:h-64 md:h-72" 
                  : "h-44 sm:h-52"
              } overflow-hidden rounded-t-2xl sm:rounded-t-3xl flex-shrink-0 shadow-lg shadow-black/40`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.15 }}
                />
                {/* Image Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-3 py-2 bg-gradient-to-r from-[#915EFF] to-[#c946e6] text-white rounded-lg font-semibold text-xs sm:text-sm text-center hover:shadow-lg hover:shadow-[#915EFF]/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Project →
                  </motion.a>
                </motion.div>
              </div>

              {/* Title Row */}
              <div className="px-5 sm:px-6 md:px-7 pt-5 sm:pt-6 md:pt-7 pb-2 border-b border-[#915EFF]/10">
                <h3 className="text-white font-bold text-base sm:text-lg md:text-xl line-clamp-2 group-hover:text-[#915EFF] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Description Row */}
              <div className="px-5 sm:px-6 md:px-7 py-4 sm:py-5 md:py-6 border-b border-[#915EFF]/10 flex-grow">
                <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Row */}
              <div className="px-5 sm:px-6 md:px-7 py-4 sm:py-5 md:py-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={`${project.id}-${idx}`}
                      className="text-xs px-2.5 py-1 bg-gradient-to-r from-[#915EFF]/10 to-[#c946e6]/10 text-[#915EFF] rounded-lg border border-[#915EFF]/30 group-hover:border-[#915EFF]/60 transition-all duration-300 whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Border effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-[#915EFF]/20 group-hover:border-[#915EFF]/50 transition-colors duration-300"
              style={{ zIndex: 1 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* See More Button */}
      {hasMoreProjects && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center mt-12"
        >
          <motion.button
            onClick={toggleExpanded}
            className="px-10 py-4 bg-gradient-to-r from-[#915EFF] via-[#c946e6] to-[#915EFF] text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-[#915EFF]/60 transition-all duration-300 border border-[#915EFF]/30"
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(145, 94, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              {isExpanded ? "← See Less" : "See More Projects →"}
            </span>
          </motion.button>
        </motion.div>
      )}

      {/* Empty State */}
      {currentProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center py-12"
        >
          <p className="text-secondary text-lg">
            No projects available in this category yet.
          </p>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
