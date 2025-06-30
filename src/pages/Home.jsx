import "../App.css";
import { Typewriter } from "react-simple-typewriter";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Home = () => {
  return (
    <div className="parallax-wrapper" id="parallax">
      <div className="parallax-bg" />

      <div className="content">
        {/* Hero Section - Side by Side Layout */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mt-20 lg:flex-row items-center justify-between min-h-[80vh] px-6 lg:px-12 xl:px-24 py-16 gap-12"
        >
          {/* Profile Image - More Dramatic Placement */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-90 transition-all duration-500 -z-10" />

              {/* Image Container with Border Animation */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-amber-400/30 hover:border-amber-400/50 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Angela's Profile"
                  className="w-full max-w-md h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-amber-300/50 rounded-lg -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-amber-200/30 rounded-full -z-10" />
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -bottom-8 -left-8 text-3xl text-amber-300"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaReact />
              </motion.div>
              <motion.div
                className="absolute -top-8 -right-8 text-3xl text-amber-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <SiNextdotjs />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - More Dynamic Layout */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="relative">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold font-playfair text-amber-100 leading-tight">
                <span className="text-amber-300">Angela</span> Nwattah
              </h1>
              <div className="absolute -bottom-2 left-0 w-32 h-1 bg-amber-400/70 rounded-full" />
              <div className="absolute -bottom-5 left-0 w-24 h-1 bg-amber-400/40 rounded-full" />
            </div>

            <h2 className="text-2xl md:text-3xl font-medium text-amber-300/90">
              Senior Frontend Developer
            </h2>

            <div className="h-20">
              <p className="font-mono font-medium text-lg md:text-xl text-amber-100/80">
                <Typewriter
                  words={[
                    "React & Next.js Specialist",
                    "UI/UX Architect",
                    "Performance Optimizer",
                    "Clean Code Advocate",
                    "Interactive Design Expert",
                    "Frontend Technical Lead",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </p>
            </div>

            <p className="text-lg text-amber-100/80">
              I build exceptional digital experiences that combine cutting-edge
              technology with stunning design. My solutions are fast,
              accessible, and deliver measurable results.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  to="/projects"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-amber-500/20"
                >
                  View Projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  to="/contact"
                  className="inline-block border-2 border-amber-500 text-amber-300 font-medium py-3 px-8 rounded-full hover:bg-amber-900/30 transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Welcome Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-gradient-to-b from-transparent to-amber-900/5"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div
              whileInView={{ scale: [0.9, 1.03, 1] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-block mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-amber-100 mb-4">
                Crafting <span className="text-amber-300">Digital</span>{" "}
                Excellence
              </h2>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            </motion.div>

            <p className="text-xl text-amber-100/80 max-w-4xl mx-auto mb-12">
              With over 4 years of experience building responsive, performant
              web applications, I bring both technical expertise and creative
              vision to every project.
            </p>

            {/* Skills Badges */}
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Figma",
                "Node.js",
                "Redux",
                "Animation",
              ].map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-amber-900/30 border border-amber-700/50 rounded-full text-amber-200 text-sm font-mono"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
