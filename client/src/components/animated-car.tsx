import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedCar() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 4000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-32 overflow-hidden">
      {/* Road */}
      <div className="absolute bottom-8 left-0 right-0 h-2 bg-gray-600 rounded-full">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-400 transform -translate-y-1/2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      </div>

      {/* Car Animation */}
      <motion.div
        className="absolute bottom-10 right-0"
        initial={{ x: 100 }}
        animate={isAnimating ? { x: -400 } : { x: 100 }}
        transition={{
          duration: 3,
          ease: "easeInOut"
        }}
      >
        {/* Car Body */}
        <div className="relative">
          {/* Main Car Body */}
          <div className="relative">
            {/* Car Frame */}
            <div className="w-20 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg relative">
              {/* Windows */}
              <div className="absolute top-1 left-2 w-6 h-4 bg-cyan-200 rounded opacity-80"></div>
              <div className="absolute top-1 right-2 w-6 h-4 bg-cyan-200 rounded opacity-80"></div>
              
              {/* Headlights */}
              <div className="absolute left-0 top-2 w-1 h-4 bg-yellow-300 rounded-l"></div>
              
              {/* Car Details */}
              <div className="absolute bottom-1 left-1 right-1 h-1 bg-gray-300 rounded"></div>
            </div>

            {/* Wheels */}
            <motion.div
              className="absolute -bottom-2 left-2 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"
              animate={isAnimating ? { rotate: -360 } : { rotate: 0 }}
              transition={{ duration: 3, ease: "linear" }}
            >
              <div className="absolute inset-1 bg-gray-400 rounded-full"></div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 right-2 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"
              animate={isAnimating ? { rotate: -360 } : { rotate: 0 }}
              transition={{ duration: 3, ease: "linear" }}
            >
              <div className="absolute inset-1 bg-gray-400 rounded-full"></div>
            </motion.div>
          </div>

          {/* Speed Lines */}
          {isAnimating && (
            <div className="absolute right-20 top-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-0.5 bg-neon-orange opacity-70"
                  style={{ top: i * 3 }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
                  transition={{ 
                    duration: 0.3,
                    repeat: Infinity,
                    delay: i * 0.1,
                    repeatDelay: 0.2
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Message Bubble */}
      <motion.div
        className="absolute top-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isAnimating ? 
          { opacity: 1, scale: 1, y: 0 } : 
          { opacity: 0, scale: 0, y: 20 }
        }
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="relative bg-white text-dark-bg px-6 py-3 rounded-lg font-bold text-lg whitespace-nowrap shadow-lg">
          Hope you have a great day! 🚗💨
          {/* Speech bubble tail */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-white"></div>
          </div>
        </div>
      </motion.div>

      {/* Dust clouds */}
      {isAnimating && (
        <div className="absolute bottom-6 right-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gray-400 rounded-full opacity-40"
              style={{ 
                right: i * 8,
                bottom: Math.random() * 8
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1.5, 0],
                opacity: [0, 0.6, 0.3, 0],
                x: [-20, -40, -60]
              }}
              transition={{ 
                duration: 1.5,
                delay: i * 0.1,
                repeat: 1
              }}
            />
          ))}
        </div>
      )}

      {/* Background elements */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-green-900/20 to-transparent rounded"></div>
      
      {/* Clouds in background */}
      <div className="absolute top-2 left-10 w-8 h-4 bg-gray-200 rounded-full opacity-30"></div>
      <div className="absolute top-4 right-20 w-6 h-3 bg-gray-200 rounded-full opacity-30"></div>
    </div>
  );
}