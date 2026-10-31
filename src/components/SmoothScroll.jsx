import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { setScrollController } from "../utils/scroll";
import { scrollToTarget } from "../utils/scroll";

const SmoothScroll = () => {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let instance;
    const configure = () => {
      instance?.destroy();
      instance = undefined;
      setScrollController(null);
      if (preference.matches) return;
      instance = new Lenis({
        autoRaf: true,
        duration: 1.15,
        smoothWheel: true,
        syncTouch: false,
        anchors: false,
        prevent: (node) => node.closest("[data-lenis-prevent]") !== null,
      });
      setScrollController(instance);
    };
    configure();
    const handleAnchor = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('a[href^="#"]');
      if (!link || link.hash.length < 2 || !document.getElementById(link.hash.slice(1))) return;
      event.preventDefault();
      scrollToTarget(link.hash);
      window.history.replaceState(null, "", link.hash);
    };
    document.addEventListener("click", handleAnchor);
    preference.addEventListener("change", configure);
    return () => {
      preference.removeEventListener("change", configure);
      document.removeEventListener("click", handleAnchor);
      instance?.destroy();
      setScrollController(null);
    };
  }, []);
  return null;
};

export default SmoothScroll;
