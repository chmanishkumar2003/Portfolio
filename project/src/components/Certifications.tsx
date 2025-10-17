import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiExternalLink } from 'react-icons/hi';
import { FaAws, FaDatabase, FaPython } from 'react-icons/fa';

const Certifications: React.FC = () => {
  const [currentCert, setCurrentCert] = useState(0);

  <!-About Certificates-!>
  const certifications = [
    {
      title: "Structured Query Language (SQL)",
      issuer: "IBM",
      date: "2024",
      level: "Associate",
      icon: <FaDatabase className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600",
      description: "Comprehensive SQL certification covering database design, queries, and optimization techniques.",
      skills: ["Database Design", "SQL Queries", "Data Optimization", "Database Management"],
      credentialId: "LKW84B2BCX2P",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/LKW84B2BCX2P"
    },
    {
      title: "Machine Learning",
      issuer: "Duke University",
      date: "2024",
      level: "Fundamentals",
      icon: <FaPython className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      description: "Machine learning fundamentals, algorithms, and real-world applications covering supervised and unsupervised learning.",
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Data Analysis"],
      credentialId: "ZJPECG4X5WHR",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/ZJPECG4X5WHR"
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "AWS",
      date: "2024",
      level: "Fundamentals",
      icon: <FaAws className="w-8 h-8" />,
      color: "from-orange-500 to-orange-700",
      description: "AWS Cloud fundamentals covering core services, security, architecture, and pricing models.",
      skills: ["AWS Services", "Cloud Architecture", "Security", "Cost Management"],
      credentialId: "FH3078KJ9HV1",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/FH3078KJ9HV1"
    }
  ];

  const nextCert = () => setCurrentCert((prev) => (prev + 1) % certifications.length);
  const prevCert = () => setCurrentCert((prev) => (prev - 1 + certifications.length) % certifications.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="certifications" className="section bg-black/20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Certifications
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Professional certifications that validate my expertise and commitment to continuous learning
          </motion.p>

          {/* Certification Carousel */}
          <motion.div variants={itemVariants} className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCert}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-8"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Certificate Info */}
                    <div className="flex-shrink-0 text-center lg:text-left">
                      <div
                        className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${certifications[currentCert].color} mb-4`}
                      >
                        <div className="text-white">{certifications[currentCert].icon}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-gray-400">Level</div>
                        <div className="font-semibold text-blue-400">{certifications[currentCert].level}</div>
                        <div className="text-sm text-gray-400">Issued</div>
                        <div className="font-semibold">{certifications[currentCert].date}</div>
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold gradient-text mb-2">
                        {certifications[currentCert].title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-4">
                        {certifications[currentCert].issuer}
                      </p>
                      <p className="text-gray-400 mb-6">{certifications[currentCert].description}</p>

                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 gradient-text">Skills Validated:</h4>
                        <div className="flex flex-wrap gap-2">
                          {certifications[currentCert].skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-800/50 text-blue-400 rounded-full text-sm border border-blue-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* ✅ View Certificate Button */}
                      <a
                        href={certifications[currentCert].verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-md hover:scale-105 transition-transform"
                      >
                        <HiExternalLink size={18} />
                        View Certificate
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevCert}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
            >
              <HiChevronLeft size={24} />
            </button>
            <button
              onClick={nextCert}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
            >
              <HiChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCert(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentCert
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Certification Stats */}
          <motion.div variants={itemVariants} className="mt-16 grid md:grid-cols-3 gap-6 text-center">
            <div className="glass-card">
              <div className="text-3xl font-bold text-blue-500 mb-2">3</div>
              <div className="text-gray-400">Professional Certifications</div>
            </div>
            <div className="glass-card">
              <div className="text-3xl font-bold text-purple-500 mb-2">3</div>
              <div className="text-gray-400">Cloud Platforms</div>
            </div>
            <div className="glass-card">
              <div className="text-3xl font-bold text-emerald-500 mb-2">2024</div>
              <div className="text-gray-400">Latest Certification</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
