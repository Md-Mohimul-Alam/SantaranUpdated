
import React from 'react';
import { X, Calendar, Clock, User, MapPin, Tag, Ticket, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ExhibitionItem } from '@/types/exhibition';

interface ExhibitionDetailModalProps {
  exhibition: ExhibitionItem;
  isOpen: boolean;
  onClose: () => void;
}

const ExhibitionDetailModal = ({ exhibition, isOpen, onClose }: ExhibitionDetailModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-all"
            >
              <X size={20} className="text-santaran-indigo" />
            </button>
            
            {/* Hero image */}
            <div className="relative h-64 md:h-80">
              <img 
                src={exhibition.image} 
                alt={exhibition.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex flex-wrap gap-2 mb-2">
                  {exhibition.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-santaran-vermilion/90 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-display mb-1">{exhibition.title}</h2>
                <p className="text-white/90">{exhibition.subtitle}</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main content */}
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-4">About the Exhibition</h3>
                  <p className="text-gray-700 mb-6">{exhibition.description}</p>
                  
                  {/* Curator */}
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-2">Curator</h4>
                    <div className="flex items-center">
                      <User size={18} className="text-santaran-jade mr-2" />
                      <span>{exhibition.curator}</span>
                    </div>
                  </div>
                  
                  {/* Artists */}
                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-2">Featured Artists</h4>
                    <div className="flex flex-wrap gap-2">
                      {exhibition.artists.map((artist, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-santaran-cream rounded-full text-santaran-indigo text-sm"
                        >
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Gallery preview */}
                  {exhibition.additionalImages?.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3">Gallery Preview</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {exhibition.additionalImages.map((img, i) => (
                          <div key={i} className="overflow-hidden rounded-lg aspect-video">
                            <img 
                              src={img} 
                              alt={`Gallery image ${i+1}`} 
                              className="w-full h-full object-cover hover:scale-110 transition duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Additional content with proper tabs */}
                  <Tabs defaultValue="events" className="w-full">
                    <TabsList className="grid grid-cols-2 w-full mb-4">
                      <TabsTrigger value="events">Live Events</TabsTrigger>
                      <TabsTrigger value="tours">Guided Tours</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="events">
                      {exhibition.liveEvents && exhibition.liveEvents.length > 0 ? (
                        <div className="mb-6">
                          <h4 className="text-lg font-medium mb-3">
                            <span className="mr-2">Live Events</span>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              <span className="w-2 h-2 mr-1 bg-red-500 rounded-full animate-pulse"></span>
                              Live
                            </span>
                          </h4>
                          <div className="space-y-3">
                            {exhibition.liveEvents.map((event, i) => (
                              <div key={i} className="p-3 border border-santaran-amber/20 rounded-lg bg-amber-50">
                                <div className="font-medium">{event.name}</div>
                                <div className="text-sm flex items-center mt-1">
                                  <Calendar size={14} className="mr-1 text-santaran-amber" />
                                  <span className="mr-3">{event.date}</span>
                                  <Clock size={14} className="mr-1 text-santaran-amber" />
                                  <span>{event.time}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-500 italic">No live events scheduled for this exhibition.</p>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="tours">
                      {exhibition.upcomingTours && exhibition.upcomingTours.length > 0 ? (
                        <div className="mb-6">
                          <h4 className="text-lg font-medium mb-3">Upcoming Guided Tours</h4>
                          <div className="space-y-3">
                            {exhibition.upcomingTours.map((tour, i) => (
                              <div key={i} className="p-3 border border-santaran-jade/20 rounded-lg bg-teal-50">
                                <div className="font-medium">{tour.guide}</div>
                                <div className="text-sm flex items-center mt-1">
                                  <Calendar size={14} className="mr-1 text-santaran-jade" />
                                  <span className="mr-3">{tour.date}</span>
                                  <Clock size={14} className="mr-1 text-santaran-jade" />
                                  <span>{tour.time}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-500 italic">No guided tours available for this exhibition.</p>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>
                
                {/* Sidebar info */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Exhibition Details</h3>
                  
                  {/* Dates */}
                  <div className="mb-4">
                    <div className="flex items-start">
                      <Calendar size={18} className="mt-0.5 text-santaran-vermilion mr-3 shrink-0" />
                      <div>
                        <h5 className="font-medium">Dates</h5>
                        <p className="text-sm">{exhibition.date}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="mb-4">
                    <div className="flex items-start">
                      <MapPin size={18} className="mt-0.5 text-santaran-vermilion mr-3 shrink-0" />
                      <div>
                        <h5 className="font-medium">Location</h5>
                        <p className="text-sm">{exhibition.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Opening hours */}
                  {exhibition.openingHours && (
                    <div className="mb-4">
                      <div className="flex items-start">
                        <Clock size={18} className="mt-0.5 text-santaran-vermilion mr-3 shrink-0" />
                        <div>
                          <h5 className="font-medium">Opening Hours</h5>
                          <p className="text-sm">{exhibition.openingHours}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Ticket price */}
                  {exhibition.ticketPrice && (
                    <div className="mb-4">
                      <div className="flex items-start">
                        <Ticket size={18} className="mt-0.5 text-santaran-vermilion mr-3 shrink-0" />
                        <div>
                          <h5 className="font-medium">Admission</h5>
                          <p className="text-sm">{exhibition.ticketPrice}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Additional info */}
                  <div className="mt-6">
                    <div className="p-3 bg-santaran-cream/50 rounded-lg flex items-start">
                      <Info size={18} className="mt-0.5 text-santaran-amber mr-2 shrink-0" />
                      <p className="text-xs">Please arrive 15 minutes before your scheduled visit. Photography is permitted without flash. For group bookings, please contact us.</p>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-6">
                    <Button className="w-full">
                      Reserve Your Visit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExhibitionDetailModal;
