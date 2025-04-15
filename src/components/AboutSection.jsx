
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette } from 'lucide-react';
import AnimatedHeading from '@/components/AnimatedHeading';
import AboutIntroduction from '@/components/about/AboutIntroduction';
import AboutPhilosophy from '@/components/about/AboutPhilosophy';
import AboutCoreValues from '@/components/about/AboutCoreValues';
import AboutTimeline from '@/components/about/AboutTimeline';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [100, 0, 0]);
  
  return (
    <motion.section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-santaran-cream/30 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Artistic background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-santaran-cream/40 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-santaran-jade/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 relative">
          <motion.div
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute -z-10 opacity-5"
          >
            <Palette size={280} />
          </motion.div>
          
          {/* Main heading with animation */}
          <AnimatedHeading
            text="About Santaran"
            tag="h2"
            className="heading-lg mb-6 text-center font-display tracking-wider"
            color="text-santaran-teal"
            animation="wave"
            staggerDelay={0.05}
            duration={0.7}
          />
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-santaran-amber to-santaran-teal mx-auto mb-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div>
        
        {/* Main About section with image */}
        <AboutIntroduction y={y} />

        {/* Philosophy Section with Visual Representation */}
        <AboutPhilosophy />

        {/* Core Values Section */}
        <AboutCoreValues />

        {/* Journey Timeline Section with Images */}
        <AboutTimeline />
      </div>
    </motion.section>
  );
};

export default AboutSection;
