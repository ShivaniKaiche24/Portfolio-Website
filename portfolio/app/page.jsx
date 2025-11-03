"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";
import { Button } from "../components/ui/button";
import Social from "../components/Social";
import Photo from "../components/Photo";
import ParticlesBackground from "../components/ParticlesBackground";
import PageTransition from "../components/PageTransition";

const Home = () => {
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPhoto(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <section className="relative h-full flex items-center  bg-gradient-to-b from-[#0b0b0b] to-[#121212] overflow-hidden">

        {/* Particle Background */}
        <ParticlesBackground />

        {/* Floating Background Circles */}
        <div className="absolute top-5 -right-20 w-72 h-72 rounded-full bg-purple-500 opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-pink-500 opacity-15 animate-pulse-slower"></div>

        {/* Main content */}
        <div className="w-full h-full px-6 xl:px-36 2xl:px-60">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-16 xl:pb-24 gap-12">

            {/* LEFT — Text Section */}
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
              className="text-center xl:text-left max-w-xl"
            >
              <h1 className="text-6xl font-extrabold font-mono leading-tight">
                Shivani Kaiche
              </h1>

              <h2 className="text-2xl font-semibold text-purple-400 mt-3 tracking-wide h-[40px]">
                <TypeAnimation
                  sequence={[
                    "Fullstack Developer",
                    1500,
                    "Java | React | Next.js | MYSQL",
                    1500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </h2>

              <motion.p
                initial={{ opacity: 0, }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8, ease: "easeInOut" }}
                className="max-w-[520px] mb-10 text-white/80 text-base leading-relaxed mt-5"
              >
                Transforming ideas into elegant, high-performance web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="flex flex-col xl:flex-row items-center gap-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="uppercase flex items-center gap-2 px-6 py-2 font-semibold tracking-wide bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg hover:scale-105 hover:shadow-purple-400/50 transition-transform duration-300"
                >
                  <a href="/Shivani_Kaiche_CV.pdf" download>
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </a>
                </Button>

                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-purple-400 rounded-full flex justify-center items-center text-purple-400 text-base hover:bg-purple-400 hover:text-primary transition duration-500 hover:scale-110"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT — Photo Glow */}
            {showPhoto && (
              <motion.div
                initial={{ opacity: 0  }}
                animate={{ opacity: 1

                }}
                transition={{ delay: 1.4, duration: 0.6, ease: "easeInOut" }}
                className="relative group order-first xl:order-last"
              >
                <div className="absolute inset-0 w-56 h-56 xl:w-72 xl:h-72 rounded-full bg-gradient-to-tr from-purple-600/30 via-purple-400/20 to-transparent blur-3xl scale-110 group-hover:blur-[70px] group-hover:opacity-90 transition-all duration-700"></div>

                <div className="relative w-48 h-48 xl:w-64 xl:h-64 rounded-full overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.25)] group-hover:shadow-[0_0_70px_rgba(168,85,247,0.45)] transform group-hover:scale-105 transition-all duration-700 ease-out">
                  <Photo />
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
