import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
              <img
                src="/Resume/photo.png"
                alt="Manish Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Headings */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">Manish Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Front End Developer & Problem Solver
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            I love creating beautiful web applications that provide great user experiences.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              href="https://github.com/chmanishkumar2003"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/manish-kumar7989/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </motion.a>

            <motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ch.manishkumar2003@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Manish%2C%0A%0AI%20checked%20your%20portfolio%20and..."
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
>
  <Mail className="w-6 h-6 text-white" />
</motion.a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.a>

            <motion.a
    href="/Resume/Manish_Kumar_Resume.pdf"
    download="Manish_Kumar_Resume.pdf"
    target="_blank"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
>
  <Download className="w-5 h-5" />
  Download Resume
</motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
