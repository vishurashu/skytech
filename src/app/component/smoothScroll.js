"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let currentY = window.scrollY;
    let targetY = window.scrollY;
    let rafId = null;
    const ease = 0.08; // lower = smoother/slower

    const onWheel = (e) => {
      e.preventDefault();
      targetY += e.deltaY * 0.8;
      // clamp target within page bounds
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(targetY, maxScroll));
      if (!rafId) animate();
    };

    const animate = () => {
      const diff = targetY - currentY;
      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        rafId = null;
        return;
      }
      currentY += diff * ease;
      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return children;
}