
import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    {
      year: "1998",
      title: "Santaran Founded",
      description: "Established in Chittagong as an artist-led initiative to promote art as a medium for social change.",
      color: "terracotta"
    },
    {
      year: "2008",
      title: "Official Recognition",
      description: "Gained official recognition under the Ministry of Social Welfare, People's Republic of Bangladesh.",
      color: "teal"
    },
    {
      year: "2009",
      title: "Horith Program Launch",
      description: "Established the first permanent environmental art program with camps in Alikadam of Bandarban district.",
      color: "jade"
    },
    {
      year: "2009",
      title: "Kalpapuri Program",
      description: "Began working with children to develop healthy relationship through art workshops in Alikadam.",
      color: "amber"
    },
    {
      year: "2015",
      title: "Karnaphuli Folk Triennial",
      description: "Launched first international folk art festival featuring artists from Bangladesh, Nepal, India, and more.",
      color: "brown"
    },
    {
      year: "2018",
      title: "Shikar Program",
      description: "Expanded efforts to preserve disappearing folk arts and crafts through dedicated workshops and exhibitions.",
      color: "olive"
    },
    {
      year: "2018",
      title: "Srijan Prangon Residency",
      description: "Established multidisciplinary art space in Alikadam supporting the Dhoritri eco-tourism project.",
      color: "terracotta"
    },
    {
      year: "2020",
      title: "Kalpapuri School of Arts & Crafts",
      description: "Launched institutional creative education project at Srijan Prangon space in Alikadam.",
      color: "teal"
    }
  ];

  return (
    <div className="relative">
      {/* Central line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-santaran-teal/30"></div>
      
      <div className="relative space-y-12 md:space-y-24">
        {events.map((event, index) => (
          <motion.div 
            key={`timeline-${event.year}-${event.title}`}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Year circle */}
            <div className="flex-shrink-0 z-20">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-santaran-${event.color} text-white shadow-lg font-display text-xl`}>
                {event.year}
              </div>
            </div>
            
            {/* Event content */}
            <div className={`md:w-5/12 bg-white p-6 rounded-lg shadow-md mt-4 md:mt-0 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
              <h3 className={`text-santaran-${event.color} text-xl font-semibold mb-2`}>{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;