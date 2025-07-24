import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedCharacter() {
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Character Body */}
      <motion.div
        animate={{ 
          y: [-5, 5, -5],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Head */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-neon-orange to-neon-purple rounded-full relative mx-auto mb-2"
          animate={isWaving ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Eyes */}
          <div className="absolute top-5 left-4 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-5 right-4 w-2 h-2 bg-white rounded-full"></div>
          
          {/* Smile */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-white rounded-full"
            animate={isWaving ? { scaleX: [1, 1.2, 1] } : {}}
          />
        </motion.div>

        {/* Body */}
        <div className="w-12 h-16 bg-gradient-to-b from-neon-blue to-neon-purple rounded-lg mx-auto mb-2"></div>

        {/* Arms */}
        <div className="relative">
          {/* Left Arm */}
          <div className="absolute -left-4 top-2 w-3 h-8 bg-gradient-to-b from-neon-orange to-neon-purple rounded-full transform -rotate-12"></div>
          
          {/* Right Arm - Waving */}
          <motion.div
            className="absolute -right-4 top-2 w-3 h-8 bg-gradient-to-b from-neon-orange to-neon-purple rounded-full origin-bottom"
            animate={isWaving ? {
              rotate: [-12, 20, -12, 20, -12],
            } : { rotate: -12 }}
            transition={{ 
              duration: 0.5,
              repeat: isWaving ? 2 : 0
            }}
          />
        </div>

        {/* Legs */}
        <div className="flex gap-2 justify-center mt-4">
          <motion.div
            className="w-3 h-10 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full"
            animate={{ 
              rotate: [-2, 2, -2],
              scaleY: [1, 0.95, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="w-3 h-10 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full"
            animate={{ 
              rotate: [2, -2, 2],
              scaleY: [0.95, 1, 0.95]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </motion.div>

      {/* Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isWaving ? 
          { opacity: 1, scale: 1, y: 0 } : 
          { opacity: 0, scale: 0, y: 20 }
        }
        transition={{ duration: 0.3 }}
        className="absolute -top-16 left-1/2 transform -translate-x-1/2"
      >
        <div className="relative bg-white text-dark-bg px-4 py-2 rounded-lg font-bold text-lg">
          Hi! 👋
          {/* Speech bubble tail */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        </div>
      </motion.div>

      {/* Floating particles around character */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}