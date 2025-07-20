import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Float,
  Text,
  Points,
  PointMaterial,
} from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Testimonials from "../components/Testimonials";
import Me from "../assets/me.jpg";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

// Enhanced 3D React Logo Component with smoother animation
const ReactLogo = () => {
  const ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.position.y = Math.sin(time * 1.5) * 0.3;
    ref.current.rotation.y += 0.008;
    ref.current.rotation.x = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <Float
      speed={2.5}
      rotationIntensity={0.6}
      floatIntensity={1.2}
      floatingRange={[0.1, 0.3]}
    >
      <mesh ref={ref} position={[-3, -2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#61DAFB"
          emissive="#61DAFB"
          emissiveIntensity={0.7}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

// Enhanced 3D Next.js Logo Component with smoother animation
const NextLogo = () => {
  const ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.5;
    ref.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    ref.current.position.y = Math.sin(time * 1.2) * 0.2;
  });

  return (
    <Float
      speed={3.5}
      rotationIntensity={1.2}
      floatIntensity={1.3}
      floatingRange={[0.1, 0.4]}
    >
      <mesh ref={ref} position={[3, 2, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#000000"
          emissiveIntensity={0.6}
          roughness={0.25}
          metalness={0.75}
        />
      </mesh>
    </Float>
  );
};

const ResilientCanvas = ({ children }) => {
  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.log("WebGL context lost, will restore");
    };

    const canvas = document.querySelector("canvas");
    canvas.addEventListener("webglcontextlost", handleContextLost, false);

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost);
    };
  }, []);

  return (
    <Canvas
      gl={{
        antialias: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.getContext().addEventListener("webglcontextrestored", () => {
          window.location.reload();
        });
      }}
    >
      {children}
    </Canvas>
  );
};

// Smoother Floating Name Component
const FloatingName = () => {
  const ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.position.y = Math.sin(time * 0.8) * 0.15;
    ref.current.position.x = Math.cos(time * 0.5) * 0.1;
    ref.current.rotation.z = Math.sin(time * 0.3) * 0.05;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.7}
      floatingRange={[0.05, 0.15]}
    >
      <Text
        ref={ref}
        position={[0, 0, -5]}
        fontSize={1.5}
        letterSpacing={0.05}
        color="#f59e0b"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      >
        Angela Nwattah
      </Text>
    </Float>
  );
};

const SubtleParticles = () => {
  const particles = useRef();
  const count = 1500;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y += 0.0005;
    }
  });

  return (
    <Points ref={particles} positions={positions}>
      <PointMaterial
        transparent
        color="#f59e0b"
        size={0.03}
        sizeAttenuation={true}
        opacity={0.4}
      />
    </Points>
  );
};

const Home = () => {
  return (
    <div className="bg-customBlack over">
      {/* Enhanced 3D Background Canvas */}
      <div className="fixed inset-0 -z-10">
        <ResilientCanvas>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.8}
            color="#f59e0b"
          />
          <Stars
            radius={2.5}
            depth={40}
            count={2500}
            factor={5}
            saturation={0}
            fade
            speed={1.5}
          />
          <ReactLogo />
          <NextLogo />
          <FloatingName />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </ResilientCanvas>
      </div>

      {/* Page Content */}
      <div className="relative z-10 content">
        {/* Hero Section with smoother transitions */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="flex flex-col mt-20 lg:flex-row items-center justify-between min-h-[100vh] px-6 lg:px-12 xl:px-24 py-16 gap-12"
        >
          {/* Image Column */}
          <motion.div
            initial={{ x: -80, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl opacity-70"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 1.5,
                  ease: "easeOut",
                }}
                whileHover={{ opacity: 0.9 }}
              />

              {/* Image Container */}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-amber-400/30 hover:border-amber-400/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                  ease: "backOut",
                }}
                whileHover={{
                  borderColor: "rgba(251, 191, 36, 0.5)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  src={Me}
                  alt="Angela's Profile"
                  className="w-full max-w-md h-auto object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />
              </motion.div>

              {/* 2D Animated Icons */}
              <motion.div
                className="absolute -bottom-7 sm:-bottom-8 
                -left-5 sm:-left-8 text-2xl sm:text-4xl text-amber-300"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaReact />
              </motion.div>
              <motion.div
                className="absolute -top-6 sm:-top-8 -right-4 sm:-right-8 text-2xl sm:text-3xl text-amber-300"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <SiNextdotjs />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:w-1/2 space-y-8"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: "backOut",
              }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold font-playfair text-amber-100 leading-tight">
                <motion.span
                  className="text-amber-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  Angela
                </motion.span>{" "}
                Nwattah
              </h1>
              <motion.div
                className="absolute -bottom-2 left-0 w-32 h-1 bg-amber-400/70 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                  ease: "circOut",
                }}
              />
              <motion.div
                className="absolute -bottom-5 left-0 w-24 h-1 bg-amber-400/40 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 1.1,
                  duration: 0.8,
                  ease: "circOut",
                }}
              />
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl font-medium text-amber-300/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              Senior Frontend Developer
            </motion.h2>

            <motion.div
              className="h-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.4,
                duration: 0.6,
              }}
            >
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
            </motion.div>

            <motion.p
              className="text-lg font-sans tracking-wider text-amber-100/80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.6,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              I build exceptional digital experiences that combine cutting-edge
              technology with stunning design. My solutions are fast,
              accessible, and deliver measurable results.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.8,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#projects"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-amber-500/20"
                >
                  View Projects
                </a>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#contact"
                  className="inline-block border-2 border-amber-500 text-amber-300 font-medium py-3 px-8 rounded-full hover:bg-amber-900/30 transition-colors"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Welcome Section with smoother reveals */}
        <section
          className="py-20 bg-gradient-to-b from-transparent to-amber-900/5"
          id="about"
        >
          {/* 3.js */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <SubtleParticles />
            </Canvas>
          </div>

          <Fade triggerOnce damping={0.2}>
            <div className="max-w-6xl mx-auto px-6 text-center">
              <motion.div
                whileInView={{ scale: [0.95, 1.02, 1] }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="inline-block mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold font-playfair text-amber-100 mb-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Crafting{" "}
                  </motion.span>
                  <motion.span
                    className="text-amber-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Digital
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Excellence
                  </motion.span>
                </h2>
                <motion.div
                  className="w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.8,
                    ease: "circOut",
                  }}
                  viewport={{ once: true }}
                />
              </motion.div>

              <Slide direction="up" triggerOnce damping={0.2} duration={800}>
                <p className="text-xl font-sans text-amber-100/80 max-w-4xl mx-auto mb-12">
                  With over 4 years of experience building responsive,
                  performant web applications, I bring both technical expertise
                  and creative vision to every project.
                </p>
              </Slide>

              {/* Skills Badges with smoother cascade */}
              <Zoom
                triggerOnce
                cascade
                damping={0.15}
                duration={600}
                delay={200}
              >
                <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                  {[
                    "React",
                    "Next.js",
                    "Redux Toolkit",
                    "JavaScript",
                    "Node.js",
                    "Supabase",
                    "Tailwindcss",
                    "Three.js",
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      whileHover={{
                        y: -5,
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 500 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-amber-900/30 border border-amber-700/50 rounded-full text-amber-200 text-sm font-mono"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.6,
                        ease: "backOut",
                      }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </Zoom>
            </div>
          </Fade>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
