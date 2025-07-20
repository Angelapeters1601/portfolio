import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_x0p7qxm",
        "template_rvcihgf",
        form.current
      );
      form.current.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen overflow-x-hidden bg-customBlack text-amber-50"
    >
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 mt-16 sm:mt-20 pb-12 sm:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,53,15,0.2)_0%,_rgba(0,0,0,0.8)_100%)] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1
            variants={slideInFromLeft}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair tracking-widest text-amber-100 mb-4"
          >
            Let's Build Something Amazing!
          </motion.h1>
          <motion.p
            variants={slideInFromLeft}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg font-sans text-amber-100/80 max-w-2xl"
          >
            I'm currently available for freelance work or full-time positions.
            Reach out and let's discuss how I can help bring your vision to
            life.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={slideInFromLeft}
            className="bg-amber-900/10 border border-amber-800/30 rounded-xl p-6 sm:p-8 backdrop-blur-sm"
          >
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-lilita text-amber-100 mb-6 flex items-center"
            >
              <FaPaperPlane className="mr-3 text-amber-200" />
              Send Me a Message
            </motion.h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5 sm:space-y-6"
            >
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-amber-100/80 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full bg-amber-900/20 border border-amber-800/40 rounded-lg px-4 py-3 text-amber-50 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-600/50 focus:border-transparent"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-amber-100/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full bg-amber-900/20 border border-amber-800/40 rounded-lg px-4 py-3 text-amber-50 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-600/50 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-amber-100/80 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full bg-amber-900/20 border border-amber-800/40 rounded-lg px-4 py-3 text-amber-50 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-600/50 focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={slideInFromRight} className="space-y-8">
            {/* Info */}
            <motion.div
              variants={containerVariants}
              className="bg-amber-900/10 border border-amber-800/30 rounded-xl p-6 sm:p-8"
            >
              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl font-lilita text-amber-100 mb-6"
              >
                Contact Information
              </motion.h2>

              <ul className="space-y-6">
                {[
                  {
                    icon: <FaEnvelope className="text-xl" />,
                    title: "Email",
                    value: "angelnwattah@gmail.com",
                    href: "mailto:angelnwattah@gmail.com",
                  },
                  {
                    icon: <FaPhone className="text-xl" />,
                    title: "Phone",
                    value: "+234 810 435 2294",
                    href: "tel:+2348104352294",
                  },
                  {
                    icon: <FaMapMarkerAlt className="text-xl" />,
                    title: "Location",
                    value: "Lagos, Nigeria",
                    href: null,
                  },
                ].map(({ icon, title, value, href }, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-amber-800/30 p-3 rounded-full mr-4 text-amber-200">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-amber-100/80 font-medium text-sm sm:text-base">
                        {title}
                      </h3>
                      {href ? (
                        <a
                          href={href}
                          className="text-amber-100 hover:text-amber-50 transition-colors text-sm sm:text-base"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-amber-100 text-sm sm:text-base">
                          {value}
                        </p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              className="bg-amber-900/10 border border-amber-800/30 rounded-xl p-6 sm:p-8"
            >
              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl font-lilita text-amber-100 mb-6"
              >
                Connect With Me
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                {[
                  {
                    href: "https://linkedin.com/in/nwattah-angela",
                    label: "LinkedIn",
                    icon: <FaLinkedin className="mr-2" />,
                  },
                  {
                    href: "https://github.com/angelapeters1601",
                    label: "GitHub",
                    icon: <FaGithub className="mr-2" />,
                  },
                  {
                    href: "https://twitter.com/mavoolumma",
                    label: "Twitter",
                    icon: <FaTwitter className="mr-2" />,
                  },
                ].map(({ href, label, icon }, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-amber-800/40 hover:bg-amber-700/60 text-amber-100 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base transition-all"
                  >
                    {icon}
                    {label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Contact;
