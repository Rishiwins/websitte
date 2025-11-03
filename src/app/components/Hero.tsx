'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SimpleAvatar3D from './SimpleAvatar3D';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 z-10">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neural" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={100 + (i * 47) % 800}
              cy={100 + (i * 73) % 800}
              r="2"
              fill="url(#neural)"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile-first layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.p
                className="text-blue-400 text-base sm:text-lg mb-4 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Data Scientist & AI Engineer
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 font-sora"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="text-white">RISHI</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text">
                  CHOWDARY
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Building the future with AI-powered solutions, intelligent automation,
                and data-driven innovation. Transforming complex problems into scalable
                technological breakthroughs.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-center"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-600 rounded-full text-white font-medium hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-center"
                >
                  Get In Touch
                </motion.a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-gray-400 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <a href="mailto:rishichowdaryperam@gmail.com" className="hover:text-blue-400 transition-colors">
                  rishichowdaryperam@gmail.com
                </a>
                <a href="tel:201-241-5763" className="hover:text-purple-400 transition-colors">
                  201-241-5763
                </a>
                <a href="https://linkedin.com/in/rishipc" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  linkedin.com/in/rishipc
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Photo Section */}
          <div className="flex-1 flex justify-center items-center order-1 lg:order-2 w-full lg:ml-12">
            <motion.div
              className="relative w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96 lg:w-96 lg:h-[28rem]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              {/* Floating Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              {/* Profile Photo */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-gray-800">
                <SimpleAvatar3D />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;