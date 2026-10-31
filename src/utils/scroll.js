let controller;

export const setScrollController = (instance) => {
  controller = instance;
};

export const scrollToTarget = (target) => {
  const element = typeof target === "string" ? document.getElementById(target.replace(/^#/, "")) : null;
  if (typeof target === "string" && !element) return;
  const top = element ? element.getBoundingClientRect().top + window.scrollY - 96 : target;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (controller) controller.scrollTo(Math.max(0, top), { immediate: reducedMotion });
  else window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? "instant" : "smooth" });
};
