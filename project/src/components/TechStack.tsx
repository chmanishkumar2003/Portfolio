import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaAws, 
  FaGitAlt, 
  FaDocker,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinux,
  FaDatabase,
  FaUsers
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiKubernetes,
  SiTailwindcss,
  SiExpress,
  SiFigma,
  SiVercel,
  SiNetlify
} from 'react-icons/si';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: "Programming Languages",
      icon: <FaReact className="w-8 h-8" />,
      technologies: [
        { name: "HTML", icon: <FaHtml5 />, level: 90, color: "text-orange-500" },
        { name: "CSS", icon: <FaCss3Alt />, level: 85, color: "text-blue-400" },
        { name: "Python", icon: <FaPython />, level: 80, color: "text-yellow-400" },
        { name: "SQL", icon: <FaDatabase />, level: 80, color: "text-blue-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <FaDatabase className="w-8 h-8" />,
      technologies: [
        { name: "GitHub", icon: <FaGithub />, level: 85, color: "text-gray-400" },
        { name: "VS Code", icon: <FaDatabase />, level: 90, color: "text-blue-400" },
        { name: "SQL Server", icon: <FaDatabase />, level: 75, color: "text-red-500" },
        { name: "Git", icon: <FaGitAlt />, level: 80, color: "text-orange-500" }
      ]
    },
    {
      title: "Specializations",
      icon: <FaDatabase className="w-8 h-8" />,
      technologies: [
        { name: "Machine Learning", icon: <FaPython />, level: 75, color: "text-green-500" },
        { name: "Data Structures", icon: <FaDatabase />, level: 85, color: "text-blue-500" },
        { name: "Algorithms", icon: <FaDatabase />, level: 80, color: "text-purple-500" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <FaUsers className="w-8 h-8" />,
      technologies: [
        { name: "Problem Solving", icon: <FaDatabase />, level: 90, color: "text-green-400" },
        { name: "Critical Thinking", icon: <FaDatabase />, level: 85, color: "text-blue-400" },
        { name: "Teamwork", icon: <FaUsers />, level: 85, color: "text-purple-400" },
        { name: "Communication", icon: <FaDatabase />, level: 80, color: "text-orange-400" }
      ]
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="tech" className="section bg-black/20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Tech Stack
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Technologies I work with to build amazing applications
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-blue-500">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className={`text-2xl ${tech.color}`}>
                        {tech.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{tech.name}</span>
                          <span className="text-sm text-gray-400">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2">
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={progressVariants}
                            custom={tech.level}
                            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;