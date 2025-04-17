
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Circle, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navbarVariants = {
    transparent: { 
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      height: "80px",
      y: 0
    },
    solid: { 
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      height: "70px",
      backdropFilter: "blur(10px)",
      y: 0
    },
    hidden: {
      y: "-100%"
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: i * 0.1, duration: 0.5 } 
    }),
    hover: { 
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 } 
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all`}
      variants={navbarVariants}
      initial="transparent"
      animate={isScrolled ? "solid" : "transparent"}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-10">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="absolute -inset-2 bg-gradient-to-r from-santaran-terracotta to-santaran-teal opacity-30 blur-md rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }} 
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 100 100" 
              className="fill-santaran-terracotta"
            >
              <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,20 C33.4,20 20,33.4 20,50 C20,66.6 33.4,80 50,80 C66.6,80 80,66.6 80,50 C80,33.4 66.6,20 50,20 Z" />
            </svg>
          </motion.div>
          
          <div className="flex flex-col">
            <motion.span 
              className="font-display text-2xl font-bold text-santaran-terracotta"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Santaran
            </motion.span>
            <motion.span 
              className="font-display text-sm text-santaran-teal -mt-1"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Art Organization
            </motion.span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/exhibitions", label: "Exhibitions" },
            { path: "/gallery", label: "Gallery" },
            { path: "/programs", label: "Programs" },
            { path: "/#contact", label: "Contact" }
          ].map((item, i) => (
            <motion.div
              key={item.path}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                to={item.path} 
                className={`relative px-4 py-2 text-lg font-medium transition-colors overflow-hidden group ${
                  isActive(item.path) 
                    ? 'text-santaran-terracotta' 
                    : isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                {isActive(item.path) && (
                  <motion.span 
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-santaran-terracotta"
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <span className="relative z-10">{item.label}</span>
                
                <span className="absolute inset-0 bg-santaran-teal/10 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          ))}
          
          <motion.a 
            href="#donate" 
            className="relative ml-4 px-6 py-2 bg-santaran-terracotta text-white rounded-full overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 w-full h-full bg-santaran-teal transform scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100" />
            <span className="relative font-medium z-10">Support Us</span>
          </motion.a>
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-santaran-teal p-2"
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 top-[70px] bg-white/95 backdrop-blur-lg z-40 flex flex-col"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-10 right-10 text-santaran-terracotta opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <Circle size={100} strokeWidth={1} />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-20 left-10 text-santaran-teal opacity-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <Circle size={80} strokeWidth={1} />
            </motion.div>
            
            <motion.div 
              className="absolute top-40 left-10 text-santaran-gold opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Sun size={40} />
            </motion.div>
            
            <div className="flex-1 flex flex-col justify-center items-center space-y-6 px-4">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/exhibitions", label: "Exhibitions" },
                { path: "/gallery", label: "Gallery" },
                { path: "/programs", label: "Programs" },
                { path: "/#contact", label: "Contact" }
              ].map((item, i) => (
                <motion.div
                  key={item.path}
                  custom={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link 
                    to={item.path} 
                    className={`text-2xl font-display font-medium ${
                      isActive(item.path) 
                        ? 'text-santaran-terracotta' 
                        : 'text-gray-800'
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                    
                    {isActive(item.path) && (
                      <motion.div 
                        className="mt-1 h-0.5 bg-santaran-terracotta mx-auto" 
                        layoutId="mobileActiveNavIndicator"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              <motion.a 
                href="#donate" 
                className="mt-8 bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white px-8 py-3 rounded-full transition-colors text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                onClick={toggleMobileMenu}
              >
                Support Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;