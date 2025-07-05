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

  // Mock resume data
  const resumeData = {
    name: "Angela S. Nwattah",
    title: "Frontend Web Developer",
    contact: {
      email: "✉️angelnwattah@gmail.com",
      phone: "📞+234 810 435 2294",
      linkedin: "🔗https://www.linkedin.com/in/nwattah-angela",
      github: "🔗https://github.com/angelapeters1601",
    },
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "Styled Components",
      "Material UI",
      "Supabase",
      "Figma",
      "Node.js",
      "MongoDB",
      "Github",
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
        company: "Corley Integrated",
        period: "June 2025 - Present",
        achievements: [
          "Developed a fullstack paralegal platform using **React.js + Supabase**, featuring:",
          "Auth System: Implemented email/password + OAuth (Google/GitHub) with Supabase Auth, JWT validation, and protected routes",
          "Role-Based Access Control: Designed 3-tier permissions (Admin/Lawyers/Clients) with middleware for route protection",
          "Admin Dashboard: Built a dynamic interface for managing form submissions, client reviews, and document approvals with real-time updates",
          "Document Management: Created secure file uploads (PDF/DOCX/MP4) with Supabase Storage, including client-specific access controls",
          "Database Architecture: Designed relational schemas with Row-Level Security (RLS) policies to enforce data privacy between clients and legal teams",
          "Performance: Reduced initial load time by 50% via code-splitting (React.lazy) and optimized Supabase queries with indexes",
          "Job Tracking System: Developed an application tracker with status updates (Applied/Review/Approved) and email notifications",
          "UI/UX Improvements: Implemented a design system with Tailwind CSS, reducing UI inconsistencies by 40%",
          "Tech Stack: React, Supabase (PostgreSQL), Tailwind, Node.js (for custom functions)",
        ],
      },
      {
        role: "Freelance Developer & Technical Upskilling",
        company: "Self-Employed",
        period: "November 2024 - May 2025",
        achievements: [
          "Completed advanced courses in **React, Node.js, and database design**, building projects",
          "Freelanced for 3 clients, delivering **responsive UIs** and **Supabase-backed applications**",
          "Contributed to open-source projects, fixing bugs and improving documentation",
          "Developed personal projects to showcase skills",
        ],
      },

      {
        role: "Frontend Developer",
        company: "Octahedron Software",
        period: "August 2023 - November 2024",
        achievements: [
          "Designed and implemented responsive web interfaces to enhance user accessibility and experience across multiple devices.",
          "Built scalable and maintainable applications using React, adhering to best practices in component-based architecture.",
          "Integrated RESTful APIs to enable dynamic content updates and seamless data retrieval for client applications.",
          "Optimized web application performance by implementing lazy loading, code splitting, and asset compression.",
          "Ensured cross-browser compatibility, delivering consistent functionality and appearance across major browsers.",
          "Delivered accessible web applications by implementing WCAG standards to meet diverse user needs.",
          "Collaborated with cross-functional teams using Git and GitHub to manage version control and streamline workflows.",
          "Developed and maintained reusable components to ensure consistency and reduce development time.",
          "Participated in design discussions, provided technical insights, and implemented feedback to achieve project objectives.",
          "Diagnosed and resolved UI/UX issues, improving usability and overall user satisfaction.",
          "Utilized JavaScript libraries and frameworks to enhance application functionality and improve development efficiency.",
          "Implemented responsive design principles to ensure seamless user experiences across various devices and screen sizes.",
          "Conducted code reviews and provided constructive feedback to team members to improve overall code quality.",
          "Stayed up-to-date with industry trends and emerging technologies to continuously improve skills and knowledge.",
        ],
      },
      {
        role: "Frontend Developer",
        company: "Techpem plc",
        period: "2020 - 2022",
        achievements: [
          "Designed and implemented responsive web interfaces ensuring seamless cross-device user experiences",
          "Developed scalable React applications using reusable component architecture",
          "Integrated frontend with RESTful APIs for efficient data fetching and client-server communication",
          "Optimized application performance through asset optimization and lazy loading techniques",
          "Collaborated with designers and backend developers to align UI with functional requirements",
          "Implemented WCAG standards to create accessible web applications",
          "Conducted cross-browser testing to ensure consistent functionality and visual appeal",
          "Managed codebase using Git/GitHub for effective team collaboration",
        ],
      },
      {
        role: "Frontend Web Developer",
        company: "Freelance",
        period: "June 2021 - May 2022",
        achievements: [
          "Collaborated with clients to understand requirements and deliver tailored solutions",
          "Applied responsive design principles to enhance mobile user experience",
          "Implemented UI/UX best practices to create intuitive interfaces",
          "Developed interactive UI components including modals, carousels, and dropdowns",
          "Conducted thorough testing and debugging to ensure optimal performance",
          "Performed regular website updates and performance optimizations",
          "Implemented version control using Git for efficient code management",
          "Documented code and workflows to streamline onboarding and maintenance",
          "Worked remotely, demonstrating strong self-motivation and time management skills.",
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
        title: "The web developer bootcamp",
        instructor: "Colt Steele",
        issuer: "Udemy",
      },
      {
        title: "The Ultimate React Course",
        instructor: "Jonas Schmedtmann",
        issuer: "Udemy",
      },
    ],
  };

  return (
    <div
      className="min-h-screen mt-20 bg-gradient-to-br from-amber-900
     via-black to-amber-900 border border-amber-800 rounded-2xl
      p-8 backdrop-blur-sm shadow-xl py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-amber-900 dark:text-amber-100 mb-4">
            My{" "}
            <span className="text-amber-600 dark:text-amber-300">
              Credentials
            </span>
          </h1>
          <p className="text-lg text-amber-800/80 font-mono dark:text-amber-100/70">
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
          <div className="bg-amber-100/50 dark:bg-amber-900/30 p-6 border-b border-amber-200/50 dark:border-amber-800/30">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-amber-100">
                  {resumeData.name}
                </h2>
                <p className="text-amber-700 dark:text-amber-300">
                  {resumeData.title}
                </p>
              </div>
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg flex items-center text-sm font-medium"
                >
                  <FaFilePdf className="mr-2" />
                  View Full
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="resume.pdf"
                  download="Nwattah-Angela-Resume.pdf"
                  className="px-4 py-2 bg-white dark:bg-gray-700 border border-amber-600 text-amber-600 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-gray-600 rounded-lg flex items-center text-sm font-medium"
                >
                  <FaDownload className="mr-2" />
                  Download
                </motion.a>
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="p-6 grid md:grid-cols-3 gap-8">
            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                Contact
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-amber-100/80">
                <li className=" hover:text-amber-600 hover:underline hover:underline-offset-2 dark:hover:text-amber-300 transition-colors duration-200">
                  <a
                    href={`mailto:${resumeData.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
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
                <li className="flex items-center hover:text-amber-600 hover:underline hover:underline-offset-2 dark:hover:text-amber-300 transition-colors duration-200 ">
                  <FaLinkedin className="mr-2 text-[#0077B5]" />
                  <a
                    href={resumeData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resumeData.contact.linkedin}
                  </a>
                </li>
                <li className="flex items-center hover:text-amber-600 hover:underline hover:underline-offset-2 dark:hover:text-amber-300 transition-colors duration-200">
                  <FaGithub className="mr-2" />
                  <a
                    href={resumeData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resumeData.contact.github}
                  </a>
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-amber-100/50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications Preview */}
            <div>
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                Certifications
              </h3>
              <div className="space-y-4">
                {resumeData.certifications.slice(0, 1).map((cert, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-900 dark:text-amber-100">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      {cert.instructor} • {cert.issuer}
                    </p>
                  </div>
                ))}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-amber-600 dark:text-amber-400 text-sm font-medium hover:underline"
                >
                  + {resumeData.certifications.length - 1} more certifications
                </button>
              </div>
            </div>

            {/* Experience Preview */}
            <div>
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                Experience
              </h3>
              <div className="space-y-4">
                {resumeData.experience.slice(0, 1).map((exp, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-900 dark:text-amber-100">
                      {exp.role}
                    </h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      {exp.company} • {exp.period}
                    </p>
                  </div>
                ))}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-amber-600 dark:text-amber-400 text-sm font-medium hover:underline"
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
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center z-10">
                <h2 className="text-xl font-bold text-gray-900 dark:text-amber-100">
                  {resumeData.name}'s Resume
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-amber-200"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Full Resume Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                      Contact
                    </h3>
                    <ul className="space-y-2 text-gray-700 dark:text-amber-100/80">
                      <li>{resumeData.contact.email}</li>
                      <li>{resumeData.contact.phone}</li>
                      <li className="flex items-center">
                        <FaLinkedin className="mr-2 text-[#0077B5]" />
                        {resumeData.contact.linkedin}
                      </li>
                      <li className="flex items-center">
                        <FaGithub className="mr-2" />
                        {resumeData.contact.github}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-amber-100/50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                      Education
                    </h3>
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="mb-4">
                        <h4 className="font-medium text-gray-900 dark:text-amber-100">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-amber-100/80">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                          {edu.year}
                        </p>
                      </div>
                    ))}

                    {/* Certifications Section */}
                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30 mt-6">
                      Certifications
                    </h3>
                    {resumeData.certifications.map((cert, index) => (
                      <div key={index} className="mb-4">
                        <h4 className="font-medium text-gray-900 dark:text-amber-100">
                          {cert.title}
                        </h4>
                        <p className="text-gray-600 dark:text-amber-100/80">
                          {cert.instructor}
                        </p>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                          {cert.issuer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 pb-2 border-b border-amber-200/50 dark:border-amber-800/30">
                    Experience
                  </h3>
                  <div className="space-y-6">
                    {resumeData.experience.map((exp, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-amber-500 pl-4"
                      >
                        <h4 className="text-xl font-medium text-gray-900 dark:text-amber-100">
                          {exp.role}
                        </h4>
                        <p className="text-amber-700 dark:text-amber-300">
                          {exp.company} • {exp.period}
                        </p>
                        <ul className="mt-2 space-y-2 text-gray-700 dark:text-amber-100/80">
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

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  download="Nwattah-Angela-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg flex items-center text-sm font-medium"
                >
                  <FaDownload className="mr-2" />
                  Download PDF
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
