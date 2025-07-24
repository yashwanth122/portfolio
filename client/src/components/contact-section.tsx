import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedCar from "./animated-car";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "yashwanthchowdhary04@gmail.com",
      href: "mailto:yashwanthchowdhary04@gmail.com",
      color: "text-neon-blue",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9398280276",
      href: "tel:+919398280276",
      color: "text-neon-purple",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, Telangana",
      color: "text-neon-orange",
    },
    {
      icon: SiLinkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "#",
      color: "text-neon-blue",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Let's <span className="gradient-text">Connect</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-neon-blue">Get in Touch</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ready to bring your creative vision to life? Let's collaborate and create something amazing together. 
                I'm always excited to work on new and challenging projects.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <info.icon className={`text-2xl ${info.color} mr-4`} />
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className={`text-gray-400 hover:${info.color} transition-colors duration-300`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>



            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="bg-dark-tertiary border-gray-600 focus:border-neon-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-dark-tertiary border-gray-600 focus:border-neon-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    required
                    className="bg-dark-tertiary border-gray-600 focus:border-neon-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    className="bg-dark-tertiary border-gray-600 focus:border-neon-blue"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-105 transition-all duration-300 neon-glow"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="mr-2" size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Animated Car */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <AnimatedCar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
