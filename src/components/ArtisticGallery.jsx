
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArtisticArrow from './ArtisticArrow';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ArtisticGalleryProps {
  images: GalleryImage[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const ArtisticGallery: React.FC<ArtisticGalleryProps> = ({
  images = [],
  autoPlay = true,
  interval = 5000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (images.length <= 1 || !isAutoPlaying) {
      return;
    }
    
    setIsReady(true);
    
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isAutoPlaying, interval, images.length, images]);

  useEffect(() => {
    if (images.length > 0) {
      setIsReady(true);
    }
  }, [images]);

  const goToPrevious = useCallback(() => {
    if (images.length <= 1) return;
    
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), interval! * 2);
    }
    
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length, isAutoPlaying, interval]);

  const goToNext = useCallback(() => {
    if (images.length <= 1) return;
    
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), interval! * 2);
    }
    
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length, isAutoPlaying, interval]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
      }
    }),
  };

  if (images.length === 0) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200 animate-pulse"></div>
      </div>
    );
  }

  if (!isReady) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="aspect-[16/9] rounded-lg overflow-hidden relative shadow-lg">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10"></div>
            
            <motion.div 
              className="absolute inset-0 opacity-20 z-0 pointer-events-none"
              initial={{ backgroundPosition: '0% 0%' }}
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
              style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
              }}
            />
            
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            
            {images[currentIndex].caption && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end z-20">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                  className="text-white p-6 font-medium"
                >
                  {images[currentIndex].caption}
                </motion.p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 pointer-events-none">
          <motion.button 
            onClick={goToPrevious}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transform transition-transform hover:scale-110 pointer-events-auto"
            aria-label="Previous image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArtisticArrow direction="left" size="sm" />
          </motion.button>
          
          <motion.button 
            onClick={goToNext}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transform transition-transform hover:scale-110 pointer-events-auto"
            aria-label="Next image"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArtisticArrow direction="right" size="sm" />
          </motion.button>
        </div>
      )}

      {images.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
                
                if (isAutoPlaying) {
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), interval! * 2);
                }
              }}
              className="relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.span
                className={`block w-2 h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-santaran-vermilion' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                animate={{
                  width: currentIndex === index ? 24 : 8,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      )}
      
      {images.length > 1 && (
        <motion.button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-4 right-4 p-2 rounded-full bg-white/50 hover:bg-white/80 text-xs font-medium"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </motion.button>
      )}
    </div>
  );
};

export default ArtisticGallery;
