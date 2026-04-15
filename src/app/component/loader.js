"use client";
import { useEffect, useRef, useState } from "react";

export default function Loader({ onFinish }) {
  const numberRef = useRef(null);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      if (numberRef.current) {
        numberRef.current.textContent = current;
      }

      if (current >= 100) {
        clearInterval(interval);

        if (numberRef.current) numberRef.current.textContent = "100";

        setTimeout(() => setSlideUp(true), 50);   
        setTimeout(() => onFinish?.(), 850);       
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      style={{
        transform: slideUp ? "translateY(-100%)" : "translateY(0)",
        transition: slideUp
          ? "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)"
          : "none",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <h1
        className="tabular-nums text-[60px] min-[1400px]:text-[120px] min-[768px]:text-[90px] font-bold text-gray-600"
        style={{ willChange: "transform" }}
      >
        <span ref={numberRef}>0</span>
        <span style={{ color: "#E30613" }}>%</span>
      </h1>
    </div>
  );
}