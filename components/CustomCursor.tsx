
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
        className="hidden md:block"
      >
        <motion.div
          animate={{
            scale: isPressed ? 0.8 : isHovering ? 2 : 1,
            borderColor: isHovering ? 'rgba(139, 92, 246, 0.8)' : 'rgba(59, 130, 246, 0.8)',
            backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
          }}
          className="w-8 h-8 rounded-full border-2 shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center transition-colors duration-200"
        >
          <motion.div 
            animate={{ scale: isPressed ? 0.5 : 1 }}
            className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff]" 
          />
        </motion.div>
      </motion.div>
      
      {/* Outer subtle glow trailing the cursor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9998,
        }}
        className="hidden md:block"
      >
        <motion.div
          animate={{
            scale: isHovering ? 4 : 2,
            opacity: isHovering ? 0.2 : 0.1,
          }}
          transition={{ duration: 0.3 }}
          className="w-20 h-20 rounded-full bg-blue-500 blur-3xl"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
