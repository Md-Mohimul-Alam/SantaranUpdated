
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArtisticArrow from '@/components/ArtisticArrow';


const projects = [
  {
    id: "environmental-art-camp",
    title: "Environmental Art Camp",
    description: "Immersive outdoor experiences combining art and nature conservation from the Harith program.",
    category: "Harith",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: true
  },
  {
    id: "dharitri",
    title: "Dharitri",
    description: "Eco-tourism project promoting sustainable environmental practices through artistic expression.",
    category: "Harith",
    image: "https://images.unsplash.com/photo-1506259091721-347e791bab0f?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: true
  },
  {
    id: "kalpaloker-citra",
    title: "Kalpaloker Citra",
    description: "Project of workshops for children to develop creativity and artistic expression.",
    category: "Kalpapuri",
    image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: true
  },
  {
    id: "kalpapuri-school",
    title: "Kalpapuri School",
    description: "Creative education project training the next generation of artists and craftspeople.",
    category: "Kalpapuri",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: true
  },
  {
    id: "karnaphuli-folk-triennial",
    title: "Karnaphuli Folk Triennial",
    description: "Celebration of traditional folk arts and crafts held every three years.",
    category: "Shikar",
    image: "https://images.unsplash.com/photo-1569091791842-7cfb64e04797?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: true
  },
  {
    id: "kandrabindu",
    title: "Kandrabindu",
    description: "Project of product design, development & marketing of traditional crafts.",
    category: "Shikar",
    image: "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: true
  },
  {
    id: "artist-residency",
    title: "Artist Residency Program",
    description: "Hosting artists from around the world for cultural exchange and collaboration.",
    category: "Art Factory",
    image: "https://images.unsplash.com/photo-1567098228577-b7e7a3d98e28?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: false
  },
  {
    id: "young-art-exhibition",
    title: "Young Art Exhibition",
    description: "Platform for emerging artists to showcase innovative and experimental work.",
    category: "Art Factory",
    image: "https://images.unsplash.com/photo-1541512416146-3e9ccaa35a9b?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: false
  },
  {
    id: "yearly-outcome",
    title: "Yearly Outcome",
    description: "Annual art show featuring work from organization members and collaborative projects.",
    category: "Other Projects",
    image: "https://images.unsplash.com/photo-1532453288509-177d8062a8ee?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: false
  },
  {
    id: "multidisciplinary-art-show",
    title: "Multidisciplinary Art Show",
    description: "Exhibitions showcasing diverse artistic disciplines and experimental approaches.",
    category: "Other Projects",
    image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: false
  },
  {
    id: "art-exchange",
    title: "Art Exchange",
    description: "National & International program for artistic dialogue and cultural exchange.",
    category: "Other Projects",
    image: "https://images.unsplash.com/photo-1567098228577-b7e7a3d98e28?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: false
  },
  {
    id: "art-workshop",
    title: "Art Workshop",
    description: "National & International workshops for skill development and artistic training.",
    category: "Other Projects",
    image: "https://images.unsplash.com/photo-1576773689115-5cd2b0223523?q=80&w=800&auto=format&fit=crop",
    hasSubprograms: false
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };

  const titleCharVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8, rotateY: 90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };
  
  const categoryVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  const cardVariants = {
    initial: { 
      y: 20, 
      opacity: 0, 
      scale: 0.95,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
    },
    animate: (i) => ({ 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        delay: i * 0.1,
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      y: -8, 
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  // Limit visible projects to 8 for better performance
  const visibleProjects = projects.slice(0, 8);

  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      const currentIndex = visibleProjects.findIndex(project => project.id === hoveredProject);
      const nextIndex = hoveredProject === null ? 0 : (currentIndex + 1) % visibleProjects.length;
      setHoveredProject(visibleProjects[nextIndex].id);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [hoveredProject, autoRotate, visibleProjects]);

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-santaran-vermilion/5 to-santaran-jade/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-tl from-santaran-amber/5 to-santaran-teal/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-transparent bg-gradient-to-r from-santaran-teal via-santaran-jade to-santaran-vermilion bg-clip-text mb-4">Our Projects</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-santaran-terracotta via-santaran-gold to-santaran-amber mx-auto rounded-full"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
            Explore our diverse range of projects, each contributing to our mission
            of dignifying life through art and cultural preservation.
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-sm text-gray-500">Auto-reveal</span>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`w-12 h-6 rounded-full relative ${autoRotate ? 'bg-santaran-jade' : 'bg-gray-200'}`}
            >
              <motion.div 
                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                animate={{ x: autoRotate ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className={`
                group relative overflow-hidden rounded-lg 
                transition-all duration-700 transform
                ${hoveredProject === project.id ? 'scale-105' : 'scale-100'}
                ${activeProject === project.id ? 'ring-4 ring-santaran-jade ring-offset-2' : ''}
              `}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setActiveProject(project.id === activeProject ? null : project.id)}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              custom={index}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              
              <motion.div 
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-santaran-vermilion/20 via-santaran-amber/20 to-santaran-teal/10 blur-xl"
                animate={{ 
                  scale: hoveredProject === project.id ? 1.2 : 1,
                  opacity: hoveredProject === project.id ? 1 : 0.5,
                }}
                transition={{ duration: 0.8 }}
              />
              
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
                initial={{ scale: 1 }}
                animate={{ 
                  scale: hoveredProject === project.id ? 1.1 : 1,
                  filter: hoveredProject === project.id ? 'brightness(1.1)' : 'brightness(1)'
                }}
                transition={{ duration: 0.7 }}
              />
              
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
                animate={{ 
                  opacity: hoveredProject === project.id ? 1 : 0.7
                }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20 transform">
                <motion.div
                  variants={categoryVariants}
                  initial="initial"
                  animate="animate"
                  className="inline-block px-2 py-1 bg-santaran-terracotta/90 text-white text-xs rounded-full mb-2"
                >
                  {project.category}
                </motion.div>
                
                <motion.div
                  variants={titleContainerVariants}
                  initial="hidden"
                  animate={hoveredProject === project.id ? "visible" : "hidden"}
                  className="mb-2"
                >
                  <h3 className="text-white font-display text-xl font-bold">
                    {project.title.split('').map((char, index) => (
                      <motion.span
                        key={index}
                        variants={titleCharVariants}
                        className="inline-block"
                        style={{ 
                          display: "inline-block",
                          transformStyle: "preserve-3d" 
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </h3>
                </motion.div>
                
                <motion.p 
                  className="text-white/80 text-sm mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 10
                  }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {project.description}
                </motion.p>
                
                <Link to={`/programs/${project.id}`}>
                  <motion.div 
                    className="flex items-center text-santaran-cream hover:text-santaran-gold transition-colors text-sm font-medium"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0.7
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    Learn more 
                    <motion.div
                      animate={{ 
                        x: hoveredProject === project.id ? [0, 5] : 0,
                        transition: { 
                          duration: 1, 
                          repeat: hoveredProject === project.id ? Infinity : 0,
                          repeatType: "reverse" 
                        }
                      }}
                    >
                      <ArrowRight size={14} className="ml-1" />
                    </motion.div>
                  </motion.div>
                </Link>
                
                {project.hasSubprograms && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-santaran-amber flex items-center justify-center shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: hoveredProject === project.id ? [1, 1.2] : 1,
                      transition: { 
                        duration: 0.4, 
                        type: "spring",
                        repeat: hoveredProject === project.id ? Infinity : 0,
                        repeatType: "reverse" 
                      }
                    }}
                  >
                    <span className="text-xs font-bold text-white">+</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/programs"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-santaran-teal to-santaran-jade hover:opacity-90 text-white rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <span>View All Projects</span>
            <motion.div
              className="ml-2"
              animate={{ 
                x: [0, 5],
                transition: { 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }
              }}
            >
              <ArtisticArrow direction="right" size="sm" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;