import React from 'react';
import { motion } from 'framer-motion';

// No type annotations — cleaned version
const AnimatedHeading = ({
  text,
  tag = 'h2',
  className = '',
  color = 'text-santaran-teal',
  animation = 'letter-by-letter',
  staggerDelay = 0.03,
  duration = 0.5
}) => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * staggerDelay,
        duration: duration,
        ease: "easeOut"
      }
    })
  };

  const waveVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * staggerDelay,
        duration: duration,
        ease: "easeOut"
      }
    }),
    hover: (i) => ({
      y: [-2, -10],
      transition: {
        duration: 0.5,
        delay: i * 0.05,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    })
  };

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

  const words = text.split(' ');
  
  const renderAnimatedHeading = () => {
    const variants = getVariants();
    
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

    if (animation === 'paint') {
      return React.createElement(
        tag,
        { className: `${className} ${color} relative` },
        <>
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

    return React.createElement(
      tag,
      { className: `${className} ${color} relative` },
      <>
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
                  custom={(wordIndex * 10) + letterIndex}
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
