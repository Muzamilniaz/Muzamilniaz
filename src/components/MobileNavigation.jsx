import { useEffect, useRef, useState } from "react";
import { HiOutlineBriefcase, HiOutlineEnvelope, HiOutlineHome, HiOutlineSquares2X2 } from "react-icons/hi2";
import { scrollToTarget } from "../utils/scroll";

const items = [
  { id: "home", label: "Home", icon: HiOutlineHome },
  { id: "work", label: "Work", icon: HiOutlineBriefcase },
  { id: "projects", label: "Projects", icon: HiOutlineSquares2X2 },
  { id: "contact", label: "Contact", icon: HiOutlineEnvelope },
];

const MobileNavigation = () => {
  const [active, setActive] = useState("home");
  const frame = useRef(null);
  useEffect(() => {
    const measure = () => {
      frame.current = null;
      if (window.innerWidth >= 1024) return;
      let current = "home";
      for (const item of items) {
        if (document.getElementById(item.id)?.getBoundingClientRect().top <= window.innerHeight * 0.35) current = item.id;
      }
      setActive(current);
    };
    const request = () => { if (frame.current === null) frame.current = window.requestAnimationFrame(measure); };
    const viewport = window.visualViewport;
    const updateViewport = () => {
      document.documentElement.style.setProperty("--app-viewport-height", `${viewport?.height || window.innerHeight}px`);
      document.documentElement.style.setProperty("--app-viewport-top", `${viewport?.offsetTop || 0}px`);
      request();
    };
    updateViewport();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", updateViewport);
    viewport?.addEventListener("resize", updateViewport);
    viewport?.addEventListener("scroll", updateViewport);
    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", updateViewport);
      viewport?.removeEventListener("resize", updateViewport);
      viewport?.removeEventListener("scroll", updateViewport);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
      frame.current = null;
      document.documentElement.style.removeProperty("--app-viewport-height");
      document.documentElement.style.removeProperty("--app-viewport-top");
    };
  }, []);
  return <nav className='mobile-app-dock' aria-label='Quick navigation'>{items.map(({ id, label, icon: Icon }) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={(event) => { event.preventDefault(); scrollToTarget(id); window.history.replaceState(null,"",`#${id}`); setActive(id); }}><Icon aria-hidden='true' /><span>{label}</span><i aria-hidden='true' /></a>)}</nav>;
};

export default MobileNavigation;
