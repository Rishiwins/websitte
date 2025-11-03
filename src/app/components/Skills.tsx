'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Programming',
      icon: '💻',
      color: 'from-blue-500 to-cyan-400',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'JavaScript', level: 80 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      color: 'from-purple-500 to-pink-400',
      skills: [
        { name: 'Generative AI', level: 95 },
        { name: 'LLMs & Prompt Engineering', level: 90 },
        { name: 'Computer Vision', level: 85 },
        { name: 'NLP', level: 90 },
        { name: 'MLOps', level: 80 },
        { name: 'Transformers', level: 85 }
      ]
    },
    {
      title: 'Data Science & Analytics',
      icon: '📊',
      color: 'from-green-500 to-teal-400',
      skills: [
        { name: 'Statistics', level: 90 },
        { name: 'Predictive Modeling', level: 85 },
        { name: 'Time Series Analysis', level: 80 },
        { name: 'Power BI', level: 95 },
        { name: 'Tableau', level: 85 },
        { name: 'Feature Engineering', level: 88 }
      ]
    },
    {
      title: 'Cloud & Full-Stack',
      icon: '☁️',
      color: 'from-orange-500 to-red-400',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Azure', level: 80 },
        { name: 'GCP', level: 75 },
        { name: 'Docker', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'FastAPI', level: 90 }
      ]
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen py-20 bg-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.2),transparent_70%)]" />
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
            Technical{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across the full spectrum of modern AI and data science technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Category Selector */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 sticky top-20">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-gray-900/80 border-gray-600 shadow-lg'
                      : 'bg-gray-900/30 border-gray-800 hover:border-gray-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h3 className={`text-xl font-bold ${
                        activeCategory === index ? 'text-white' : 'text-gray-300'
                      }`}>
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-500">{category.skills.length} skills</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            className="lg:col-span-2"
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-3xl p-10">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl">{skillCategories[activeCategory].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{skillCategories[activeCategory].title}</h3>
                  <p className="text-gray-400">Expertise & Proficiency</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Skill Name & Level */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-medium text-white">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />

                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full opacity-50 blur-sm`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category Stats */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className={`text-2xl font-bold text-transparent bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text`}>
                      {Math.round(skillCategories[activeCategory].skills.reduce((acc, skill) => acc + skill.level, 0) / skillCategories[activeCategory].skills.length)}%
                    </div>
                    <div className="text-gray-400 text-sm">Average Proficiency</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold text-transparent bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text`}>
                      {skillCategories[activeCategory].skills.length}
                    </div>
                    <div className="text-gray-400 text-sm">Core Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Visualization */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Technology Ecosystem</h3>

            {/* Floating Tech Bubbles */}
            <div className="relative h-64 overflow-hidden rounded-2xl">
              {skillCategories.flatMap(category =>
                category.skills.map((skill, index) => (
                  <motion.div
                    key={`${category.title}-${skill.name}`}
                    className={`absolute px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-20 border border-gray-600 rounded-full text-sm font-medium text-white backdrop-blur`}
                    style={{
                      left: `${Math.random() * 80}%`,
                      top: `${Math.random() * 80}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  >
                    {skill.name}
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;