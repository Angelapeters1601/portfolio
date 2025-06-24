import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiMongodb,
  SiStyledcomponents,
  SiExpress,
  SiSupabase,
} from "react-icons/si";

const About = () => {
  const techStack = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-[#E34F26]" />,
      progress: 95,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-[#1572B6]" />,
      progress: 90,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-[#F7DF1E]" />,
      progress: 88,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-[#61DAFB]" />,
      progress: 92,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      progress: 85,
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-[#764ABC]" />,
      progress: 87,
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux className="text-[#764ABC]" />,
      progress: 86,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      progress: 94,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-[#7952B3]" />,
      progress: 89,
    },
    {
      name: "Material UI",
      icon: <SiMui className="text-[#007FFF]" />,
      progress: 83,
    },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents className="text-[#DB7093]" />,
      progress: 82,
    },
    {
      name: "Figma",
      icon: <FaFigma className="text-[#F24E1E]" />,
      progress: 80,
    },
    { name: "GitHub", icon: <FaGithub className="text-white" />, progress: 91 },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-[#47A248]" />,
      progress: 78,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-white" />,
      progress: 76,
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-[#3ECF8E]" />,
      progress: 75,
    },
    {
      name: "Responsive Design",
      icon: <FaCss3Alt className="text-[#1572B6]" />,
      progress: 93,
    },
    {
      name: "Animations",
      icon: <FaReact className="text-[#61DAFB]" />,
      progress: 84,
    },
  ];

  return (
    <div className="min-h-screen bg-customBlack text-amber-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-800/10"
            initial={{
              scale: 0,
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.2, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative pt-28 pb-16 text-center"
      >
        {/* <div
          className="absolute inset-0 
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
         from-amber-900/10 via-black to-black opacity-70"
        ></div> */}
        <div className="container mt-20 mx-auto px-6 relative z-10">
          <h1
            className="text-5xl md:text-6xl font-bold font-playfair
           text-amber-100 mb-4"
          >
            About <span className="text-amber-300">Me</span>
          </h1>
          <p className="text-xl text-amber-100/80 max-w-3xl mx-auto">
            Frontend Developer specializing in React, Next.js, and modern UI/UX
            design. I build <span className="text-amber-300">fast</span>,{" "}
            <span className="text-amber-300">scalable</span>, and{" "}
            <span className="text-amber-300">visually stunning</span> web
            applications.
          </p>
        </div>
      </motion.section>

      {/* Tech Stack Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto px-6 py-12 relative z-10"
      >
        <h2 className="text-3xl font-lilita text-amber-100 mb-8 text-center">
          My <span className="text-amber-300">Tech Stack</span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-amber-900/10 via-black/50 to-amber-900/5 border border-amber-800/30 rounded-xl p-6 backdrop-blur-sm shadow-lg flex flex-col items-center"
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h3 className="text-amber-100 font-medium text-center mb-2">
                {tech.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-amber-900/20 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${tech.progress}%` }}
                  transition={{ duration: 1.5, delay: index * 0.05 }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600"
                />
              </div>
              <span className="text-amber-300 text-sm font-mono">
                {tech.progress}%
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="container mx-auto px-6 py-12 relative z-10"
      >
        <div
          className="
        bg-gradient-to-br from-amber-900/10 via-black/50 to-amber-900/5 border border-amber-800/30 rounded-2xl p-8 backdrop-blur-sm shadow-xl"
        >
          <h2 className="text-3xl font-lilita text-amber-100 mb-6">
            Who <span className="text-amber-300">I Am</span>
          </h2>
          <div className="space-y-4 text-amber-100/90">
            <p>
              I'm <span className="text-amber-300">Nwattah Angela</span>, a
              passionate Frontend Developer with expertise in building modern,
              responsive, and high-performance web applications.
            </p>
            <p>
              My journey in web development started with a love for design and
              evolved into a deep appreciation for clean, efficient code. I
              specialize in <span className="text-amber-300">React.js</span>,{" "}
              <span className="text-amber-300">Next.js</span>, and{" "}
              <span className="text-amber-300">Tailwind CSS</span>, creating
              seamless user experiences.
            </p>
            <p>
              When I'm not coding, I enjoy contributing to open-source projects,
              experimenting with new animations, and mentoring aspiring
              developers.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
