import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Download, ChevronDown, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  const parallaxY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleDownload = () => {
    window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank');
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20 overflow-hidden"
    >
      <motion.div 
        style={{ 
          y: parallaxY,
          opacity,
        }}
        className="max-w-4xl w-full text-center z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-400 mono font-semibold tracking-widest mb-4 uppercase"
        >
          Hi, my name is
        </motion.p>
        
        <div className="relative inline-block mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tight animate-gradient-text drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            SRIRAM K
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-1.5 md:h-2 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-4xl text-gray-400 font-semibold mb-8 h-12"
        >
          I build <span className="text-white border-r-2 border-blue-500 animate-pulse px-1">Software Solutions</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto text-gray-400 mb-12 text-lg leading-relaxed"
        >
          Passionate Computer Science student and developer specializing in building 
          exceptional digital experiences with Java, Python, and Web Technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold shadow-xl shadow-blue-500/30 transition-all flex items-center gap-2"
          >
            <Mail size={18} />
            Hire Me
          </motion.a>
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass text-white rounded-full font-bold transition-all flex items-center gap-2"
          >
            <Download size={18} />
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 cursor-pointer hover:text-blue-400 transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>

      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Hero;