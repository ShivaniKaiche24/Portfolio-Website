"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "home", path: "#home", type: "scroll" },
  { name: "services", path: "#services", type: "scroll" },
  { name: "resume", path: "/resume.pdf", type: "file" }, // <-- opens PDF
  { name: "projects", path: "#projects", type: "scroll" },
  { name: "contact", path: "#contact", type: "scroll" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const handleResume = (path) => {
    window.open(path, "_blank"); // open resume in new tab
    setOpen(false);
  };

  return (
    <div className="xl:hidden relative z-50">
      {/* ☰ Hamburger / ✖ Close Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white p-2 rounded-md focus:outline-none transition-all duration-300 hover:text-[#3B82F6]"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* 🪄 Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute right-0 mt-3 w-48 bg-[#0B0F17]/95 backdrop-blur-lg 
                       shadow-lg border border-blue-500/20 rounded-xl py-4 flex flex-col gap-2"
          >
            {links.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() =>
                  link.type === "scroll"
                    ? handleScroll(link.path)
                    : handleResume(link.path)
                }
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.25 }}
                className="capitalize text-left px-5 py-2 text-white/80 hover:text-[#3B82F6] 
                           hover:bg-blue-500/10 rounded-md transition-all duration-300"
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
