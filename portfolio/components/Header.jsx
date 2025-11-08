"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide header when scrolling down, show when scrolling up
      if (currentScroll > lastScrollY && currentScroll > 80) {
        controls.start({
          y: "-100%",
          opacity: 0,
          transition: { duration: 0.4, ease: "easeInOut" },
        });
      } else {
        controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        });
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  return (
    <motion.header
      animate={controls}
      initial={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 text-white bg-black/40 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between py-4 xl:py-6 px-6 xl:px-36">
        {/* LEFT — Logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold font-mono tracking-wide">
            Shivani<span className="text-[#3B82F6]"></span>
          </h1>
        </Link>

        {/* RIGHT — Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* Hire Me button removed */}
        </div>

        {/* MOBILE NAV */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
