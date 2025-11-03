"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        
        transition: { delay: 1, duration: 0.6, ease: "easeInOut" },
      }}
      className="py-8 xl:py-12 text-white bg-[#0b0b0b] sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between px-6 xl:px-32 2xl:px-56">
        
        {/* LEFT — Logo */}
        <Link href="/">
          <h1 className="text-3xl font-semibold font-mono">
            Shivani<span className="text-purple-400">.</span>
          </h1>
        </Link>

        {/* CENTER — Desktop Navigation */}
        <div className="hidden xl:flex flex-1 justify-center items-center">
          <Nav />
        </div>

        {/* RIGHT — Hire Me Button */}
        <div className="hidden xl:flex items-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="flex items-center gap-2 px-6 py-2 font-semibold tracking-wide bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg hover:scale-105 hover:shadow-purple-400/50 transition-transform duration-300"
            >
              Hire Me
            </Button>
          </Link>
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
