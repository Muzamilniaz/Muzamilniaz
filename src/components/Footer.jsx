import React from "react";
import { motion } from "framer-motion";
import { SiGmail, SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: SiGithub,
      link: "https://github.com/Muzamilniaz",
      color: "text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      link: "https://www.linkedin.com/in/muzamil-niaz-68b9991a3/",
      color: "text-cyan-400",
    },
    {
      name: "Email",
      icon: SiGmail,
      link: "mailto:muzamilniaz.pro@gmail.com",
      color: "text-red-400",
    },
    {
      name: "WhatsApp",
      icon: SiWhatsapp,
      link: "https://wa.me/923166844292",
      color: "text-green-400",
    },
  ];

  return (
    <footer className="w-full bg-black-100/20 border-t border-secondary/20 py-6 sm:py-8">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6"
        >
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-secondary/60 text-xs sm:text-sm">
              © {currentYear} Muzamil Niaz. All rights reserved.
            </p>
            <p className="text-secondary/50 text-xs mt-1">
              Crafted with passion & creativity
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-black-100/40 hover:bg-black-100/60 flex items-center justify-center transition-all duration-300 border border-secondary/20 hover:border-secondary/40"
                  whileHover={{ y: -2, scale: 1.05 }}
                  title={social.name}
                >
                  <Icon size={16} className={`${social.color} transition-colors`} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
