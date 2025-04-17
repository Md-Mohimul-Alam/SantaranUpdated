
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SubprogramsSection from '@/components/SubprogramsSection';
import YearlyOutcomeSection from '@/components/YearlyOutcomeSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StorySection from '@/components/StorySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import FeaturedProgramSection from '@/components/FeaturedProgramSection';
import { motion } from 'framer-motion';
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    // Add immersive welcome toast
    setTimeout(() => {
      toast("Welcome to Santaran", {
        description: "Discover the artistic journey that bridges traditions with contemporary expression",
        duration: 5000,
      });
    }, 1500);
    
    // Optional: Check if there's audio support and play ambient sounds
    const ambientAudio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-cinematic-documentary-score-2344.mp3');
    ambientAudio.volume = 0.1;
    ambientAudio.loop = true;
    
    // Create a button for users to opt-in to audio
    const audioButton = document.createElement('button');
    audioButton.innerHTML = '🔊 Experience with sound';
    audioButton.className = 'fixed bottom-4 right-4 bg-santaran-cream/90 text-santaran-teal px-4 py-2 rounded-full shadow-lg z-50 text-sm hover:bg-santaran-jade/10 transition-colors';
    audioButton.onclick = () => {
      ambientAudio.play().catch(e => console.log('Audio playback prevented:', e));
      audioButton.remove();
    };
    document.body.appendChild(audioButton);
    
    return () => {
      ambientAudio.pause();
      ambientAudio.src = '';
      if (document.body.contains(audioButton)) {
        document.body.removeChild(audioButton);
      }
    };
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-santaran-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      {/* Hero Section: Artistic introduction with symbolic visuals */}
      <HeroSection />
      
      {/* About Section: The essence and philosophy of Santaran */}
      <AboutSection />
      
      {/* Featured Program: Spotlight on a key initiative */}
      <FeaturedProgramSection />
      
      {/* Projects Gallery: Visual narrative of artistic works */}
      <ProjectsSection />
      
      {/* Subprograms: The branches of our artistic tree */}
      <SubprogramsSection />
      
      {/* Impact Metrics: The ripples of our artistic journey */}
      <YearlyOutcomeSection />
      
      {/* Origin Story: The seed that grew into Santaran */}
      <StorySection 
        title="The River's Tale"
        subtitle="Our Origin Story"
        content="Like a river finding its path through diverse landscapes, Santaran began as a gathering of artists seeking to preserve indigenous wisdom through artistic expression. From humble beginnings in 1998, we've grown into a flowing current that nourishes communities and carries the precious sediment of tradition to future generations."
        imageUrl="https://images.pexels.com/photos/2901581/pexels-photo-2901581.jpeg?auto=compress&cs=tinysrgb&w=1800"
        imagePosition="right"
        backgroundColor="bg-santaran-cream/70"
        id="our-story"
      />
      
      {/* Testimonials: Voices from our community */}
      <TestimonialsSection />
      
      {/* Contact: Join our artistic dialogue */}
      <ContactSection />
      
      <Footer />
    </motion.div>
  );
};

export default Index;