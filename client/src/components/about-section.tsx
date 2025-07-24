import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">About</span> Me
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              A focused and goal-oriented engineering professional with zeal to make a winning career in Software Development. 
              Skills in analyzing and interpreting unique problems, with a combination of project experience and logical and 
              analytical thinking to find the right solutions.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Proficient in Python, MySQL, HTML and CSS. A go-getter with strong communication, coordination, analytical and 
              networking capabilities. Currently pursuing Bachelor of Computer Science at St.Peter's Engineering College.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl"
              >
                <MapPin className="text-neon-blue text-2xl mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Hyderabad, TG</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl"
              >
                <GraduationCap className="text-neon-purple text-2xl mb-4" />
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-gray-400">Computer Science Student</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional video editing setup"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
