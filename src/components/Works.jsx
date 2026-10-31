import { useLayoutEffect, useRef, useState } from "react";
import { HiArrowDown, HiArrowUp, HiArrowUpRight, HiChevronDown, HiOutlineCodeBracket, HiOutlineComputerDesktop, HiOutlineShoppingBag, HiOutlineSwatch } from "react-icons/hi2";
import { projectsByCategory } from "../constants/data";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";
import { scrollToTarget } from "../utils/scroll";
import TechMark from "./TechMark";

const categories = [
  { id: "webDevelopment", label: "Web applications", icon: HiOutlineCodeBracket },
  { id: "landingPages", label: "Landing pages", icon: HiOutlineComputerDesktop },
  { id: "uiuxDesigns", label: "UI / UX design", icon: HiOutlineSwatch },
  { id: "ecommerce", label: "E-commerce", icon: HiOutlineShoppingBag },
];

const ProjectCard = ({ project, index }) => {
  const [readMore, setReadMore] = useState(false);
  const hasLink = /^https?:\/\//.test(project.source_code_link) && !/^https:\/\/github\.com\/?$/.test(project.source_code_link);
  const destination = hasLink ? project.source_code_link : "mailto:muzamilniaz.pro@gmail.com?subject=" + encodeURIComponent(`Tell me about ${project.title}`);
  const linkProps = { href: destination, target: hasLink ? "_blank" : undefined, rel: hasLink ? "noopener noreferrer" : undefined };
  const descriptionId = `project-${project.id}-description`;
  return (
    <article className='gallery-card'>
      <a {...linkProps} className='gallery-image' aria-label={`${hasLink ? "View" : "Ask about"} ${project.title}`}>
        <img src={project.image} alt={project.title} loading='lazy' decoding='async' className={`h-full w-full ${project.imageFit === "contain" ? "object-contain" : "object-cover"}`} />
        <span className='project-open' aria-hidden='true'><HiArrowUpRight /></span>
      </a>
      <div className='gallery-copy'>
        <div className='mb-3 flex items-center gap-3'><span className='font-mono text-[10px] tracking-[0.15em] text-[#a987ff]'>PROJECT {String(index + 1).padStart(2, "0")}</span><span className='h-px flex-1 bg-[#915EFF]/20' /></div>
        <h3><a {...linkProps}>{project.title}</a></h3>
        <p id={descriptionId} className={`gallery-description ${readMore ? "" : "gallery-description--clamped"}`}>{project.description}</p>
        {project.description.length > 170 && <button className='gallery-readmore' type='button' aria-expanded={readMore} aria-controls={descriptionId} onClick={() => setReadMore((value) => !value)}>{readMore ? "Read less" : "Read more"}</button>}
        <ul className='mt-5 flex flex-wrap gap-2'>{project.tags.map((tag) => <li key={tag} className='stack-tag project-stack-tag'><TechMark name={tag} />{tag}</li>)}</ul>
        <a {...linkProps} className='portfolio-text-link mt-auto border-t border-[#915EFF]/10 pt-4'>{hasLink ? "View project" : "Discuss this project"}<HiArrowUpRight aria-hidden='true' /></a>
      </div>
    </article>
  );
};

const Works = () => {
  const [activeTab, setActiveTab] = useState("webDevelopment");
  const [expanded, setExpanded] = useState({});
  const returnToStart = useRef(false);
  const tabButtons = useRef([]);
  const projects = projectsByCategory[activeTab];
  const category = categories.find((item) => item.id === activeTab);
  const CategoryIcon = category.icon;
  const totalProjects = Object.values(projectsByCategory).reduce((total, items) => total + items.length, 0);
  const displayed = expanded[activeTab] ? projects : projects.slice(0, 4);
  useLayoutEffect(() => {
    if (!returnToStart.current) return;
    returnToStart.current = false;
    const frame = window.requestAnimationFrame(() => scrollToTarget("project-browser-start"));
    return () => window.cancelAnimationFrame(frame);
  }, [activeTab, expanded]);
  const selectCategory = (id) => {
    if (id === activeTab) return;
    returnToStart.current = true;
    setActiveTab(id);
  };
  const handleTabKey = (event, index) => {
    let next;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % categories.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + categories.length) % categories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = categories.length - 1;
    else return;
    event.preventDefault();
    selectCategory(categories[next].id);
    tabButtons.current[next]?.focus({ preventScroll: true });
  };
  const toggleExpanded = () => {
    returnToStart.current = !!expanded[activeTab];
    setExpanded((previous) => ({ ...previous, [activeTab]: !previous[activeTab] }));
  };
  return (
    <div>
      <div className='editorial-rule mb-9'><span>04 / MY PROJECTS</span><span>FROM CONCEPT TO CODE</span></div>
      <SectionHeading eyebrow="Things I've brought to life" title={<>My <span className='project-heading-accent'>projects</span></>} description="Products and experiences I've built across web development, UI/UX, and e-commerce. Pick a category to explore my work." />
      <div id='project-browser-start' className='gallery-start' aria-hidden='true' />
      <div className='gallery-browser'>
        <aside className='project-category-rail' aria-label='Browse my projects'>
          <p className='category-rail-eyebrow'>The collection</p>
          <p className='category-rail-total'>{totalProjects}<span>projects</span></p>
          <div role='tablist' aria-label='Project categories' aria-orientation='vertical' className='category-rail-tabs'>
            {categories.map(({ id, label, icon: Icon }, index) => <button ref={(node) => { tabButtons.current[index] = node; }} key={id} id={`project-tab-${id}`} role='tab' type='button' aria-selected={activeTab === id} tabIndex={activeTab === id ? 0 : -1} aria-controls='project-gallery' onClick={() => selectCategory(id)} onKeyDown={(event) => handleTabKey(event, index)}><Icon aria-hidden='true' /><span>{label}</span><span className='category-count'>{projectsByCategory[id].length}</span></button>)}
          </div>
          <p className='category-rail-note'>Different challenges.<br />One thoughtful approach.</p>
        </aside>
        <div className='gallery-results'>
          <div className='mobile-category-switcher'>
            <CategoryIcon aria-hidden='true' className='mobile-category-icon' />
            <label htmlFor='project-category-picker' className='mobile-category-field'><span>Browse category</span><span className='mobile-select-wrap'><select id='project-category-picker' value={activeTab} onChange={(event) => selectCategory(event.target.value)}>{categories.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}</select><HiChevronDown aria-hidden='true' /></span></label>
            <span className='mobile-category-count'>{projects.length}</span>
          </div>
          <div className='gallery-category-summary' aria-live='polite'><p>{category.label}</p><span>{displayed.length} of {projects.length} projects</span></div>
          <div id='project-gallery' role='tabpanel' aria-labelledby={`project-tab-${activeTab}`} key={activeTab} className='project-gallery-grid'>
            {displayed.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
          {projects.length > 4 && <div className='mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row'><p className='text-xs text-secondary'>Showing {displayed.length} of {projects.length} projects</p><button className='portfolio-button' type='button' aria-expanded={!!expanded[activeTab]} aria-controls='project-gallery' onClick={toggleExpanded}>{expanded[activeTab] ? <>Show less<HiArrowUp /></> : <>Explore more projects<HiArrowDown /></>}</button></div>}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
