
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeaturedProgramSection from "@/components/FeaturedProgramSection";
import ProgramHero from "@/components/ProgramHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AnimatedHeading from "@/components/AnimatedHeading";
import ArtisticArrow from "@/components/ArtisticArrow";
import SubprogramsSection from "@/components/SubprogramsSection";
import YearlyOutcomeSection from "@/components/YearlyOutcomeSection";

interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  status: "ongoing" | "upcoming" | "past";
  image: string;
  icon: string;
  location: string;
}

const programsData: Program[] = [
  {
    id: "harith",
    title: "Harith",
    description: "Art of environmental development focusing on ecological awareness and sustainability through creative expression, addressing climate change through artistic interventions.",
    category: "Environmental Art",
    year: "2023-Present",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=1200",
    icon: "🌿",
    location: "Various locations across Bangladesh"
  },
  {
    id: "kalpapuri",
    title: "Kalpapuri",
    description: "Works with children's art and psychology, nurturing young minds through artistic exploration and using art as a therapeutic tool for psychological development.",
    category: "Children's Art",
    year: "2021-Present",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200",
    icon: "👧",
    location: "Chittagong & Dhaka"
  },
  {
    id: "shikar",
    title: "Shikar",
    description: "Development and preservation of folk arts & crafts to maintain cultural heritage and traditional art forms across generations, documenting ancient techniques.",
    category: "Folk Arts",
    year: "2019-Present",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1577083287809-1c774a469596?q=80&w=1200",
    icon: "🧶",
    location: "Rural regions of Bangladesh"
  },
  {
    id: "artfactory",
    title: "Art Factory",
    description: "Project for young artists to collaborate, experiment, and showcase innovative artistic approaches, pushing boundaries of contemporary artistic expression.",
    category: "Contemporary Art",
    year: "2022-Present",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200",
    icon: "🎨",
    location: "Dhaka Art District"
  },
  {
    id: "artbridge",
    title: "Art Bridge",
    description: "International artist exchange program fostering cross-cultural dialogue and collaborative art projects between Bangladeshi artists and global peers.",
    category: "International Exchange",
    year: "2024",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1200",
    icon: "🌉",
    location: "Global"
  },
  {
    id: "digitalaesthetics",
    title: "Digital Aesthetics",
    description: "Exploration of digital and new media art forms including virtual reality, augmented reality, and interactive installations with technological innovations.",
    category: "Digital Art",
    year: "2024",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
    icon: "💻",
    location: "Virtual & Dhaka"
  },
  {
    id: "rivertraces",
    title: "River Traces",
    description: "Community-based art project that explored the historical and cultural significance of rivers in Bangladesh through multi-disciplinary artistic approaches.",
    category: "Community Art",
    year: "2017-2019",
    status: "past",
    image: "https://images.unsplash.com/photo-1597215737412-4bbe759ae8c8?q=80&w=1200",
    icon: "🌊",
    location: "Riverine areas of Bangladesh"
  },
  {
    id: "artistvillage",
    title: "Artist Village",
    description: "Rural artist residency program that facilitated collaboration between urban and rural artists to create site-specific works addressing rural contexts.",
    category: "Residency",
    year: "2015-2018",
    status: "past",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1200",
    icon: "🏡",
    location: "Rangamati"
  }
];

const featuredWorkData = [
  {
    title: "River Cleaning Art Project",
    category: "Harith",
    image: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?q=80&w=1200",
    description: "Community-based art installation using recycled materials from river cleanup"
  },
  {
    title: "Children's Imagination Workshop",
    category: "Kalpapuri",
    image: "https://images.unsplash.com/photo-1511205889974-2b9e001f9ba5?q=80&w=1200",
    description: "Creative expression workshops for underprivileged children"
  },
  {
    title: "Folk Art Documentation",
    category: "Shikar",
    image: "https://images.unsplash.com/photo-1578926318661-3af11b5b05d7?q=80&w=1200",
    description: "Preserving traditional craft techniques through digital archives"
  }
];

const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredPrograms = programsData.filter(program => {
    if (activeTab === "all") return true;
    return program.status === activeTab;
  });

  return (
    <div className="bg-santaran-cream min-h-screen overflow-x-hidden">
      <Navbar />
      
      <ProgramHero />
      
      <FeaturedProgramSection />
      
      <SubprogramsSection />
      
      <section className="py-20 px-4 md:px-8 lg:px-12 container mx-auto">
        <div className="mb-16 text-center">
          <AnimatedHeading 
            text="Explore Our Initiatives"
            tag="h2"
            className="heading-lg mb-6 bg-gradient-to-r from-santaran-vermilion via-santaran-amber to-santaran-jade bg-clip-text text-transparent"
            color=""
            animation="typewriter"
          />
          <div className="w-32 h-1 bg-gradient-to-r from-santaran-vermilion to-santaran-amber mx-auto"></div>
          <motion.p 
            className="mt-6 text-lg max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Our programs focus on nurturing creativity, preserving cultural heritage, 
            and promoting art as a catalyst for social change and community development.
          </motion.p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="p-1 glass-dark bg-white/80 backdrop-blur-lg border border-santaran-jade/20 rounded-full">
              <TabsTrigger value="all" className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-santaran-vermilion data-[state=active]:to-santaran-amber data-[state=active]:text-white">
                All Programs
              </TabsTrigger>
              <TabsTrigger value="ongoing" className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-santaran-vermilion data-[state=active]:to-santaran-amber data-[state=active]:text-white">
                Ongoing
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-santaran-vermilion data-[state=active]:to-santaran-amber data-[state=active]:text-white">
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="past" className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-santaran-vermilion data-[state=active]:to-santaran-amber data-[state=active]:text-white">
                Past
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            {filteredPrograms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredPrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                {activeTab === "upcoming" ? (
                  <>
                    <motion.div 
                      className="text-6xl mb-6"
                      animate={{ 
                        y: [0, -10, 0], 
                        transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                      }}
                    >
                      🚀
                    </motion.div>
                    <AnimatedHeading 
                      text="Exciting Programs Coming Soon!"
                      tag="h3"
                      className="heading-md mb-4"
                      color="text-santaran-teal"
                      animation="scale"
                    />
                    <p className="text-gray-600 mb-6">Stay tuned for our upcoming initiatives.</p>
                    <Button className="mt-4">
                      Get Notified
                      <Clock className="ml-2 h-4 w-4" />
                    </Button>
                  </>
                ) : activeTab === "past" ? (
                  <>
                    <AnimatedHeading 
                      text="Archive Under Development"
                      tag="h3"
                      className="heading-md mb-4"
                      color="text-santaran-teal"
                      animation="rotate"
                    />
                    <p className="text-gray-600 mb-6">Our program archives are being digitized. Check back soon.</p>
                    <Button variant="outline" className="mt-4">
                      View Gallery Instead
                      <ArtisticArrow direction="right" size="sm" className="ml-2" />
                    </Button>
                  </>
                ) : (
                  <p>No programs found.</p>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
      
      <YearlyOutcomeSection />
      
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-santaran-vermilion/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-santaran-jade/5 blur-3xl"></div>
        
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <AnimatedHeading 
                text="Our Philosophy"
                tag="h2"
                className="heading-md mb-6"
                color="text-santaran-vermilion"
                animation="paint"
              />
              
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                At Santaran, we believe that art is not merely an aesthetic pursuit but a powerful force for dignifying life and fostering social change. Our programs are designed with three core principles:
              </motion.p>
              
              <motion.ul
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <li className="flex items-start space-x-3">
                  <div className="bg-santaran-vermilion/10 p-2 rounded-full">
                    <Users className="text-santaran-vermilion h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Community Engagement</h4>
                    <p className="text-gray-600">Art must engage with communities and reflect their lived experiences</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <div className="bg-santaran-jade/10 p-2 rounded-full">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        transition: { duration: 20, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      <svg className="text-santaran-jade h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21L11.8999 20.8499C11.2053 20.0974 10.7234 19.6499 10.2764 19.3183C9.78535 18.9603 9.26138 18.6849 8.71573 18.499C8.22321 18.3337 7.71221 18.25 7 18.25V17.25C7.86789 17.25 8.52332 17.3575 9.13202 17.5679C9.77957 17.7909 10.3879 18.1249 10.9479 18.5224C11.4752 18.8949 12.0053 19.3899 12.7211 20.1628L12.9 20.35L13.0999 20.1628C13.8275 19.3788 14.3654 18.8793 14.9007 18.5038C15.4665 18.1052 16.0796 17.7741 16.7302 17.5557C17.3253 17.3566 17.9669 17.25 18.8 17.25V18.25C18.097 18.25 17.5958 18.3316 17.1132 18.4932C16.5729 18.6749 16.0545 18.9461 15.5689 19.2996C15.1261 19.6265 14.6482 20.0705 13.9401 20.8499L13.84 20.9599L12 21Z" fill="currentColor"/>
                        <path d="M19 13.25C21.0711 13.25 22.75 11.5711 22.75 9.5C22.75 7.42893 21.0711 5.75 19 5.75C16.9289 5.75 15.25 7.42893 15.25 9.5C15.25 11.5711 16.9289 13.25 19 13.25Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M16 3.75H8C5.92893 3.75 4.25 5.42893 4.25 7.5C4.25 9.57107 5.92893 11.25 8 11.25L9.5 11.25" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M7 14.25C4.92893 14.25 3.25 15.9289 3.25 18C3.25 20.0711 4.92893 21.75 7 21.75C9.07107 21.75 10.75 20.0711 10.75 18C10.75 15.9289 9.07107 14.25 7 14.25Z" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Knowledge Preservation</h4>
                    <p className="text-gray-600">Traditional arts and crafts contain invaluable cultural knowledge</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <div className="bg-santaran-amber/10 p-2 rounded-full">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <svg className="text-santaran-amber h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sustainable Future</h4>
                    <p className="text-gray-600">Art has a role in imagining and creating sustainable futures</p>
                  </div>
                </li>
              </motion.ul>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button>
                  Join Our Mission 
                  <ArtisticArrow direction="right" size="sm" className="ml-2" />
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="order-1 md:order-2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="artistic-card fancy-border canvas-texture aspect-[4/5] p-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200" 
                  alt="Art Installation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border-2 border-santaran-jade p-4 rounded-lg shadow-lg">
                <p className="text-sm font-display italic">"Art for dignifying life"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-santaran-jade/10 via-santaran-cream/70 to-santaran-amber/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <AnimatedHeading 
              text="Our Impact Through Art"
              tag="h2"
              className="heading-md mb-4"
              color="text-santaran-teal"
              animation="rotate"
            />
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="120+" title="Artists Supported" icon={<Users className="h-8 w-8 mb-3 text-santaran-vermilion" />} />
            <StatCard number="46" title="Communities Engaged" icon={
              <svg className="h-8 w-8 mb-3 text-santaran-vermilion" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21L11.8999 20.8499C11.2053 20.0974 10.7234 19.6499 10.2764 19.3183C9.78535 18.9603 9.26138 18.6849 8.71573 18.499C8.22321 18.3337 7.71221 18.25 7 18.25V17.25C7.86789 17.25 8.52332 17.3575 9.13202 17.5679C9.77957 17.7909 10.3879 18.1249 10.9479 18.5224C11.4752 18.8949 12.0053 19.3899 12.7211 20.1628L12.9 20.35L13.0999 20.1628C13.8275 19.3788 14.3654 18.8793 14.9007 18.5038C15.4665 18.1052 16.0796 17.7741 16.7302 17.5557C17.3253 17.3566 17.9669 17.25 18.8 17.25V18.25C18.097 18.25 17.5958 18.3316 17.1132 18.4932C16.5729 18.6749 16.0545 18.9461 15.5689 19.2996C15.1261 19.6265 14.6482 20.0705 13.9401 20.8499L13.84 20.9599L12 21Z" fill="currentColor"/>
                <path d="M19 13.25C21.0711 13.25 22.75 11.5711 22.75 9.5C22.75 7.42893 21.0711 5.75 19 5.75C16.9289 5.75 15.25 7.42893 15.25 9.5C15.25 11.5711 16.9289 13.25 19 13.25Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M16 3.75H8C5.92893 3.75 4.25 5.42893 4.25 7.5C4.25 9.57107 5.92893 11.25 8 11.25L9.5 11.25" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 14.25C4.92893 14.25 3.25 15.9289 3.25 18C3.25 20.0711 4.92893 21.75 7 21.75C9.07107 21.75 10.75 20.0711 10.75 18C10.75 15.9289 9.07107 14.25 7 14.25Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            } />
            <StatCard number="12" title="Exhibitions Curated" icon={
              <svg className="h-8 w-8 mb-3 text-santaran-vermilion" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L14.5 8.5L21 9.5L16.5 14L17.5 20.5L12 17.5L6.5 20.5L7.5 14L3 9.5L9.5 8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            } />
            <StatCard number="4,500+" title="Workshop Participants" icon={<Users className="h-8 w-8 mb-3 text-santaran-vermilion" />} />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <AnimatedHeading 
              text="Featured Work"
              tag="h2"
              className="heading-md mb-4"
              color="text-santaran-teal"
              animation="wave"
            />
            <div className="w-24 h-1 bg-santaran-amber mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWorkData.map((item, index) => (
              <motion.div 
                key={index}
                className="rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-santaran-jade text-white text-xs rounded-full">{item.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-5xl relative">
          <motion.div 
            className="relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1200" 
                alt="Forest" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 lg:w-2/3">
              <AnimatedHeading 
                text="Get Involved with Our Programs"
                tag="h2"
                className="heading-md mb-6"
                color="text-white"
                animation="typewriter"
              />
              
              <p className="text-lg text-white/90 max-w-2xl mb-8">
                Whether you're an artist, educator, student, or art enthusiast, there are many ways to participate in Santaran's initiatives.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="default" className="bg-santaran-terracotta hover:bg-santaran-terracotta/90">
                  Volunteer
                  <motion.svg 
                    className="ml-2 h-4 w-4 text-white" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                      rotate: [0, 15, -15, 0],
                      transition: { duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
                    }}
                  >
                    <path d="M20 10L20 18M20 18H12M20 18L4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </Button>
                <Button className="bg-white text-santaran-teal hover:bg-white/90">
                  Participate
                  <motion.div
                    className="ml-2"
                    animate={{ 
                      rotate: [0, 360],
                      transition: { duration: 8, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" fill="currentColor"/>
                    </svg>
                  </motion.div>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  Support Us
                  <motion.div
                    className="ml-2"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
                    }}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5 12.5719L12 19.9999L4.5 12.5719C3.9178 11.9972 3.47893 11.2995 3.21822 10.532C2.95752 9.76444 2.87894 8.94418 2.98896 8.1384C3.09898 7.33262 3.39451 6.55791 3.85445 5.87414C4.31439 5.19036 4.92574 4.61151 5.64484 4.17551C6.36394 3.73951 7.17326 3.45524 8.01161 3.34398C8.84997 3.23273 9.70173 3.29716 10.5089 3.53273C11.3161 3.7683 12.0576 4.16906 12.6798 4.7059C13.302 5.24274 13.7873 5.90279 14.1 6.64194C14.3219 6.11136 14.639 5.62472 15.0372 5.20375C15.4354 4.78279 15.9068 4.43516 16.4295 4.17551C16.9522 3.91587 17.5171 3.74836 18.0976 3.68163C18.6781 3.61491 19.2656 3.65013 19.8308 3.78547C20.3959 3.92081 20.9288 4.15388 21.4025 4.47235C21.8762 4.79082 22.2815 5.1891 22.5962 5.64912C22.9109 6.10914 23.1292 6.62334 23.2396 7.16239C23.35 7.70144 23.3505 8.25569 23.2411 8.79494C23.1317 9.33418 22.9142 9.84878 22.6005 10.3093C22.2867 10.7699 21.8823 11.1689 21.4092 11.4882C20.9362 11.8075 20.4039 12.0415 19.8391 12.1779C19.7351 12.204 19.6289 12.2227 19.5215 12.2339L19.5 12.5719Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const ProgramCard: React.FC<{
  program: Program;
}> = ({ program }) => {
  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id={program.id}
    >
      <Link to={`/programs/${program.id}`}>
        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
          <div className="relative h-60 overflow-hidden">
            <img 
              src={program.image} 
              alt={program.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-medium py-1 px-3 rounded-full bg-santaran-jade text-white">
                {program.category}
              </span>
            </div>
            <div className="absolute top-4 right-4 text-3xl bg-white p-2 rounded-full shadow-md">
              {program.icon}
            </div>
          </div>
          
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-3">
              <AnimatedHeading 
                text={program.title}
                tag="h3"
                className="text-xl font-display"
                color="text-santaran-teal"
                animation="wave"
              />
              <span className="text-sm text-gray-500">{program.year}</span>
            </div>
            
            <p className="text-gray-600 mb-4">{program.description}</p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{program.location}</span>
              </div>
              
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="h-5 w-5 text-santaran-vermilion" />
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

const StatCard: React.FC<{ number: string; title: string; icon: React.ReactNode }> = ({ number, title, icon }) => {
  return (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-md text-center"
      whileHover={{ 
        y: -5, 
        transition: { duration: 0.3 },
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="flex justify-center"
        animate={{ 
          y: [0, -5, 0],
          transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
      >
        {icon}
      </motion.div>
      <motion.h3 
        className="text-4xl md:text-5xl font-display font-bold text-santaran-vermilion mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          delay: 0.2,
          duration: 0.8 
        }}
        viewport={{ once: true }}
      >
        {number}
      </motion.h3>
      <p className="text-gray-600 font-medium">{title}</p>
    </motion.div>
  );
};

export default Programs;
