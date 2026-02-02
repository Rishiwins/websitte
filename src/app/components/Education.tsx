'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  const education = {
    institution: 'Stevens Institute of Technology',
    degree: 'Master\'s in Data Science',
    period: 'Sep 2023 – May 2025',
    location: 'Hoboken, New Jersey',
    courses: [
      'Machine Learning',
      'Deep Learning',
      'Time Series Analysis',
      'Marketing Analytics',
      'Optimization',
      'Data Visualization'
    ],
    highlights: [
      'GPA: 3.42/4.0',
      'Focus on Advanced AI/ML Techniques',
      'Research in Multimodal AI Systems',
      'Research Project: Predictive Analytics for Healthcare Data'
    ]
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900/20 to-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-sora">
            Academic{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advanced education in cutting-edge data science and artificial intelligence
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Education Details */}
          <div className="space-y-8">
            <motion.div
              className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-3xl p-10 hover:border-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Institution Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
                  S
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{education.institution}</h3>
                  <p className="text-blue-400 font-medium">{education.location}</p>
                </div>
              </div>

              {/* Degree Info */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-2">{education.degree}</h4>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-400 font-medium">
                  {education.period}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-white mb-4">Academic Highlights</h5>
                <div className="space-y-3">
                  {education.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Course Grid */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-4">Core Coursework</h5>
                <div className="grid grid-cols-2 gap-3">
                  {education.courses.map((course, index) => (
                    <motion.div
                      key={index}
                      className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-center text-sm text-gray-300 hover:border-blue-500 hover:text-white transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3D Academic Visualization */}
          <motion.div
            style={{ y }}
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Knowledge Network */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="academicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Central Academic Hub */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="25"
                  fill="url(#academicGradient)"
                  filter="url(#glow)"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                {/* Course Nodes */}
                {education.courses.map((course, i) => {
                  const angle = (i * 360) / education.courses.length;
                  const radius = 100;
                  const x = 200 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 200 + radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <g key={i}>
                      {/* Connection Line */}
                      <motion.line
                        x1="200"
                        y1="200"
                        x2={x}
                        y2={y}
                        stroke="url(#academicGradient)"
                        strokeWidth="2"
                        opacity="0.6"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: i * 0.2 }}
                        viewport={{ once: true }}
                      />

                      {/* Course Node */}
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="12"
                        fill="url(#academicGradient)"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        animate={{
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          scale: { duration: 0.5, delay: i * 0.1 },
                          opacity: { duration: 2, repeat: Infinity, delay: i * 0.3 }
                        }}
                      />

                      {/* Course Label */}
                      <motion.text
                        x={x}
                        y={y + 35}
                        textAnchor="middle"
                        className="text-xs fill-gray-400 font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {course.split(' ')[0]}
                      </motion.text>
                    </g>
                  );
                })}

                {/* Orbital Rings */}
                {[60, 140].map((radius, index) => (
                  <motion.circle
                    key={radius}
                    cx="200"
                    cy="200"
                    r={radius}
                    fill="none"
                    stroke="url(#academicGradient)"
                    strokeWidth="1"
                    opacity="0.2"
                    strokeDasharray="5,5"
                    animate={{
                      rotate: index % 2 === 0 ? 360 : -360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
              </svg>

              {/* Academic Stats */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-gray-900/80 backdrop-blur border border-gray-700 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-1">
                    2025
                  </div>
                  <div className="text-gray-400 text-sm">Expected Graduation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Education;