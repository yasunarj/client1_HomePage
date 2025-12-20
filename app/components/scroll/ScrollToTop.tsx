"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const SCROLL_CONTAINER_ID = "scrollable-container";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("scrollable-container");
    if (!scrollContainer) return;

    const toggleVisibility = () => {
      if (scrollContainer.scrollTop > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    scrollContainer.addEventListener("scroll", toggleVisibility);

    return () =>
      scrollContainer.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollContainer = document.getElementById(SCROLL_CONTAINER_ID);
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    window.scrollTo({top: 0, behavior: "smooth"})
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white text-gray-800 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
