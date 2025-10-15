import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      degree: "B.Tech Computer Science Engineering",
      institution: "Gitam University",
      location: "Visakhapatnam",
      period: "2021 - 2025",
      grade: "GPA: 7.41",
      description: "Currently pursuing Bachelor of Technology in Computer Science Engineering with focus on programming, algorithms, and software development.",
      achievements: [
        "Maintaining GPA of 7.41 throughout the program",
        "Completed major projects in machine learning and web development",
        "Gained expertise in multiple programming languages",
        "Participated in coding competitions and technical events"
      ],
      subjects: ["Data Structures", "Algorithms", "Software Engineering", "Database Management", "Machine Learning", "Web Development"]
    },
    {
      id: 2,
      degree: "Intermediate (12th Grade)",
      institution: "Narayana Junior College",
      location: "Lingampally",
      period: "2019 - 2021",
      grade: "92%",
      description: "Completed Intermediate education with excellent academic performance, focusing on Mathematics, Physics, and Chemistry.",
      achievements: [
        "Achieved 92% in final examinations",
        "Excelled in Mathematics and Science subjects",
        "Developed strong analytical and problem-solving skills",
        "Participated in academic competitions and science fairs"
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "English"]
    },
    {
      id: 3,
      degree: "SSC (10th Grade)",
      institution: "Sri Chaitanya School",
      location: "Kompally",
      period: "2018 - 2019",
      grade: "GPA: 9.0",
      description: "Completed Secondary School Certificate with outstanding results, building a strong foundation in core subjects.",
      achievements: [
        "Achieved GPA of 9.0 in final examinations",
        "Consistently ranked among top students in class",
        "Developed strong foundation in Mathematics and Science",
        "Participated in various academic and extracurricular activities"
      ],
      subjects: ["Mathematics", "Science", "English", "Social Studies"]
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
        duration: 0.6
      }
    }
  };

  return (
    <section id="education" className="section bg-black/20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Education
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            My academic journey and educational achievements
          </motion.p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>

            <div className="space-y-8">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
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
                          <h3 className="text-xl font-bold gradient-text mb-2">{edu.degree}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-2">
                            <div className="flex items-center gap-1">
                              <HiAcademicCap className="w-4 h-4" />
                              <span>{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <HiLocationMarker className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <HiCalendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                            {edu.grade}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{edu.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 gradient-text">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-300 flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 gradient-text">Subjects Studied:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject, subIndex) => (
                            <span
                              key={subIndex}
                              className="px-3 py-1 bg-gray-800/50 text-purple-400 rounded-full text-sm border border-purple-500/20"
                            >
                              {subject}
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

          {/* Education Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold gradient-text mb-8">Academic Summary</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card">
                <div className="text-3xl font-bold text-blue-500 mb-2">7.41</div>
                <div className="text-gray-400"> CGPA</div>
              </div>
              <div className="glass-card">
                <div className="text-3xl font-bold text-purple-500 mb-2">92%</div>
                <div className="text-gray-400">12th Grade Score</div>
              </div>
              <div className="glass-card">
                <div className="text-3xl font-bold text-emerald-500 mb-2">9.0</div>
                <div className="text-gray-400">10th Grade GPA</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;