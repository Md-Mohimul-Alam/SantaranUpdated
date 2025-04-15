
import React from 'react';
import { motion } from 'framer-motion';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type AnimationType = 'letter-by-letter' | 'wave' | 'fade' | 'slide' | 'scale' | 'typewriter' | 'rotate' | 'paint';

interface AnimatedHeadingProps {
  text: string;
  tag: HeadingTag;
  className?: string;
  color?: string;
  animation?: AnimationType;
  staggerDelay?: number;
  duration?: number;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  tag = 'h2',
  className = '',
  color = 'text-santaran-teal',
  animation = 'letter-by-letter',
  staggerDelay = 0.03,
  duration = 0.5
}) => {
  // Variants for letter animations
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * staggerDelay,
        duration: duration,
        ease: "easeOut"
      }
    })
  };

  // Variants for wave animation
  const waveVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * staggerDelay,
        duration: duration,
        ease: "easeOut"
      }
    }),
    hover: (i: number) => ({
      y: [-2, -10],
      transition: {
        duration: 0.5,
        delay: i * 0.05,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    })
  };

  // Variants for fade animation
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: duration * 1.5,
        ease: "easeOut"
      }
    }
  };

  // Variants for slide animation
  const slideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        ease: "easeOut"
      }
    }
  };

  // Variants for scale animation
  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: duration,
        ease: "easeOut"
      }
    }
  };

  // Variants for typewriter animation
  const typewriterVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: duration * 2,
        ease: "easeOut"
      }
    }
  };

  // Variants for rotate animation
  const rotateVariants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: duration,
        ease: "easeOut"
      }
    }
  };

  // Variants for paint animation with enhanced artistic effect
  const paintVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: duration * 2,
        ease: "easeInOut"
      }
    }
  };

  // Get the appropriate variants based on animation type
  const getVariants = () => {
    switch(animation) {
      case 'wave':
        return waveVariants;
      case 'fade':
        return fadeVariants;
      case 'slide': 
        return slideVariants;
      case 'scale':
        return scaleVariants;
      case 'typewriter':
        return typewriterVariants;
      case 'rotate':
        return rotateVariants;
      case 'paint':
        return paintVariants;
      case 'letter-by-letter':
      default:
        return letterVariants;
    }
  };

  // Split text into words and then letters for staggered animations
  const words = text.split(' ');
  
  // Render tag with appropriate variants
  const renderAnimatedHeading = () => {
    const variants = getVariants();
    
    // For animations that animate the entire text block
    if (animation === 'fade' || animation === 'slide' || animation === 'scale' || animation === 'typewriter' || animation === 'rotate') {
      return React.createElement(
        tag,
        { className: `${className} ${color}` },
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          style={{ display: 'inline-block', overflow: animation === 'typewriter' ? 'hidden' : 'visible' }}
        >
          {text}
        </motion.span>
      );
    }
    
    // For paint animation (SVG-based) with enhanced artistic look
    if (animation === 'paint') {
      return React.createElement(
        tag,
        { className: `${className} ${color} relative` },
        <>
          {/* Background texture for paint effect */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1579547945413-497e1b99dac0?q=80&w=400')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'overlay',
            }}
          ></div>
          
          <svg
            width="100%"
            height="auto"
            viewBox={`0 0 ${text.length * 20} 40`}
            style={{ overflow: 'visible', maxWidth: '100%' }}
          >
            {/* Paint drip effect */}
            {Array.from({ length: Math.min(text.length, 5) }).map((_, i) => (
              <motion.path
                key={`drip-${i}`}
                d={`M${(text.length * 10) * (i+1)/(5+1)} 30 Q${(text.length * 10) * (i+1)/(5+1)} 50 ${(text.length * 10) * (i+1)/(5+1) + (i % 2 === 0 ? 5 : -5)} ${50 + (i+1) * 10}`}
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: duration * 1.5, delay: duration + (i * 0.2) }}
              />
            ))}
            
            {/* Main text with paint stroke effect */}
            <motion.text
              x="10"
              y="30"
              fill="currentColor"
              fontSize="24"
              fontFamily="inherit"
              fontWeight="inherit"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={paintVariants}
              stroke="currentColor"
              strokeWidth="1"
              strokeLinejoin="round"
            >
              {text}
            </motion.text>
            
            {/* Subtle highlight effect */}
            <motion.text
              x="10"
              y="30"
              fill="none"
              fontSize="24"
              fontFamily="inherit"
              fontWeight="inherit"
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity="0.2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: duration, delay: duration }}
            >
              {text}
            </motion.text>
          </svg>
        </>
      );
    }
    
    // For letter-by-letter or wave animations with enhanced artistic styling
    return React.createElement(
      tag,
      { className: `${className} ${color} relative` },
      <>
        {/* Optional artistic underline */}
        {(animation === 'letter-by-letter' || animation === 'wave') && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-current opacity-20"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: duration * 2, delay: duration }}
          />
        )}
      
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block overflow-hidden"
        >
          {words.map((word, wordIndex) => (
            <span key={`word-${wordIndex}`} className="inline-block">
              {word.split('').map((letter, letterIndex) => (
                <motion.span
                  key={`letter-${wordIndex}-${letterIndex}`}
                  custom={(wordIndex * 10) + letterIndex} // Custom value for staggered animations
                  variants={variants}
                  whileHover={animation === 'wave' ? "hover" : undefined}
                  className="inline-block"
                  style={{ display: 'inline-block' }}
                >
                  {letter}
                </motion.span>
              ))}
              {wordIndex !== words.length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </motion.span>
      </>
    );
  };

  return renderAnimatedHeading();
};

export default AnimatedHeading;
