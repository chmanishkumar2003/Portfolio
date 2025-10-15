import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "DSA Intern (Java)",
      company: "Innovate",
      location: "Remote",
      period: "2024",
      type: "Internship",
      description: "Applied knowledge of Data Structures and Algorithms in Java to solve real-world problems efficiently. Worked with arrays, linked lists, stacks, and queues to manage data, and implemented algorithms like searching and sorting to optimize application performance.",
      achievements: [
        "Solved real-world problems using arrays and data structures",
        "Implemented efficient searching and sorting algorithms",
        "Worked with stacks and queues for complex problem solving",
        "Gained hands-on experience with Java programming and code optimization"
      ],
      technologies: ["Java", "Data Structures", "Algorithms", "Problem Solving", "Code Optimization"],
      techIcons: [<FaReact />, <FaNodeJs />]
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
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Professional Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            My internship and professional work experience
          </motion.p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10 hidden lg:block"></div>

                  <div className="lg:ml-20">
                    <motion.div
                      className="glass-card hover:scale-[1.02] transition-transform"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold gradient-text mb-2">{exp.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-2">
                            <div className="flex items-center gap-1">
                              <HiBriefcase className="w-4 h-4" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <HiLocationMarker className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <HiCalendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            exp.type === 'Internship' 
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {exp.type}
                          </span>
                          <div className="flex gap-1">
                            {exp.techIcons.map((icon, iconIndex) => (
                              <div key={iconIndex} className="text-gray-400 text-lg">
                                {icon}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 gradient-text">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-300 flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 gradient-text">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-800/50 text-blue-400 rounded-full text-sm border border-blue-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold gradient-text mb-8">Professional Summary</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card">
                <div className="text-3xl font-bold text-blue-500 mb-2">1</div>
                <div className="text-gray-400">Internship Completed</div>
              </div>
              <div className="glass-card">
                <div className="text-3xl font-bold text-purple-500 mb-2">2+</div>
                <div className="text-gray-400">Major Projects</div>
              </div>
              <div className="glass-card">
                <div className="text-3xl font-bold text-emerald-500 mb-2">6+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;