
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';


const testimonials = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Participating Artist",
    quote: "Being part of Santaran's artist residency program changed my perspective on how art can truly impact communities. The connection with local culture and emphasis on environmental awareness has deeply influenced my work.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Art Educator",
    quote: "The Kalpapuri School of Arts & Crafts provides a unique approach to teaching children. It's not just about techniques, but about connecting them to their heritage while encouraging innovation.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Mohammed Karim",
    role: "Community Member",
    quote: "Santaran's environmental art camps have transformed our community's relationship with nature. They've shown us how art can be both beautiful and a powerful tool for environmental advocacy.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 bg-santaran-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-santaran-teal mb-4">Voices from Our Community</h2>
          <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 left-0 text-santaran-gold opacity-30">
            <Quote size={80} />
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-santaran-teal/20 mx-auto">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-santaran-terracotta rounded-full flex items-center justify-center text-white">
                    <Quote size={20} />
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <h3 className="font-display text-xl text-santaran-teal">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="italic text-lg md:text-xl leading-relaxed text-gray-700">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-santaran-teal text-santaran-teal hover:bg-santaran-teal hover:text-white transition-colors flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-santaran-teal text-santaran-teal hover:bg-santaran-teal hover:text-white transition-colors flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Pagination Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-6 bg-santaran-terracotta' 
                  : 'bg-santaran-teal/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;