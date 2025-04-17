import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, MapPin, Calendar, Users } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import AnimatedHeading from '@/components/AnimatedHeading';
import ArtisticArrow from '@/components/ArtisticArrow';


// Comprehensive subprogram data from the provided documents
const subprogramsData = [
  // Harith Program Subprojects
  {
    id: "env-art-camp",
    title: "Environmental Art Camp",
    description: "Artist camps focused on ecological awareness and environmental protection. Started in 1999, these camps bring together artists to create works addressing environmental issues in Alikadam and other regions of Bangladesh.",
    parentProgram: "Harith",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600",
    location: "Various locations across Bangladesh including Alikadam",
    year: "1999-Present",
    events: [
      { title: "Millennium in Alikadam", venue: "Alikadam, Bandarban Hilly District", year: "1999-2000" },
      { title: "Environmental Art Camp in Ruma", venue: "Ruma, Bandarban Hilly District", year: "2001" },
      { title: "Art Camp in Alikadam", venue: "Alikadam, Bandarban Hilly District", year: "2002" },
      { title: "Matamuhuri", venue: "Alikadam, Bandarban Hilly District", year: "2003" },
      { title: "Life & Rights", venue: "Alikadam, Bandarban Hilly District", year: "2007" },
      { title: "Sound of the Nature", venue: "Alikadam, Bandarban Hilly District", year: "2019" }
    ]
  },
  {
    id: "dharitri",
    title: "Dharitri",
    description: "Eco-tourism project under Harith program supporting tourists, artists, photographers, writers, and researchers to visit the Merinja Hill, Matamuhuri River, and experience indigenous cultures. Features 'Srijan Prangon' residency space established in 2018.",
    parentProgram: "Harith",
    image: "https://images.unsplash.com/photo-1553112255-ebb2d412e3d1?q=80&w=600",
    location: "Alikadam of Bandarbans district",
    year: "2018-Present",
    achievements: [
      "Established artist residency space 'Srijan Prangon'",
      "Created sustainable tourism model for environmental appreciation",
      "Preserved indigenous culture while supporting local communities"
    ]
  },
  
  // Kalpapuri Program Subprojects
  {
    id: "kalpaloker",
    title: "Kalpaloker Citra",
    description: "Short-duration workshop-based project focusing on children's art psychology. Aimed at age group 6-12 years, these workshops build social awareness about child psychology through artistic expression.",
    parentProgram: "Kalpapuri",
    image: "https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?q=80&w=600",
    location: "Various areas of Bangladesh",
    year: "2000-Present",
    achievements: [
      "Developed eco-friendly artistic training approaches for children",
      "Helped children explore their creative potential through art",
      "Built social awareness about child psychology through artistic expression"
    ]
  },
  {
    id: "kalpapuri-school",
    title: "Kalpapuri School of Arts & Crafts",
    description: "Permanent institutional project established in 2020 at 'Srijan Prangon' in Alikadam. This creative education center serves as a dreamland for future generations interested in building their world through art and aesthetic philosophy.",
    parentProgram: "Kalpapuri",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600",
    location: "Srijan Prangon, Alikadam, Bandarban Hilly District",
    year: "2020-Present",
    achievements: [
      "Established permanent art education facilities for children",
      "Created safe spaces for creative exploration and development",
      "Implemented innovative teaching methodologies for young artists"
    ]
  },
  
  // Shikar Program Subprojects
  {
    id: "folk-triennial",
    title: "Karnaphuli Folk Triennial",
    description: "Regular exhibition showcasing traditional folk arts from Bangladesh and neighboring countries. Named after the Karnaphuli river, this event brings together folk artists to present and preserve diverse cultural traditions.",
    parentProgram: "Shikar",
    image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?q=80&w=600",
    location: "Various venues in Bangladesh",
    year: "2008-Present",
    events: [
      { title: "From the Karnaphuli", venue: "Residence of Italian Ambassador in Dhaka", year: "2012" }
    ]
  },
  {
    id: "kandrabindu",
    title: "Kandrabindu",
    description: "Project focusing on product design, development, and marketing of traditional crafts. Works with folk artists to create new modes of folk art while preserving traditional techniques, helping artisans develop sustainable livelihoods.",
    parentProgram: "Shikar",
    image: "https://images.unsplash.com/photo-1599116712461-44b0e26b2fc6?q=80&w=600",
    location: "Various regions in Bangladesh",
    year: "2008-Present",
    achievements: [
      "Collaborated with Nepali Mithila artists and Indian Patachitra artists",
      "Revitalized traditional art forms like Cinema-Banner painting",
      "Created economic opportunities for folk artists and artisans"
    ]
  },
  
  // Art Factory Program Subprojects
  {
    id: "residency",
    title: "Artist Residency Program",
    description: "A platform for artists to collaborate and develop new artistic expressions in a supportive environment. The residency provides space, resources and mentorship to emerging and established artists.",
    parentProgram: "Art Factory",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600",
    location: "Various locations in Bangladesh",
    year: "2005-Present",
    achievements: [
      "Hosted numerous national and international artists",
      "Facilitated cross-cultural artistic exchanges",
      "Produced innovative contemporary art exhibitions"
    ]
  },
  {
    id: "young-exhibition",
    title: "Young Art Exhibition",
    description: "Exhibition platform dedicated to showcasing works by emerging young artists, providing visibility and opportunities for the next generation of creative talents in Bangladesh.",
    parentProgram: "Art Factory",
    image: "https://images.unsplash.com/photo-1594711539015-f865bad05d92?q=80&w=600",
    location: "Various galleries in Bangladesh",
    year: "2005-Present",
    events: [
      { title: "Time Art and Space", venue: "Artist Rashid Chowdhury Art Gallery, Chittagong", year: "2011" },
      { title: "Perspective of Art & Space", venue: "Gallery Charja, Dhaka", year: "2014" }
    ]
  },
  
  // Other Projects (can be categorized or shown separately)
  {
    id: "yearly-outcome",
    title: "Yearly Outcome",
    description: "Annual art exhibition presenting research-based projects by Santaran members. Running since 1999, these exhibitions have evolved from individual showcases to multi-disciplinary art events.",
    parentProgram: "Other",
    image: "https://images.unsplash.com/photo-1544585237-0265531863fc?q=80&w=600",
    location: "Various venues in Bangladesh and internationally",
    year: "1999-Present",
    events: [
      { title: "Santaran (The Swim)", venue: "Allians Frances, Chittagong", year: "1999" },
      { title: "Sahassrabder Chabi (Images of the Millennium)", venue: "Allians Frances, Chittagong", year: "2000" },
      { title: "Pahela Baishakh (The First Day of Bengali Year)", venue: "Chittagong Club, Chittagong", year: "2002" },
      { title: "Ekush Moder Garab (We are Proud of the 21stFebruary)", venue: "Shilpakala Academy, Chittagong", year: "2003" },
      { title: "Introspection", venue: "Nalinkanta Bhattashali Art Gallery, National Museum, Dhaka", year: "2009" },
      { title: "Politicomania", venue: "Nandan Museum, Shantiniketan, India", year: "2016" }
    ]
  }
];


// Colors for each program
const programColors = {
  "Harith": {
    primary: "from-emerald-600 to-teal-500",
    secondary: "bg-emerald-50",
    accent: "text-emerald-600",
    light: "bg-emerald-100"
  },
  "Kalpapuri": {
    primary: "from-amber-500 to-yellow-400",
    secondary: "bg-amber-50",
    accent: "text-amber-600",
    light: "bg-amber-100"
  },
  "Shikar": {
    primary: "from-rose-600 to-red-500",
    secondary: "bg-rose-50",
    accent: "text-rose-600",
    light: "bg-rose-100"
  },
  "Art Factory": {
    primary: "from-blue-600 to-indigo-500",
    secondary: "bg-blue-50",
    accent: "text-blue-600",
    light: "bg-blue-100"
  },
  "Other": {
    primary: "from-violet-600 to-purple-500",
    secondary: "bg-violet-50",
    accent: "text-violet-600",
    light: "bg-violet-100"
  }
};

const SubprogramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState("Harith");
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  
  
  // Filter subprograms by the selected parent program
  const filteredSubprograms = subprogramsData.filter(
    subprogram => subprogram.parentProgram === selectedProgram
  );
  
  // Group the data by parent program for tabs
  const programs = Array.from(new Set(subprogramsData.map(item => item.parentProgram)));
  
  // Section variants for animations
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  // Card stack effect variants
  const cardStackVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      rotate: -5
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1
      }
    }),
    hover: { 
      y: -15, 
      scale: 1.03,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Auto-rotate through programs
  useEffect(() => {
    if (!autoplayEnabled) return;
    
    const interval = setInterval(() => {
      // Find current index and get the next program
      const currentIndex = programs.indexOf(selectedProgram);
      const nextIndex = (currentIndex + 1) % programs.length;
      setSelectedProgram(programs[nextIndex]);
    }, 8000); // Change program every 8 seconds
    
    return () => clearInterval(interval);
  }, [selectedProgram, programs, autoplayEnabled]);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-santaran-vermilion/10 to-santaran-jade/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tl from-santaran-amber/10 to-santaran-teal/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block">
            <AnimatedHeading 
              text="Projects Under Our Programs"
              tag="h2"
              className="heading-lg mb-4 text-gradient-santaran"
              color="bg-gradient-to-r from-santaran-terracotta via-santaran-amber to-santaran-jade bg-clip-text text-transparent"
              animation="wave"
            />
            <motion.div 
              className="w-full h-1 bg-gradient-to-r from-santaran-terracotta to-santaran-jade"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          
          <motion.p 
            className="mt-6 text-lg max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover the diverse range of projects and initiatives under each of our main programs,
            each contributing to our mission of dignifying life through art and cultural preservation.
          </motion.p>
        </motion.div>
        
        {/* Program Selection Tabs with Animation */}
        <div className="mb-12">
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {programs.filter(p => p !== "Other").map((program, index) => (
              <motion.button
                key={program}
                className={`px-5 py-3 rounded-full text-white font-medium transition-all relative overflow-hidden ${
                  selectedProgram === program 
                    ? `bg-gradient-to-r ${programColors[program].primary} shadow-lg` 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedProgram(program)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {selectedProgram === program && (
                  <motion.span 
                    className="absolute inset-0 bg-white opacity-20"
                    initial={{ scale: 0, borderRadius: "100%" }}
                    animate={{ 
                      scale: 1.5, 
                      borderRadius: "100%",
                      opacity: 0
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                )}
                {program}
              </motion.button>
            ))}
            
            <motion.button
              className={`flex items-center gap-2 px-3 py-1 rounded-full border ${
                autoplayEnabled ? 'border-santaran-jade text-santaran-jade' : 'border-gray-300 text-gray-500'
              }`}
              onClick={() => setAutoplayEnabled(!autoplayEnabled)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: programs.length * 0.1 }}
            >
              <span className="text-sm">Auto-rotate</span>
              <div className={`w-8 h-4 rounded-full ${autoplayEnabled ? 'bg-santaran-jade' : 'bg-gray-200'} relative transition-colors`}>
                <motion.div 
                  className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full shadow-sm"
                  animate={{ x: autoplayEnabled ? 16 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </div>
            </motion.button>
          </motion.div>
        </div>
        
        {/* Program Title and Description */}
        <motion.div
          className="mb-12 text-center"
          key={selectedProgram}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <AnimatedHeading 
            text={selectedProgram}
            tag="h3"
            className={`text-3xl font-bold mb-3 bg-gradient-to-r ${programColors[selectedProgram].primary} bg-clip-text text-transparent`}
            animation="typewriter"
          />
          <motion.div 
            className={`w-32 h-1 mx-auto bg-gradient-to-r ${programColors[selectedProgram].primary}`}
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <motion.p 
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {selectedProgram === "Harith" && "Art of environmental development focusing on ecological awareness and sustainability through creative expression."}
            {selectedProgram === "Kalpapuri" && "Related with children art and psychology, nurturing young minds through artistic exploration."}
            {selectedProgram === "Shikar" && "Development and persistence of folk arts & Crafts to preserve cultural heritage and traditional art forms."}
            {selectedProgram === "Art Factory" && "Project for young artists to collaborate, experiment, and showcase innovative artistic approaches."}
          </motion.p>
        </motion.div>
        
        {/* Subprograms Display with Card Stack Effect */}
        <motion.div
          className="max-w-6xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          key={`section-${selectedProgram}`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false
            }}
            className="w-full"
          >
            <CarouselContent>
              {filteredSubprograms.map((subprogram, index) => (
                <CarouselItem key={subprogram.id} className="md:basis-1/2 lg:basis-1/2 pl-4 pr-4">
                  <motion.div
                    className="relative"
                    custom={index}
                    variants={cardStackVariants}
                    whileHover="hover"
                  >
                    {/* Shadow card stack effect */}
                    <motion.div 
                      className={`absolute inset-0 rounded-2xl ${programColors[subprogram.parentProgram].secondary} shadow-lg`}
                      style={{ 
                        top: "10px", 
                        left: "10px", 
                        right: "-10px",
                        bottom: "-10px",
                        zIndex: 1
                      }}
                      animate={{ 
                        rotate: [0, -1, 0, 1, 0], 
                        scale: [1, 0.98, 1]
                      }}
                      transition={{ 
                        duration: 8, 
                        ease: "easeInOut", 
                        repeat: Infinity,
                        repeatType: "mirror"
                      }}
                    />
                    
                    <motion.div 
                      className={`absolute inset-0 rounded-2xl ${programColors[subprogram.parentProgram].secondary} shadow-lg`}
                      style={{ 
                        top: "20px", 
                        left: "5px", 
                        right: "-5px",
                        bottom: "-5px",
                        zIndex: 0
                      }}
                      animate={{ 
                        rotate: [0, 1, 0, -1, 0], 
                        scale: [1, 0.96, 1]
                      }}
                      transition={{ 
                        duration: 10, 
                        ease: "easeInOut", 
                        repeat: Infinity,
                        repeatType: "mirror"
                      }}
                    />
                    
                    {/* Main Card */}
                    <div className="rounded-2xl overflow-hidden bg-white shadow-xl border border-gray-100 relative z-10">
                      <div className="relative h-64 overflow-hidden">
                        <motion.img 
                          src={subprogram.image} 
                          alt={subprogram.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        
                        {/* Program Badge */}
                        <motion.div 
                          className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${programColors[subprogram.parentProgram].primary} text-white text-xs font-medium`}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {subprogram.parentProgram}
                        </motion.div>
                        
                        {/* Title */}
                        <motion.div 
                          className="absolute bottom-4 left-4 right-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-xl font-bold text-white mb-1">
                            {subprogram.title}
                          </h3>
                          {subprogram.year && (
                            <div className="flex items-center text-white/80 text-sm">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{subprogram.year}</span>
                            </div>
                          )}
                        </motion.div>
                      </div>
                      
                      <div className="p-6">
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {subprogram.description}
                        </p>
                        
                        {subprogram.location && (
                          <div className="flex items-center text-gray-500 text-sm mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{subprogram.location}</span>
                          </div>
                        )}
                        
                        {/* Achievements or Events */}
                        {(subprogram.achievements || subprogram.events) && (
                          <div className="mt-4">
                            {subprogram.achievements && subprogram.achievements.length > 0 && (
                              <div className="mb-3">
                                <h4 className={`text-sm font-semibold mb-2 ${programColors[subprogram.parentProgram].accent}`}>
                                  Key Achievements
                                </h4>
                                <ul className="space-y-1">
                                  {subprogram.achievements.slice(0, 2).map((achievement, i) => (
                                    <motion.li 
                                      key={i}
                                      className="text-sm text-gray-600 flex items-start"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.4 + i * 0.1 }}
                                    >
                                      <span className={`inline-block w-1.5 h-1.5 rounded-full ${programColors[subprogram.parentProgram].accent} mt-1.5 mr-2`}></span>
                                      {achievement}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {subprogram.events && subprogram.events.length > 0 && (
                              <div>
                                <h4 className={`text-sm font-semibold mb-2 ${programColors[subprogram.parentProgram].accent}`}>
                                  Notable Events
                                </h4>
                                <ul className="space-y-1">
                                  {subprogram.events.slice(0, 2).map((event, i) => (
                                    <motion.li 
                                      key={i}
                                      className="text-sm text-gray-600"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: 0.4 + i * 0.1 }}
                                    >
                                      <div className="flex justify-between">
                                        <span>{event.title}</span>
                                        <span className="text-gray-400">{event.year}</span>
                                      </div>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                        
                        {/* Learn More Button */}
                        <div className="mt-6">
                          <Button 
                            className={`w-full bg-gradient-to-r ${programColors[subprogram.parentProgram].primary} hover:opacity-90 text-white`}
                          >
                            <span>Explore Project</span>
                            <motion.div
                              className="ml-2"
                              animate={{ 
                                x: [0, 5, 0],
                                transition: { duration: 1.5, repeat: Infinity, repeatType: "loop" }
                              }}
                            >
                              <ArtisticArrow direction="right" size="sm" />
                            </motion.div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static transform-none relative left-0 right-0 translate-x-0 translate-y-0 bg-white shadow-md hover:bg-gray-50 text-gray-800" />
              <CarouselNext className="static transform-none relative left-0 right-0 translate-x-0 translate-y-0 bg-white shadow-md hover:bg-gray-50 text-gray-800" />
            </div>
          </Carousel>
        </motion.div>
        
        {/* View All Link */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            className="border-santaran-jade text-santaran-jade hover:bg-santaran-jade hover:text-white transition-all"
          >
            View All Projects
            <motion.div
              className="ml-2"
              animate={{ 
                x: [0, 5, 0],
                transition: { duration: 1.5, repeat: Infinity, repeatType: "loop" }
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SubprogramsSection;