import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCode, FaUser, FaEnvelope, FaFileAlt } from "react-icons/fa";

const navLinks = [
  { path: "/projects", label: "Projects", icon: <FaCode /> },
  { path: "/about", label: "About", icon: <FaUser /> },
  { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
  { path: "/resume", label: "Resume", icon: <FaFileAlt /> },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [atParallax, setAtParallax] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const parallaxSection = document.getElementById("parallax");
      if (parallaxSection) {
        const parallaxRect = parallaxSection.getBoundingClientRect();
        setAtParallax(parallaxRect.bottom <= 100);
      }
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerColor = atParallax
    ? "bg-red-900 text-amber-200"
    : isScrolled
      ? "bg-amber-500/40 backdrop-blur-md text-amber-100"
      : "bg-red-900/90 backdrop-blur-sm text-amber-200";

  const linkColor = atParallax
    ? "text-white hover:text-amber-300"
    : "text-customBlack hover:text-amber-300";

  const activeLinkColor = atParallax ? "text-amber-300" : "text-amber-600";

  const circleVariants = {
    hidden: {
      clipPath: "circle(30% at 90% 10%)",
      transition: {
        type: "easeOut",
        duration: 0.4,
      },
    },
    visible: {
      clipPath: "circle(150% at 95% 5%)",
      transition: {
        type: "easeOut",
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed w-full z-50 ${headerColor} transition-all duration-300 ${
        isScrolled ? "py-2 shadow-sm" : "py-4"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex justify-between items-center py-2">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <NavLink
              to="/"
              className={`text-4xl lg:text-5xl font-bold tracking-widest 
                font-sevillana transition-colors duration-200 ${
                  atParallax
                    ? "text-white hover:text-amber-300"
                    : "text-amber-600 hover:text-amber-500"
                }`}
            >
              <span>Angela</span>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navLinks.map(({ path, label }, index) => (
              <div
                key={path}
                className="relative px-1 py-2"
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative z-10 px-4 py-2 text-lg font-mono 
                    font-medium transition-colors duration-200 flex 
                    items-center gap-2 ${isActive ? activeLinkColor : linkColor}`
                  }
                >
                  {navLinks[index].icon}
                  {label}
                </NavLink>
                {hoveredLink === index && (
                  <>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      className="absolute bottom-1 left-0 right-0 h-0.5 bg-amber-300"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                    />
                  </>
                )}
                {hoveredLink === index && (
                  <motion.div
                    className="absolute inset-0 bg-black/20 rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                atParallax
                  ? "text-white hover:text-amber-300"
                  : "text-stone-400 hover:text-amber-500"
              }`}
              aria-label="Menu"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FiX size={38} /> : <FiMenu size={34} />}
            </motion.button>
          </div>

          {/* Mobile Menu - Circular Reveal */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 h-60 sm:h-80 md:h-auto lg:hidden z-40"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={circleVariants}
                style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
              >
                <motion.div
                  className="h-screen w-full flex
                   bg-black flex-col items-center 
                   justify-center space-y-4 "
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  {navLinks.map(({ path, label, icon }) => (
                    <motion.div
                      key={path}
                      variants={navItemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="w-full text-center"
                    >
                      <NavLink
                        to={path}
                        className="flex items-center justify-center gap-2 sm:gap-3 font-lilita leading-normal tracking-wider sm:tracking-widest text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium
                text-white hover:text-red-900 transition-colors px-4 py-2 sm:py-3"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-amber-600 text-2xl sm:text-3xl md:text-4xl">
                          {icon}
                        </span>
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
