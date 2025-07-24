import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Shape {
  id: number;
  type: 'circle' | 'square' | 'triangle';
  x: number;
  y: number;
  color: string;
  size: number;
  rotationSpeed: number;
  floatSpeed: number;
}

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const colors = ['text-neon-blue', 'text-neon-purple', 'text-neon-orange'];
    const shapeTypes: Shape['type'][] = ['circle', 'square', 'triangle'];
    
    const newShapes: Shape[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 20 + 10,
      rotationSpeed: Math.random() * 4 + 1,
      floatSpeed: Math.random() * 20 + 10,
    }));

    setShapes(newShapes);
  }, []);

  const getShapeComponent = (shape: Shape) => {
    const baseClasses = `absolute opacity-20 ${shape.color}`;
    const sizeStyle = { width: shape.size, height: shape.size };

    switch (shape.type) {
      case 'circle':
        return (
          <div 
            className={`${baseClasses} rounded-full`}
            style={{
              ...sizeStyle,
              backgroundColor: 'currentColor',
            }}
          />
        );
      case 'square':
        return (
          <div 
            className={`${baseClasses}`}
            style={{
              ...sizeStyle,
              backgroundColor: 'currentColor',
            }}
          />
        );
      case 'triangle':
        return (
          <div 
            className={`${baseClasses}`}
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid currentColor`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
          }}
          transition={{
            y: {
              duration: shape.floatSpeed,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: shape.rotationSpeed,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {getShapeComponent(shape)}
        </motion.div>
      ))}
    </div>
  );
}