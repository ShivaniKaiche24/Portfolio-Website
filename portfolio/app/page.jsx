"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiSwagger,
  SiSpring,
  SiC,
  SiCplusplus,
} from "react-icons/si";

import { Button } from "../components/ui/button";
import Social from "../components/Social";
import ParticlesBackground from "../components/ParticlesBackground";
import PageTransition from "../components/PageTransition";
import Header from "../components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// ---------- DATA ----------
const skills = [
  { name: "C", icon: <SiC className="text-blue-400 text-4xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#6295CB] text-4xl" /> },
  { name: "Java", icon: <FaJava className="text-[#f9a8d4] text-4xl" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-400 text-4xl" /> },
  { name: "Spring APIs", icon: <SiSpring className="text-green-300 text-4xl" /> },
  { name: "Swagger", icon: <SiSwagger className="text-[#22D3EE] text-4xl" /> },
  { name: "React.js", icon: <FaReact className="text-sky-400 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-200 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400 text-4xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
];

const education = [
  {
    year: "Mar 2024 - Oct 2024",
    degree: "PG Diploma in Advanced Computing",
    institution: "Centre for Development of Advanced Computing (CDAC)",
  },
  {
    year: "Aug 2019 - Jul 2023",
    degree: "B.Tech in Instrumentation and Control Engineering",
    institution: "Vishwakarma Institute of Technology, Pune",
  },
];

const services = [
  {
    title: "Full-Stack Web Development",
    desc: "Building responsive and scalable web apps using React.js, Next.js, and Java Spring Boot.",
  },
  {
    title: "Backend Architecture",
    desc: "Developing efficient RESTful APIs and microservices using Node.js, Express, and Spring Boot.",
  },
  {
    title: "Database Management",
    desc: "Designing relational and NoSQL databases with MySQL and MongoDB for optimized performance.",
  },
  {
    title: "Security & Authentication",
    desc: "Implementing JWT, OAuth2, and secure user authentication for modern applications.",
  },
];

const projects = [
  {
    name: "Agri-ALLiance",
    description:
      "A platform connecting farmers, merchants, and doctors to enhance agriculture management and provide crop guidance.",
    image: "/Photo1.png",
    github: "https://github.com/ShivaniKaiche24/CDAC-Project",
  },
  {
    name: "Connectify",
    description:
      "A social media platform with posts, profiles, and real-time interactions built using the MERN stack.",
    image: "/Photo2.png",
    github: "https://github.com/ShivaniKaiche24/Connectify-Project",
  },
  {
    name: "Tune In",
    description:
      "A music-sharing web app for discovering, organizing, and managing playlists with a clean interface.",
    image: "/Photo3.png",
    github: "https://github.com/ShivaniKaiche24",
  },
];

const certifications = [
   {
    title: "Python for Data Science",
    platform: "NPTEL (IIT Madras)",
    date: "2025",
    file: "/Python for Data Science.pdf",
  },
  {
    title: "Data Analytics",
    platform: "LinkedIn Learning",
    date: "2022",
    file: "/Data Analytics Linkedin.pdf",
  },
  {
    title: "Problem Solving Techniques",
    platform: "LinkedIn Learning",
    date: "2022",
    file: "/Problem Solving Techniques Linkedin.pdf",
  },
  {
    title: "Writing a Proposal",
    platform: "LinkedIn Learning",
    date: "2021",
    file: "/CertificateOfCompletion_Writing a Proposal.pdf",
  },
  {
    title: "Critical Thinking",
    platform: "LinkedIn Learning",
    date: "2021",
    file: "/CertificateOfCompletion_Critical Thinking.pdf",
  },
];

// ---------- MAIN PAGE ----------
const Home = () => {
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPhoto(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0A0A0A] to-[#111827] text-white font-sans relative overflow-hidden">
      <Header />
      <ParticlesBackground />
      <PageTransition>

        {/* ===== HERO ===== */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 xl:px-36 pt-28">
          <motion.div className="flex flex-col xl:flex-row items-center justify-between gap-12 w-full" initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="text-center xl:text-left flex-1 max-w-xl">
              <h1 className="text-5xl md:text-6xl font-extrabold font-mono text-white">Shivani Kaiche</h1>
              <h2 className="text-lg md:text-xl font-semibold text-[#3B82F6] mt-3 tracking-wide">
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer",
                    1500,
                    "Java | React | Next.js | MySQL",
                    1500,
                    "Crafting Scalable Web Apps",
                    1500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <p className="max-w-[500px] mb-8 text-white/80 mt-6 leading-relaxed">
                Passionate full-stack developer focused on creating clean, performant,
                and scalable web solutions that enhance user experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
                <Button asChild size="lg" className="flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] transition-all duration-300">
                  <a href="/Resume.pdf" download>
                    Download CV <FiDownload />
                  </a>
                </Button>
                <Social containerStyles="flex gap-6 mt-4 sm:mt-0" iconStyles="w-8 h-8 border border-[#3B82F6] rounded-full flex justify-center items-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition duration-500 hover:scale-110" />
              </div>
            </motion.div>

            {showPhoto && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
                <div className="relative w-48 h-48 xl:w-64 xl:h-64 rounded-full overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-[0_0_70px_rgba(37,99,235,0.5)] transition-all duration-700 ease-out">
                  <img src="/Photo.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
                </div>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="py-20 px-6 xl:px-36 bg-[#0B0F17] text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-4xl font-extrabold mb-6 text-blue-400">
            About Me
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" className="text-white/80 max-w-3xl mx-auto leading-relaxed">
             I’m an innovative and passionate full-stack developer with a proven record of
    designing and developing scalable, user-focused applications. I specialize
    in building robust RESTful APIs and end-to-end web solutions using modern
    technologies like Java, Spring Boot, React.js, Next.js, Node.js, MySQL, and
    MongoDB.
    <br /><br />
    My approach to development combines strong analytical thinking, a deep
    understanding of backend architecture, and a passion for crafting seamless
    user experiences. I enjoy working across both front-end and back-end
    systems, ensuring efficient data flow, performance, and maintainability.
    <br /><br />
    With a Postgraduate Diploma in Advanced Computing (CDAC) and a B.Tech in
    Instrumentation and Control Engineering, I bring a well-rounded technical
    foundation and a problem-solving mindset to every project.
    <br /><br />
    Beyond coding, I value teamwork, creative problem-solving, and continuous
    learning — always striving to stay ahead with the latest trends in
    full-stack development and modern software design. </motion.p>
        </section>

        {/* ===== SKILLS ===== */}
        <section id="skills" className="py-20 px-6 xl:px-36 bg-[#111827] text-center">
          <h2 className="text-4xl font-extrabold mb-10 text-blue-400">Skills</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-10 space-x-10 justify-start">
            {skills.map((skill, i) => (
              <motion.div key={skill.name} className="snap-center flex flex-col items-center min-w-[110px] p-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.4 }} whileHover={{ scale: 1.1 }}>
                <div className="w-16 h-16 flex items-center justify-center">{skill.icon}</div>
                <p className="text-white mt-3 text-sm font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== EDUCATION ===== */}
        <section id="education" className="py-24 px-6 xl:px-36 bg-[#0D1117] text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-4xl font-extrabold mb-12 text-blue-400">
            Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {education.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.6 }} className="bg-[#111827]/80 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-500">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{edu.degree}</h3>
                <p className="text-sm text-blue-400/80 mb-2">{edu.year}</p>
                <p className="text-white/80">{edu.institution}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services" className="py-20 px-6 xl:px-36 bg-[#0D1117] text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-4xl font-extrabold mb-10 text-blue-400">
            What I Do
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" className="p-8 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section id="projects" className="py-20 px-6 xl:px-36 bg-[#0D1117] text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-4xl font-extrabold mb-10 text-blue-400">
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:scale-[1.03] transition-all duration-500">
                <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">{p.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{p.description}</p>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                    View on GitHub →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== CERTIFICATIONS ===== */}
        <section id="certifications" className="py-20 px-6 xl:px-36 bg-[#0D1117] text-center">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-4xl font-extrabold mb-10 text-blue-400">
            Certifications
          </motion.h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications.map((c, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition duration-300">
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="text-blue-400 text-sm mt-1">{c.platform}</p>
                <p className="text-white/70 text-xs mt-1">{c.date}</p>
                <a href={c.file} download className="text-blue-400 text-xs mt-3 inline-block hover:underline">
                  View Certificate →
                </a>
              </motion.div>
            ))}
          </div>
        </section>

       {/* ===== CONTACT ===== */}
<section
  id="contact"
  className="py-20 px-6 xl:px-36 bg-[#0D1117] flex flex-col md:flex-row justify-between items-start gap-10 text-center md:text-left"
>
  {/* LEFT SIDE */}
  <div className="flex-1">
    <h2 className="text-4xl font-extrabold mb-4 text-blue-400">Let's Connect</h2>
    <p className="text-white/80 mb-6 max-w-md">
      I'm currently looking for new opportunities, and my inbox is always open.
      Whether you have a question or just want to say hi, I'll try my best to get back to you!
    </p>

  </div>

  {/* RIGHT SIDE — SMALLER FORM */}
  <form
    onSubmit={async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        e.target.reset();
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    }}
    className="w-full md:w-[70%] lg:w-[50%] xl:w-[45%] bg-[#111827] p-6 rounded-2xl border border-white/10 text-left"
  >
    <label className="block mb-2 text-sm text-white/70">Your Email</label>
    <input
      type="email"
      name="email"
      required
      className="w-full mb-4 p-2.5 rounded-lg bg-[#0D1117] border border-white/10 text-white focus:outline-none focus:border-blue-400"
      placeholder="you@example.com"
    />

    <label className="block mb-2 text-sm text-white/70">Subject</label>
    <input
      type="text"
      name="subject"
      required
      className="w-full mb-4 p-2.5 rounded-lg bg-[#0D1117] border border-white/10 text-white focus:outline-none focus:border-blue-400"
      placeholder="Just saying hi"
    />

    <label className="block mb-2 text-sm text-white/70">Message</label>
    <textarea
      name="message"
      required
      rows="3"
      className="w-full mb-5 p-2.5 rounded-lg bg-[#0D1117] border border-white/10 text-white focus:outline-none focus:border-blue-400"
      placeholder="Let's talk about..."
    ></textarea>

    <button
      type="submit"
      className="w-full py-2.5  bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg font-semibold transition-all"
    >
      Send message
    </button>
  </form>
</section>


      </PageTransition>
      <ScrollToTop />
    </div>
  );
};

export default Home;
