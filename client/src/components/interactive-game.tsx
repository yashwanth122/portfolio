import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Play, Pause, RotateCcw, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleSystem from "./particle-system";

interface Bubble {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speed: number;
}

export default function InteractiveGame() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('bubble-game-high-score') || '0');
  });
  const [gameActive, setGameActive] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [particleActive, setParticleActive] = useState(false);
  const [particlePosition, setParticlePosition] = useState({ x: 0, y: 0 });

  const colors = ['bg-neon-blue', 'bg-neon-purple', 'bg-neon-orange'];
  const colorValues = ['hsl(195, 100%, 50%)', 'hsl(258, 90%, 66%)', 'hsl(25, 95%, 53%)'];

  const createBubble = useCallback(() => {
    const newBubble: Bubble = {
      id: Math.random(),
      x: Math.random() * 80 + 10, // 10% to 90% width
      y: 100, // Start at bottom
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 30 + 20, // 20px to 50px
      speed: Math.random() * 2 + 1, // 1 to 3 speed
    };
    return newBubble;
  }, []);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setGameStarted(true);
    setBubbles([]);
  };

  const stopGame = () => {
    setGameActive(false);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('bubble-game-high-score', score.toString());
    }
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(false);
    setGameStarted(false);
    setBubbles([]);
  };

  const popBubble = (bubbleId: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setParticlePosition({ 
      x: rect.left + rect.width / 2, 
      y: rect.top + rect.height / 2 
    });
    setParticleActive(true);
    setTimeout(() => setParticleActive(false), 100);
    
    setBubbles(prev => prev.filter(b => b.id !== bubbleId));
    setScore(prev => prev + 10);
  };

  // Game timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      stopGame();
    }
    return () => clearTimeout(timer);
  }, [gameActive, timeLeft]);

  // Bubble generation
  useEffect(() => {
    let bubbleTimer: NodeJS.Timeout;
    if (gameActive) {
      bubbleTimer = setInterval(() => {
        setBubbles(prev => [...prev, createBubble()]);
      }, 800);
    }
    return () => clearInterval(bubbleTimer);
  }, [gameActive, createBubble]);

  // Bubble movement and cleanup
  useEffect(() => {
    let animationFrame: number;
    if (gameActive) {
      const animate = () => {
        setBubbles(prev => 
          prev
            .map(bubble => ({
              ...bubble,
              y: bubble.y - bubble.speed
            }))
            .filter(bubble => bubble.y > -50) // Remove bubbles that went off screen
        );
        animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [gameActive]);

  return (
    <section className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Interactive <span className="gradient-text">Bubble Pop</span> Game
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Test your reflexes with this fun animated game! Pop the floating bubbles before they escape. 
          Built with Framer Motion to showcase smooth animations and interactive design.
        </motion.p>

        <div className="max-w-4xl mx-auto">
          {/* Game Stats */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect px-6 py-4 rounded-xl text-center"
            >
              <Target className="text-neon-blue mx-auto mb-2" size={24} />
              <div className="text-2xl font-bold text-neon-blue">{score}</div>
              <div className="text-sm text-gray-400">Score</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect px-6 py-4 rounded-xl text-center"
            >
              <Trophy className="text-neon-orange mx-auto mb-2" size={24} />
              <div className="text-2xl font-bold text-neon-orange">{highScore}</div>
              <div className="text-sm text-gray-400">Best</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect px-6 py-4 rounded-xl text-center"
            >
              <div className="text-2xl font-bold text-neon-purple">{timeLeft}s</div>
              <div className="text-sm text-gray-400">Time</div>
            </motion.div>
          </div>

          {/* Game Controls */}
          <div className="flex justify-center gap-4 mb-8">
            {!gameStarted ? (
              <Button
                onClick={startGame}
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-105 transition-all duration-300 neon-glow"
              >
                <Play className="mr-2" size={16} />
                Start Game
              </Button>
            ) : (
              <>
                <Button
                  onClick={gameActive ? stopGame : startGame}
                  className="bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-105 transition-all duration-300"
                >
                  {gameActive ? <Pause className="mr-2" size={16} /> : <Play className="mr-2" size={16} />}
                  {gameActive ? 'Pause' : 'Resume'}
                </Button>
                <Button
                  onClick={resetGame}
                  variant="outline"
                  className="border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-dark-bg transition-all duration-300"
                >
                  <RotateCcw className="mr-2" size={16} />
                  Reset
                </Button>
              </>
            )}
          </div>

          {/* Game Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative glass-effect rounded-2xl overflow-hidden mx-auto"
            style={{ height: '400px', maxWidth: '600px' }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>

            {/* Game instructions overlay */}
            {!gameStarted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    🎯
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 gradient-text">Ready to Play?</h3>
                  <p className="text-gray-400">Click the floating bubbles to pop them!</p>
                </div>
              </motion.div>
            )}

            {/* Game over overlay */}
            {gameStarted && !gameActive && timeLeft === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center z-10 bg-dark-bg/80"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-4"
                  >
                    {score > highScore ? '🏆' : '🎮'}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 gradient-text">
                    {score > highScore ? 'New High Score!' : 'Game Over!'}
                  </h3>
                  <p className="text-gray-400">Final Score: {score}</p>
                </div>
              </motion.div>
            )}

            {/* Bubbles */}
            <AnimatePresence>
              {bubbles.map((bubble) => (
                <motion.div
                  key={bubble.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    y: bubble.y + '%'
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`absolute cursor-pointer rounded-full ${bubble.color} shadow-lg`}
                  style={{
                    left: `${bubble.x}%`,
                    width: `${bubble.size}px`,
                    height: `${bubble.size}px`,
                    boxShadow: `0 0 20px ${colorValues[colors.indexOf(bubble.color)]}40`,
                  }}
                  onClick={(e) => popBubble(bubble.id, e)}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full rounded-full bg-gradient-to-br from-white/30 to-transparent"
                  />
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Particle effects for pops */}
            <ParticleSystem 
              active={particleActive}
              centerX={particlePosition.x}
              centerY={particlePosition.y}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mt-6 text-sm"
          >
            💡 This interactive game demonstrates real-time animation, state management, and user interaction - 
            core skills in motion graphics and web development!
          </motion.p>
        </div>
      </div>
    </section>
  );
}