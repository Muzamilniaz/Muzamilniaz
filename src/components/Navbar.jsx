import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiBars3BottomRight,
  HiOutlineBriefcase,
  HiOutlineDocumentArrowDown,
  HiOutlineEnvelope,
  HiOutlineUser,
  HiXMark,
} from "react-icons/hi2";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const RESUME_LINK =
  "https://drive.google.com/uc?export=download&id=15NHJc7djvMpl-LXHthL4PhBSA6ufKHrr";

const navIcons = {
  intro: HiOutlineUser,
  work: HiOutlineBriefcase,
  contact: HiOutlineEnvelope,
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollFrame = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (scrollFrame.current) {
        window.cancelAnimationFrame(scrollFrame.current);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    if (scrollFrame.current) {
      window.cancelAnimationFrame(scrollFrame.current);
    }

    const start = window.scrollY;
    const navOffset = window.innerWidth < 640 ? 76 : 92;
    const target = section.getBoundingClientRect().top + start - navOffset;
    const distance = target - start;
    const duration = Math.min(980, Math.max(520, Math.abs(distance) * 0.48));
    const startedAt = performance.now();

    const easeOutQuart = (value) => 1 - Math.pow(1 - value, 4);

    const step = (now) => {
      const elapsed = now - startedAt;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, start + distance * easeOutQuart(progress));

      if (progress < 1) {
        scrollFrame.current = window.requestAnimationFrame(step);
      } else {
        scrollFrame.current = null;
        window.history.replaceState(null, "", `#${id}`);
      }
    };

    scrollFrame.current = window.requestAnimationFrame(step);
  };

  const handleNavClick = (event, nav) => {
    event.preventDefault();
    setActive(nav.title);
    setToggle(false);
    scrollToSection(nav.id);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-[9999] transition-all duration-300 ${
        scrolled ? "bg-primary/85 shadow-lg shadow-black/20 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 rounded-xl object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Muzamil &nbsp;
            <span className='sm:block hidden'>| Software Engineer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row items-center gap-8'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} onClick={(event) => handleNavClick(event, nav)}>
                {nav.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href={RESUME_LINK}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-lg border border-[#915EFF]/40 px-4 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-[#915EFF]/20'
            >
              Resume
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            type='button'
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={toggle}
            className='relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-white/15 bg-white/10 text-white shadow-lg shadow-black/20 backdrop-blur-xl'
            onClick={() => setToggle(!toggle)}
          >
            <AnimatePresence mode='wait' initial={false}>
              <motion.span
                key={toggle ? "close" : "menu"}
                initial={{ rotate: -35, opacity: 0, scale: 0.82 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 35, opacity: 0, scale: 0.82 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className='text-[25px]'
              >
                {toggle ? <HiXMark /> : <HiBars3BottomRight />}
              </motion.span>
            </AnimatePresence>
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -14, scale: 0.96, height: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1, height: "auto" }}
                exit={{ opacity: 0, y: -12, scale: 0.96, height: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className='absolute left-4 right-4 top-[76px] z-10 overflow-hidden rounded-2xl border border-white/10 bg-[#080b1d]/95 shadow-2xl shadow-black/50 backdrop-blur-2xl'
              >
                <div className='border-b border-white/10 px-4 py-4'>
                  <p className='text-[12px] uppercase tracking-[0.28em] text-secondary'>
                    Navigation
                  </p>
                </div>
                <ul className='list-none p-2'>
                  {navLinks.map((nav, index) => {
                    const Icon = navIcons[nav.id] || HiOutlineUser;
                    const isActive = active === nav.title;

                    return (
                      <motion.li
                        key={nav.id}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.22 }}
                      >
                        <a
                          href={`#${nav.id}`}
                          onClick={(event) => handleNavClick(event, nav)}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-medium transition-colors ${
                            isActive
                              ? "bg-[#915EFF]/18 text-white"
                              : "text-secondary hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className='flex items-center gap-3'>
                            <span className='grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-[20px] text-[#a987ff]'>
                              <Icon />
                            </span>
                            {nav.title}
                          </span>
                          <span className='h-2 w-2 rounded-full bg-[#915EFF]' />
                        </a>
                      </motion.li>
                    );
                  })}
                  <motion.li
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.04, duration: 0.22 }}
                    className='mt-2 border-t border-white/10 pt-2'
                  >
                    <a
                      href={RESUME_LINK}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-between rounded-xl bg-[#915EFF] px-4 py-3 text-[16px] font-semibold text-white shadow-lg shadow-[#915EFF]/25'
                      onClick={() => setToggle(false)}
                    >
                      <span className='flex items-center gap-3'>
                        <span className='grid h-9 w-9 place-items-center rounded-full bg-white/15 text-[20px]'>
                          <HiOutlineDocumentArrowDown />
                        </span>
                        Resume
                      </span>
                    </a>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
