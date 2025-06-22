import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaPaintBrush,
  FaCode,
  FaUser,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const navLinks = [
  //   { path: "/", label: "Home", icon: <FaHome /> },
  { path: "/design", label: "Designs", icon: <FaPaintBrush /> },
  { path: "/projects", label: "Projects", icon: <FaCode /> },
  { path: "/about", label: "About", icon: <FaUser /> },
  { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
  { path: "/resume", label: "Resume", icon: <FaFileAlt /> },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Circular reveal animation variants
  const circleVariants = {
    hidden: {
      clipPath: "circle(0% at 95% 5%)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    visible: {
      clipPath: "circle(150% at 95% 5%)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.header
      className={`fixed w-full z-50 ${isScrolled ? "bg-transparent/10 backdrop-blur-md shadow-sm py-2" : "bg-white/80 backdrop-blur-sm py-4"}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex justify-between items-center py-2">
          {/* Logo */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <NavLink
              to="/"
              className="text-3xl lg:text-4xl font-bold tracking-widest 
              font-sevillana text-customBlack hover:text-pink-700 transition-colors duration-300"
            >
              <span>Nwattah</span> Angela.
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div className="hidden lg:flex space-x-1">
            {navLinks.map(({ path, label }, index) => (
              <motion.div
                key={path}
                className="relative px-1 py-2"
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative z-10 px-4 py-2 text-lg font-mono font-medium transition-colors duration-300 flex items-center gap-2 ${
                      isActive
                        ? "text-customPink"
                        : "text-customGray hover:text-pink-600"
                    }`
                  }
                >
                  {navLinks[index].icon}
                  {label}
                </NavLink>
                {hoveredLink === index && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-gray-100 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-customGray hover:text-pink-500 transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <FiX size={44} /> : <FiMenu size={34} />}
            </button>
          </div>

          {/* Mobile Menu - Circular Reveal */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed h-200 inset-0 lg:hidden z-40 flex items-center justify-center"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={circleVariants}
                style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
              >
                <motion.div
                  className="flex flex-col items-center justify-center space-y-8 p-8"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                >
                  {navLinks.map(({ path, label, icon }) => (
                    <motion.div
                      key={path}
                      variants={navItemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <NavLink
                        to={path}
                        className="flex items-center gap-3 font-lilita leading-15
                        tracking-widest text-4xl font-medium text-white hover:text-pink-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-pink-400">{icon}</span>
                        {label}
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
