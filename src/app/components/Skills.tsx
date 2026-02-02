'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
            Technical{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Skills
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across the full spectrum of modern AI and data science technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Category Selector */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3 sm:space-y-4 lg:sticky lg:top-20">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 sm:p-6 rounded-2xl border transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-gray-900/80 border-gray-600 shadow-lg'
                      : 'bg-gray-900/30 border-gray-800 hover:border-gray-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="text-2xl sm:text-3xl">{category.icon}</div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold ${
                        activeCategory === index ? 'text-white' : 'text-gray-300'
                      }`}>
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">{category.skills.length} skills</p>
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
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-3xl p-6 sm:p-8 lg:p-10">
              {/* Category Header */}
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <div className="text-3xl sm:text-4xl">{skillCategories[activeCategory].icon}</div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{skillCategories[activeCategory].title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Expertise & Proficiency</p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-4 sm:space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Skill Name & Level */}
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <span className="text-base sm:text-lg font-medium text-white">{skill.name}</span>
                      <span className="text-blue-400 font-semibold text-sm sm:text-base">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2.5 sm:h-3 bg-gray-800 rounded-full overflow-hidden">
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
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className={`text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text`}>
                      {Math.round(skillCategories[activeCategory].skills.reduce((acc, skill) => acc + skill.level, 0) / skillCategories[activeCategory].skills.length)}%
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">Average Proficiency</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text`}>
                      {skillCategories[activeCategory].skills.length}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">Core Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Visualization */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-3xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-6 sm:mb-8">Technology Ecosystem</h3>

            {/* Floating Tech Bubbles */}
            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-2xl">
              {skillCategories.flatMap((category, categoryIndex) =>
                category.skills.map((skill, skillIndex) => {
                  // Better positioning algorithm for mobile
                  const totalItems = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
                  const currentIndex = categoryIndex * category.skills.length + skillIndex;
                  const cols = isMobile ? 3 : 6; // 3 columns on mobile, 6 on desktop
                  const rows = Math.ceil(totalItems / cols);
                  const col = currentIndex % cols;
                  const row = Math.floor(currentIndex / cols);

                  return (
                    <motion.div
                      key={`${category.title}-${skill.name}`}
                      className={`absolute px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r ${category.color} bg-opacity-20 border border-gray-600 rounded-full text-xs font-medium text-white backdrop-blur whitespace-nowrap`}
                      style={{
                        left: `${10 + (col * (80 / cols))}%`,
                        top: `${10 + (row * (80 / rows))}%`,
                      }}
                      initial={{
                        opacity: 0,
                        scale: 0.8
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [-6, 6, -6],
                        x: [-3, 3, -3],
                      }}
                      transition={{
                        scale: { duration: 0.5, delay: currentIndex * 0.1 },
                        opacity: { duration: 0.5, delay: currentIndex * 0.1 },
                        y: { duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 },
                        x: { duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 },
                      }}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                    >
                      {skill.name}
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;