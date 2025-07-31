import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaUserTie,
  FaFile,
  FaHome,
} from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const leftItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const rightItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-customBlack overflow-x-hidden border-t border-amber-700/20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Brand Column */}
          <motion.div
            className="md:col-span-2 space-y-6"
            variants={containerVariants}
          >
            <motion.h2
              variants={leftItemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold font-sevillana tracking-wide text-amber-100"
            >
              Angela Nwattah
            </motion.h2>

            <motion.p
              variants={leftItemVariants}
              className="text-amber-50 font-sans text-base sm:text-lg"
            >
              Developing intuitive digital experiences that balance aesthetic
              appeal with seamless functionality and accessibility.
            </motion.p>

            <motion.div
              className="flex space-x-4 pt-4"
              variants={leftItemVariants}
            >
              {[
                {
                  icon: <FaGithub size={20} />,
                  url: "https://github.com/angelapeters1601",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin size={20} />,
                  url: "https://linkedin.com/in/nwattah-angela",
                  label: "LinkedIn",
                },
                {
                  icon: <FaTwitter size={20} />,
                  url: "https://twitter.com/mavoolumma",
                  label: "Twitter",
                },
                {
                  icon: <FaFacebook size={20} />,
                  url: "https://facebook.com/nwattah.angela",
                  label: "Facebook",
                },
                {
                  icon: <FaEnvelope size={20} />,
                  url: "mailto:angelnwattah@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-100 bg-amber-800 hover:bg-amber-800 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md"
                  aria-label={social.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.h3
              variants={rightItemVariants}
              className="text-xl sm:text-2xl font-lilita text-amber-100 uppercase tracking-wider"
            >
              <FaCode className="inline mr-2" />
              Explore
            </motion.h3>
            <ul className="space-y-3 font-sans text-base sm:text-lg">
              {[
                {
                  icon: <FaHome className="mr-2 text-amber-200" />,
                  text: "Home",
                  url: "/",
                },
                {
                  icon: <FaUserTie className="mr-2 text-amber-200" />,
                  text: "About",
                  url: "/about",
                },
                {
                  icon: <FaFile className="mr-2 text-amber-200" />,
                  text: "Resume",
                  url: "/resume",
                },
                {
                  icon: <FaCode className="mr-2 text-amber-200" />,
                  text: "Projects",
                  url: "/projects",
                },
              ].map((item, index) => (
                <motion.li key={index} variants={rightItemVariants}>
                  <a
                    href={item.url}
                    className="text-amber-50 hover:text-amber-200 flex items-center transition-colors duration-300"
                  >
                    {item.icon} {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.h3
              variants={itemVariants}
              className="text-xl sm:text-2xl font-lilita text-amber-100 uppercase tracking-wider"
            >
              <FaMapMarkerAlt className="inline mr-2" />
              Contact
            </motion.h3>
            <ul className="space-y-3 font-sans text-base sm:text-lg">
              {[
                {
                  icon: (
                    <FaPhone className="text-amber-200 mt-1 mr-3 flex-shrink-0" />
                  ),
                  content: (
                    <a
                      href="tel:+2348104352294"
                      className="text-amber-50 hover:text-amber-200 transition-colors duration-300"
                    >
                      +234 810 435 2294
                    </a>
                  ),
                },
                {
                  icon: (
                    <FaEnvelope className="text-amber-200 mt-1 mr-3 flex-shrink-0" />
                  ),
                  content: (
                    <a
                      href="mailto:angelnwattah@gmail.com"
                      className="text-amber-50 hover:text-amber-200 transition-colors duration-300"
                    >
                      angelnwattah@gmail.com
                    </a>
                  ),
                },
                {
                  icon: (
                    <FaMapMarkerAlt className="text-amber-200 mt-1 mr-3 flex-shrink-0" />
                  ),
                  content: (
                    <span className="text-amber-50">Lagos, Nigeria</span>
                  ),
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  {item.icon}
                  {item.content}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-amber-700/30 my-12"
        />

        {/* Copyright */}
        <motion.div
          className="flex flex-col sm:flex-col md:flex-row justify-between items-center gap-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <p className="font-mono text-amber-200 text-sm">
            © {currentYear} Nwattah Angela. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              { text: "Privacy Policy", url: "#privacy" },
              { text: "Terms of Service", url: "#terms" },
              { text: "Cookies", url: "#cookies" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                className="text-amber-200 hover:text-amber-100 font-sans text-sm transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
