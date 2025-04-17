
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Paintbrush } from 'lucide-react';


const programs: Program[] = [
  {
    id: "harith",
    title: "Harith",
    description: "Art of environmental development focusing on ecological awareness and sustainability through creative expression.",
    icon: "🌿",
    subprograms: ["Environmental Art Camp", "Dharitri (eco-tourism project)"]
  },
  {
    id: "kalpapuri",
    title: "Kalpapuri",
    description: "Related with children art and psychology, nurturing young minds through artistic exploration.",
    icon: "👧",
    subprograms: ["Kalpaloker Citra (workshops for children)", "Kalpapuri School of Arts & Crafts"]
  },
  {
    id: "shikar",
    title: "Shikar",
    description: "Development and persistence of folk arts & crafts to preserve cultural heritage and traditional art forms.",
    icon: "🧶",
    subprograms: ["Karnaphuli Folk Triennial", "Kandrabindu (product design & marketing)"]
  },
  {
    id: "artfactory",
    title: "Art Factory",
    description: "Project for young artists to collaborate, experiment, and showcase innovative artistic approaches.",
    icon: "🎨",
    subprograms: ["Artist Residency Program", "Young Art Exhibition"]
  }
];

const ProgramsSection = () => {
  const [activeProgram, setActiveProgram] = useState<string | null>(null);
  
  // Advanced text animation variants with 3D rotation and color transitions
  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotateY: 90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12
      },
    }),
    hover: (i: number) => ({
      y: [0, -8],
      color: ["#2A7D6A", "#D96941"],
      scale: [1, 1.2],
      textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 15px rgba(249,168,38,0.5)"],
      transition: {
        duration: 0.8,
        delay: i * 0.03,
        repeat: 0,
        repeatType: "mirror" as const,
        ease: "easeInOut"
      }
    })
  };

  // Container animation for the entire title
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  // Fancy card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }),
    hover: {
      y: -15,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="programs" className="py-20 bg-santaran-cream/50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-santaran-vermilion/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-santaran-jade/5 blur-3xl"></div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 left-1/3 w-20 h-20 rounded-full bg-santaran-amber/10"
        animate={{ 
          scale: [1, 1.5],
          opacity: [0.3, 0.6],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" as const
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-santaran-jade/10"
        animate={{ 
          scale: [1, 1.3],
          opacity: [0.2, 0.5],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse" as const,
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Animated Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-4 relative inline-block">
              <motion.span
                className="absolute -z-10 bottom-1 left-0 h-4 w-full bg-santaran-amber/20 rounded-lg"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
              />
              Our Key Programs
            </h2>
          </motion.div>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-santaran-vermilion to-santaran-amber mx-auto"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="mt-6 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The key operations of Santaran Art Organization focus on nurturing creativity, 
            preserving cultural heritage, and promoting art as a medium for positive change.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Link
              to={`/programs/${program.id}`}
              key={program.id}
              className="block"
            >
              <motion.div 
                className={`program-card group cursor-pointer transition-all duration-500 overflow-hidden relative ${
                  activeProgram === program.id ? 'border-santaran-vermilion shadow-xl' : ''
                }`}
                onMouseEnter={() => setActiveProgram(program.id)}
                onMouseLeave={() => setActiveProgram(null)}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Background decoration */}
                <motion.div 
                  className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-santaran-amber/10 to-santaran-vermilion/5"
                  animate={{ 
                    rotate: activeProgram === program.id ? 180 : 0,
                    scale: activeProgram === program.id ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.7 }}
                />
                
                <motion.div 
                  className="text-5xl mb-4 transition-transform duration-300 relative z-10"
                  whileHover={{ 
                    rotate: [0, -10],
                    scale: [1, 1.3],
                    transition: { 
                      duration: 0.8, 
                      ease: "easeInOut",
                      repeat: 1,
                      repeatType: "reverse" as const
                    }
                  }}
                >
                  {program.icon}
                </motion.div>
                
                <h3 className="heading-sm mb-3 group-hover:text-santaran-vermilion transition-colors relative overflow-hidden z-10">
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-santaran-vermilion via-santaran-gold to-santaran-vermilion" 
                    initial={{ scaleX: 0 }}
                    animate={activeProgram === program.id ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Animated program title with 3D effect */}
                  <motion.span 
                    className="relative inline-block perspective-effect"
                    variants={titleContainerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ perspective: "800px" }}
                  >
                    {program.title.split('').map((letter, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariants}
                        whileHover="hover"
                        className="inline-block cursor-pointer"
                        style={{ 
                          display: "inline-block",
                          transformOrigin: "center",
                          transformStyle: "preserve-3d"
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </motion.span>
                </h3>
                
                <motion.p 
                  className="text-gray-600 relative z-10"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: activeProgram === program.id ? 1 : 0.8 }}
                >
                  {program.description}
                </motion.p>
                
                {program.subprograms && activeProgram === program.id && (
                  <motion.div 
                    className="mt-3 text-sm text-santaran-teal/90 relative z-10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-medium mb-1">Includes:</p>
                    <ul className="list-disc list-inside pl-2">
                      {program.subprograms.map((subprogram, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                          {subprogram}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                <motion.div 
                  className="mt-4 h-1 bg-gradient-to-r from-santaran-teal via-santaran-jade to-santaran-gold"
                  initial={{ width: 0 }}
                  animate={{ width: activeProgram === program.id ? "100%" : "0%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                
                {/* Hover indicator */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-santaran-vermilion"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ 
                    scaleX: activeProgram === program.id ? 1 : 0,
                    transition: { duration: 0.4 }
                  }}
                />
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            onClick={() => window.location.href = "/programs"}
            className="relative overflow-hidden group"
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-santaran-vermilion to-santaran-amber opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4 }}
            />
            <motion.span className="relative z-10">
              View All Programs
            </motion.span>
            <motion.div
              className="ml-2 relative z-10"
              animate={{ 
                x: [0, 5],
                rotate: [-5, 5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse" as const,
                ease: "easeInOut"
              }}
            >
              <Paintbrush className="w-4 h-4 text-white" />
            </motion.div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;