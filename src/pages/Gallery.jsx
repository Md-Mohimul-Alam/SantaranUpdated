
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Filter, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const galleryItems = [  // Painting Category
  {
    id: 1,
    title: "Environmental Harmony",
    category: "Painting",
    subcategory: "Environmental",
    image: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Rahima Khan",
    year: 2022,
    description: "An exploration of humanity's connection with nature, emphasizing balance and sustainability."
  },
  {
    id: 2,
    title: "Urban Ecology",
    category: "Painting",
    subcategory: "Urban",
    image: "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Salma Begum",
    year: 2022,
    description: "A vibrant depiction of city life intertwined with natural elements."
  },
  {
    id: 3,
    title: "Autumn Reflections",
    category: "Painting",
    subcategory: "Landscape",
    image: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Mustafa Kamal",
    year: 2023,
    description: "A serene landscape capturing the rich colors of autumn."
  },
  {
    id: 4,
    title: "Abstract Emotions",
    category: "Painting",
    subcategory: "Abstract",
    image: "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Nadia Rahman",
    year: 2021,
    description: "An abstract exploration of human emotions through color and form."
  },
  
  // Folk Art Category
  {
    id: 5,
    title: "Indigenous Patterns",
    category: "Folk Art",
    subcategory: "Traditional",
    image: "https://images.pexels.com/photos/7605913/pexels-photo-7605913.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Mohammad Ali",
    year: 2021,
    description: "Celebrating the rich patterns and motifs of indigenous craftsmanship."
  },
  {
    id: 6,
    title: "Festival Celebrations",
    category: "Folk Art",
    subcategory: "Festival",
    image: "https://images.pexels.com/photos/1536622/pexels-photo-1536622.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Community Artists",
    year: 2021,
    description: "A collaborative piece capturing the vibrant spirit of traditional festivals."
  },
  {
    id: 7,
    title: "Heritage Symbols",
    category: "Folk Art",
    subcategory: "Symbolic",
    image: "https://images.pexels.com/photos/2183577/pexels-photo-2183577.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Jamal Uddin",
    year: 2020,
    description: "An exploration of ancestral symbols and their contemporary significance."
  },
  {
    id: 8,
    title: "Rural Narratives",
    category: "Folk Art",
    subcategory: "Narrative",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Fatima Begum",
    year: 2023,
    description: "Stories of rural life told through traditional artistic techniques."
  },
  
  // Sculpture Category
  {
    id: 9,
    title: "Nature's Calling",
    category: "Sculpture",
    subcategory: "Environmental",
    image: "https://images.pexels.com/photos/134402/pexels-photo-134402.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Nusrat Jahan",
    year: 2023,
    description: "A sculptural interpretation of nature's call to humanity."
  },
  {
    id: 10,
    title: "River Spirit",
    category: "Sculpture",
    subcategory: "Elemental",
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Tania Islam",
    year: 2022,
    description: "Embodying the essence and flow of river spirits in sculptural form."
  },
  {
    id: 11,
    title: "Metal Metamorphosis",
    category: "Sculpture",
    subcategory: "Material",
    image: "https://images.pexels.com/photos/1266735/pexels-photo-1266735.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Karim Rahman",
    year: 2023,
    description: "Transformation of industrial materials into organic forms."
  },
  {
    id: 12,
    title: "Human Condition",
    category: "Sculpture",
    subcategory: "Figurative",
    image: "https://images.pexels.com/photos/3680454/pexels-photo-3680454.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Omar Faruq",
    year: 2021,
    description: "An emotional exploration of the human experience through sculptural form."
  },
  
  // Textile Art Category
  {
    id: 13,
    title: "Cultural Roots",
    category: "Textile Art",
    subcategory: "Heritage",
    image: "https://images.pexels.com/photos/7676524/pexels-photo-7676524.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Kamal Ahmed",
    year: 2020,
    description: "A textile masterpiece honoring cultural heritage and ancestral techniques."
  },
  {
    id: 14,
    title: "Woven Stories",
    category: "Textile Art",
    subcategory: "Narrative",
    image: "https://images.pexels.com/photos/6872878/pexels-photo-6872878.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Sabina Akter",
    year: 2022,
    description: "Stories and memories intricately woven into textile form."
  },
  {
    id: 15,
    title: "Modern Traditions",
    category: "Textile Art",
    subcategory: "Contemporary",
    image: "https://images.pexels.com/photos/6913135/pexels-photo-6913135.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Nazia Rahman",
    year: 2023,
    description: "A contemporary take on traditional textile techniques and patterns."
  },
  {
    id: 16,
    title: "Fiber Landscapes",
    category: "Textile Art",
    subcategory: "Landscape",
    image: "https://images.pexels.com/photos/7102469/pexels-photo-7102469.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Laila Khatun",
    year: 2022,
    description: "Natural landscapes recreated through fiber and textile techniques."
  },
  
  // Mixed Media Category
  {
    id: 17,
    title: "Traditions Reimagined",
    category: "Mixed Media",
    subcategory: "Heritage",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Faisal Rahman",
    year: 2023,
    description: "A fresh perspective on traditional art forms through mixed media experimentation."
  },
  {
    id: 18,
    title: "Digital Memories",
    category: "Mixed Media",
    subcategory: "Digital",
    image: "https://images.pexels.com/photos/2570059/pexels-photo-2570059.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Zubair Hassan",
    year: 2022,
    description: "Blending digital technology with traditional art materials."
  },
  {
    id: 19,
    title: "Material Conversations",
    category: "Mixed Media",
    subcategory: "Conceptual",
    image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Taslima Begum",
    year: 2021,
    description: "An exploration of dialogue between different materials and techniques."
  },
  {
    id: 20,
    title: "Sustainable Futures",
    category: "Mixed Media",
    subcategory: "Environmental",
    image: "https://images.pexels.com/photos/2470903/pexels-photo-2470903.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Rafiq Islam",
    year: 2023,
    description: "A commentary on sustainability through repurposed materials."
  },
  
  // Children's Art Category
  {
    id: 21,
    title: "Child's Imagination",
    category: "Children's Art",
    subcategory: "Imagination",
    image: "https://images.pexels.com/photos/8473893/pexels-photo-8473893.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Youth Program",
    year: 2023,
    description: "A vibrant collection showcasing children's unbounded imagination."
  },
  {
    id: 22,
    title: "Young Visionaries",
    category: "Children's Art",
    subcategory: "Creative",
    image: "https://images.pexels.com/photos/3933871/pexels-photo-3933871.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Kalpapuri School",
    year: 2022,
    description: "Artwork from young visionaries envisioning a brighter future."
  },
  {
    id: 23,
    title: "Playful Expressions",
    category: "Children's Art",
    subcategory: "Expression",
    image: "https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Children's Workshop",
    year: 2023,
    description: "Joyful artistic expressions from our youngest creators."
  },
  {
    id: 24,
    title: "Dream Worlds",
    category: "Children's Art",
    subcategory: "Fantasy",
    image: "https://images.pexels.com/photos/8474495/pexels-photo-8474495.jpeg?auto=compress&cs=tinysrgb&w=2000",
    artist: "Kalpapuri Program",
    year: 2022,
    description: "Fantastical worlds born from the dreams of children."
  }
];

const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))];
const subcategories = [
  "All",
  ...Array.from(new Set(galleryItems.map(item => item.subcategory).filter(Boolean)))
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [subfilter, setSubfilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [currentTab, setCurrentTab] = useState("gallery");
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef(null);
  
  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesSubcategory = subfilter === "All" || item.subcategory === subfilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.artist.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });
  
  const nextItem = () => {
    if (filteredItems.length <= 1) return;
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % filteredItems.length);
  };
  
  const prevItem = () => {
    if (filteredItems.length <= 1) return;
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };
  
  useEffect(() => {
    if (currentTab === "carousel" && filteredItems.length > 1) {
      const interval = setInterval(() => {
        nextItem();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentTab, filteredItems.length, activeIndex]);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="heading-lg text-santaran-teal mb-4">Art Gallery</h1>
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
            <p className="mt-6 text-lg max-w-2xl mx-auto">
              Explore the artistic expressions from our programs and projects, showcasing the rich 
              cultural heritage and creative innovations of our community.
            </p>
          </div>
          
          <Tabs defaultValue="gallery" value={currentTab} onValueChange={setCurrentTab} className="mb-8">
            <div className="flex justify-center">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="gallery" className="data-[state=active]:bg-santaran-teal data-[state=active]:text-white">
                  Grid View
                </TabsTrigger>
                <TabsTrigger value="carousel" className="data-[state=active]:bg-santaran-teal data-[state=active]:text-white">
                  Card Stack View
                </TabsTrigger>
              </TabsList>
            </div>
          
            <div className="mb-10">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="relative w-full md:w-1/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search artworks or artists"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-santaran-teal"
                  />
                  {searchTerm && (
                    <button 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setSearchTerm("")}
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <button 
                    className="md:hidden px-4 py-3 border border-gray-300 rounded-md flex items-center gap-2 bg-white"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter size={18} />
                    Filters
                  </button>
                  
                  <div className="hidden md:flex gap-2 overflow-x-auto pb-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => {
                          setFilter(category);
                          if (category !== "All") {
                            setSubfilter("All");
                          }
                        }}
                        className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                          filter === category 
                            ? 'bg-santaran-teal text-white' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {showFilters && (
                <div className="md:hidden flex gap-2 overflow-x-auto py-4">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => {
                        setFilter(category);
                        if (category !== "All") {
                          setSubfilter("All");
                        }
                      }}
                      className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                        filter === category 
                          ? 'bg-santaran-teal text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
              
              {filter !== "All" && (
                <div className="flex gap-2 overflow-x-auto py-4 mt-2">
                  {subcategories
                    .filter(sub => sub === "All" || galleryItems.some(item => 
                      item.category === filter && item.subcategory === sub
                    ))
                    .map(subcategory => (
                      <button
                        key={subcategory}
                        onClick={() => setSubfilter(subcategory)}
                        className={`px-3 py-1 rounded-full transition-colors whitespace-nowrap text-sm ${
                          subfilter === subcategory 
                            ? 'bg-santaran-vermilion text-white' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {subcategory}
                      </button>
                    ))
                  }
                </div>
              )}
            </div>
            
            <TabsContent value="gallery" className="outline-none">
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map(item => (
                    <div 
                      key={item.id} 
                      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative overflow-hidden aspect-square">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <span className="inline-block px-2 py-1 bg-santaran-terracotta/90 text-white text-xs rounded mb-2">
                              {item.category}
                            </span>
                            <h3 className="text-white font-display text-xl">{item.title}</h3>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-display text-lg font-semibold text-santaran-teal">{item.title}</h3>
                        <div className="flex justify-between mt-2 text-sm text-gray-600">
                          <span>{item.artist}</span>
                          <span>{item.year}</span>
                        </div>
                        {item.subcategory && (
                          <div className="mt-2">
                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                              {item.subcategory}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="heading-sm text-gray-600 mb-2">No artworks found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="carousel" className="outline-none">
              {filteredItems.length > 0 ? (
                <div className="relative h-[80vh] max-h-[800px] min-h-[500px] w-full flex items-center justify-center overflow-hidden" ref={carouselRef}>
                  <div className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[4/3]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={activeIndex}
                        custom={direction}
                        initial={{ 
                          opacity: 0,
                          x: direction > 0 ? 300 : -300,
                          rotateY: direction > 0 ? 45 : -45
                        }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          rotateY: 0,
                          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                        }}
                        exit={{ 
                          opacity: 0,
                          x: direction < 0 ? 300 : -300,
                          rotateY: direction < 0 ? 45 : -45,
                          transition: { duration: 0.4 }
                        }}
                        className="absolute inset-0 shadow-2xl rounded-2xl overflow-hidden bg-white"
                        style={{ perspective: 1000 }}
                      >
                        <div className="w-full h-full flex flex-col md:flex-row">
                          <div className="w-full md:w-7/12 h-1/2 md:h-full overflow-hidden">
                            <img 
                              src={filteredItems[activeIndex].image} 
                              alt={filteredItems[activeIndex].title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-full md:w-5/12 h-1/2 md:h-full p-6 md:p-8 flex flex-col justify-between bg-white">
                            <div>
                              <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-xs bg-santaran-terracotta/90 text-white px-2 py-1 rounded-full">
                                  {filteredItems[activeIndex].category}
                                </span>
                                {filteredItems[activeIndex].subcategory && (
                                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                    {filteredItems[activeIndex].subcategory}
                                  </span>
                                )}
                              </div>
                              <h2 className="text-2xl md:text-3xl font-display text-santaran-teal mb-3">
                                {filteredItems[activeIndex].title}
                              </h2>
                              <p className="text-gray-600 mb-6">
                                {filteredItems[activeIndex].description || "A beautiful artwork from our collection."}
                              </p>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm text-gray-600 mb-4">
                                <span><strong>Artist:</strong> {filteredItems[activeIndex].artist}</span>
                                <span><strong>Year:</strong> {filteredItems[activeIndex].year}</span>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <div className="text-xs text-gray-500">
                                  {activeIndex + 1} of {filteredItems.length}
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm" onClick={prevItem} className="rounded-full p-0 w-10 h-10">
                                    <ChevronLeft size={18} />
                                  </Button>
                                  <Button variant="outline" size="sm" onClick={nextItem} className="rounded-full p-0 w-10 h-10">
                                    <ChevronRight size={18} />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                    
                    <div className="absolute -z-10 inset-0 -bottom-3 -right-3 bg-santaran-cream/50 rounded-2xl"></div>
                    <div className="absolute -z-20 inset-0 -bottom-6 -right-6 bg-santaran-cream/30 rounded-2xl"></div>
                  </div>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                    {filteredItems.length > 1 && filteredItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > activeIndex ? 1 : -1);
                          setActiveIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeIndex 
                            ? 'bg-santaran-teal w-6' 
                            : 'bg-gray-300'
                        }`}
                        aria-label={`Go to artwork ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="heading-sm text-gray-600 mb-2">No artworks found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
      
      <style>{`
        .card-stack-container {
          perspective: 1000px;
        }
        
        .card-stack {
          position: relative;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default Gallery;