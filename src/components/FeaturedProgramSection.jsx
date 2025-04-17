
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import AnimatedHeading from '@/components/AnimatedHeading';
import ArtisticArrow from '@/components/ArtisticArrow';


const programs = [
  {
    id: "harith",
    title: "Harith",
    description: "Art of environmental development focusing on ecological awareness and sustainability through creative expression. Our flagship program includes Environmental Art Camps and the Dharitri eco-tourism project.",
    category: "Environmental Art",
    year: "2009",
    image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?q=80&w=1200&auto=format&fit=crop",
    link: "/programs/harith"
  },
  {
    id: "kalpapuri",
    title: "Kalpapuri",
    description: "Related with children's art and psychology. This program includes Kalpaloker Citra workshops for children and the Kalpapuri School of Arts & Crafts creative education project.",
    category: "Children's Art",
    year: "2020",
    image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1200&auto=format&fit=crop",
    link: "/programs/kalpapuri"
  },
  {
    id: "shikar",
    title: "Shikar",
    description: "Development and persistence of folk arts & crafts. This program includes the Karnaphuli Folk Triennial and Kandrabindu project for product design, development & marketing of traditional crafts.",
    category: "Folk Arts",
    year: "2015",
    image: "https://images.unsplash.com/photo-1569091791842-7cfb64e04797?q=80&w=1200&auto=format&fit=crop",
    link: "/programs/shikar"
  },
  {
    id: "artfactory",
    title: "Art Factory",
    description: "Project for young artists to collaborate, experiment, and showcase innovative approaches. Includes Artist Residency Program and Young Art Exhibition to support emerging talent.",
    category: "Contemporary Art",
    year: "2018",
    image: "https://images.unsplash.com/photo-1541512416146-3e9ccaa35a9b?q=80&w=1200&auto=format&fit=crop",
    link: "/programs/artfactory"
  }
];

const FeaturedProgramSection = () => {
  const [activeProgram, setActiveProgram] = useState(programs[0].id);
  const [isAnimating, setIsAnimating] = useState(false);  
  const navigate = useNavigate();

  const currentProgram = programs.find(prog => prog.id === activeProgram) || programs[0];

  const goToNextProgram = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const currentIndex = programs.findIndex(prog => prog.id === activeProgram);
    const nextIndex = (currentIndex + 1) % programs.length;
    setActiveProgram(programs[nextIndex].id);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToPrevProgram = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const currentIndex = programs.findIndex(prog => prog.id === activeProgram);
    const prevIndex = (currentIndex - 1 + programs.length) % programs.length;
    setActiveProgram(programs[prevIndex].id);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleProgramChange = (value) => {
    if (value && value !== activeProgram && !isAnimating) {
      setIsAnimating(true);
      setActiveProgram(value);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const handleLearnMoreClick = () => {
    navigate(currentProgram.link);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-santaran-cream relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-santaran-vermilion/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-santaran-jade/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div 
              key={activeProgram + "-text"}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.7 }}
              className="h-full flex flex-col justify-center"
            >
              <div className="mb-6">
                <span className="inline-block py-1 px-4 rounded-full bg-santaran-vermilion/10 text-santaran-vermilion text-xs font-medium">
                  Featured Program
                </span>
                <h3 className="mt-4 mb-2 text-santaran-amber">
                  {currentProgram.category} • {currentProgram.year}
                </h3>
                
                <AnimatedHeading 
                  text={currentProgram.title}
                  tag="h2"
                  className="heading-md mb-3"
                  color="text-santaran-teal"
                  animation="wave"
                />
                
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-santaran-vermilion to-santaran-amber"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <motion.p 
                className="text-gray-600 mb-8"
                key={activeProgram + "-desc"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {currentProgram.description}
              </motion.p>
              
              <div className="flex items-center gap-4">
                <Button onClick={handleLearnMoreClick}>
                  Learn More
                  <motion.div
                    className="ml-2"
                    animate={{ 
                      x: [0, 5],
                      rotate: [-5, 5]
                    }}
                    transition={{
                      duration: 0.75,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Button>
                
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={goToPrevProgram} 
                    className="p-2 rounded-full border border-gray-300 hover:bg-white hover:border-santaran-jade transition-colors"
                    disabled={isAnimating}
                  >
                    <ArtisticArrow direction="left" size="sm" animate={false} />
                  </button>
                  <button 
                    onClick={goToNextProgram} 
                    className="p-2 rounded-full border border-gray-300 hover:bg-white hover:border-santaran-jade transition-colors"
                    disabled={isAnimating}
                  >
                    <ArtisticArrow direction="right" size="sm" animate={false} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <motion.div
                key={activeProgram + "-image"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="artistic-card fancy-border canvas-texture aspect-square"
              >
                <img 
                  src={currentProgram.image}
                  alt={currentProgram.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white shadow-lg px-4 py-2 rounded-lg border-2 border-santaran-jade/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-sm font-medium">{currentProgram.category}</span>
                </motion.div>
              </motion.div>
              
              <div className="mt-6 flex justify-center">
                <ToggleGroup type="single" value={activeProgram} onValueChange={handleProgramChange}>
                  {programs.map((program) => (
                    <ToggleGroupItem 
                      key={program.id} 
                      value={program.id} 
                      aria-label={`View ${program.title} program`}
                      disabled={isAnimating}
                      className="px-4 py-2 rounded-md"
                    >
                      {program.title}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgramSection;