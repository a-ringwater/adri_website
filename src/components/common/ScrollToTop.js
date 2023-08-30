import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      {showTopBtn && (
        <FaAngleUp
          className="fixed bottom-12 right-8 z-20 bg-dark_blue/50 border-solid border-2 border-green rounded-full h-12 w-12 text-grey cursor-pointer hover:animate-bounce"
          onClick={goToTop}
        />
      )}
    </div>
  );
};
export default ScrollToTop;
