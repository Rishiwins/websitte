'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'rishichowdaryperam@gmail.com',
      href: 'mailto:rishichowdaryperam@gmail.com',
      color: 'from-blue-500 to-cyan-400',
      description: 'Let\'s discuss your next AI project'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '201-241-5763',
      href: 'tel:201-241-5763',
      color: 'from-purple-500 to-pink-400',
      description: 'Available for quick consultations'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/rishipc',
      href: 'https://linkedin.com/in/rishipc',
      color: 'from-green-500 to-teal-400',
      description: 'Connect for professional opportunities'
    }
  ];

  const stats = [
    { number: '24h', label: 'Response Time' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '15+', label: 'AI Projects Delivered' },
  ];

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900/30 to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r="1"
              fill="#3B82F6"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-sora">
            Let's Build{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your ideas into intelligent solutions? Let's connect and create something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                  onMouseEnter={() => setHoveredContact(index)}
                  onMouseLeave={() => setHoveredContact(null)}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`p-6 bg-gray-900/50 backdrop-blur border rounded-2xl transition-all duration-300 ${
                    hoveredContact === index ? 'border-gray-600 bg-gray-900/80' : 'border-gray-800'
                  }`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center text-2xl`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{method.label}</h3>
                        <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                        <p className={`font-medium text-transparent bg-gradient-to-r ${method.color} bg-clip-text`}>
                          {method.value}
                        </p>
                      </div>
                      <motion.div
                        className="text-gray-400"
                        animate={{ x: hoveredContact === index ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">Why Work With Me?</h3>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive CTA */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main CTA Card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur border border-gray-700 rounded-3xl p-10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0 20h40M20 0v40" stroke="#3B82F6" strokeWidth="0.5" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Start?</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Whether you need AI-powered solutions, data science consulting, or full-stack development,
                  I'm here to help bring your vision to life.
                </p>

                {/* Services List */}
                <div className="space-y-3 mb-8">
                  {[
                    'AI & Machine Learning Development',
                    'Data Science & Analytics',
                    'Full-Stack Web Applications',
                    'Automation & Process Optimization'
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                      <span className="text-gray-300">{service}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <motion.a
                    href="mailto:rishichowdaryperam@gmail.com?subject=Project Inquiry"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    Start a Project
                  </motion.a>

                  <motion.a
                    href="/resume.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full px-8 py-4 border border-gray-600 rounded-full text-white font-medium text-center hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                  >
                    Download Resume
                  </motion.a>
                </div>
              </div>

              {/* Floating Elements */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;