'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Travel Chatbot',
      period: 'Jul 2025 - Sep 2025',
      description: 'A full-stack travel planning application with AI-powered recommendations',
      details: [
        'Developed using FastAPI, PostgreSQL, React, and Docker',
        'Integrated Gemini Flash 2.0 AI chatbot using Langchain',
        'Utilized Maps API, OpenWeatherMap API, and Yelp API',
        'Designed RESTful APIs for seamless frontend-backend communication',
        'Engineered secure user authentication and optimized data pipelines'
      ],
      technologies: ['FastAPI', 'PostgreSQL', 'React', 'Docker', 'Langchain', 'AI/ML'],
      gradient: 'from-blue-500 to-cyan-400',
      icon: '🧳'
    },
    {
      title: 'Cryptocurrency Price Prediction',
      period: 'Feb 2022 - Apr 2023',
      description: 'Advanced cryptocurrency trading and analysis platform with ML-powered predictions',
      details: [
        'Comprehensive testing of ML algorithms including LSTM, Random Forest, and SVR',
        'Real-time data tracking with sentiment analysis using Tweepy',
        'Connected to APIs for real-time cryptocurrency data',
        'Implemented front-end using Flask for user-friendly interface',
        'Developed automated trade signals and price prediction models'
      ],
      technologies: ['Python', 'Machine Learning', 'LSTM', 'Flask', 'APIs', 'Sentiment Analysis'],
      gradient: 'from-purple-500 to-pink-400',
      icon: '₿'
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900/10 to-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
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
            Featured{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions that showcase my expertise in AI, machine learning, and full-stack development
          </p>
        </motion.div>

        {/* Projects Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Cards */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ${
                  activeProject === index ? 'scale-105' : 'scale-100 opacity-70'
                }`}
                onClick={() => setActiveProject(index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
                  {/* Project Icon & Period */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{project.icon}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.period}
                      </div>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-blue-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <motion.div
            className="sticky top-20"
            key={activeProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur border border-gray-700 rounded-3xl p-10">
              {/* Active Project Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl">{projects[activeProject].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{projects[activeProject].title}</h3>
                  <p className="text-blue-400">{projects[activeProject].period}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                {projects[activeProject].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${projects[activeProject].gradient} mt-2 flex-shrink-0`} />
                    <p className="text-gray-300 leading-relaxed">{detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack Visualization */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Technology Stack</h4>
                <div className="grid grid-cols-3 gap-3">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className={`p-3 bg-gradient-to-r ${projects[activeProject].gradient} bg-opacity-10 border border-gray-600 rounded-lg text-center text-sm font-medium text-white`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;