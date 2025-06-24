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

  // Mock resume data - replace with your actual details
  const resumeData = {
    name: "Nwattah Angela",
    title: "Frontend Web Developer",
    contact: {
      email: "angelnwattah@gmail.com",
      phone: "+234 810 435 2294",
      linkedin: "linkedin.com/in/nwattah-angela",
      github: "github.com/angelapeters1601",
    },
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Figma",
      "Node.js",
      "MongoDB",
    ],
    experience: [
      {
        role: "Frontend Lead",
        company: "OneFarmTech",
        period: "2022 - Present",
        achievements: [
          "Built agricultural SaaS platform serving 200+ farms",
          "Reduced dashboard load time by 65% through code splitting",
          "Mentored 3 junior developers",
        ],
      },
      {
        role: "UI Developer",
        company: "Corley Legal",
        period: "2020 - 2022",
        achievements: [
          "Developed secure client portal with role-based access",
          "Implemented design system reducing UI bugs by 40%",
        ],
      },
    ],
    education: [
      {
        institution: "University of Lagos",
        degree: "B.Sc Computer Science",
        year: "2019",
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
                  href="https://example.com/resume.pdf"
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
                  href="https://example.com/resume.pdf"
                  download="Nwattah-Angela-Resume.pdf"
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
