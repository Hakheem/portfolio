import { motion } from "framer-motion";
import useScrollProgress from "./hooks/useScrollProgress";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.5 }}
      >
        {children}
      </motion.main>

      <span
        style={{
          transform: `translateY(${100 - completion}%)`,
        }}
        className="fixed z-50 bg-secondary w-1 bottom-0 right-0 transition-all duration-700"
      ></span>

    </>
  );
};

export default Template;
