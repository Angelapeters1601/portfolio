import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Testimonials from "../components/Testimonials";
import Me from "../assets/me.jpg";

// 3D React Logo Component
const ReactLogo = () => {
  const ref = useRef();

  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.5;
    ref.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={[-3, -2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#61DAFB"
          emissive="#61DAFB"
          emissiveIntensity={0.5}
          roughness={0.5}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

// 3D Next.js Logo Component
const NextLogo = () => {
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime();
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={ref} position={[3, 2, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#000000"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
};

const Home = () => {
  return (
    <div className="bg-customBlack">
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 -z-10">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Stars
            radius={2}
            depth={30}
            count={2000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <ReactLogo />
          <NextLogo />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>

      {/* Page Content */}
      <div className="relative z-10 content">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mt-20 lg:flex-row items-center justify-between min-h-[100vh] px-6 lg:px-12 xl:px-24 py-16 gap-12"
        >
          {/* Image Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-90 transition-all duration-500" />

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-amber-400/30 hover:border-amber-400/50 transition-all duration-500">
                <img
                  src={Me}
                  alt="Angela's Profile"
                  className="w-full max-w-md h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 2D Animated Icons */}
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

          {/* Text Column */}
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

            <p className="text-lg font-sans tracking-wider text-amber-100/80">
              I build exceptional digital experiences that combine cutting-edge
              technology with stunning design. My solutions are fast,
              accessible, and deliver measurable results.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#projects"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-amber-500/20"
                >
                  View Projects
                </a>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#contact"
                  className="inline-block border-2 border-amber-500 text-amber-300 font-medium py-3 px-8 rounded-full hover:bg-amber-900/30 transition-colors"
                >
                  Contact Me
                </a>
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
          id="about"
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

            <p className="text-xl font-sans text-amber-100/80 max-w-4xl mx-auto mb-12">
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
                "Framer Motion",
                "Three.js",
                "Node.js",
                "GraphQL",
              ].map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
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
