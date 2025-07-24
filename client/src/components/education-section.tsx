import { motion } from "framer-motion";
import { GraduationCap, School, Award, Code, Trophy, Cloud } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "St.Peter's Engineering College",
      period: "2021 - Present",
      icon: GraduationCap,
      color: "text-neon-blue",
    },
    {
      degree: "Intermediate",
      institution: "Ignite Jr College",
      period: "2019 - 2021",
      icon: School,
      color: "text-neon-purple",
    },
    {
      degree: "SSC",
      institution: "Shraddha The School",
      period: "2018 - 2019",
      icon: Award,
      color: "text-neon-orange",
    },
  ];

  const certifications = [
    {
      title: "Google Cloud Computing",
      description: "Completed comprehensive Google Cloud Computing certification",
      icon: Cloud,
      color: "text-neon-blue",
    },
    {
      title: "Coding Hackathon",
      description: "Participated in 6hrs intensive coding hackathon",
      icon: Code,
      color: "text-neon-purple",
    },
    {
      title: "Project Expo - 3rd Place",
      description: "Secured third place in college Project Expo competition",
      icon: Trophy,
      color: "text-neon-orange",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Education & <span className="gradient-text">Certifications</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-neon-blue">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect p-6 rounded-xl"
                >
                  <div className="flex items-start">
                    <item.icon className={`text-2xl ${item.color} mr-4 mt-1`} />
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{item.degree}</h4>
                      <p className={`${item.color} font-medium mb-1`}>{item.institution}</p>
                      <p className="text-gray-400 text-sm">{item.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-neon-purple">Certifications & Achievements</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-6 rounded-xl"
                >
                  <div className="flex items-center mb-4">
                    <cert.icon className={`text-3xl ${cert.color} mr-4`} />
                    <h4 className="text-xl font-semibold">{cert.title}</h4>
                  </div>
                  <p className="text-gray-400">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
