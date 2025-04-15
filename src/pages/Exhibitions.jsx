import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InfoIcon, FilterIcon, CheckIcon, ArrowLeftIcon, ArrowRightIcon, VolumeIcon, Volume2Icon } from 'lucide-react';
import ExhibitionDetailModal from '@/components/exhibition/ExhibitionDetailModal';
import ExhibitionCard from '@/components/exhibition/ExhibitionCard';
import FeaturedExhibition from '@/components/exhibition/FeaturedExhibition';
import { ExhibitionItem, ExhibitionCategory } from '@/types/exhibition';
import { ScrollArea } from "@/components/ui/scroll-area";

const exhibitions: ExhibitionCategory[] = [
  {
    category: "current",
    items: [
      {
        id: "ex1",
        title: "Echoes of the Land",
        subtitle: "Environmental Art Exhibition",
        date: "May 15 - July 30, 2023",
        location: "Santaran Gallery, Chittagong",
        image: "https://images.pexels.com/photos/5207224/pexels-photo-5207224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "An immersive exhibition exploring humanity's relationship with nature through diverse media. The exhibition features installations, paintings, and sculptures that reflect on ecological balance, sustainability, and indigenous knowledge of environmental preservation. Visitors will experience art that challenges our understanding of our place in the natural world and suggests pathways to a more harmonious coexistence with our planet.",
        curator: "Dr. Rina Ahmed",
        artists: ["Zahid Hassan", "Mariam Khan", "Tanvir Rahman", "Fariha Zabin", "Arif Chowdhury"],
        additionalImages: [
          "https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/262034/pexels-photo-262034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        tags: ["environmental", "multimedia", "contemporary", "sustainability"],
        openingHours: "10:00 AM - 6:00 PM, Tuesday - Sunday",
        ticketPrice: "৳300 (Free for students)",
        upcomingTours: [
          { date: "June 12, 2023", time: "3:00 PM", guide: "Curator's Tour with Dr. Rina Ahmed" },
          { date: "June 25, 2023", time: "11:00 AM", guide: "Artist-led Tour with Zahid Hassan" },
          { date: "July 8, 2023", time: "2:00 PM", guide: "Environmental Themes Tour" }
        ],
        liveEvents: [
          { name: "Artist Talk: Connecting with Nature", date: "June 15, 2023", time: "4:30 PM" },
          { name: "Workshop: Environmental Art Techniques", date: "June 22, 2023", time: "2:00 PM" },
          { name: "Panel Discussion: Art and Climate Action", date: "July 5, 2023", time: "5:00 PM" }
        ],
        featured: true
      },
      {
        id: "ex2",
        title: "Folk Traditions Reimagined",
        subtitle: "Contemporary Folk Art",
        date: "June 5 - August 15, 2023",
        location: "Bengal Arts Foundation, Dhaka",
        image: "https://images.pexels.com/photos/2570059/pexels-photo-2570059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Contemporary artists reinterpret traditional folk art motifs in a celebration of cultural heritage. This exhibition bridges the gap between traditional craft practices and contemporary artistic expressions, showcasing how Bengali folk traditions continue to inspire and evolve in the modern art world. The works on display demonstrate the living nature of cultural heritage and the dynamic ways artists engage with their roots.",
        curator: "Farhana Begum",
        artists: ["Iqbal Ahmed", "Nusrat Jahan", "Rokeya Sultana", "Mohammad Rafiq", "Nasreen Begum"],
        additionalImages: [
          "https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/3094544/pexels-photo-3094544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/2570057/pexels-photo-2570057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/2570056/pexels-photo-2570056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        tags: ["folk art", "heritage", "traditional", "contemporary"],
        openingHours: "11:00 AM - 7:00 PM, Daily",
        ticketPrice: "৳250 (Free for members)",
        upcomingTours: [
          { date: "June 16, 2023", time: "2:00 PM", guide: "Folk Art History Tour with Farhana Begum" },
          { date: "July 8, 2023", time: "3:30 PM", guide: "Artist's Perspective Tour with Nusrat Jahan" }
        ],
        liveEvents: [
          { name: "Folk Music Performance", date: "June 20, 2023", time: "5:00 PM" },
          { name: "Traditional Craft Workshop", date: "July 5, 2023", time: "1:00 PM" }
        ]
      },
      {
        id: "ex3",
        title: "Sacred Geometries",
        subtitle: "Mathematical Art",
        date: "May 20 - July 10, 2023",
        location: "Modern Art Museum, Dhaka",
        image: "https://images.pexels.com/photos/1575223970966-76ae61ee7838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Exploring the intersection of mathematics, spirituality, and visual arts through geometric patterns and forms. This exhibition examines how artists throughout history have used mathematical principles to create works of profound beauty and spiritual significance. From ancient Islamic geometric patterns to contemporary digital art, Sacred Geometries reveals the universal language of mathematical harmony.",
        curator: "Dr. Ahmed Rahman",
        artists: ["Salma Khan", "Ibrahim Khondokar", "Jasmine Akter", "Mohammad Salam"],
        additionalImages: [
          "https://images.pexels.com/photos/1565106430482-8f6e74349ca1.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1507646288207-3c28368a712e.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        tags: ["geometric", "mathematics", "spiritual", "contemporary"],
        openingHours: "9:00 AM - 5:00 PM, Wednesday - Monday",
        ticketPrice: "৳200",
        upcomingTours: [
          { date: "June 5, 2023", time: "11:00 AM", guide: "Mathematics in Art Tour" },
          { date: "June 19, 2023", time: "3:00 PM", guide: "Spiritual Symbolism Tour" }
        ]
      }
    ]
  },
  {
    category: "upcoming",
    items: [
      {
        id: "ex4",
        title: "Karnaphuli Folk Triennial",
        subtitle: "Celebrating Folk Arts & Crafts",
        date: "September 10 - December 15, 2023",
        location: "Multiple venues, Chittagong",
        image: "https://images.pexels.com/photos/1473177104440-ffee2f376098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "The flagship triennial event showcasing traditional folk arts and crafts from across Bangladesh. This major cultural celebration brings together artisans, performers, and scholars from throughout the country to showcase the rich diversity of Bangladesh's living heritage. Spanning multiple venues throughout Chittagong, the Triennial includes exhibitions, performances, workshops, and community events that highlight the vibrancy of folk traditions.",
        curator: "Kabir Uddin",
        artists: ["Multiple artists from across Bangladesh"],
        additionalImages: [
          "https://images.pexels.com/photos/1466442929976-97f336a657be.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1588512285341-c481fb6de19d.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        tags: ["triennial", "folk arts", "crafts", "festival"],
        openingHours: "Varies by venue",
        ticketPrice: "Festival Pass: ৳800, Day Pass: ৳300",
        upcomingTours: [
          { date: "September 15, 2023", time: "10:00 AM", guide: "Festival Opening Tour" },
          { date: "October 5, 2023", time: "2:00 PM", guide: "Craft Techniques Tour" }
        ]
      },
      {
        id: "ex5",
        title: "Digital Narratives",
        subtitle: "New Media Art Exhibition",
        date: "October 5 - November 30, 2023",
        location: "Digital Art Space, Dhaka",
        image: "https://images.pexels.com/photos/1550745165-9bc0b252726f.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Exploring the intersection of traditional storytelling and digital technologies. This forward-looking exhibition examines how digital artists are using new technologies to reimagine storytelling traditions. Through interactive installations, virtual reality experiences, and multimedia presentations, Digital Narratives invites visitors to experience the evolving relationship between narrative, technology, and cultural identity.",
        curator: "Zaid Rahman",
        artists: ["Tanzia Ahmed", "Rafiq Islam", "Digital Art Collective", "Sohel Khan", "Priya Amin"],
        additionalImages: [
          "https://images.pexels.com/photos/1513364776144-60967b0f800f.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1605810230434-7631ac76ec81.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        tags: ["digital", "new media", "interactive", "storytelling"],
        openingHours: "12:00 PM - 8:00 PM, Tuesday - Sunday",
        ticketPrice: "৳350 (Includes VR experience)",
        upcomingTours: [
          { date: "October 12, 2023", time: "4:00 PM", guide: "Digital Art Introduction Tour" },
          { date: "November 2, 2023", time: "6:00 PM", guide: "Technology and Tradition Tour" }
        ]
      },
      {
        id: "ex6",
        title: "Rivers of Bangladesh",
        subtitle: "Photography Exhibition",
        date: "November 15, 2023 - January 20, 2024",
        location: "River Heritage Museum, Barisal",
        image: "https://images.pexels.com/photos/1506126661-9677cfb33af3.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "A comprehensive photographic journey through the major river systems of Bangladesh. This exhibition documents the cultural, economic, and ecological significance of Bangladesh's river networks. Through stunning photography and multimedia presentations, visitors will gain insight into the lives of river communities, the challenges of climate change, and the timeless relationship between the people of Bangladesh and their waterways.",
        curator: "Nasreen Jahan",
        artists: ["Kamal Ahmed", "Sabina Yasmin", "River Conservation Photographers Collective"],
        additionalImages: [
          "https://images.pexels.com/photos/1536146021566-627ce3c4d813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1444492133935-ee28b719e3ba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        tags: ["photography", "rivers", "ecology", "documentary"],
        openingHours: "10:00 AM - 6:00 PM, Wednesday - Monday",
        ticketPrice: "৳200",
        upcomingTours: [
          { date: "November 20, 2023", time: "11:00 AM", guide: "Photography Techniques Tour" },
          { date: "December 15, 2023", time: "3:00 PM", guide: "Ecological Insights Tour" }
        ]
      }
    ]
  },
  {
    category: "past",
    items: [
      {
        id: "ex7",
        title: "Children's Art Festival",
        subtitle: "Kalpapuri Annual Exhibition",
        date: "January 15 - February 28, 2023",
        location: "Santaran Art Center, Chittagong",
        image: "https://images.pexels.com/photos/1551038247-3d9af20df552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Celebrating the creativity and imagination of young artists from the Kalpapuri program. This joyful exhibition showcased artworks created by children aged 6-14 who participated in Santaran's year-long Kalpapuri arts education program. Their fresh perspectives and uninhibited creativity resulted in vibrant works that addressed themes of family, nature, dreams, and community.",
        curator: "Amina Khatun",
        artists: ["Young artists from Kalpapuri program"],
        additionalImages: [
          "https://images.pexels.com/photos/1555009433-3039e19eb354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1607453998774-d533f65dac99.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        tags: ["children", "education", "community", "kalpapuri"]
      },
      {
        id: "ex8",
        title: "Indigenous Knowledge Systems",
        subtitle: "Research Exhibition",
        date: "November 10 - December 20, 2022",
        location: "National Museum, Dhaka",
        image: "https://images.pexels.com/photos/1524230572899-a752b3835840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Documenting and preserving indigenous knowledge through artistic research and collaboration. This ground-breaking exhibition was the culmination of a three-year research project that brought together artists, anthropologists, and indigenous knowledge keepers from the Chittagong Hill Tracts. Through art, artifacts, and documentation, the exhibition preserved and shared traditional knowledge about medicine, agriculture, craft, and spirituality.",
        curator: "Dr. Jamal Hossain",
        artists: ["Collaborative research team", "Hill Tracts Artisan Collective", "Santaran Research Unit"],
        additionalImages: [
          "https://images.pexels.com/photos/1530512112057-7607c9865916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1566230724840-2e2729cdb08a.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        tags: ["indigenous", "research", "documentation", "knowledge systems"]
      },
      {
        id: "ex9",
        title: "Textile Traditions",
        subtitle: "Historical Textile Arts",
        date: "August 5 - October 15, 2022",
        location: "Textile Museum, Dhaka",
        image: "https://images.pexels.com/photos/1528459061998-56fd57ad86e3.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "A comprehensive exhibition on the rich textile heritage of Bangladesh from ancient to modern times. This exhibition traced the evolution of Bangladesh's celebrated textile traditions through historical artifacts, contemporary works, and interactive displays. From ancient Jamdani techniques to modern innovations, Textile Traditions honored the skilled artisans who have maintained and evolved these practices over centuries.",
        curator: "Farida Rahman",
        artists: ["Historical collections", "Contemporary textile artists", "Jamdani Weavers Collective"],
        additionalImages: [
          "https://images.pexels.com/photos/1608826021584-bfb6c5288631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1541974669596-79e9a6a5d6dd.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ],
        tags: ["textiles", "heritage", "jamdani", "craft"]
      }
    ]
  }
];

const Exhibitions = () => {
  const [activeTab, setActiveTab] = useState<string>("current");
  const [selectedExhibition, setSelectedExhibition] = useState<ExhibitionItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isMuted, setIsMuted] = useState(true);
  const [currentRoom, setCurrentRoom] = useState(0);
  
  const galleryRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filteredExhibitions = exhibitions.find(category => category.category === activeTab)?.items || [];
  
  const allTags = Array.from(new Set(
    filteredExhibitions.flatMap(exhibition => exhibition.tags)
  ));
  
  const exhibitionsToShow = selectedTags.length > 0 
    ? filteredExhibitions.filter(ex => 
        ex.tags.some(tag => selectedTags.includes(tag))
      )
    : filteredExhibitions;
  
  const featuredExhibition = filteredExhibitions.find(ex => ex.featured);

  useEffect(() => {
    audioRef.current = new Audio('/ambient-gallery-sounds.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {
          console.log("Audio play prevented by browser policy");
        });
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  const handleExhibitionClick = (exhibition: ExhibitionItem) => {
    setSelectedExhibition(exhibition);
    setIsModalOpen(true);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  const ROOMS_COUNT = Math.ceil(exhibitionsToShow.length / 3);
  
  const navigateRoom = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentRoom < ROOMS_COUNT - 1) {
      setCurrentRoom(currentRoom + 1);
    } else if (direction === 'prev' && currentRoom > 0) {
      setCurrentRoom(currentRoom - 1);
    }
    
    if (galleryRef.current) {
      const roomWidth = galleryRef.current.clientWidth;
      galleryRef.current.scrollTo({
        left: (direction === 'next' ? currentRoom + 1 : currentRoom - 1) * roomWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f2]">
      <Navbar />
      
      <section className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Exhibition hall with artwork displays"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-5"
            >
              Virtual Exhibition
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            >
              Step into our digital gallery and explore the artwork as if you were walking 
              through an exhibition hall. Move between rooms and discover beautiful pieces.
            </motion.p>
          </div>
        </div>
      </section>
      
      <div className="sticky top-0 z-30 bg-santaran-cream py-4 shadow-md backdrop-blur-md bg-white/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <InfoIcon size={20} className="text-santaran-vermilion mr-2" />
              <span className="text-sm">Visiting hours: Tuesday to Sunday, 10 AM - 6 PM. Free admission for students and members.</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Button size="sm" variant="outline" onClick={toggleAudio}>
                {isMuted ? <VolumeIcon size={16} /> : <Volume2Icon size={16} />}
                {isMuted ? "Enable Sound" : "Mute Sound"}
              </Button>
              
              <Button size="sm" variant="outline">
                Plan Your Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="current" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <TabsList className="border border-gray-200 bg-transparent rounded-full overflow-hidden">
              <TabsTrigger 
                value="current" 
                className="data-[state=active]:bg-santaran-teal data-[state=active]:text-white px-8 py-2 rounded-full"
              >
                Current
              </TabsTrigger>
              <TabsTrigger 
                value="upcoming"
                className="data-[state=active]:bg-santaran-teal data-[state=active]:text-white px-8 py-2 rounded-full"
              >
                Upcoming
              </TabsTrigger>
              <TabsTrigger 
                value="past"
                className="data-[state=active]:bg-santaran-teal data-[state=active]:text-white px-8 py-2 rounded-full"
              >
                Past
              </TabsTrigger>
            </TabsList>
            
            <Accordion type="single" collapsible className="w-full md:w-auto">
              <AccordionItem value="filter" className="border-none">
                <AccordionTrigger className="py-2 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm">
                  <div className="flex items-center">
                    <FilterIcon size={16} className="mr-2" /> 
                    Filter Exhibitions
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-3 flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 text-xs rounded-full flex items-center transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-santaran-jade text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {selectedTags.includes(tag) && (
                          <CheckIcon size={12} className="mr-1" />
                        )}
                        {tag}
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {featuredExhibition && (
            <TabsContent value="current" className="mt-0">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <FeaturedExhibition 
                  exhibition={featuredExhibition}
                  onClick={() => handleExhibitionClick(featuredExhibition)}
                />
              </motion.div>
            </TabsContent>
          )}
          
          <TabsContent value={activeTab} className="mt-0">
            {exhibitionsToShow.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500">No exhibitions match your filter criteria.</p>
                <Button 
                  variant="link" 
                  onClick={() => setSelectedTags([])}
                  className="mt-2"
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="virtual-gallery-container">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f8f6f2]/0 to-[#f8f6f2] pointer-events-none z-20"></div>
                  <div className="absolute inset-0 bg-[url('/wall-texture.png')] opacity-10 mix-blend-overlay pointer-events-none z-0"></div>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full bg-white/70 backdrop-blur-sm hover:bg-white"
                      onClick={() => navigateRoom('prev')}
                      disabled={currentRoom === 0}
                    >
                      <ArrowLeftIcon />
                    </Button>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full bg-white/70 backdrop-blur-sm hover:bg-white"
                      onClick={() => navigateRoom('next')}
                      disabled={currentRoom === ROOMS_COUNT - 1}
                    >
                      <ArrowRightIcon />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {Array.from({ length: ROOMS_COUNT }).map((_, idx) => (
                      <button 
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentRoom === idx ? 'bg-santaran-jade scale-125' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        onClick={() => {
                          setCurrentRoom(idx);
                          if (galleryRef.current) {
                            const roomWidth = galleryRef.current.clientWidth;
                            galleryRef.current.scrollTo({
                              left: idx * roomWidth,
                              behavior: 'smooth'
                            });
                          }
                        }}
                      />
                    ))}
                  </div>
                  <div 
                    ref={galleryRef}
                    className="gallery-scroll-area overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none' }}
                  >
                    <div className="flex w-max">
                      {Array.from({ length: ROOMS_COUNT }).map((_, roomIdx) => (
                        <div 
                          key={roomIdx}
                          className="virtual-room h-[80vh] min-h-[600px] snap-center"
                          style={{ width: '100vw', maxWidth: '100%' }}
                        >
                          <div className="room-content h-full relative p-8 md:p-12 flex items-center">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-sm shadow-sm">
                              Room {roomIdx + 1}
                            </div>
                            <div className="gallery-wall w-full h-full flex justify-center items-center">
                              <div className="gallery-display grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl mx-auto">
                                {exhibitionsToShow.slice(roomIdx * 3, (roomIdx + 1) * 3).map((exhibition, idx) => (
                                  <ExhibitionCard 
                                    key={exhibition.id} 
                                    exhibition={exhibition}
                                    onClick={() => handleExhibitionClick(exhibition)}
                                    index={idx}
                                    style={{
                                      height: '100%',
                                      minHeight: '400px',
                                      maxHeight: '70vh'
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <section className="bg-gradient-to-r from-santaran-cream/50 to-white py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-santaran-indigo">Location & Hours</h3>
              <p className="mb-3">Santaran Gallery<br />123 Agrabad Commercial Area<br />Chittagong, Bangladesh</p>
              <p>Tuesday - Sunday: 10 AM - 6 PM<br />Monday: Closed</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-santaran-indigo">Admission</h3>
              <p className="mb-3">General: ৳300<br />Students: Free (with ID)<br />Members: Free<br />Children under 12: Free</p>
              <p>Special exhibitions may have separate fees.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-santaran-indigo">Guided Tours</h3>
              <p className="mb-3">Public tours: Every Saturday at 11 AM<br />Group tours: By appointment</p>
              <p>For school visits and group bookings, please contact us at info@santaran.org</p>
            </div>
          </div>
        </div>
      </section>
      
      {selectedExhibition && (
        <ExhibitionDetailModal 
          exhibition={selectedExhibition}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      
      <style>{`
        /* Scrollbar styling */
        .gallery-scroll-area::-webkit-scrollbar {
          display: none;
        }
        
        /* Virtual room perspective and transition effects */
        .virtual-room {
          perspective: 1500px;
          transform-style: preserve-3d;
        }
        
        .exhibition-frame {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .exhibition-frame:hover {
          transform: translateZ(10px);
        }
        
        .exhibition-artwork {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1), 0 1px 8px rgba(0,0,0,0.1);
        }
      `}</style>
      
      <Footer />
    </div>
  );
};

export default Exhibitions;
