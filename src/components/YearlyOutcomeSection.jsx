
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ArtisticGalleryImages from './ArtisticGalleryImages';



const outcomes = [
  {
    year: "2023",
    items: [
      { title: "Art Workshops", count: 35, icon: "🖌️" },
      { title: "Community Events", count: 18, icon: "🌎" },
      { title: "Children Engaged", count: 450, icon: "👧" },
      { title: "Artists Supported", count: 56, icon: "👨‍🎨" }
    ],
    exhibitions: [
      { title: "Perspective of Art & Space", year: 2021, venue: "Gallery Charja, Dhaka" },
      { title: "From the Karnaphuli", year: 2019, venue: "Residence of Italian Ambassador, Dhaka" }
    ]
  },
  {
    year: "2020",
    items: [
      { title: "Art Exhibitions", count: 12, icon: "🖼️" },
      { title: "Folk Art Programs", count: 8, icon: "🧶" },
      { title: "Ecological Projects", count: 6, icon: "🌿" },
      { title: "Publications", count: 4, icon: "📚" }
    ],
    exhibitions: [
      { title: "Politicomania", year: 2016, venue: "Nandan Museum, Shantiniketan, India" },
      { title: "Perspective of Art & Space", year: 2014, venue: "Chittagong Shilpokala Academy" }
    ]
  },
  {
    year: "2015",
    items: [
      { title: "Folk Art Festivals", count: 1, icon: "🎭" },
      { title: "Artists Involved", count: 40, icon: "👨‍🎨" },
      { title: "Countries Represented", count: 5, icon: "🌏" },
      { title: "Art Traditions", count: 17, icon: "🧵" }
    ],
    exhibitions: [
      { title: "First Karnaphuli Folk Triennial", year: 2015, venue: "Multiple locations in Chittagong and Dhaka" },
      { title: "Traditional Thanka Painting Workshop", year: 2015, venue: "Chittagong" }
    ]
  }
];

const YearlyOutcomeSection = () => {
  return (
    <section className="py-20 bg-white/90 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-santaran-teal/5 to-santaran-terracotta/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tl from-santaran-amber/5 to-santaran-jade/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-santaran-teal mb-4">Our Exhibitions & Impact</h2>
          <div className="w-24 h-1 bg-santaran-amber mx-auto"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
            Since 1999, Santaran has organized twenty-two years of yearly outcome exhibitions 
            in Bangladesh and abroad, showcasing artistic achievements and cultural heritage.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div>
                <ArtisticGalleryImages category="contemporary" autoPlay={true} interval={5000} />
              </div>
            </div>
            
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-santaran-jade/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2],
                opacity: [0.3, 0.6],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="space-y-12">
              {outcomes.map((yearData, yearIndex) => (
                <motion.div 
                  key={yearData.year}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: yearIndex * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <h3 className="heading-md text-santaran-terracotta mr-3">{yearData.year}</h3>
                    <div className="h-0.5 flex-grow bg-gradient-to-r from-santaran-terracotta to-transparent"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {yearData.items.map((item, index) => (
                      <motion.div 
                        key={item.title}
                        className="bg-white p-5 rounded-lg shadow-md transition-all"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5, boxShadow: "0 12px 20px rgba(0,0,0,0.1)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                          duration: 0.4, 
                          delay: yearIndex * 0.1 + index * 0.1 
                        }}
                      >
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <h4 className="font-medium text-santaran-brown mb-1">{item.title}</h4>
                        <p className="text-2xl font-bold text-santaran-teal">{item.count}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-santaran-cream/20 p-4 rounded-lg">
                    <h4 className="font-medium text-santaran-teal mb-2">Notable Exhibitions</h4>
                    <ul className="space-y-2">
                      {yearData.exhibitions.map((exhibition, index) => (
                        <li key={index} className="flex justify-between items-center">
                          <span className="font-medium">{exhibition.title}</span>
                          <span className="text-sm text-gray-600">{exhibition.venue}, {exhibition.year}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 flex justify-end"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="/exhibitions" 
                className="inline-flex items-center text-santaran-terracotta hover:text-santaran-jade transition-colors"
              >
                <span>View full exhibition history</span>
                <motion.div
                  animate={{ 
                    x: [0, 5],
                    transition: { 
                      duration: 1, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                >
                  <ArrowRight size={18} className="ml-2" />
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearlyOutcomeSection;