import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiStyledcomponents,
  SiReact,
} from "react-icons/si";
import RateItImg from "../assets/rate-it.png";

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

const customFadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customScaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Projects = () => {
  const projects = [
    {
      id: "corley-legal",
      title: "Corley Legal",
      description:
        "A paralegal service platform designed to assist individuals in connecting with qualified legal professionals across various domains, including business law, family law, criminal law, intellectual property, estate planning, and personal injury.",
      tags: [
        "React",
        "JavaScript",
        "NodeJs",
        "Nodemailer",
        "Tailwind CSS",
        "Supabase",
        "Twillio",
        "Livechat",
        "Resend",
        "Posthog",
        "Geolocation",
        "Chart.js",
        "Google Cloud Services",
        "React-Router-Dom",
        "Lazy-loading & Suspense",
        "Swiper.js",
        "React-Awesome-Reveal",
        "React-fast-marquee",
        "React-countup",
        "Framer motion",
        "Plesk",
      ],
      image: "https://corley.legal",
      links: {
        live: "https://corley.legal",
        code: "https://github.com/angelapeters1601/corley-legal",
      },
      accentColor: "bg-[#86dA0C]/20",
      icon: <SiRedux className="text-[#764ABC]" />,
    },
    {
      id: "jiffyfox",
      title: "JiffyFox",
      description:
        "A multi-service platform offering on-demand solutions including handyman and contracting services, smart home installations, residential & commercial cleaning, courier & moving logistics, and project/staff/event management, all through a sleek, modern interface.",
      tags: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Material UI",
        "Supabase",
        "Framer Motion",
        "Heroicons",
        "React-Router-Dom",
        "Lazy-loading & Suspense",
        "Shadcn UI",
        "Cloudinary",
        "Google Maps API",
        "Posthog",
        "PWA Ready",
      ],
      image: "https://jiffyfox.com",
      links: {
        live: "https:jiffyfox.com",
        code: "https://github.com/angelapeters1601/jiffyfox",
      },
      accentColor: "bg-[#6017B4]/20",
      icon: <SiReact className="text-[#6017B4]" />,
    },
    {
      id: "rate-it",
      title: "RateIt",
      description:
        "A beauty product review web application inspired by Good Housekeeping. It helps users make informed decisions by providing access to expert reviews and ratings.",
      tags: [
        "React.js",
        "JavaScript",
        "Redux toolkit",
        "Tailwindcss",
        "Email.Js",
        "Swiper.js",
        "React-count-up",
        "React-awesome-reveal",
        "Optimized images",
        "Lazy loading",
        "Cloudinary",
        "Vite",
        "Custom API",
      ],
      image: RateItImg,
      links: {
        live: "https://rate-it-one.vercel.app/",
        code: "https://github.com/angelapeters1601/rate-it",
      },
      accentColor: "bg-[#007FFF]/20",
      icon: <SiTailwindcss className="text-black dark:text-white" />,
    },
    {
      id: "chefspal",
      title: "Chef's Pal",
      description:
        "Chef's Pal is a dynamic recipe discovery and meal-planning web application inspired by simple and intuitive cooking experiences. It allows users to explore recipes based on categories such as mealtime, meal type, and dietary preferences (vegan or non-vegan). Users can search for specific meals, save their favorite recipes for quick access, and generate a shopping list automatically populated with essential ingredients.",
      tags: [
        "React.js",
        "JavaScript",
        "CSS modules",
        "Bootstrap",
        "React Hooks",
        "ContextAPI",
        "Memoisation",
        "React Router",
        "Email.js",
        "Framer motion",
      ],
      links: {
        live: "https://chef-s-pal.vercel.app/",
        code: "https://github.com/angelapeters1601/chef-sPal",
      },
      accentColor: "bg-[#FFD700]/20",
      icon: <SiMongodb className="text-[#47A248]" />,
    },
    {
      id: "fast-react-pizza",
      title: "Fast React Pizza Co.",
      description:
        "Blazing-fast pizza ordering experience with real-time cart updates. Reduced checkout time by 40% through UX optimizations.",
      tags: [
        "React",
        "JavaScript",
        "Redux toolkit",
        "Tailwindcss",
        "Vite",
        "React-Router v6.4",
        "Geolocation API",
      ],
      image: "https://angelapeters1601.github.io/fast-react-pizza",
      links: {
        live: "https://angelapeters1601.github.io/fast-react-pizza",
        code: "https://github.com/angelapeters1601/fast-react-pizza",
      },
      accentColor: "bg-[#FACC15]/20",
      icon: <FaReact className="text-[#61DAFB]" />,
    },
    {
      id: "brain-buster",
      title: "Brain Buster",
      description:
        "Interactive quiz app with 500+ questions. Reviewed and rated by top udemy instructor and teaching assistant.",
      tags: ["React", "useReducer", "JavaScript", "Framer motion", "Vite"],
      image: "https://brain-buster-six.vercel.app",
      links: {
        live: "https://brain-buster-six.vercel.app",
        code: "https://github.com/angelapeters1601/brain-buster",
      },
      accentColor: "bg-[#F472B6]/20",
      icon: <SiFirebase className="text-[#FFCA28]" />,
    },
    {
      id: "portfolio",
      title: "Portfolio",
      description:
        "A personal portfolio site built to showcase my projects, skills, and developer journey. Designed with a focus on responsiveness, accessibility, and smooth user experience.",
      tags: [
        "React.js",
        "JavaScript",
        "Tailwindcss",
        "Hooks",
        "Framer motion",
        "React awesome reveal",
        "React-typewriter",
        "React loading skeleton",
        "Email.js",
        "Three.js",
      ],
      links: {
        live: "https://portfolio-2d4m.vercel.app/",
        code: "https://github.com/angelapeters1601/portfolio",
      },
      accentColor: "bg-[#EF4444]/20",
      icon: <SiMongodb className="text-[#47A248]" />,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden sm: mt-20 bg-gradient-to-br from-amber-900 via-black to-amber-900 border border-amber-800 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm shadow-xl">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-200/20 dark:bg-amber-900/10"
            initial={{
              scale: 0,
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.1, 0],
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
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
            }}
          />
        ))}
      </div>

      <div className="containermx-auto px-4 sm:px-6 py-12 md:py-24 relative z-10">
        <Reveal keyframes={customFadeIn} duration={800} triggerOnce>
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair text-amber-900 dark:text-amber-100 mb-3 md:mb-4">
              Project{" "}
              <span className="text-amber-600 dark:text-amber-300">
                Gallery
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-amber-800/80 dark:text-amber-100/70 max-w-3xl mx-auto px-4">
              Each creation represents problems solved, technologies mastered,
              and design decisions made
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Reveal
              key={index}
              keyframes={customScaleIn}
              duration={600}
              delay={index * 100}
              triggerOnce
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative h-full"
              >
                <div
                  className={`absolute -inset-1 rounded-2xl ${project.accentColor} blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <Link
                  to={`/projects/${project.id}`}
                  className="relative h-full block bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`h-48 ${project.accentColor} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    <div className="relative z-10 text-6xl opacity-20 dark:opacity-30">
                      {project.icon}
                    </div>
                    <span
                      className="absolute bottom-4 right-4 px-3 py-1
                     bg-white/90 dark:bg-black/80 text-xs text-amber-300
                     font-medium rounded-full shadow"
                    >
                      Preview
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Reveal
                        keyframes={customFadeInUp}
                        duration={600}
                        triggerOnce
                      >
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-amber-100">
                          {project.title}
                        </h2>
                      </Reveal>
                      <div className="flex space-x-2">
                        {project.links.code && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-amber-100/70 dark:bg-amber-900/50 text-gray-700 dark:text-amber-200 hover:bg-amber-200/70 dark:hover:bg-amber-800/70 transition-colors"
                            aria-label="View code"
                          >
                            <FaGithub className="text-lg" />
                          </motion.a>
                        )}
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-amber-100/70 dark:bg-amber-900/50 text-gray-700 dark:text-amber-200 hover:bg-amber-200/70 dark:hover:bg-amber-800/70 transition-colors"
                          aria-label="Live demo"
                        >
                          <FaExternalLinkAlt className="text-lg" />
                        </motion.a>
                      </div>
                    </div>

                    <Reveal
                      keyframes={customFadeInUp}
                      duration={600}
                      delay={200}
                      triggerOnce
                    >
                      <p className="text-sm sm:text-base text-gray-700 dark:text-amber-100/80 mb-4">
                        {project.description}
                      </p>
                    </Reveal>

                    <Reveal
                      keyframes={customFadeInUp}
                      duration={600}
                      delay={300}
                      triggerOnce
                    >
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs sm:text-xs bg-amber-100/50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Reveal>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
