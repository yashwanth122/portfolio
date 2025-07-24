import { motion } from "framer-motion";
import { ArrowRight, Users, TrafficCone } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "TrafficCone Sign Classification",
      description: "Built a model for traffic sign recognition with deep learning that guarantees people's safety and security. Created using Python, HTML, CSS and Dataset with proven real-world impact.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      icon: TrafficCone,
      technologies: ["Python", "Deep Learning", "HTML/CSS"],
      iconColor: "text-neon-blue",
    },
    {
      title: "User Management System",
      description: "Built a comprehensive user management system using React.js that allows users to login and register. Utilized Redux for efficient data handling and seamless integration of complex features.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      icon: Users,
      technologies: ["React.js", "Redux", "JavaScript"],
      iconColor: "text-neon-purple",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <project.icon className={`text-2xl ${project.iconColor} mr-3`} />
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`px-3 py-1 rounded-full text-sm ${
                        techIndex % 3 === 0 
                          ? 'bg-neon-blue/20 text-neon-blue' 
                          : techIndex % 3 === 1 
                          ? 'bg-neon-purple/20 text-neon-purple'
                          : 'bg-neon-orange/20 text-neon-orange'
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className={`flex items-center ${project.iconColor} hover:text-white transition-colors duration-300`}
                >
                  <span className="mr-2">View Project</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
