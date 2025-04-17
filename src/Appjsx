
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Exhibitions from '@/pages/Exhibitions';
import Gallery from '@/pages/Gallery';
import Programs from '@/pages/Programs';
import ProgramDetail from '@/pages/ProgramDetail';
import NotFound from '@/pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import './App.css';
import './components/exhibition/exhibition.css';

function App() {
  return (
    <div className="app-container">
      <Suspense 
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-santaran-cream">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-santaran-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-santaran-teal text-lg">Loading...</p>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:programId" element={<ProgramDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  );
}

export default App;