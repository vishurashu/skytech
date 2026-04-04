"use client";

import { useEffect, useState } from "react";

export default function loader({ onFinish }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const value = Math.floor(progress * 100);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        onFinish(); // ✅ ONLY here we finish
      }
    }

    requestAnimationFrame(animate);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <h1 className="text-[120px] font-bold text-gray-600">
        {count}
        <span style={{ color: "#E30613" }}>%</span>
      </h1>
    </div>
  );
}