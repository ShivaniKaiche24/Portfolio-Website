"use client";
import { useEffect, useState } from "react";

const links = [
  { name: "home", path: "#home" },
  { name: "services", path: "#services" },
  // ✅ Changed this to open PDF instead of #resume
  { name: "resume", path: "/Resume.pdf" },
  { name: "projects", path: "#projects" },
  { name: "contact", path: "#contact" },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("#home");

  // --- Update active section on scroll ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = links
        .filter((link) => link.path.startsWith("#")) // only scroll sections
        .map((link) => link.path);

      for (let id of sections) {
        const section = document.querySelector(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const height = section.offsetHeight;

          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + height - 100
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex gap-10 items-center bg-transparent text-white">
      {links.map((link, index) => {
        const isActive = activeSection === link.path;

        // ✅ Resume link opens PDF in a new tab
        if (link.name === "resume") {
          return (
            <a
              key={index}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`capitalize font-medium tracking-wide transition-all duration-300 relative group
                text-white hover:text-[#3B82F6]`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-[2px] rounded-full 
                  bg-gradient-to-r from-[#3B82F6] to-[#3B82F6] transition-all duration-500 
                  group-hover:w-full`}
              ></span>
            </a>
          );
        }

        // 🧭 Other links (normal scroll)
        return (
          <a
            href={link.path}
            key={index}
            className={`capitalize font-medium tracking-wide transition-all duration-300 relative group
              ${
                isActive
                  ? "text-[#3B82F6]"
                  : "text-white hover:text-[#3B82F6]"
              }`}
          >
            {link.name}
            <span
              className={`absolute -bottom-1 left-0 w-0 h-[2px] rounded-full 
                bg-gradient-to-r from-[#3B82F6] to-[#3B82F6] transition-all duration-500 
                ${isActive ? "w-full" : "group-hover:w-full"}`}
            ></span>
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
