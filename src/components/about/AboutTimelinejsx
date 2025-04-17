
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Palette, Users, Image, BookOpen } from 'lucide-react';
import AnimatedHeading from '../AnimatedHeading';

const AboutTimeline = () => {
  const milestones = [
    { 
      year: "1998", 
      title: "Santaran Founded", 
      description: "Established in Chittagong as an artist-led initiative to promote art as a medium for social change. 'Art for Dignifying Life' became our vision.",
      icon: <Palette className="text-santaran-vermilion" size={20} />,
      image: "https://images.pexels.com/photos/2901581/pexels-photo-2901581.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      year: "2008", 
      title: "Official Recognition", 
      description: "Gained official recognition under the Ministry of Social Welfare, Bangladesh as a nonprofit multidisciplinary artist-run organization.",
      icon: <BookOpen className="text-santaran-amber" size={20} />,
      image: "https://images.pexels.com/photos/7605913/pexels-photo-7605913.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      year: "2009", 
      title: "Environmental Art Camp", 
      description: "Launched the permanent Horith program with the first Environmental Art Camp in Alikadam, focusing on ecological awareness through art.",
      icon: <Image className="text-santaran-terracotta" size={20} />,
      image: "https://images.pexels.com/photos/266583/pexels-photo-266583.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      year: "2015", 
      title: "Karnaphuli Folk Triennial", 
      description: "Initiated the first triennial celebration of folk arts and crafts from the Chittagong region, part of the Shikar program.",
      icon: <Calendar className="text-santaran-teal" size={20} />,
      image: "https://images.pexels.com/photos/2183577/pexels-photo-2183577.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      year: "2018", 
      title: "Srijan Prangon Residency", 
      description: "Established the artist residency space in Alikadam of Bandarbans district for the Dhoritri eco-tourism project under the Art Factory program.",
      icon: <Users className="text-santaran-jade" size={20} />,
      image: "https://images.pexels.com/photos/3471028/pexels-photo-3471028.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      year: "2020", 
      title: "Kalpapuri School of Arts & Crafts", 
      description: "Created a creative education project for coming generations interested in building their world through art as part of the Kalpapuri program.",
      icon: <BookOpen className="text-santaran-amber" size={20} />,
      image: "https://images.pexels.com/photos/3933871/pexels-photo-3933871.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="my-24">
      <AnimatedHeading
        text="Our Journey"
        tag="h3"
        className="heading-md mb-12 text-center"
        color="text-santaran-teal"
        animation="wave"
      />
      
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-santaran-vermilion via-santaran-amber to-santaran-jade transform md:translate-x-[-50%]"></div>
        
        <div className="space-y-24">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year}
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <motion.div 
                className="absolute left-[-12px] md:left-1/2 top-0 transform md:translate-x-[-50%] z-10 bg-white border-4 border-santaran-amber rounded-full w-6 h-6 md:w-12 md:h-12 flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-santaran-teal text-xs md:text-base font-bold">{milestone.year}</span>
              </motion.div>
              
              <div className={`pl-8 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-1">
                          {milestone.icon}
                          <h4 className="font-bold text-lg">{milestone.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-20 max-w-2xl mx-auto text-center bg-gradient-to-r from-santaran-cream to-white p-6 rounded-lg shadow-md">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 italic"
        >
          "All are running successfully by the organization as part of its journey. Apart from that, Santaran
          believes that through these activities our artistic philosophy will become the 'Yanbriksha' (alike a
          Banyan tree of knowledge) which is rooted to the ground but spreading its branches all over the
          sky."
        </motion.p>
      </div>
    </div>
  );
};

export default AboutTimeline;