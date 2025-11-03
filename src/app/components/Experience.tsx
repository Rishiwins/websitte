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
            Professional{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building innovative AI solutions and driving digital transformation across diverse industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 h-full rounded-full opacity-50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-black z-10"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              {/* Content Card */}
              <motion.div
                className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
                  {/* Period Badge */}
                  <motion.div
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${exp.color} text-white`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.period}
                  </motion.div>

                  {/* Company & Role */}
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                  <h4 className="text-xl text-blue-400 font-medium mb-4">{exp.role}</h4>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start text-gray-400 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 mr-3 flex-shrink-0`} />
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
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;