
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import FloatingParticles from './components/FloatingParticles';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen flex flex-col">
      <CustomCursor />
      <FloatingParticles />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div>

        <Skills />
        
        <Projects />
        
        <Timeline />
        
        <Contact />
      </main>

      <footer className="py-8 px-6 border-t border-white/5 glass mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mono mb-2">
              &lt;SRIRAM K /&gt;
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SRIRAM K. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#home" className="text-xs font-bold text-gray-400 hover:text-blue-400 uppercase tracking-widest transition-colors">Home</a>
            <a href="#about" className="text-xs font-bold text-gray-400 hover:text-blue-400 uppercase tracking-widest transition-colors">About</a>
            <a href="#projects" className="text-xs font-bold text-gray-400 hover:text-blue-400 uppercase tracking-widest transition-colors">Works</a>
            <a href="#contact" className="text-xs font-bold text-gray-400 hover:text-blue-400 uppercase tracking-widest transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
