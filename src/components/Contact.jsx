import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SiGmail, SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { MdCheck, MdClose, MdInfo, MdAutoAwesome } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [validation, setValidation] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    // Validation feedback
    if (name === "name") {
      setValidation({ ...validation, name: value.trim().length > 0 });
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setValidation({ ...validation, email: emailRegex.test(value) });
    } else if (name === "subject") {
      setValidation({ ...validation, subject: value.trim().length > 0 });
    } else if (name === "message") {
      setValidation({ ...validation, message: value.trim().length > 10 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!validation.name || !validation.email || !validation.subject || !validation.message) {
      setError(true);
      setTimeout(() => setError(false), 4000);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: "sujata@jsmastery.pro",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          setError(false);

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          setValidation({
            name: false,
            email: false,
            subject: false,
            message: false,
          });

          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          setLoading(false);
          setError(true);
          setSubmitted(false);
          console.error(error);

          setTimeout(() => setError(false), 5000);
        }
      );
  };

  return (
    <div className={`w-full `}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 md:mb-16"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Left Column - Combined Form and Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="green-pink-gradient p-[2px] rounded-[20px]" style={{
            backgroundImage: 'linear-gradient(135deg, rgb(236, 72, 153), rgb(168, 85, 247), rgb(236, 72, 153))',
            backgroundSize: '200% 200%',
            animation: 'borderGlow 3s ease infinite'
          }}>
            <div className="bg-tertiary rounded-[20px] p-6 sm:p-8">
              <div className="space-y-6">
                {/* Contact Information Section - First */}
                <div>
                  <h4 className="text-white text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
                    <span className="text-primary">📞</span> Get In Touch
                  </h4>
                  <p className="text-secondary/70 text-sm mb-4">Reach out through any of these channels</p>

                  {/* Social Links Grid - 2 per row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {/* Email */}
                    <motion.div
                      className="flex flex-row items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/40 hover:border-red-500/70 transition-all duration-300 group cursor-pointer col-span-1"
                      whileHover={{ x: 2, scale: 1.02 }}
                      onClick={() => navigator.clipboard.writeText('muzamilniaz.pro@gmail.com')}
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-500/30 flex items-center justify-center group-hover:bg-red-500/50 transition-all flex-shrink-0">
                        <SiGmail size={16} className="text-red-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-xs">Email</p>
                        <p className="text-secondary/70 text-xs">muzamilniaz.pro</p>
                      </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.a
                      href="tel:+923166844292"
                      className="flex flex-row items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/40 hover:border-blue-500/70 transition-all duration-300 group no-underline col-span-1"
                      whileHover={{ x: 2, scale: 1.02 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/50 transition-all flex-shrink-0">
                        <FiPhone size={16} className="text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-xs">Phone</p>
                        <p className="text-secondary/70 text-xs">+92 316 6844292</p>
                      </div>
                    </motion.a>

                    {/* WhatsApp */}
                    <motion.a
                      href="https://wa.me/923166844292"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/40 hover:border-green-500/70 transition-all duration-300 group no-underline col-span-1"
                      whileHover={{ x: 2, scale: 1.02 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-green-500/30 flex items-center justify-center group-hover:bg-green-500/50 transition-all flex-shrink-0">
                        <SiWhatsapp size={16} className="text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-xs">WhatsApp</p>
                        <p className="text-secondary/70 text-xs">Direct Message</p>
                      </div>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                      href="https://www.linkedin.com/in/muzamil-niaz-68b9991a3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/40 hover:border-cyan-500/70 transition-all duration-300 group no-underline col-span-1"
                      whileHover={{ x: 2, scale: 1.02 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/50 transition-all flex-shrink-0">
                        <SiLinkedin size={16} className="text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-xs">LinkedIn</p>
                        <p className="text-secondary/70 text-xs">Connect</p>
                      </div>
                    </motion.a>
                  </div>

                  {/* Response Time Badge */}
                  <motion.div 
                    className="p-3 rounded-lg bg-gradient-to-r from-emerald-500/20 via-green-500/15 to-emerald-500/10 border border-emerald-500/50 flex items-center gap-3 shadow-lg hover:shadow-emerald-500/20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex-shrink-0">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-xs">Usually replies within</p>
                      <p className="text-emerald-400 text-xs font-bold">24 hours</p>
                    </div>
                  </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-secondary/30 w-full"></div>

                {/* Form Section */}
                <div>
                  <h4 className="text-white text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
                    <span className="text-primary">✉️</span> Send Message
                  </h4>
                  <p className="text-secondary/70 text-sm mb-4">I'd love to hear from you. Send me a message!</p>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3"
                  >
                    {/* Name and Email in one row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <motion.div
                        className="flex flex-col"
                        whileHover={{ y: -1 }}
                      >
                        <label className="text-white font-semibold mb-2 text-xs sm:text-sm flex items-center justify-between">
                          <span>Name</span>
                          {form.name && validation.name && (
                            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-400 text-xs">✓</motion.span>
                          )}
                        </label>
                        <motion.input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={`w-full bg-black-100/60 border rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-secondary/50 font-medium transition-all duration-300 focus:outline-none focus:ring-2 ${
                            form.name && validation.name ? "border-green-500/60 focus:ring-green-500/30" : "border-secondary/30 hover:border-secondary/50 focus:border-primary/50 focus:ring-primary/20"
                          }`}
                          whileFocus={{ scale: 1.01 }}
                        />
                      </motion.div>

                      <motion.div
                        className="flex flex-col"
                        whileHover={{ y: -1 }}
                      >
                        <label className="text-white font-semibold mb-2 text-xs sm:text-sm flex items-center justify-between">
                          <span>Email</span>
                          {form.email && (
                            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className={`text-xs ${validation.email ? "text-green-400" : "text-red-400"}`}>
                              {validation.email ? "✓" : "✗"}
                            </motion.span>
                          )}
                        </label>
                        <motion.input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full bg-black-100/60 border rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-secondary/50 font-medium transition-all duration-300 focus:outline-none focus:ring-2 ${
                            form.email && validation.email ? "border-green-500/60 focus:ring-green-500/30" : form.email ? "border-red-500/60 focus:ring-red-500/30" : "border-secondary/30 hover:border-secondary/50 focus:border-primary/50 focus:ring-primary/20"
                          }`}
                          whileFocus={{ scale: 1.01 }}
                        />
                      </motion.div>
                    </div>

                  {/* Subject */}
                  <motion.div
                    className="flex flex-col"
                    whileHover={{ y: -1 }}
                  >
                    <label className="text-white font-semibold mb-2 text-xs sm:text-sm flex items-center justify-between">
                      <span>Subject</span>
                      {form.subject && validation.subject && (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-green-400 text-xs">✓</motion.span>
                      )}
                    </label>
                    <motion.input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className={`w-full bg-black-100/60 border rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-secondary/50 font-medium transition-all duration-300 focus:outline-none focus:ring-2 ${
                        form.subject && validation.subject ? "border-green-500/60 focus:ring-green-500/30" : "border-secondary/30 hover:border-secondary/50 focus:border-primary/50 focus:ring-primary/20"
                      }`}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    className="flex flex-col"
                    whileHover={{ y: -1 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-white font-semibold text-xs sm:text-sm flex items-center gap-2">
                        <span>Message</span>
                        {form.message && (
                          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className={`text-xs ${validation.message ? "text-green-400" : "text-yellow-400"}`}>
                            {validation.message ? "✓" : "!"}
                          </motion.span>
                        )}
                      </label>
                      <span className="text-secondary/50 text-xs">{form.message.length}/500</span>
                    </div>
                    <motion.textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      maxLength={500}
                      placeholder="Tell me about your project..."
                      rows={2}
                      className={`w-full bg-black-100/60 border rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-secondary/50 font-medium resize-none transition-all duration-300 focus:outline-none focus:ring-2 ${
                        form.message && validation.message ? "border-green-500/60 focus:ring-green-500/30" : form.message && form.message.length < 10 ? "border-yellow-500/60 focus:ring-yellow-500/30" : "border-secondary/30 hover:border-secondary/50 focus:border-primary/50 focus:ring-primary/20"
                      }`}
                      whileFocus={{ scale: 1.01 }}
                    />
                    {form.message && form.message.length < 10 && (
                      <motion.p className="text-yellow-400/70 text-xs mt-1 flex items-center gap-1">
                        <MdInfo size={12} /> Minimum 10 characters
                      </motion.p>
                    )}
                  </motion.div>

                    {/* Button and Messages */}
                    <motion.div className="flex flex-col gap-3 pt-2">
                      <motion.button
                        type="submit"
                        disabled={loading}
                        className={`green-pink-gradient py-3 px-6 rounded-lg text-white shadow-md transition-all duration-300 w-full text-sm font-semibold tracking-wide ${
                          loading ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg hover:scale-105"
                        }`}
                        whileTap={!loading ? { scale: 0.98 } : {}}
                      >
                        <span className="flex items-center justify-center gap-1">
                          {loading ? (
                            <>
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="inline-block"
                              >
                                ⟳
                              </motion.span>
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </span>
                      </motion.button>

                      {submitted && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 bg-green-500/15 border-2 border-green-500/50 px-4 py-3 rounded-xl text-xs shadow-lg"
                        >
                          <MdCheck className="text-green-400 text-base flex-shrink-0" />
                          <span className="text-green-400 font-medium text-xs">Message sent! 🎉</span>
                        </motion.div>
                      )}

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 bg-red-500/15 border-2 border-red-500/50 px-4 py-3 rounded-xl text-xs shadow-lg"
                        >
                          <MdClose className="text-red-400 text-base flex-shrink-0" />
                          <span className="text-red-400 font-medium text-xs">Please check fields</span>
                        </motion.div>
                      )}
                    </motion.div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          {/* Earth Canvas - Plain, no styling */}
          <div className="h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px]">
            <EarthCanvas />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
