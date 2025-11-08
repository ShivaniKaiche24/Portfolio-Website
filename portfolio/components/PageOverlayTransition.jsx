"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const PageOverlayTransition = () => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);
  const [direction, setDirection] = useState("forward");
  const prevPath = useRef("");

  useEffect(() => {
    // Detect forward or backward navigation based on pathname
    if (prevPath.current) {
      const prevLength = prevPath.current.split("/").length;
      const currLength = pathname.split("/").length;
      setDirection(currLength >= prevLength ? "forward" : "backward");
    }
    prevPath.current = pathname;

    // Trigger animation
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 900);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Choose sweep direction dynamically
  const sweepVariants = {
    initial: (dir) => ({
      x: dir === "forward" ? "-100%" : "100%",
    }),
    animate: {
      x: 0,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: (dir) => ({
      x: dir === "forward" ? "100%" : "-100%",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {isAnimating && (
        <motion.div
          key={pathname}
          className="fixed inset-0 z-[70] pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {/* 💙 Main Sweep */}
          <motion.div
            custom={direction}
            variants={sweepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 bg-gradient-to-r 
                       from-[#0A0A0A] via-[#1E3A8A] to-[#467ff9] 
                       shadow-[0_0_60px_rgba(59,130,246,0.3)]"
          />

          {/* ✨ Soft Blue Glow Trail */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: [0, 0.25, 0],
              transition: { delay: 0.1, duration: 0.8, ease: "easeOut" },
            }}
            exit={{
              x: "100%",
              opacity: [0, 0.25, 0],
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="absolute inset-0 bg-gradient-to-r 
                       from-transparent via-blue-400/25 to-transparent 
                       blur-3xl"
          />

          {/* 💫 Highlight Edge */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: [0, 0.4, 0],
              transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
            }}
            exit={{
              x: "100%",
              opacity: [0, 0.4, 0],
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
            className="absolute inset-0 bg-gradient-to-r 
                       from-transparent via-white/10 to-transparent 
                       blur-[90px]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageOverlayTransition;
