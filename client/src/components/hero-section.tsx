import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import TypingAnimation from "./typing-animation";

export default function HeroSection() {
  const floatingElements = [
    {
      delay: 0,
      size: "w-4 h-4",
      color: "bg-neon-blue",
      position: "top-20 left-10",
    },
    {
      delay: 2,
      size: "w-6 h-6",
      color: "bg-neon-purple",
      position: "top-40 right-20",
    },
    {
      delay: 4,
      size: "w-3 h-3",
      color: "bg-neon-orange",
      position: "bottom-20 left-20",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Motion graphics workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-dark-bg"></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.size} ${element.color} rounded-full`}
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: element.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-6 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Thummala</span>
            <br />
            <span className="text-white">Yashwanth Chowdhary</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300 h-16 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypingAnimation
              phrases={[
                "Motion Graphics Editor",
                "Creative Developer",
                "UI/UX Designer",
                "Animation Specialist",
                "Full Stack Developer",
              ]}
            />
          </motion.p>

          <motion.p
            className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting visual stories through code and creativity. Specialized in
            bringing ideas to life with cutting-edge technology and stunning
            visuals.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold neon-glow transition-all duration-300"
            >
              <Eye size={20} />
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 border-2 border-neon-orange text-neon-orange rounded-full font-semibold hover:bg-neon-orange hover:text-dark-bg transition-all duration-300"
            >
              {/* <Download size={20} /> */}
              Glad you are here
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
