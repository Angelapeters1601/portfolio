import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
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
  SiThreedotjs,
  SiReactquery,
} from "react-icons/si";

// Custom animations
const customFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customFadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const customFadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const customScaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

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
      progress: 90,
    },
    {
      name: "React Query",
      icon: <SiReactquery className="text-[#0eaa6e]" />,
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
      progress: 95,
    },
    {
      name: "Material UI",
      icon: <SiMui className="text-[#007FFF]" />,
      progress: 83,
    },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents className="text-[#DB7093]" />,
      progress: 85,
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
      progress: 85,
    },
    {
      name: "NodeJs",
      icon: <FaNodeJs className="text-[#E34F26]" />,
      progress: 90,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-white" />,
      progress: 80,
    },
    {
      name: "Supabase",
      icon: <SiSupabase className="text-[#3ECF8E]" />,
      progress: 92,
    },
    {
      name: "Responsive Design",
      icon: <FaCss3Alt className="text-[#1572B6]" />,
      progress: 93,
    },
    {
      name: "Animations",
      icon: <FaReact className="text-[#61DAFB]" />,
      progress: 90,
    },
    {
      name: "Three.js",
      icon: <SiThreedotjs className="text-[#b62f99]" />,
      progress: 80,
    },
  ];

  return (
    <div className="min-h-screen bg-customBlack overflow-x-hidden text-amber-50 overflow-hidden">
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
      <Reveal keyframes={customFadeIn} duration={800} triggerOnce>
        <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 text-center">
          <div className="container mt-16 md:mt-20 mx-auto px-4 sm:px-6 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair text-amber-100 mb-3 md:mb-4">
              About <span className="text-amber-300">Me</span>
            </h1>
            <p className="text-lg sm:text-xl text-amber-100/80 max-w-3xl mx-auto px-4">
              Frontend Developer specializing in modern frameworks to deliver
              exquisite digital experiences. I build{" "}
              <span className="text-amber-300">fast</span>,{" "}
              <span className="text-amber-300">scalable</span>, and{" "}
              <span className="text-amber-300">visually stunning</span> web
              applications with a strong focus on performance and user-centered
              design.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Tech Stack Grid */}
      <section className="container mx-auto px-4 sm:px-6 py-8 md:py-12 relative z-10">
        <Reveal keyframes={customFadeIn} duration={800} triggerOnce>
          <h2 className="text-2xl sm:text-3xl font-lilita text-amber-100 mb-6 md:mb-8 text-center">
            My <span className="text-amber-300">Tech Stack</span>
          </h2>
        </Reveal>

        {/* Grid  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {techStack.map((tech, index) => (
            <Reveal
              key={index}
              keyframes={customScaleIn}
              duration={600}
              delay={index * 50}
              triggerOnce
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full flex flex-col" // Ensure full height and flex column
              >
                <div className="bg-gradient-to-br from-amber-900/10 via-black/50 to-amber-900/5 border border-amber-800/30 rounded-xl p-4 sm:p-6 backdrop-blur-sm shadow-lg flex flex-col flex-grow">
                  {" "}
                  {/* flex-grow for equal height */}
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 flex justify-center">
                    {tech.icon}
                  </div>
                  <h3 className="text-amber-100 font-medium text-center mb-2 sm:mb-3 text-sm sm:text-base">
                    {tech.name}
                  </h3>
                  {/* Progress Bar - Moved to bottom */}
                  <div className="mt-auto w-full">
                    {" "}
                    {/* mt-auto pushes to bottom */}
                    <div className="w-full bg-amber-900/20 rounded-full h-1.5 sm:h-2 mb-1 sm:mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.progress}%` }}
                        transition={{ duration: 1.5, delay: index * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600"
                      />
                    </div>
                    <span className="text-amber-300 text-xs sm:text-sm font-mono block text-center">
                      {tech.progress}%
                    </span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="container mx-auto px-4 sm:px-6 py-8 md:py-12 relative z-10">
        <Reveal keyframes={customFadeIn} duration={800} delay={200} triggerOnce>
          <div className="bg-gradient-to-br from-amber-900/10 via-black/50 to-amber-900/5 border border-amber-800/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-lilita text-amber-100 mb-4 sm:mb-6">
              Who <span className="text-amber-300">I Am</span>
            </h2>
            <Reveal
              keyframes={customFadeInLeft}
              duration={600}
              cascade
              damping={0.1}
              triggerOnce
            >
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-amber-100/90">
                <p>
                  I'm <span className="text-amber-300">Angela S. Nwattah</span>,
                  a passionate Frontend Developer with expertise in building
                  modern, responsive, user friendly and high-performance web
                  applications.
                </p>
                <p>
                  My journey in web development started with a love for design
                  and evolved into a deep appreciation for clean, efficient
                  code. I specialize in{" "}
                  <span className="text-amber-300">HTML</span>,{" "}
                  <span className="text-amber-300">CSS</span>,{" "}
                  <span className="text-amber-300">JavaScript</span>,{" "}
                  <span className="text-amber-300">React.js</span>,{" "}
                  <span className="text-amber-300">Redux</span>,{" "}
                  <span className="text-amber-300">Redux Toolkit</span>,{" "}
                  <span className="text-amber-300">Next.js</span>, and{" "}
                  <span className="text-amber-300">Tailwind CSS</span>, creating
                  seamless user experiences.
                </p>

                <p>
                  I love learning new languages and tools, it keeps me growing
                  and adaptable. I believe every new language teaches one a new
                  way of thinking, and thats exciting to me 😊
                </p>
                <p>
                  When I'm not coding, I enjoy contributing to open-source
                  projects, experimenting with new animations, and mentoring
                  aspiring developers.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default About;
