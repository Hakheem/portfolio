import { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max((window.scrollY / totalHeight) * 100, 0), 100);
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return scrollProgress;
};

export default useScrollProgress;
