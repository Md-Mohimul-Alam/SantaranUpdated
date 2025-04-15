
import React from 'react';
import { motion } from 'framer-motion';

interface ArtisticArrowProps {
  direction: 'right' | 'left' | 'up' | 'down';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  onClick?: () => void;
  className?: string;
  animate?: boolean;
}

const ArtisticArrow: React.FC<ArtisticArrowProps> = ({
  direction,
  size = 'md',
  color = 'text-santaran-vermilion',
  onClick,
  className = '',
  animate = true
}) => {
  const getSize = () => {
    switch (size) {
      case 'sm': return "w-4 h-4";
      case 'lg': return "w-8 h-8";
      default: return "w-6 h-6";
    }
  };

  const getRotation = () => {
    switch (direction) {
      case 'left': return "rotate-180";
      case 'up': return "-rotate-90";
      case 'down': return "rotate-90";
      default: return "";
    }
  };

  // Fixed animations to use only two keyframes and specify the correct type for repeatType
  const animations = {
    right: {
      x: [0, 5],
      transition: { 
        duration: 0.75, 
        repeat: Infinity, 
        repeatType: "reverse" as const, 
        ease: "easeInOut" 
      }
    },
    left: {
      x: [0, -5],
      transition: { 
        duration: 0.75, 
        repeat: Infinity, 
        repeatType: "reverse" as const, 
        ease: "easeInOut" 
      }
    },
    up: {
      y: [0, -5],
      transition: { 
        duration: 0.75, 
        repeat: Infinity, 
        repeatType: "reverse" as const, 
        ease: "easeInOut" 
      }
    },
    down: {
      y: [0, 5],
      transition: { 
        duration: 0.75, 
        repeat: Infinity, 
        repeatType: "reverse" as const, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.div
      className={`cursor-pointer ${className} ${color} ${getSize()} ${getRotation()}`}
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      animate={animate ? animations[direction] : undefined}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path 
          d="M14 5L21 12M21 12L14 19M21 12H3" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="artistic-path"
        />
      </svg>
    </motion.div>
  );
};

export default ArtisticArrow;
