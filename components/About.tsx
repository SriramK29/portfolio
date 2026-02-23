import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0.8, 1, 1]);

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        style={{ opacity, scale }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto relative"
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none" />
        
        <div className="z-10 w-full">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-blue-500 rounded-full" />
            <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">About Me</span>
            <div className="w-12 h-1 bg-blue-500 rounded-full" />
          </div>
          
          <div className="relative inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-bold animate-gradient-text">Software Developer</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"
            />
          </div>
          
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            I am a Computer Science and Engineering student at M. Kumarasamy College of Engineering. 
            My passion lies in crafting efficient code and building scalable web applications. 
            I thrive on solving complex problems and turning creative ideas into reality through technology.
            Based in Trichy, I'm dedicated to continuous learning and professional growth in the tech space.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 w-full">
            {[
              { icon: MapPin, label: 'Location', value: 'Trichy, TN' },
              { icon: Mail, label: 'Email', value: 'ksriram170@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 90258 74993' },
              { icon: Calendar, label: 'Experience', value: '2027 Grad' },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5, scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center p-6 glass rounded-2xl border border-white/5 transition-all group"
              >
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <item.icon size={20} />
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="font-semibold text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 glass rounded-3xl border-l-4 border-blue-500 text-left max-w-3xl mx-auto shadow-xl shadow-blue-500/5"
          >
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Career Objective
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Seeking to leverage skills in Java, Python, and Web Development to develop 
              innovative software solutions that enhance user experience and performance. 
              Aspires to grow as a Software Developer by contributing to dynamic projects 
              that challenge my technical capabilities.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;