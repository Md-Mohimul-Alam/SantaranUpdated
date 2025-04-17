
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import AnimatedHeading from '../AnimatedHeading';

const AboutPhilosophy = () => {
  return (
    <div className="mb-24">
      <AnimatedHeading
        text="Our Philosophy"
        tag="h3"
        className="heading-md mb-10 text-center"
        color="text-santaran-terracotta"
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
                  <path id="circlePhilosophyPath" d="M 200, 200 m -175, 0 a 175,175 0 1,1 350,0 a 175,175 0 1,1 -350,0" />
                </defs>
                <text fill="#DE4D31" fontSize="22">
                  <textPath href="#circlePhilosophyPath" startOffset="0%">
                    Art • Culture • Heritage • Knowledge • Wisdom • Community • Nature • Balance • Harmony •
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
                src="https://images.pexels.com/photos/3696663/pexels-photo-3696663.jpeg?auto=compress&cs=tinysrgb&w=800" 
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
          <h4 className="text-xl font-bold text-santaran-teal mb-4 font-display">The Banyan Tree of Knowledge</h4>
          
          <div className="space-y-6">
            <p className="text-lg">
              Santaran's artistic philosophy is represented by the concept of 
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
              (the Banyan tree of knowledge).
            </p>
            
            <p className="text-lg">
              Like the sacred Banyan tree which is deeply rooted yet spreads its branches far and wide, 
              our artistic vision is firmly grounded in traditional values while constantly evolving and 
              expanding to embrace new forms of expression.
            </p>
            
            <div className="flex flex-col md:flex-row items-center">
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
                  "Through the roots of tradition and the branches of innovation, 
                  we create art that connects humans with their essence and the natural world."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPhilosophy;