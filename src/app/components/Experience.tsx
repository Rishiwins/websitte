'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const experiences = [
    {
      company: 'Ariana.Digital',
      role: 'Founding AI Engineer',
      period: 'Aug 2025 – Oct 2025',
      description: 'Built an AI interview platform that conducts real-time structured voice interviews via autonomous interviewer bots using OpenAI Realtime + Twilio Video + WebRTC.',
      achievements: [
        'Designed scalable back-end architecture using Supabase + Next.js + Node.js',
        'Implemented dynamic prompts and personalized interview flows',
        'Created real-time voice interview capabilities'
      ],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      company: 'Everite Solutions (Client: Ming Entertainments)',
      role: 'AI Engineer',
      period: 'Jan 2025 – Aug 2025',
      description: 'Led the AI engineering for "WhooCrew," a multi-agent AI recruitment platform automating candidate ranking, outreach, and contract generation.',
      achievements: [
        'Reduced manual hiring processes by 95%',
        'Built multi-agent AI recruitment system',
        'Automated candidate ranking and outreach workflows'
      ],
      color: 'from-purple-500 to-pink-400'
    },
    {
      company: 'Selective Insurance',
      role: 'Data Scientist Intern',
      period: 'May 2024 – Dec 2024',
      description: 'Automated ACORD PDF extraction and analyzed large-scale claims data using advanced ML techniques.',
      achievements: [
        'Improved accuracy from 58% to 65% using NLP + LDA topic modeling',
        'Reduced manual processing by 30% with Tesseract OCR + OpenCV',
        'Built Power BI dashboards for enterprise AI integration insights',
        'Analyzed 1M+ claims data points'
      ],
      color: 'from-green-500 to-teal-400'
    },
    {
      company: 'Everite Solutions',
      role: 'Data Analyst Intern',
      period: 'Jan 2022 – May 2023',
      description: 'Created comprehensive data visualization solutions and delivered critical business insights.',
      achievements: [
        'Created 20+ Power BI dashboards',
        'Increased client satisfaction by 30%',
        'Delivered COVID testing reports from 100K+ data points across 8 industries'
      ],
      color: 'from-orange-500 to-red-400'
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen py-20 bg-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_50%,transparent_50%,transparent_75%,rgba(139,92,246,0.1)_75%)] bg-[length:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-sora">
            Professional{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Experience
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Building innovative AI solutions and driving digital transformation across diverse industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 h-full rounded-full opacity-50" />

          {/* Mobile Timeline Line - Left aligned for mobile */}
          <div className="lg:hidden absolute left-4 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 h-full rounded-full opacity-50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 sm:mb-16 lg:mb-20 ${
                // Mobile: all items align left, Desktop: alternating alignment
                'lg:flex lg:items-center ' + (index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end')
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 lg:border-4 border-black z-10
                          left-2.5 lg:left-1/2 lg:transform lg:-translate-x-1/2"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              {/* Content Card */}
              <motion.div
                className={`ml-8 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-gray-700 transition-all duration-300">
                  {/* Period Badge */}
                  <motion.div
                    className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 bg-gradient-to-r ${exp.color} text-white`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.period}
                  </motion.div>

                  {/* Company & Role */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{exp.company}</h3>
                  <h4 className="text-base sm:text-lg lg:text-xl text-blue-400 font-medium mb-3 sm:mb-4">{exp.role}</h4>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start text-gray-400 text-xs sm:text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0`} />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm sm:text-base"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;