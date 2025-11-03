"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // npm i lucide-react

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white p-2 rounded-md focus:outline-none"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-[#0D0D0D] shadow-lg rounded-md py-4 flex flex-col gap-3 z-50">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={() => setOpen(false)} // close menu on click
              className="capitalize px-4 py-2 text-white/80 hover:text-purple-300 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
