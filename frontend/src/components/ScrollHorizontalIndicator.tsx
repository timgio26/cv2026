// "use client";
import { useEffect, useState } from "react";

export function ScrollHorizontalIndicator() {
  const [scrollPerc, setScrollPerc] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const currentPosition = window.scrollY;

      const percentage =
        (currentPosition / (fullHeight - windowHeight)) * 100;

      setScrollPerc(Math.min(Math.max(percentage, 0), 100));
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-1 z-50 
        transition-opacity duration-300
        ${scrollPerc < 5 ? "opacity-0" : "opacity-100"}
      `}
    >
      <div
        className="
          h-full 
          bg-gradient-to-r from-white/40 to-white 
          shadow-[0_0_10px_rgba(255,255,255,0.6)]
          transition-all duration-150
        "
        style={{ width: `${scrollPerc}%` }}
      />
    </div>
  );
}
