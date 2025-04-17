
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, Palette } from 'lucide-react';
import AnimatedHeading from '@/components/AnimatedHeading';
import ArtisticArrow from '@/components/ArtisticArrow';

const ProgramHero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-santaran-jade/20 via-santaran-cream to-santaran-amber/20 z-0"></div>
      
      {/* Artistic pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} 
      />
      
      {/* Decorative Elements with enhanced animations - FIXED to use only two keyframes with spring */}
      <motion.div 
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-santaran-vermilion/10 mix-blend-multiply"
        animate={{ 
          scale: [1, 1.2],
          x: [0, 10],
          y: [0, -10],
          rotate: [0, 10]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-santaran-jade/15 mix-blend-multiply"
        animate={{ 
          scale: [1, 1.1],
          x: [0, -15],
          y: [0, 15],
          rotate: [0, -5]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-santaran-amber/15 mix-blend-multiply"
        animate={{ 
          scale: [1, 1.3],
          x: [0, 20],
          y: [0, 20],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Floating artistic elements - FIXED to use only two keyframes or change transition type */}
      <motion.div 
        className="absolute top-[30%] left-[15%] text-santaran-terracotta/70"
        animate={{ 
          y: [0, -15],
          rotate: [0, 10],
          opacity: [0.5, 0.8]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Palette size={28} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[25%] right-[20%] text-santaran-jade/70"
        animate={{ 
          y: [0, 10],
          rotate: [0, -15],
          opacity: [0.5, 0.9]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Leaf size={24} />
      </motion.div>
      
      <motion.div 
        className="absolute top-[20%] right-[25%] text-santaran-amber/70"
        animate={{ 
          y: [0, -10],
          x: [0, 10],
          opacity: [0.6, 1],
          scale: [1, 1.2]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Sparkles size={26} />
      </motion.div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-santaran-jade/10 text-santaran-jade text-sm font-medium mb-6">
            Santaran Art Organization
          </span>
        </motion.div>
        
        <AnimatedHeading 
          text="Our Programs"
          tag="h1"
          className="heading-xl mb-6"
          color="text-santaran-teal"
          animation="wave"
        />
        
        <motion.p 
          className="text-xl max-w-2xl mx-auto text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Explore our diverse art initiatives that aim to preserve cultural heritage, 
          foster creativity, and create positive social impact through artistic expression.
        </motion.p>
        
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          onClick={scrollToContent}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Discover More</span>
            <ArtisticArrow direction="down" size="md" color="text-santaran-vermilion" animate={true} />
          </div>
        </motion.div>
      </div>
      
      {/* Artistic corner decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-santaran-teal/40"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-santaran-vermilion/40"></div>
    </section>
  );
};

export default ProgramHero;