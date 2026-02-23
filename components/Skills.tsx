import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const techSkills = SKILLS.filter(s => s.category === 'technical');
  const softSkills = SKILLS.filter(s => s.category === 'soft');

  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <h2 className="text-4xl font-bold animate-gradient-text">Core Competencies</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"
            />
          </div>
          <p className="text-gray-400">Blending technical expertise with professional soft skills</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="preserve-3d">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">01</span>
              Technical Stack
            </h3>
            <div className="space-y-6">
              {techSkills.map((skill, i) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium group-hover:text-blue-400 transition-colors">{skill.name}</span>
                    <span className="text-blue-400 mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="preserve-3d">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">02</span>
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    translateZ: 30, 
                    rotateY: 5,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    borderColor: 'rgba(139, 92, 246, 0.4)'
                  }}
                  className="p-6 glass rounded-2xl transition-all text-center group border border-white/5"
                >
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors drop-shadow-lg">{skill.level}%</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{skill.name}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              whileHover={{ translateZ: 20 }}
              className="mt-12 glass p-8 rounded-2xl border border-white/5 relative overflow-hidden"
            >
              <h4 className="font-bold mb-4 text-blue-400 relative z-10">Areas of Interest</h4>
              <ul className="grid grid-cols-2 gap-4 relative z-10">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Web Development
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Database Management
                </li>
              </ul>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;