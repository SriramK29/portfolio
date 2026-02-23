import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';

const TiltCard = ({ project, index }: { project: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group glass rounded-3xl overflow-hidden flex flex-col h-full cursor-default relative"
    >
      <div className="relative aspect-video overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4" style={{ transform: 'translateZ(30px)' }}>
          <span className="px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase rounded-full tracking-widest shadow-lg">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow" style={{ transform: 'translateZ(40px)' }}>
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 glass rounded-lg text-[10px] text-gray-300 mono border border-white/5">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-blue-400 transition-colors uppercase tracking-widest"
          >
            <Github size={16} /> Code
          </a>
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-blue-400 transition-colors uppercase tracking-widest"
          >
            <ExternalLink size={16} /> Demo
          </a>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 to-transparent z-10" />
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <div className="relative inline-block mb-4">
            <h2 className="text-4xl font-bold animate-gradient-text">Featured Projects</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"
            />
          </div>
          <p className="text-gray-400">A collection of academic and personal works with 3D depth</p>
        </div>
        <div className="text-blue-400 flex items-center gap-2 mono font-semibold cursor-default">
          <Layers size={20} /> View All Works
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <TiltCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;