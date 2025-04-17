import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FeaturedExhibition = ({ exhibition, onClick }) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden relative aspect-[16/9]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <img 
          src={exhibition.image} 
          alt={exhibition.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      </motion.div>
      
      <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 lg:p-16 text-white">
        <div className="w-full max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block bg-santaran-vermilion px-3 py-1 text-sm font-medium rounded-full mb-4">
              Featured Exhibition
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display mb-3"
          >
            {exhibition.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/80 text-lg mb-6 max-w-xl"
          >
            {exhibition.description.length > 150
              ? `${exhibition.description.substring(0, 150)}...`
              : exhibition.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center text-white/90 text-sm gap-x-6 mb-6"
          >
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{exhibition.date}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span>{exhibition.location}</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button onClick={onClick} className="group">
              Explore Exhibition 
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedExhibition;
