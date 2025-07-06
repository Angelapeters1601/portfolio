import React, { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Emma from "../assets/Emma.jpg";
import John from "../assets/DrJohn.jpg";
import Yisreal from "../assets/yisreal.jpg";
import Ocheiga from "../assets/Ocheiga.jpg";
import Kwado from "../assets/Kwado.jpg";
import Supreme from "../assets/Supreme.jpg";

// Custom animations
const customFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customScaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emmanuel Ugbotor",
      role: "Senior Fullstack Software Engineer",
      content:
        "As Angela's mentor, I've had the privilege of watching her evolve into an exceptional frontend developer. Her work on our dashboard which drove a 40% increase in user engagement, demonstrates her mastery of React and meticulous attention to detail. But beyond the technical wins, what impresses me most is her growth mindset. She proactively seeks feedback, implements improvements with precision, and now mentors others with the same patience she once showed as my junior. Angela is the rare developer who balances creativity with discipline. Whether it's optimizing performance or advocating for UX refinements, she approaches problems with a seasoned perspective that belies her years. Any team would be lucky to have her.",
      rating: 4,
      image: Emma,
    },
    {
      id: 2,
      name: "Corley Yisreal Ben",
      role: "Founder - Corley.legal",
      content:
        "Working with Angela was a game-changer for our project. She didn't just deliver a stunning redesign—she built us a complete full-stack application with an intuitive dashboard that exceeded all expectations. Her implementation of complex animations was flawless, yet she maintained perfect performance scores across the board. Beyond the technical brilliance, what stood out was her ability to translate my vision into reality while adding smart improvements I hadn't even considered. The end result? An application that's as beautiful as it is powerful, and a client who couldn't be more pleased.",
      rating: 5,
      image: Yisreal,
    },
    {
      id: 3,
      name: "Ocheiga Enoch",
      role: "Senior Fullstack Developer",
      content:
        "Angela brings a rare combination of technical skill and collaborative spirit to every project. She communicates clearly, elevates team dynamics, and has an eye for detail that ensures excellence in execution. Working with her is always a seamless and enjoyable experience, she's the kind of professional who makes good teams great.",
      rating: 5,
      image: Ocheiga,
    },
    {
      id: 4,
      name: "Nwattah Chikwado P.",
      role: "AI/Machine Learning Engineer",
      content:
        "Angela is a remarkably fast learner who adapts to new challenges effortlessly. Every time I've needed her expertise, she's delivered tailored solutions that exceed expectations, often finding clever fixes for problems we didn't even realize could be optimized. Her ability to quickly understand complex systems and provide elegant fixes is invaluable.",
      rating: 4,
      image: Kwado,
    },
    {
      id: 5,
      name: "Supreme Ugoboyobi",
      role: "Interior decorator",
      content:
        "Angela built me a custom admin dashboard for my interior design business that completely changed how I work. Before, I was juggling spreadsheets and missing follow-ups, now everything's organized in one place. The dashboard helps me track clients, manage projects, and even automates parts of my marketing. Within two months, I saw more referrals coming in and my bookings increased by almost 40%. Best part? I spend less time on admin and more time designing.",
      rating: 5,
      image: Supreme,
    },
    {
      id: 6,
      name: "Dr John Imomoh",
      role: "Lecturer, University of Benin",
      content:
        "When I finally centered a div without Flexbox, Angela made me screenshot it as a trophy 😂. She celebrates small wins but also gently pushes me - last week she had me rebuild Netflix's navbar (it's harder than it looks!). Baby steps feel like victories with her.",
      rating: 5,
      image: John,
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  const { ref: statsRef, inView } = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900/10 via-black to-amber-900/5 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-800/10"
            initial={{
              scale: 0,
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.2, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal keyframes={customFadeIn} duration={800} triggerOnce>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-2xl font-bold font-playfair text-amber-100 mb-4">
              Client <span className="text-amber-300">Testimonials</span>
            </h2>
            <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
              What colleagues and clients say about working with me
            </p>
          </div>
        </Reveal>

        {/* Featured Testimonial */}
        <Reveal keyframes={customScaleIn} duration={800} triggerOnce>
          <div className="mb-16">
            <div className="bg-gradient-to-br from-amber-900/20 via-black/50 to-amber-900/10 border border-amber-800/30 rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-xl max-w-4xl mx-auto">
              <FaQuoteLeft className="text-amber-400 text-2xl mb-4" />
              <p className="text-xl italic text-amber-100/90 mb-8">
                {activeTestimonial.content}
              </p>
              <div className="flex items-center gap-6">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-500/50"
                />
                <div>
                  <h3 className="text-2xl font-bold text-amber-100">
                    {activeTestimonial.name}
                  </h3>
                  <p className="text-amber-300">{activeTestimonial.role}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < activeTestimonial.rating
                            ? "text-amber-400"
                            : "text-amber-800"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Testimonial Marquee */}
        <Reveal keyframes={customFadeIn} duration={800} delay={200} triggerOnce>
          <div className="mb-16 w-full">
            <div className="mb-8 w-full overflow-hidden relative">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-amber-900/70 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-amber-900/70 to-transparent z-10 pointer-events-none" />

              <Marquee
                speed={40}
                gradient={false}
                pauseOnHover
                className="py-2"
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    onClick={() => setActiveTestimonial(testimonial)}
                    className={`mx-3 cursor-pointer transition-all duration-300 ${
                      activeTestimonial.id === testimonial.id
                        ? "scale-105 opacity-100 shadow-lg"
                        : "opacity-80 hover:opacity-95"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-amber-900/10 via-black/30 to-amber-900/5 border border-amber-800/20 rounded-xl p-6 backdrop-blur-sm w-64 h-48 flex flex-col justify-between hover:border-amber-600/30 transition-colors">
                      <FaQuoteLeft className="text-amber-400 text-xl" />
                      <p className="text-sm text-amber-100/80 line-clamp-4">
                        {testimonial.content}
                      </p>
                      <div>
                        <h4 className="text-amber-100 font-medium">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-amber-300 mt-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal keyframes={customFadeIn} duration={900} delay={700} triggerOnce>
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { end: 50, suffix: "+", label: "Projects Completed" },
              { end: 100, suffix: "%", label: "Client Satisfaction" },
              { end: 40, suffix: "%", label: "Performance Boost" },
              { end: 4, suffix: "+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-900/10 via-black/30 to-amber-900/5 border border-amber-800/20 rounded-xl p-6 text-center backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-amber-300 mb-2">
                  {inView ? (
                    <CountUp end={stat.end} duration={2} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-amber-100/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Testimonials;
