import { motion } from "framer-motion";
import { 
  MessageCircle, 
  RefreshCw, 
  Clock, 
  Brain,
  Database,
  Code2,
  Lightbulb,
  RotateCw,
  Users,
  MessageSquare
} from "lucide-react";
import { SiPython, SiReact, SiJavascript, SiCanva } from "react-icons/si";

export default function SkillsSection() {
  const technicalSkills = [
    { name: "Python", icon: SiPython, color: "text-neon-blue" },
    { name: "React.js", icon: SiReact, color: "text-neon-blue" },
    { name: "JavaScript", icon: SiJavascript, color: "text-neon-orange" },
    { name: "MySQL", icon: Database, color: "text-neon-purple" },
    { name: "Canva", icon: SiCanva, color: "text-neon-purple" },
  ];

  const softSkills = [
    { name: "Creative Thinking", icon: Lightbulb, color: "text-neon-blue", description: "Innovative solutions" },
    { name: "Experimentation & Iteration", icon: RotateCw, color: "text-neon-purple", description: "Continuous improvement" },
    { name: "Communication & Collaboration", icon: Users, color: "text-neon-orange", description: "Team player" },
    { name: "Openness to Feedback", icon: MessageSquare, color: "text-neon-blue", description: "Growth mindset" },
  ];

  const languages = ["English", "Telugu", "Hindi"];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="gradient-text">Skills</span> & Expertise
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-neon-blue">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-6 rounded-xl text-center"
                >
                  <skill.icon className={`mx-auto text-4xl ${skill.color} mb-4`} />
                  <h4 className="text-xl font-semibold">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-neon-purple">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-6 rounded-xl text-center"
                >
                  <skill.icon className={`mx-auto text-4xl ${skill.color} mb-4`} />
                  <h4 className="font-semibold mb-2">{skill.name}</h4>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-neon-orange">Languages</h3>
              <div className="flex flex-wrap gap-4">
                {languages.map((language, index) => (
                  <motion.span
                    key={language}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-sm font-medium"
                  >
                    {language}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
