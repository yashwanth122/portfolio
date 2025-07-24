import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    { icon: SiLinkedin, href: "#", color: "hover:text-neon-blue" },
    { icon: SiGithub, href: "#", color: "hover:text-neon-purple" },
    { icon: SiInstagram, href: "#", color: "hover:text-neon-orange" },
  ];

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <div className="text-2xl font-bold gradient-text mb-2">
              Thummala Yashwanth Chowdhary
            </div>
            <p className="text-gray-400">Motion Graphics Editor & Creative Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 ${social.color} transition-colors duration-300`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © 2024 Thummala Yashwanth Chowdhary. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
