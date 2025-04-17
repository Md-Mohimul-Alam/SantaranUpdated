import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Eye } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";

const ExhibitionCard = ({ exhibition, onClick, style, index }) => {
  const handleCardClick = (e) => {
    if (!e.target.closest('button')) {
      onClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="h-full relative exhibition-frame"
      style={style}
    >
      <div className="absolute inset-0 bg-black/5 z-0"></div>
      <div className="absolute -inset-1 bg-gradient-to-tr from-amber-200/20 via-white/40 to-amber-100/20 rounded-2xl blur-sm z-0"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Card
            className="overflow-hidden group h-full border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer bg-white relative z-10 art-card"
            onClick={handleCardClick}
          >
            <div className="relative exhibition-artwork" style={{ height: '100%', minHeight: '400px' }}>
              <img
                src={exhibition.image}
                alt={exhibition.title}
                className="w-full h-full object-cover art-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div className="absolute top-5 left-5 z-20">
                <span className="bg-white/90 text-black caption-text px-3 py-1 rounded-full">
                  {exhibition.subtitle}
                </span>
              </div>

              {exhibition.liveEvents && exhibition.liveEvents.length > 0 && (
                <div className="absolute top-5 right-5 z-20">
                  <span className="flex items-center gap-1 bg-red-600 text-white caption-text px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Live Now
                  </span>
                </div>
              )}

              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-5/6 text-center transition-all duration-500 z-20">
                <div className="bg-black/40 backdrop-blur-sm text-white py-1 px-3 rounded-sm inline-block">
                  <span className="caption-text opacity-80">By </span>
                  <span className="font-serif">{exhibition.curator}</span>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white z-20">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-1 group-hover:text-santaran-amber transition-colors duration-300">
                  {exhibition.title}
                </h3>
                <div className="flex items-center text-white/90 caption-text mt-2">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-4">{exhibition.date}</span>
                  <MapPin size={14} className="mr-1" />
                  <span>{exhibition.location}</span>
                </div>
              </div>
            </div>

            <Button
              variant="artistic"
              size="sm"
              className="absolute right-4 bottom-4 group-hover:bg-santaran-jade group-hover:text-white z-30"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              <Eye size={16} className="mr-1" /> View Details
            </Button>
          </Card>
        </HoverCardTrigger>

        <HoverCardContent className="w-80 p-0 border-0 shadow-xl bg-white/90 backdrop-blur-md">
          <ScrollArea className="h-[200px] rounded-md p-4">
            <h4 className="font-display font-semibold mb-2">{exhibition.title}</h4>
            <p className="text-sm text-muted-foreground font-sans">
              {exhibition.description?.substring(0, 150)}...
            </p>
            <div className="mt-3 flex flex-wrap gap-1">
              {exhibition.tags.map((tag) => (
                <span key={tag} className="bg-santaran-cream caption-text px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </ScrollArea>
        </HoverCardContent>
      </HoverCard>
    </motion.div>
  );
};

// Prop type validation
ExhibitionCard.propTypes = {
  exhibition: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    curator: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    liveEvents: PropTypes.array,
    additionalImages: PropTypes.array,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  index: PropTypes.number,
};

export default ExhibitionCard;
