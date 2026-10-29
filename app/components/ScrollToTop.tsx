"use client";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-25 right-6 z-50 rounded-full 
        bg-indigo-600 p-3 text-slate-50 shadow-lg 
        hover:bg-indigo-500 transition-all duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
      `}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
