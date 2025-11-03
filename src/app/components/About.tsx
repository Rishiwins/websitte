'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-black via-gray-900/20 to-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8 font-sora"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Me
            </span>
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a passionate <span className="text-blue-400 font-medium">Data Science professional</span> with
              hands-on experience in developing data-driven solutions, AI-powered chatbots, and full-stack applications.
            </p>

            <p>
              My expertise spans across deploying intelligent agents, machine learning models, automation tools,
              and building end-to-end systems using <span className="text-purple-400 font-medium">Python, NLP, deep learning, and cloud frameworks</span>.
            </p>

            <p>
              I specialize in designing scalable AI pipelines, multimodal systems, and agentic applications
              that deliver <span className="text-cyan-400 font-medium">measurable business impact</span>.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '15+', label: 'Projects' },
              { number: '95%', label: 'Automation Success' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          style={{ y }}
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* AI Network Visualization */}
          <div className="relative w-full h-96 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>

              {/* Central Node */}
              <motion.circle
                cx="200"
                cy="200"
                r="20"
                fill="url(#aiGradient)"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              {/* Outer Nodes */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 360) / 8;
                const radius = 120;
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
                      stroke="url(#aiGradient)"
                      strokeWidth="2"
                      opacity="0.6"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    />

                    {/* Node */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="8"
                      fill="url(#aiGradient)"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      animate={{
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        scale: { duration: 0.5, delay: i * 0.1 },
                        opacity: { duration: 2, repeat: Infinity, delay: i * 0.3 }
                      }}
                    />
                  </g>
                );
              })}

              {/* Floating Data Points */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.circle
                  key={`data-${i}`}
                  cx={Math.random() * 400}
                  cy={Math.random() * 400}
                  r="3"
                  fill="#3B82F6"
                  opacity="0.4"
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </svg>

            {/* Technology Labels */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 text-center">
                {['AI/ML', 'Python', 'Cloud', 'Analytics'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="px-3 py-1 bg-black/50 backdrop-blur border border-gray-700 rounded-lg text-sm text-gray-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, borderColor: '#3B82F6' }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;