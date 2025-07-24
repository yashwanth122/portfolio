import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Horizontal scroll progress - top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      
      {/* Vertical scroll progress - right side */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-orange z-50"
        style={{ scaleY, transformOrigin: "0%" }}
      />
    </>
  );
}