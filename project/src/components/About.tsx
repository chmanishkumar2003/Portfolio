import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              I'm a passionate developer with expertise in building modern web applications
              using cutting-edge technologies. With a focus on creating intuitive user
              experiences and scalable solutions, I bring ideas to life through code.
            </p>
            <p>
              My journey in software development has equipped me with a diverse skill set
              spanning frontend frameworks, backend systems, and cloud technologies. I'm
              committed to continuous learning and staying current with industry best practices.
            </p>
            <p>
              When I'm not coding, I enjoy contributing to open-source projects and sharing
              knowledge with the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
