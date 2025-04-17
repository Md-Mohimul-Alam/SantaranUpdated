import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Sparkles, Leaf, Feather, BookOpen } from 'lucide-react';
import AnimatedHeading from '@/components/AnimatedHeading';

const StorySection = ({
  id,
  title,
  subtitle,
  content,
  imageUrl,
  imagePosition,
  backgroundColor = 'bg-white'
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9], [0, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.3, 0.9], [imagePosition === 'left' ? -100 : 100, 0, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.9], [0.8, 1, 1]);
  const textX = useTransform(scrollYProgress, [0, 0.3, 0.9], [imagePosition === 'left' ? 100 : -100, 0, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.3], [imagePosition === 'left' ? 5 : -5, 0]);

  const getRandomIcon = () => {
    const icons = [
      <Palette className="text-santaran-vermilion/70" size={24} key="palette" />,
      <Sparkles className="text-santaran-amber/70" size={24} key="sparkles" />,
      <Leaf className="text-santaran-jade/70" size={24} key="leaf" />
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
      {/* Additional background and decorative elements omitted for brevity */}
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${imagePosition === 'left' ? '' : 'lg:flex-row-reverse'}`}>
          <motion.div
            className="relative"
            style={{ x, scale: imageScale, rotate }}
          >
            <div className="aspect-[4/3] overflow-hidden border-8 border-white shadow-2xl relative">
              <motion.img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                initial={{ filter: "grayscale(50%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </motion.div>

          <motion.div className="space-y-8 relative" style={{ x: textX }}>
            <div className="inline-block relative">
              <motion.div 
                className="w-16 h-1 bg-santaran-terracotta"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.h3 
                className="mt-4 font-medium text-xl text-santaran-terracotta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {subtitle}
              </motion.h3>
            </div>

            <AnimatedHeading
              text={title}
              tag="h2"
              className="heading-lg"
              color="text-santaran-teal"
              animation="letter-by-letter"
            />

            <motion.p
              className="text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {content}
            </motion.p>

            <motion.a
              href={`#${id}-more`}
              className="inline-flex items-center text-lg font-medium text-santaran-teal"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10">Learn more</span>
              <motion.span 
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StorySection;
