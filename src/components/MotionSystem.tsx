"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function MotionSystem() {
  const pathname = usePathname();
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    elements.forEach(element => {
      if (element.getBoundingClientRect().top >= window.innerHeight && !element.contains(document.activeElement)) { element.classList.add("will-reveal"); observer.observe(element); }
    });
    const revealAll = () => { if (motion.matches) { elements.forEach(element => element.classList.remove("will-reveal")); observer.disconnect(); } };
    motion.addEventListener("change", revealAll);
    return () => { observer.disconnect(); motion.removeEventListener("change", revealAll); elements.forEach(element => element.classList.remove("will-reveal", "is-visible")); };
  }, [pathname]);
  return null;
}
