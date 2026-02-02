'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ProfilePhoto = () => {
  return (
    <div className="w-full h-full relative">
      {/* Dark gradient background */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: 'linear-gradient(135deg, #0f1729 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />

      {/* Profile Photo */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <motion.div
          className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl shadow-blue-500/20 border border-gray-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Professional Photo */}
          <Image
            src="/images/rishi.jpg"
            alt="Rishi Chowdary"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 100vw, 320px"
          />

          {/* Subtle overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Floating glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const SimpleAvatar3D = ProfilePhoto;

export default SimpleAvatar3D;