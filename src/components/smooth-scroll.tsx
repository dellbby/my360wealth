"use client";

import { useEffect } from "react";

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function scrollToAnchor(targetEl: Element) {
  const headerOffset = 64;
  const targetY = targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;
  const startY = window.scrollY;
  const distance = Math.abs(targetY - startY);

  if (distance < 10) return;

  const duration = Math.min(800 + distance * 0.12, 1400);
  const startTime = performance.now();

  function step(time: number) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + (targetY - startY) * easeOutQuart(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function SmoothScroll() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a[href^='#']");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const targetEl = document.querySelector(href);
      if (!targetEl) return;

      e.preventDefault();
      scrollToAnchor(targetEl);
      history.pushState(null, "", href);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
