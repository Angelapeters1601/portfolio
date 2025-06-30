import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "CEO, TechSolutions Inc.",
      content:
        "Angela's frontend work on our dashboard increased user engagement by 40%. Her attention to detail and React expertise delivered beyond expectations.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Product Manager, DesignHub",
      content:
        "Working with Angela was a game-changer for our redesign. She implemented complex animations while maintaining perfect performance scores.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "David Kim",
      role: "CTO, Startup Ventures",
      content:
        "The React components Angela built became the foundation of our design system. Her code is as clean as her designs.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "UX Lead, DigitalAgency",
      content:
        "Angela transformed our legacy jQuery app into a modern React SPA with zero downtime. Exceptional problem-solving skills.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 5,
      name: "Robert Taylor",
      role: "Director, Web Innovations",
      content:
        "Angela's implementation of our e-commerce platform resulted in a 30% increase in conversion rates. Her performance optimizations were remarkable.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-2xl font-bold font-playfair text-amber-100 mb-4">
            Client <span className="text-amber-300">Testimonials</span>
          </h2>
          <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
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
        </motion.div>

        {/* Testimonial Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="mb-8">
            <Marquee speed={40} gradient={false} pauseOnHover>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(testimonial)}
                  className={`mx-4 cursor-pointer transition-all ${
                    activeTestimonial.id === testimonial.id
                      ? "scale-110 opacity-100"
                      : "opacity-70 hover:opacity-90"
                  }`}
                >
                  <div className="bg-gradient-to-br from-amber-900/10 via-black/30 to-amber-900/5 border border-amber-800/20 rounded-xl p-6 backdrop-blur-sm w-64 h-48 flex flex-col justify-between">
                    <FaQuoteLeft className="text-amber-400 text-xl" />
                    <p className="text-sm text-amber-100/80 line-clamp-4">
                      {testimonial.content}
                    </p>
                    <div>
                      <h4 className="text-amber-100 font-medium">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-amber-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-amber-900/10 via-black/30 to-amber-900/5 border border-amber-800/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-3xl font-bold text-amber-300 mb-2">50+</div>
            <div className="text-amber-100/80 text-sm">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-amber-900/10 via-black/30 to-amber-900/5 border border-amber-800/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-3xl font-bold text-amber-300 mb-2">100%</div>
            <div className="text-amber-100/80 text-sm">Client Satisfaction</div>
          </div>
          <div className="bg-gradient-to-br from-amber-900/10 via-black/30 to-amber-900/5 border border-amber-800/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-3xl font-bold text-amber-300 mb-2">40%</div>
            <div className="text-amber-100/80 text-sm">Performance Boost</div>
          </div>
          <div className="bg-gradient-to-br from-amber-900/10 via-black/30 to-amber-900/5 border border-amber-800/20 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-3xl font-bold text-amber-300 mb-2">5+</div>
            <div className="text-amber-100/80 text-sm">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
