import React from "react";
import { motion } from "framer-motion";
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

const Projects = () => {
  const projects = [
    {
      id: "corley-legal",
      title: "Corley Legal",
      description:
        "A paralegal service platform designed to assist individuals in connecting with qualified legal professionals across various domains, including business law, family law, criminal law, intellectual property, estate planning, and personal injury.",
      tags: [
        "React",
        "Tailwind CSS",
        "Supabase",
        "Twillio",
        "Google Cloud Services",
        "React-Router-Dom",
        "Lazy-loading & Suspense",
        "Swiper.js",
        "React-Awesome-Reveal",
        "Framer motion",
        "Plesk",
      ],
      image: "https://corley.legal",
      links: {
        live: "https://corley.legal",
        code: "https://github.com/angelapeters1601/corley-legal",
      },
      accentColor: "bg-[#764ABC]/20",
      icon: <SiRedux className="text-[#764ABC]" />,
    },
    {
      id: "rate-it",
      title: "RateIt",
      description:
        "A beauty product review web application inspired by Good Housekeeping. It helps users make informed decisions by providing access to expert reviews and ratings.",

      tags: [
        "React.js",
        "Redux toolkit",
        "Tailwindcss",
        "Email.Js",
        "Animations",
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
      id: "fast-react-pizza",
      title: "Fast React Pizza Co.",
      description:
        "Blazing-fast pizza ordering experience with real-time cart updates. Reduced checkout time by 40% through UX optimizations.",
      tags: [
        "React",
        "Redux toolkit",
        "Tailwindcss",
        "Vite",
        "React-Router-dom",
      ],
      image: "https://angelapeters1601.github.io/fast-react-pizza",
      links: {
        live: "https://angelapeters1601.github.io/fast-react-pizza",
        code: "https://github.com/angelapeters1601/fast-react-pizza",
      },
      accentColor: "bg-[#E34F26]/20",
      icon: <FaReact className="text-[#61DAFB]" />,
    },
    {
      id: "brain-buster",
      title: "Brain Buster",
      description:
        "Interactive quiz app with 500+ questions. Reviewed and rated by top udemy instructor and teaching assistant.",
      tags: ["React", "useReducer", "Animations"],
      image: "https://brain-buster-six.vercel.app",
      links: {
        live: "https://brain-buster-six.vercel.app",
        code: "https://github.com/angelapeters1601/brain-buster",
      },
      accentColor: "bg-[#FFCA28]/20",
      icon: <SiFirebase className="text-[#FFCA28]" />,
    },

    {
      id: "portfolio",
      title: "Portfolio",
      description:
        "A personal portfolio site built to showcase my projects, skills, and developer journey. Designed with a focus on responsiveness, accessibility, and smooth user experience.",

      tags: [
        "React.js",
        "Tailwindcss",
        "Hooks",
        "Framer motion",
        "React awesome reveal",
        "React-typewriter",
        "React loading skeleton",
        "Email.js",
      ],
      // image: Portfolio,
      links: {
        live: "https://onefarmtech.com/",
        code: "https://github.com/angelapeters1601/portfolio",
      },
      accentColor: "bg-[#47A248]/20",
      icon: <SiMongodb className="text-[#47A248]" />,
    },
    {
      id: "chefspal",
      title: "Chef's Pal",
      description:
        "Chef’s Pal is a dynamic recipe discovery and meal-planning web application inspired by simple and intuitive cooking experiences. It allows users to explore recipes based on categories such as mealtime, meal type, and dietary preferences (vegan or non-vegan). Users can search for specific meals, save their favorite recipes for quick access, and generate a shopping list automatically populated with essential ingredients.",
      tags: ["React.js", "CSS modules", "ContextAPI", "Animations", "Email.js"],
      // image: ChefsPal,
      links: {
        live: "https://onefarmtech.com/",
        code: "https://github.com/angelapeters1601/chef-sPal",
      },
      accentColor: "bg-[#47A248]/20",
      icon: <SiMongodb className="text-[#47A248]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-black to-amber-900 border border-amber-800 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
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

      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl mt-15 font-bold font-playfair text-amber-900 dark:text-amber-100 mb-4">
            Project{" "}
            <span className="text-amber-600 dark:text-amber-300">Gallery</span>
          </h1>
          <p className="text-xl text-amber-800/80 dark:text-amber-100/70 max-w-3xl mx-auto">
            Each creation represents problems solved, technologies mastered, and
            design decisions made
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                   bg-white/90 dark:bg-black/80 text-xs 
                   font-medium rounded-full shadow"
                  >
                    Preview
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-amber-100">
                      {project.title}
                    </h2>
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

                  <p className="text-gray-700 dark:text-amber-100/80 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-100/50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
