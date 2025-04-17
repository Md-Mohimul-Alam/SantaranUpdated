
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Heart, Leaf } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import AnimatedHeading from '@/components/AnimatedHeading';
import AboutCoreValues from '@/components/about/AboutCoreValues';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <div className="bg-santaran-cream/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1500)', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-santaran-cream/90"></div>
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-white heading-xl mb-6 font-display">Santaran Art Organization</h1>
            <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Since 1998, we have been swimming through currents of tradition and innovation,
              weaving indigenous wisdom into the tapestry of contemporary expression.
            </p>
            <button 
              className="mt-4 bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300"
              onClick={() => {
                document.getElementById('our-mission')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discover Our Story
            </button>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 10, 0], 
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <ChevronDown size={36} className="text-white" />
          </motion.div>
        </div>
      </section>
      
      {/* Mission and Vision Section */}
      <section id="our-mission" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="w-full aspect-square overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Santaran art workshop" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Traditional art being created" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AnimatedHeading
                text="Our Sacred Purpose"
                tag="h2"
                className="heading-lg mb-6"
                color="text-santaran-teal"
                animation="wave"
              />
              
              <div className="w-20 h-1 bg-santaran-vermilion mb-6"></div>
              
              <p className="text-lg mb-6">
                From the fertile soils of Chittagong, Bangladesh, Santaran flows like a river,
                carrying the essence of indigenous wisdom, ecological harmony, and artistic expression
                to nourish communities thirsting for cultural connection.
              </p>
              
              <p className="text-lg mb-8">
                We believe art is not merely decoration but a living force—a language that speaks
                across generations, a medicine that heals divided communities, and a light that
                illuminates forgotten pathways to our shared humanity.
              </p>
              
              <div className="p-6 bg-santaran-jade/10 rounded-lg border-l-4 border-santaran-jade">
                <h3 className="font-display text-xl mb-2 text-santaran-jade">Our Vision</h3>
                <p className="italic">"Art for Dignifying Life" — Like a banyan tree with deep roots and far-reaching branches, we envision a world where art dignifies life by honoring tradition while embracing transformation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-24 px-4 bg-santaran-cream/50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-santaran-amber/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-santaran-vermilion/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl">
          <AnimatedHeading
            text="The Banyan Tree Philosophy"
            tag="h2"
            className="heading-lg text-center mb-16"
            color="text-santaran-vermilion"
            animation="typewriter"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Left visual element */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-full aspect-square flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 400 400">
                    <defs>
                      <path id="philosophy-circle" d="M 200, 200 m -175, 0 a 175,175 0 1,1 350,0 a 175,175 0 1,1 -350,0" />
                    </defs>
                    <text fill="#DE4D31" fontSize="22">
                      <textPath href="#philosophy-circle" startOffset="0%">
                        Wisdom • Tradition • Heritage • Ecology • Spirit • Community • Balance • Harmony • Dignity •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="https://images.pexels.com/photos/3876407/pexels-photo-3876407.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Banyan tree symbolizing Yanbriksha" 
                    className="w-3/5 h-3/5 object-cover rounded-full border-4 border-santaran-amber shadow-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right content */}
            <motion.div
              className="lg:col-span-2 bg-white/80 p-8 rounded-lg shadow-lg border border-santaran-amber/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-santaran-teal mb-4 font-display">Yanbriksha: The Sacred Tree of Knowledge</h3>
              
              <div className="space-y-6">
                <p className="text-lg">
                  At the heart of Santaran's philosophy stands 
                  <motion.span 
                    className="font-bold text-santaran-terracotta italic mx-2"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#DE4D31"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    'Yanbriksha'
                  </motion.span> 
                  — the Banyan tree of knowledge, whose roots reach deep into ancestral wisdom while its branches extend into the future.
                </p>
                
                <p className="text-lg">
                  Like the sacred Banyan that provides shelter to countless beings, our artistic vision embraces diversity, 
                  creating spaces where traditional knowledge systems can breathe and evolve alongside contemporary expression.
                  Each aerial root that touches the ground represents a new connection between past and present.
                </p>
                
                <div className="flex flex-col md:flex-row items-center mt-8">
                  <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <motion.div 
                      className="relative"
                      animate={{ 
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="aspect-square relative">
                        <div className="absolute inset-0 bg-santaran-jade/20 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
                        <div className="absolute inset-0 bg-santaran-amber/20 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Leaf size={40} className="text-santaran-teal" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="w-full md:w-2/3 md:pl-6">
                    <p className="italic text-santaran-jade text-lg">
                      "In the shade of Yanbriksha, we gather to share stories, preserve crafts, and nurture the seeds 
                      of artistic expression that will grow into forests of cultural resilience."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <AboutCoreValues />
      
      {/* Timeline Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedHeading
            text="Our Journey Through Time"
            tag="h2"
            className="heading-lg text-center mb-16"
            color="text-santaran-teal"
            animation="wave"
          />
          <Timeline />
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 bg-santaran-cream/20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-10 -left-10 text-santaran-terracotta/10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.9 1.05C6.45 1.05 1.95 5.55 1.95 11C1.95 13.1 2.75 15.1 4.05 16.65C3.95 17.65 3.45 18.55 2.95 19.45C2.75 19.85 2.95 20.35 3.45 20.45C5.55 20.85 7.65 20.05 9.05 18.75C9.95 18.95 10.95 19.05 11.95 19.05C17.45 19.05 21.95 14.55 21.95 9.1C21.95 3.55 17.45 1.05 11.9 1.05Z"/>
              </svg>
            </div>
            
            <div className="absolute -bottom-10 -right-10 text-santaran-jade/10 transform rotate-180">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.9 1.05C6.45 1.05 1.95 5.55 1.95 11C1.95 13.1 2.75 15.1 4.05 16.65C3.95 17.65 3.45 18.55 2.95 19.45C2.75 19.85 2.95 20.35 3.45 20.45C5.55 20.85 7.65 20.05 9.05 18.75C9.95 18.95 10.95 19.05 11.95 19.05C17.45 19.05 21.95 14.55 21.95 9.1C21.95 3.55 17.45 1.05 11.9 1.05Z"/>
              </svg>
            </div>
            
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-santaran-terracotta p-1">
                <img 
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Community Member" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl italic text-gray-700 mb-6">
              "Working with Santaran has been a transformative journey. Their approach to art isn't just about creating 
              beautiful objects—it's about weaving community connections, honoring ancestral wisdom, and reimagining 
              our relationship with the natural world."
            </p>
            
            <div>
              <p className="font-medium text-santaran-teal">Amina Rahman</p>
              <p className="text-gray-600">Community Arts Leader, Chittagong</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;