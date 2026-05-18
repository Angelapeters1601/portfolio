import React, { useState } from "react";
import {
  FaDownload,
  FaTimes,
  FaFilePdf,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //resume data
  const resumeData = {
    name: "Angela",
    title: "Frontend Web Developer",
    contact: {
      email: "✉️angelnwattah@gmail.com",
      phone: "+234 810 435 2294",
      linkedin: "https://www.linkedin.com/in/nwattah-angela",
      github: "https://github.com/angelapeters1601",
    },
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Bootstrap",
      "Styled Components",
      "Material UI",
      "Supabase",
      "Figma",
      "Node.js",
      "MongoDB",
      "Moongoose",
      "Github",
      "Plesk",
      "DNS Management",
      "SSL/TLS Configuration",
      "Deployment",
      "Cloudinary",
      "Authentication & Authorization",
      "Agile Methodologies",
      "Responsive Design",
      "Animation",
      "Cross-Browser Compatibility",
      "Accessibility (WCAG)",
      "Performance Optimization",
      "Package Managers (npm, yarn)",
      "Browser Developer Tools",
    ],
    experience: [
      {
        role: "Fullstack Web Developer",
        company: "Corley Integrated, USA (Remote)",
        period: "June 2025 - Present",
        achievements: [
          "Built and maintained production-ready web applications using React, Supabase, Node.js, and Tailwind CSS.",
          "Implemented authentication workflows including account registration, login, session handling, and role-based access control.",
          "Developed admin dashboards for managing documents, forms, users, and platform activity with secure role-based workflows.",
          "Built secure file upload systems with client-specific access permissions and protected content workflows.",
          "Implemented chatbot-to-live-agent escalation features and real-time notification systems.",
          "Managed deployment workflows, server migrations, DNS configurations, and SSL/​TLS setup using Plesk and IONOS.",
          "Diagnosed and resolved production issues including mail delivery failures, environment configuration problems, and deployment errors.",
        ],
      },
      {
        role: "Freelance Developer & Technical Upskilling",
        company: "Freelance",
        period: "November 2024 - June 2025",
        achievements: [
          "Built fullstack applications, including a legal document management system using React and Supabase.",
          "Delivered responsive, production-ready web apps for 3+ freelance clients using modern tech stacks.",
          "Contributed to open-source projects by resolving bugs and improving documentation.",
          "Completed over 100 hours of advanced training on React, Node.js, and database architecture.",
        ],
      },

      {
        role: "Frontend Web Developer",
        company: "Octahedron Software - Nigeria",
        period: "August 2023 - November 2024",
        achievements: [
          "Built scalable and maintainable applications using React, adhering to best practices in component-based architecture.",
          "Integrated RESTful APIs to support dynamic content rendering and real-time data retrieval.",
          "Improved frontend performance through lazy loading, code splitting, and asset optimization.",
          "Implemented accessible and mobile-responsive interfaces aligned with WCAG standards.",
          "Collaborated with cross-functional teams using GitHub to manage version control and streamline workflows.",
          "Developed and maintained reusable components to ensure consistency and reduce development time.",
          "Participated in code reviews, debugging, and technical discussions to improve application quality.",
        ],
      },
      {
        role: "Frontend Web Developer",
        company: "Techpem PLC - Nigeria",
        period: "June 2022 - July 2023",
        achievements: [
          "Developed responsive frontend interfaces using React and reusable component architecture.",
          "Integrated frontend applications with RESTful APIs to support efficient client-server communication.",
          "Optimized application performance using lazy loading, asset compression, and responsive rendering techniques.",
          "Conducted cross-browser testing and debugging to maintain consistent user experience across devices.",
          "Collaborated with designers and backend developers to implement functional and visually consistent interfaces.",
          "Implemented form validation and user feedback systems to improve usability and data accuracy.",
        ],
      },
      {
        role: "Frontend Web Developer",
        company: "Freelance - Nigeria",
        period: "June 2021 - May 2022",
        achievements: [
          "Built responsive websites and frontend interfaces tailored to client requirements.",
          "Applied UI/​UX principles to improve usability, layout consistency, and user engagement.",
          "Performed testing, debugging, and cross-browser optimization to improve application reliability.",
          "Conducted website maintenance, performance optimization, and content updates for client projects.",
          "Implemented version control workflows using GitHub.",
        ],
      },
    ],
    education: [
      {
        institution: "University of Benin",
        degree: "Master of Science in Agriculture",
        year: "2022-2024",
      },
      {
        institution: "University of Benin",
        degree: "Bachelor of Science in Agriculture",
        year: "2012-2017",
      },
    ],
    certifications: [
      {
        title: "The Web Developer Bootcamp",
        instructor: "Colt Steele",
        issuer: "Udemy",
      },
      {
        title: "The Ultimate React",
        instructor: "Jonas Schmedtmann",
        issuer: "Udemy",
      },
    ],
  };
  return (
    <div className="min-h-screen overflow-x-hidden mt-22 bg-gradient-to-br from-amber-900 via-black to-amber-900 border border-amber-800 rounded-2xl px-4 py-10 sm:px-6 lg:px-8 backdrop-blur-sm shadow-xl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-amber-900 dark:text-amber-100 mb-3 sm:mb-4">
            My{" "}
            <span className="text-amber-600 dark:text-amber-300">
              Credentials
            </span>
          </h1>
          <p className="text-base sm:text-lg text-amber-800/80 font-mono dark:text-amber-100/70">
            Professional journey and technical capabilities
          </p>
        </div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-amber-200/50 dark:border-amber-800/30"
        >
          {/* Resume Header */}
          <div className="bg-amber-100/50 dark:bg-amber-900/30 p-4 sm:p-6 border-b border-amber-200/50 dark:border-amber-800/30">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-amber-100">
                  {resumeData.name}
                </h2>
                <p className="text-sm sm:text-base text-amber-700 dark:text-amber-300">
                  {resumeData.title}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg flex items-center text-xs sm:text-sm font-medium"
                >
                  <FaFilePdf className="mr-1 sm:mr-2" />
                  View Full
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="CV.pdf"
                  download="Nwattah-Angela-Resume.pdf"
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-white dark:bg-gray-700 border border-amber-600 text-amber-600 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-gray-600 rounded-lg flex items-center text-xs sm:text-sm font-medium"
                >
                  <FaDownload className="mr-1 sm:mr-2" />
                  Download
                </motion.a>
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Contact */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 sm:mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                Contact
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-amber-100/80">
                <li className="hover:text-amber-600 hover:underline hover:underline-offset-2 dark:hover:text-amber-300 transition-colors duration-200">
                  <a
                    href={`mailto:${resumeData.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all"
                  >
                    {resumeData.contact.email}
                  </a>
                </li>
                <li className="flex items-center hover:text-amber-600 hover:underline hover:underline-offset-2 dark:hover:text-amber-300 transition-colors duration-200">
                  <a
                    href={`tel:${resumeData.contact.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resumeData.contact.phone}
                  </a>
                </li>

                <li className="flex items-center hover:text-amber-600 hover:underline hover:underline-offset-2 dark:hover:text-amber-300 transition-colors duration-200">
                  <FaLinkedin className="mr-2 text-[#0077B5] flex-shrink-0" />
                  <a
                    href={resumeData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden xs:inline hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                  <a
                    href={resumeData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="xs:hidden hover:underline"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center hover:text-amber-600 hover:underline hover:underline-offset-2 dark:hover:text-amber-300 transition-colors duration-200">
                  <FaGithub className="mr-2 flex-shrink-0" />
                  <a
                    href={resumeData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden xs:inline hover:underline"
                  >
                    GitHub Profile
                  </a>
                  <a
                    href={resumeData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="xs:hidden hover:underline"
                    aria-label="GitHub"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 sm:mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-amber-100/50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs sm:text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications Preview */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 sm:mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                Certifications
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {resumeData.certifications.slice(0, 1).map((cert, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-sm sm:text-base text-gray-900 dark:text-amber-100">
                      {cert.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-300">
                      {cert.instructor} • {cert.issuer}
                    </p>
                  </div>
                ))}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-medium hover:underline"
                >
                  + {resumeData.certifications.length - 1} more certifications
                </button>
              </div>
            </div>

            {/* Experience Preview */}
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 sm:mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                Experience
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {resumeData.experience.slice(0, 1).map((exp, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-sm sm:text-base text-gray-900 dark:text-amber-100">
                      {exp.role}
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-300">
                      {exp.company} • {exp.period}
                    </p>
                  </div>
                ))}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-medium hover:underline"
                >
                  + {resumeData.experience.length - 1} more positions
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full Resume Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 z-50 
            flex items-start justify-center p-0 sm:p-5 sm:pt-[3vh]"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800
               w-full h-full sm:rounded-2xl shadow-2xl 
               sm:max-w-4xl sm:h-auto sm:max-h-[83vh] 
              flex flex-col relative"
            >
              {/* Modal Header */}
              <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sm:rounded-t-2xl">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-amber-100">
                  {resumeData.name}'s Resume
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-amber-200 transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
                {/* Full Resume Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 sm:mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                      Contact
                    </h3>
                    <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-amber-100/80">
                      <li className="break-all">{resumeData.contact.email}</li>
                      <li>{resumeData.contact.phone}</li>
                      <li className="flex items-center">
                        <FaLinkedin className="mr-2 text-[#0077B5] flex-shrink-0" />
                        <span className="truncate">
                          {resumeData.contact.linkedin}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <FaGithub className="mr-2 flex-shrink-0" />
                        <span className="truncate">
                          {resumeData.contact.github}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 sm:mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {resumeData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-amber-100/50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs sm:text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 sm:mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                      Education
                    </h3>
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="mb-3 sm:mb-4">
                        <h4 className="font-medium text-sm sm:text-base text-gray-900 dark:text-amber-100">
                          {edu.degree}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-amber-100/80">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-amber-700 dark:text-amber-300">
                          {edu.year}
                        </p>
                      </div>
                    ))}

                    {/* Certifications Section */}
                    <h3 className="text-base sm:text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 sm:mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30 mt-4 sm:mt-6">
                      Certifications
                    </h3>
                    {resumeData.certifications.map((cert, index) => (
                      <div key={index} className="mb-3 sm:mb-4">
                        <h4 className="font-medium text-sm sm:text-base text-gray-900 dark:text-amber-100">
                          {cert.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-amber-100/80">
                          {cert.instructor}
                        </p>
                        <p className="text-xs text-amber-700 dark:text-amber-300">
                          {cert.issuer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="pb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 sm:mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                    Experience
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {resumeData.experience.map((exp, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-amber-500 pl-3 sm:pl-4"
                      >
                        <h4 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-amber-100">
                          {exp.role}
                        </h4>
                        <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-300">
                          {exp.company} • {exp.period}
                        </p>
                        <ul className="mt-1 sm:mt-2 space-y-1 sm:space-y-2 text-sm text-gray-700 dark:text-amber-100/80">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer - Fixed at bottom */}
              <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end sm:rounded-b-2xl">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/CV.pdf"
                  download="Nwattah-Angela-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg flex items-center text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FaDownload className="mr-2" />
                  Download Full PDF
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resume;
