"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function MotionSystem() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    let frame = 0;

    const updateProgress = () => {
      if (!progressRef.current) return;

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;

      progressRef.current.style.transform = `scaleX(${progress})`;
    };

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section"),
    );

    sections.forEach((section, sectionIndex) => {
      section.classList.add("motion-section");

      if (sectionIndex === 0) {
        section.classList.add("motion-hero-section");
      }

      const shell = Array.from(section.children).find((child) => {
        if (!(child instanceof HTMLElement)) return false;
        return child.getAttribute("aria-hidden") !== "true";
      });

      if (shell instanceof HTMLElement) {
        shell.classList.add("motion-reveal-shell");

        Array.from(shell.children).forEach((child, itemIndex) => {
          if (!(child instanceof HTMLElement)) return;
          child.classList.add("motion-item");
          child.style.setProperty("--motion-delay", `${itemIndex * 90}ms`);
        });
      }
    });

    document.querySelectorAll<HTMLElement>("main article").forEach((card) => {
      card.classList.add("motion-card");
    });

    document.querySelectorAll<HTMLAnchorElement>("main a").forEach((link) => {
      if (link.classList.contains("inline-flex")) {
        link.classList.add("motion-cta");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -7% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    const revealFirstScreen = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.86) {
          section.classList.add("is-visible");
          observer.unobserve(section);
        }
      });
    };

    frame = window.requestAnimationFrame(() => {
      updateProgress();
      revealFirstScreen();
    });

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={progressRef} />
    </div>
  );
}
