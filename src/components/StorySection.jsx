
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Sparkles, Leaf, Feather, BookOpen } from 'lucide-react';
import AnimatedHeading from '@/components/AnimatedHeading';

interface StorySectionProps {
  id?: string;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
  backgroundColor?: string;
}

const StorySection: React.FC<StorySectionProps> = ({
  id,
  title,
  subtitle,
  content,
  imageUrl,
  imagePosition,
  backgroundColor = 'bg-white'
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9], [0, 1, 1]);
  const x = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.9], 
    [imagePosition === 'left' ? -100 : 100, 0, 0]
  );
  const imageScale = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.9], 
    [0.8, 1, 1]
  );
  const textX = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.9], 
    [imagePosition === 'left' ? 100 : -100, 0, 0]
  );
  const rotate = useTransform(
    scrollYProgress, 
    [0, 0.3], 
    [imagePosition === 'left' ? 5 : -5, 0]
  );

  // Random artistic icon based on section
  const getRandomIcon = () => {
    const icons = [
      <Palette className="text-santaran-vermilion/70" size={24} />,
      <Sparkles className="text-santaran-amber/70" size={24} />,
      <Leaf className="text-santaran-jade/70" size={24} />
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <motion.section 
      id={id}
      ref={sectionRef}
      className={`py-32 ${backgroundColor} overflow-hidden relative`}
      style={{ opacity }}
    >
      {/* Enhanced artistic background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-santaran-amber/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-santaran-jade/5 to-transparent"></div>
      </div>
      
      {/* Floating artistic elements */}
      <motion.div
        className="absolute top-20 right-1/4 text-santaran-amber opacity-20"
        animate={{
          y: [0, -15],
          rotate: [0, 5]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Feather size={40} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-1/5 text-santaran-terracotta opacity-10"
        animate={{
          y: [0, 10],
          rotate: [0, -5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
      >
        <BookOpen size={60} />
      </motion.div>
      
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${imagePosition === 'left' ? '' : 'lg:flex-row-reverse'}`}>
          {/* Enhanced Image Section */}
          <motion.div
            className="relative"
            style={{ 
              x,
              scale: imageScale,
              rotate,
            }}
          >
            <div className="relative overflow-hidden rounded-lg group">
              {/* Image with enhanced frame */}
              <div className="aspect-[4/3] overflow-hidden border-8 border-white shadow-2xl relative">
                <motion.img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                  initial={{ filter: "grayscale(50%)" }}
                  whileInView={{ filter: "grayscale(0%)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
                
                {/* Artistic paint splatter overlay */}
                <motion.div 
                  className="absolute inset-0 bg-no-repeat bg-center mix-blend-overlay opacity-30"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=400')",
                    backgroundSize: 'cover'
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ 
                      rotate: [0, 10],
                      scale: [1, 1.1]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    {getRandomIcon()}
                  </motion.div>
                  <h3 className="text-white font-display text-2xl tracking-wider">{subtitle}</h3>
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-santaran-terracotta opacity-60 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-santaran-teal opacity-60 hidden md:block" />
            
            {/* Enhanced floating artistic dots */}
            <motion.div
              className="absolute -top-8 right-8 w-6 h-6 rounded-full bg-santaran-amber/30"
              animate={{ 
                y: [0, -15],
                scale: [1, 1.2],
                opacity: [0.3, 0.6]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 left-10 w-4 h-4 rounded-full bg-santaran-vermilion/30"
              animate={{ 
                y: [0, 10],
                scale: [1, 1.3],
                opacity: [0.3, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Artistic paint drips */}
            <motion.div 
              className="absolute -bottom-10 left-1/3 w-1 h-16 bg-santaran-amber/30"
              initial={{ height: 0 }}
              whileInView={{ height: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            />
            
            <motion.div 
              className="absolute -bottom-6 left-1/2 w-1 h-10 bg-santaran-vermilion/30"
              initial={{ height: 0 }}
              whileInView={{ height: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.3 }}
            />
            
            <motion.div 
              className="absolute -bottom-8 left-2/3 w-1 h-12 bg-santaran-jade/30"
              initial={{ height: 0 }}
              whileInView={{ height: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 1.6 }}
            />
          </motion.div>
          
          {/* Enhanced Text Section */}
          <motion.div 
            className="space-y-8 relative"
            style={{ x: textX }}
          >
            {/* Artistic floating element */}
            <motion.div
              className="absolute -top-20 -left-10 text-santaran-vermilion/5 hidden lg:block"
              style={{ fontSize: "160px", fontFamily: "serif", fontWeight: "bold" }}
              animate={{ 
                opacity: [0.05, 0.1],
                rotate: [-2, 2]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              S
            </motion.div>
            
            <div className="inline-block relative">
              <motion.div 
                className={`w-16 h-1 bg-santaran-terracotta`}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              
              <motion.h3 
                className="mt-4 font-medium text-xl text-santaran-terracotta font-display tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {subtitle}
              </motion.h3>
            </div>
            
            {/* Enhanced heading with artistic animation */}
            <AnimatedHeading
              text={title}
              tag="h2"
              className="heading-lg font-display tracking-wider"
              color="text-santaran-teal"
              animation="letter-by-letter"
            />
            
            {/* Enhanced content with artistic elements */}
            <motion.p 
              className="text-xl leading-relaxed relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span 
                className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-santaran-terracotta via-santaran-amber to-santaran-jade"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <span className="first-letter:text-3xl first-letter:font-display first-letter:text-santaran-terracotta first-letter:mr-1 first-letter:float-left">
                {content}
              </span>
            </motion.p>
            
            {/* Enhanced divider with artistic animation */}
            <motion.div 
              className="h-0.5 w-0 bg-gradient-to-r from-santaran-teal via-santaran-amber to-santaran-vermilion overflow-hidden"
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div
                className="h-full w-full bg-white/30"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Enhanced learn more button with artistic hover effect */}
            <motion.a
              href={`#${id}-more`}
              className="inline-flex items-center text-lg font-medium text-santaran-teal group relative overflow-hidden"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10">Learn more</span>
              <motion.span 
                className="ml-2 transform transition-transform relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
              
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-santaran-terracotta"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            {/* Additional artistic corner elements */}
            <motion.div
              className="absolute bottom-10 right-0 text-santaran-teal/10 hidden lg:block"
              style={{ fontSize: "120px", fontFamily: "serif", fontWeight: "bold" }}
              animate={{ 
                opacity: [0.1, 0.2],
                rotate: [0, 5]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              A
            </motion.div>
            
            {/* Artistic ink splatter */}
            <motion.div
              className="absolute bottom-0 right-0 w-40 h-40 bg-no-repeat bg-center opacity-5"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=400')",
                backgroundSize: 'contain',
                transform: 'rotate(15deg)'
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StorySection;
