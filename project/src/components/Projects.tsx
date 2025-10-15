import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiExternalLink, HiEye, HiStar, HiCalendar } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDatabase, FaMobile } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Stock Market Prediction (Major Project)",
      description: "A comprehensive Stock Market Prediction application using Python and machine learning techniques to analyze historical stock data and predict future trends.",
      longDescription: "Developed a comprehensive Stock Market Prediction application using Python and machine learning techniques to analyze historical stock data and predict future trends. The project incorporates data preprocessing, feature extraction, and model training using a hybrid combination of LSTM and Random Forest algorithms to provide insights into stock price movements. Features a user-friendly interface to visualize predictions and offers tools to assist users in making informed investment decisions.",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
        { name: "SQL", icon: <FaDatabase />, color: "text-blue-500" },
        { name: "Machine Learning", icon: <FaDatabase />, color: "text-green-500" },
        { name: "LSTM", icon: <FaDatabase />, color: "text-purple-400" },
        { name: "Random Forest", icon: <FaDatabase />, color: "text-emerald-400" }
      ],
      github: "https://github.com/chmanishkumar2003/Stock-Market-Pedection",
      demo: "https://1srdtxjx-5175.inc1.devtunnels.ms/",
      category: "Machine Learning",
      featured: true,
      status: "Completed"
    },
    {
      id: 2,
      title: "Pill Reminder Application",
      description: "A comprehensive web-based application designed to help users track their medication schedules, monitor pill consumption, and receive timely reminders.",
      longDescription: "A comprehensive web-based application designed to help users track their medication schedules, monitor pill consumption, and receive timely reminders for taking medication. The app automatically updates pill count as doses are taken and alerts users when refills are needed. Provides a practical solution to healthcare challenges, particularly benefiting users managing multiple medications or chronic conditions.",
      image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        { name: "JavaScript", icon: <FaReact />, color: "text-yellow-400" },
        { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
        { name: "Database", icon: <FaDatabase />, color: "text-blue-500" },
        { name: "UI Design", icon: <FaReact />, color: "text-purple-400" }
      ],
      github: "https://github.com/chmanishkumar2003/Pill_Reminder_Application",
      demo: "https://github.com/chmanishkumar2003/Pill_Reminder_Application",
      category: "Web Application",
      featured: true,
      status: "Completed"
    }
  ];

  const categories = ["All", "Machine Learning", "Web Application"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
    <section id="projects" className="section relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Here are some of my recent projects that showcase my skills and expertise
          </motion.p>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-black/30 backdrop-blur-sm rounded-full p-2 border border-white/10">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all relative overflow-hidden ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-10"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  className="modern-card group cursor-pointer relative overflow-hidden"
                  onClick={() => setSelectedProject(project.id)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                        <HiStar size={12} />
                        Featured
                      </div>
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                      >
                        <HiEye className="text-white text-2xl" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold gradient-text mb-2 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <HiCalendar size={14} />
                          <span>2024</span>
                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            project.status === 'Completed' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 py-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className={`inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50 transition-colors ${tech.color}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech.icon}
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-6">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-400 hover:text-white transition-colors border border-gray-700/50 hover:border-gray-600/50"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <HiCode />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-blue-400 hover:text-blue-300 transition-colors border border-blue-500/20 hover:border-blue-500/30"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <HiExternalLink />
                        View
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="modern-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {projects.find(p => p.id === selectedProject) && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold gradient-text">
                      {projects.find(p => p.id === selectedProject)?.title}
                    </h2>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  
                  <img
                    src={projects.find(p => p.id === selectedProject)?.image}
                    alt={projects.find(p => p.id === selectedProject)?.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <p className="text-gray-300 text-lg">
                    {projects.find(p => p.id === selectedProject)?.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {projects.find(p => p.id === selectedProject)?.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-800/50 ${tech.color}`}
                      >
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={projects.find(p => p.id === selectedProject)?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-button"
                    >
                      <HiCode />
                      View Code
                    </a>
                    <a
                      href={projects.find(p => p.id === selectedProject)?.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <HiExternalLink />
                      Live Demo
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;