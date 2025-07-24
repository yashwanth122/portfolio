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

      {/* F1 Car Animation */}
      <motion.div
        className="absolute bottom-10 right-0"
        initial={{ x: 100 }}
        animate={isAnimating ? { x: -400 } : { x: 100 }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
      >
        {/* F1 Car Body */}
        <div className="relative">
          {/* Main F1 Body */}
          <div className="relative">
            {/* Front Wing */}
            <div className="absolute -left-2 top-3 w-4 h-2 bg-gradient-to-r from-neon-orange to-neon-purple rounded-l-lg"></div>
            
            {/* Car Frame - sleeker F1 shape */}
            <div className="w-24 h-6 bg-gradient-to-r from-neon-blue to-neon-purple rounded-r-full relative">
              {/* Cockpit */}
              <div className="absolute top-1 left-8 w-8 h-4 bg-gray-900 rounded-lg"></div>
              <div className="absolute top-2 left-9 w-6 h-2 bg-cyan-200 rounded opacity-80"></div>
              
              {/* Side Details */}
              <div className="absolute top-2 left-2 w-4 h-2 bg-neon-orange rounded"></div>
              <div className="absolute bottom-1 left-1 right-1 h-0.5 bg-white rounded"></div>
              
              {/* Rear Wing */}
              <div className="absolute -right-1 top-1 w-2 h-4 bg-gradient-to-b from-neon-purple to-neon-orange rounded-r"></div>
            </div>

            {/* F1 Wheels - larger and more detailed */}
            <motion.div
              className="absolute -bottom-3 left-1 w-5 h-5 bg-gray-900 rounded-full border border-neon-blue"
              animate={isAnimating ? { rotate: -720 } : { rotate: 0 }}
              transition={{ duration: 2, ease: "linear" }}
            >
              <div className="absolute inset-0.5 bg-gray-700 rounded-full"></div>
              <div className="absolute inset-1 bg-gray-500 rounded-full"></div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-3 right-1 w-5 h-5 bg-gray-900 rounded-full border border-neon-blue"
              animate={isAnimating ? { rotate: -720 } : { rotate: 0 }}
              transition={{ duration: 2, ease: "linear" }}
            >
              <div className="absolute inset-0.5 bg-gray-700 rounded-full"></div>
              <div className="absolute inset-1 bg-gray-500 rounded-full"></div>
            </motion.div>

            {/* Exhaust flames */}
            {isAnimating && (
              <div className="absolute right-0 top-3">
                <motion.div
                  className="w-3 h-1 bg-gradient-to-r from-neon-orange to-red-500 rounded-r"
                  animate={{ 
                    scaleX: [0.5, 1.5, 0.8, 1.2, 0.6],
                    opacity: [0.8, 1, 0.6, 0.9, 0.7]
                  }}
                  transition={{ 
                    duration: 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            )}
          </div>

          {/* Speed Lines */}
          {isAnimating && (
            <div className="absolute right-28 top-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-0.5 bg-neon-orange opacity-70"
                  style={{ top: i * 2 }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
                  transition={{ 
                    duration: 0.2,
                    repeat: Infinity,
                    delay: i * 0.05,
                    repeatDelay: 0.1
                  }}
                />
              ))}
            </div>
          )}
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