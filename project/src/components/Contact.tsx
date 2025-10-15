import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheckCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <HiMail className="w-6 h-6" />,
      title: "Email",
      value: "ch.manishkumar2003@gmail.com",
      link: "mailto:ch.manishkumar2003@gmail.com"
    },
    {
      icon: <HiPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7989992982",
      link: "tel:+917989992982"
    },
    {
      icon: <HiLocationMarker className="w-6 h-6" />,
      title: "Location",
      value: "Nizamabad, India",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/chmanishkumar2003",
      color: "hover:text-gray-400"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manish-kumar7989/",
      color: "hover:text-blue-400"
    },
   
    {
      icon: <FaInstagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/manish_kumar_0_1/",
      color: "hover:text-pink-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="section relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            I'm always open to discussing new opportunities and interesting projects
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-8">
                  I'm passionate about creating innovative solutions and would love to hear about your next project. 
                  Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modern-card p-6 flex items-center space-x-4 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-blue-500 group-hover:text-purple-500 transition-colors p-3 rounded-xl bg-blue-500/10 group-hover:bg-purple-500/10">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-semibold gradient-text text-lg">{info.title}</div>
                        <div className="text-gray-300 group-hover:text-white transition-colors">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold gradient-text mb-4">Follow Me</h4>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 transition-all border border-gray-700/50 hover:border-gray-600/50 ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-xl">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="modern-card p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Send Message</h3>
                
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 flex items-center gap-2"
                  >
                    <HiCheckCircle />
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:border-blue-500 focus:outline-none transition-all focus:bg-gray-800/70"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:border-blue-500 focus:outline-none transition-all focus:bg-gray-800/70"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:border-blue-500 focus:outline-none transition-all focus:bg-gray-800/70"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:border-blue-500 focus:outline-none transition-all focus:bg-gray-800/70 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glow-button disabled:opacity-50 disabled:cursor-not-allowed py-4"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <HiPaperAirplane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-gray-800"
      >
        <div className="container text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Chintakayala Manish Kumar. All rights reserved.
          </p>
          <p className="text-gray-500">
            Made with ❤️ in India.
          </p>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;