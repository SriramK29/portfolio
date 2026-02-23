import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION_HISTORY, CERTIFICATIONS } from '../constants';

const Timeline: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <div className="relative inline-block mb-12">
            <h2 className="text-3xl font-bold flex items-center gap-3 animate-gradient-text">
              <GraduationCap className="text-blue-500" />
              Education Journey
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"
            />
          </div>

          <div className="space-y-8">
            {EDUCATION_HISTORY.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-blue-500/20"
              >
                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <div className="glass p-8 rounded-3xl">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full">{edu.duration}</span>
                  </div>
                  <p className="text-blue-400 font-medium mb-4">{edu.school}</p>
                  <p className="text-gray-400 mb-4">{edu.details}</p>
                  <div className="inline-block px-4 py-2 glass rounded-xl text-sm font-bold border border-blue-500/20">
                    {edu.grade}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="relative inline-block mb-12">
            <h2 className="text-3xl font-bold flex items-center gap-3 animate-gradient-text">
              <Award className="text-purple-500" />
              Certifications
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"
            />
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass rounded-2xl flex items-center gap-4 hover:border-purple-500/30 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Award size={24} />
                </div>
                <div className="font-bold text-lg">{cert}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 glass p-8 rounded-3xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Wanna work together?</h3>
              <p className="text-gray-400 mb-6">I am currently looking for internship opportunities and collaborative projects.</p>
              <a 
                href="#contact" 
                onClick={scrollToContact}
                className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors inline-block"
              >
                Let's Talk
              </a>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl group-hover:bg-purple-500/20 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;