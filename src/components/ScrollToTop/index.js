"use client";

import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const SCROLL_CONTAINER_ID = "scroll-container";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = document.getElementById(SCROLL_CONTAINER_ID);
    if (!container) return;

    const handleScroll = () => {
      setVisible(container.scrollTop > 300);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const container = document.getElementById(SCROLL_CONTAINER_ID);
    if (!container) return;
    container.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 text-white bg-[#0c7fb0] rounded-full shadow-lg hover:bg-[#0863bf] transition-all duration-300"
    >
      <AiOutlineArrowUp size={22} aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;