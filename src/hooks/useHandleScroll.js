import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useHandleScroll = (pages) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = event.deltaY;

      if (delta > 0) {
        // Scroll down
        const currentPageIndex = pages.indexOf(location.pathname);
        if (currentPageIndex !== -1 && currentPageIndex < pages.length - 1) {
          navigate(pages[currentPageIndex + 1]);
        } else {
          navigate(pages[0]);
        }
      } else if (delta < 0) {
        // Scroll up
        const currentPageIndex = pages.indexOf(location.pathname);
        if (currentPageIndex !== -1 && currentPageIndex > 0) {
          navigate(pages[currentPageIndex - 1]);
        } else {
          navigate(pages[pages.length - 1]);
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [location, navigate, pages]);
};

export default useHandleScroll;
