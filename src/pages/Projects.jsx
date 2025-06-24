import React from "react";
import { motion } from "framer-motion";
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
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Fast React Pizza Co.",
      description:
        "Blazing-fast pizza ordering experience with real-time cart updates and kitchen dashboard. Reduced checkout time by 40% through UX optimizations.",
      tags: ["React", "Redux", "Tailwind"],
      image: "https://angelapeters1601.github.io/fast-react-pizza",
      links: {
        live: "https://angelapeters1601.github.io/fast-react-pizza",
        code: "https://github.com/angelapeters1601/fast-react-pizza",
      },
      accentColor: "bg-[#E34F26]/20", // Pizza orange
      icon: <FaReact className="text-[#61DAFB]" />,
    },
    {
      title: "RateIt Reviews",
      description:
        "AI-powered review platform analyzing sentiment across 10K+ products. Implemented secure JWT auth with 99.9% uptime.",
      tags: ["Next.js", "MongoDB", "Node"],
      image: "https://rate-it-one.vercel.app/",
      links: {
        live: "https://rate-it-one.vercel.app/",
        code: "https://github.com/angelapeters1601/rate-it",
      },
      accentColor: "bg-[#007FFF]/20", // Azure blue
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    {
      title: "Brain Buster",
      description:
        "Interactive quiz app with 500+ questions. Featured on Product Hunt with 2K+ MAU and 4.8★ ratings.",
      tags: ["React", "Firebase", "Animations"],
      image: "https://brain-buster-six.vercel.app",
      links: {
        live: "https://brain-buster-six.vercel.app",
        code: "https://github.com/angelapeters1601/brain-buster",
      },
      accentColor: "bg-[#FFCA28]/20", // Quiz yellow
      icon: <SiFirebase className="text-[#FFCA28]" />,
    },
    {
      title: "OneFarmTech",
      description:
        "Agricultural SaaS platform serving 200+ farms. Integrated IoT sensors with custom data visualization dashboards.",
      tags: ["Next.js", "Tailwind", "Node"],
      image: "https://onefarmtech.com/",
      links: {
        live: "https://onefarmtech.com/",
      },
      accentColor: "bg-[#47A248]/20", // Farm green
      icon: <SiMongodb className="text-[#47A248]" />,
    },
    {
      title: "Corley Legal CRM",
      description:
        "Confidential client management for law firms. Implemented RBAC and audit trails meeting legal compliance standards.",
      tags: ["React", "MongoDB", "Node"],
      image: "https://corley.legal",
      links: {
        live: "https://corley.legal",
      },
      accentColor: "bg-[#764ABC]/20", // Legal purple
      icon: <SiRedux className="text-[#764ABC]" />,
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-amber-900
     via-black to-amber-900 border border-amber-800 rounded-2xl p-8 backdrop-blur-sm shadow-xl"
    >
      {/* Animated background elements */}
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
        {/* Header */}
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

        {/* Projects Grid */}
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
              {/* Glow effect */}
              <div
                className={`absolute -inset-1 rounded-2xl ${project.accentColor} blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              {/* Project card */}
              <div className="relative h-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image placeholder with tech icon */}
                <div
                  className={`h-48 ${project.accentColor} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="relative z-10 text-6xl opacity-20 dark:opacity-30">
                    {project.icon}
                  </div>
                  <span className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 dark:bg-black/80 text-xs font-medium rounded-full shadow">
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

                  {/* Tech tags */}
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

                  {/* Project details dropdown */}
                  <div className="border-t border-amber-200/50 dark:border-amber-800/30 pt-4">
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer list-none">
                        <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
                          Project Details
                        </span>
                        <svg
                          className="w-4 h-4 text-amber-600 dark:text-amber-400 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="mt-3 space-y-3 text-sm text-gray-600 dark:text-amber-100/70">
                        <div>
                          <span className="font-medium">Challenges:</span> Built
                          real-time cart updates without page refresh
                        </div>
                        <div>
                          <span className="font-medium">Learned:</span> Redux
                          optimization techniques
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
