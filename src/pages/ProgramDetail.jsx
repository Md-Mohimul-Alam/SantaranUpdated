import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import ArtisticArrow from '@/components/ArtisticArrow';
import { Button } from '@/components/ui/button';
import { Paintbrush, Palette, Frame, Users, Clock, MapPin, Calendar, Download, Mail, Share2, PlayCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const programsData = {
  "harith": {
    id: "harith",
    title: "Harith",
    description: "Art of environmental development focusing on ecological awareness and sustainability.",
    fullDescription: "Harith is our flagship environmental art program that explores the intersection of art and ecology. Through this initiative, we engage artists, communities, and environmental activists in creating artistic interventions that raise awareness about pressing ecological issues. The program includes installations in natural settings, workshops on sustainable art practices, and community projects that transform waste materials into compelling artworks. By using art as a medium for environmental advocacy, Harith creates emotional connections to nature that inspire meaningful action.",
    icon: "🌿",
    category: "Environmental Art",
    year: "2023-Present",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200",
      "https://images.unsplash.com/photo-1501542089326-c6030e7d9384?q=80&w=1200",
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1200"
    ],
    location: "Various locations across Bangladesh",
    team: ["Rehana Zaman", "Kamal Ahmed", "Nasreen Khan", "Environmental Artists Collective"],
    objectives: [
      "Create environmental awareness through artistic interventions",
      "Establish sustainable art practices in local communities",
      "Document ecological changes through visual narratives",
      "Foster connections between artists and environmental scientists"
    ],
    schedule: [
      {
        date: "March 15, 2023",
        title: "Workshop: Art from Recycled Materials",
        description: "A hands-on workshop teaching participants to create art pieces using recycled materials collected from local beaches."
      },
      {
        date: "June 8, 2023",
        title: "Exhibition: Nature's Voice",
        description: "A collaborative exhibition showcasing artworks that highlight the impact of climate change on local ecosystems."
      },
      {
        date: "September 22, 2023",
        title: "Community Project: River Cleanup & Art Installation",
        description: "Community-led cleanup of the Karnaphuli River, followed by an art installation created with collected waste materials."
      },
      {
        date: "December 5, 2023",
        title: "Symposium: Art as Environmental Advocacy",
        description: "A gathering of artists, environmentalists, and community leaders to discuss the role of art in environmental conservation."
      }
    ],
    resources: [
      {
        title: "Sustainable Art Techniques Guide",
        description: "A comprehensive manual for creating art with minimal environmental impact.",
        type: "PDF",
        url: "#"
      },
      {
        title: "Environmental Art Documentary",
        description: "Documentary film showcasing Harith's impact on local communities and ecosystems.",
        type: "Video",
        url: "#"
      }
    ],
    testimonials: [
      {
        name: "Dr. Fatima Rahman",
        role: "Environmental Scientist",
        quote: "Harith has succeeded where traditional advocacy often fails - it connects people emotionally to environmental issues through the universal language of art.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300"
      },
      {
        name: "Mohammad Ali",
        role: "Community Participant",
        quote: "Participating in Harith's river cleanup project changed how I see waste. Now I don't just see garbage, I see potential for creative expression and transformation.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300"
      }
    ]
  },
  "kalpapuri": {
    id: "kalpapuri",
    title: "Kalpapuri",
    description: "Related with children art and psychology, nurturing young minds through artistic exploration.",
    fullDescription: "Kalpapuri is our dedicated program for children's artistic development, focusing on the relationship between creative expression and psychological well-being. This initiative provides safe spaces for children, especially those from marginalized communities, to explore their creativity without judgment. Through age-appropriate workshops, mentorship, and exhibition opportunities, we help young artists develop technical skills while expressing their unique perspectives. Our team of artists and child psychologists collaboratively design activities that promote emotional intelligence, boost confidence, and nurture imagination.",
    icon: "👧",
    category: "Children's Art",
    year: "2021-Present",
    image: "https://images.unsplash.com/photo-1611559410629-f9602e91c236?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200",
      "https://images.unsplash.com/photo-1602975256463-2b8557d13e77?q=80&w=1200",
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200"
    ],
    location: "Chittagong & Dhaka",
    team: ["Fahmida Rahman", "Saiful Islam", "Child Psychology Unit", "Volunteer Artist Network"],
    objectives: [
      "Provide artistic outlet for children to express emotions",
      "Develop fine motor skills through creative activities",
      "Build confidence through exhibition of children's artwork",
      "Create intergenerational dialogue through collaborative projects"
    ],
    schedule: [
      {
        date: "Every Saturday",
        title: "Youth Art Workshop",
        description: "Weekly workshops for children ages 6-12, exploring different artistic mediums and techniques."
      },
      {
        date: "Bimonthly",
        title: "Teen Artist Mentorship",
        description: "One-on-one mentoring sessions for talented teenagers interested in pursuing art professionally."
      },
      {
        date: "Quarterly",
        title: "Young Artists Exhibition",
        description: "Exhibitions showcasing the work of program participants, giving children the experience of a professional gallery showing."
      }
    ],
    resources: [
      {
        title: "Children's Art Activities Guide",
        description: "Collection of age-appropriate art activities for parents and educators.",
        type: "PDF",
        url: "#"
      },
      {
        title: "Art Therapy Basics",
        description: "Introduction to using art as a therapeutic tool for children experiencing trauma or stress.",
        type: "Manual",
        url: "#"
      }
    ],
    testimonials: [
      {
        name: "Nadia Huq",
        role: "Parent",
        quote: "Since joining Kalpapuri, my daughter has become more confident and expressive. The program has given her a voice through art that she couldn't find through words.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300"
      },
      {
        name: "Arif Rahman",
        role: "Child Psychologist",
        quote: "The approach Kalpapuri takes to children's artistic development is deeply aligned with psychological research on emotional development and expression.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300"
      }
    ]
  }
};

const ProgramDetail = () => {
  const { programId } = useParams();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (programId && programsData[programId]) {
        setProgram(programsData[programId]);
      }
      setLoading(false);
    }, 500);
  }, [programId]);

  const handleJoinProgram = () => {
    toast.success(`You've successfully registered for the ${program?.title} program! Check your email for further details.`);
  };

  const handleDownloadResource = (resource) => {
    toast.success(`Downloading ${resource.title} (${resource.type})...`);
  };

  const handleShare = () => {
    if (navigator.share && program) {
      navigator.share({
        title: `Santaran Art Organization - ${program.title} Program`,
        text: program.description,
        url: window.location.href,
      })
      .catch(() => {
        toast.success("Program link copied to clipboard!");
        navigator.clipboard.writeText(window.location.href);
      });
    } else {
      toast.success("Program link copied to clipboard!");
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-santaran-cream">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, repeatType: "reverse" }
          }}
          className="w-16 h-16 border-4 border-t-santaran-vermilion border-santaran-amber rounded-full"
        />
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-santaran-cream">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl font-display mb-4">Program not found</h1>
          <p className="mb-8 text-center">The program you're looking for doesn't exist or has been moved.</p>
          <div className="flex gap-4">
            <Button onClick={() => navigate(-1)}>
              Go Back
            </Button>
            <Button variant="outline" asChild>
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-santaran-cream min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-santaran-jade/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-santaran-vermilion/10 blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <motion.span 
                className="inline-block py-1 px-4 rounded-full bg-santaran-vermilion/10 text-santaran-vermilion text-sm font-medium mb-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                {program.category} • {program.year}
              </motion.span>
              
              <AnimatedHeading 
                text={program.title}
                tag="h1"
                className="heading-xl mb-4"
                color="text-santaran-teal"
                animation="wave"
              />
              
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-santaran-vermilion to-santaran-amber mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <p className="text-xl mb-6">
                  {program.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center text-santaran-jade">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{program.year}</span>
                  </div>
                  <div className="flex items-center text-santaran-vermilion">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{program.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button onClick={handleJoinProgram}>
                    Join Program
                    <Users className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
                    View Gallery
                    <Frame className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="secondary" onClick={handleShare}>
                    Share
                    <Share2 className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <motion.div 
                className="relative aspect-square"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="artistic-card fancy-border canvas-texture h-full">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-lg shadow-lg border-2 border-santaran-jade/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-5xl">{program.icon}</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Tabs Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <AnimatedHeading 
                      text="About the Program"
                      tag="h2"
                      className="heading-md mb-6"
                      color="text-santaran-vermilion"
                      animation="typewriter"
                    />

                    <div className="prose prose-lg max-w-none">
                      <p className="mb-6 text-lg">
                        {program.fullDescription}
                      </p>

                      <div className="mt-8">
                        <h3 className="text-xl font-display font-medium text-santaran-teal mb-4">Program Objectives</h3>
                        <ul className="space-y-3">
                          {program.objectives.map((objective, index) => (
                            <motion.li 
                              key={index}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <div className="bg-santaran-vermilion/10 text-santaran-vermilion p-2 rounded-full mr-3 mt-0.5">
                                <Paintbrush className="w-4 h-4" />
                              </div>
                              <span>{objective}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <motion.div
                    className="bg-santaran-cream/50 p-6 rounded-xl border border-santaran-jade/20"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <h3 className="text-xl font-display font-medium text-santaran-teal mb-4">Program Team</h3>
                    <div className="space-y-3">
                      {program.team.map((member, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3"
                        >
                          <div className="bg-santaran-amber/10 text-santaran-amber p-2 rounded-full">
                            <Users className="w-4 h-4" />
                          </div>
                          <span>{member}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-santaran-jade/10">
                      <h3 className="text-xl font-display font-medium text-santaran-teal mb-4">Contact</h3>
                      <p className="mb-4">Interested in this program? Get in touch with our team to learn more about participation opportunities.</p>
                      <Button className="w-full" asChild>
                        <Link to="/contact">
                          Contact Program Coordinator
                          <Mail className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule">
              {program.schedule ? (
                <div>
                  <AnimatedHeading 
                    text="Program Schedule"
                    tag="h2"
                    className="heading-md mb-8"
                    color="text-santaran-teal"
                    animation="wave"
                  />
                  
                  <div className="space-y-6">
                    {program.schedule.map((event, index) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-md border border-santaran-jade/10 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center">
                          <div className="mb-4 md:mb-0 md:mr-6 flex items-center">
                            <Calendar className="text-santaran-vermilion mr-2" size={20} />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex-grow">
                            <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                            <p>{event.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-12 text-center">
                    <Button onClick={handleJoinProgram}>
                      Register for Upcoming Events
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-6">
                    <Calendar className="w-16 h-16 mx-auto text-santaran-jade/50" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No Schedule Available</h3>
                  <p className="text-gray-500 mb-8">The schedule for this program will be updated soon.</p>
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Get Notified About Updates
                    </Link>
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="resources">
              {program.resources ? (
                <div>
                  <AnimatedHeading 
                    text="Program Resources"
                    tag="h2"
                    className="heading-md mb-8"
                    color="text-santaran-teal"
                    animation="wave"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {program.resources.map((resource, index) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-md border border-santaran-amber/20 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-start">
                          <div className="mr-4">
                            {resource.type === 'PDF' && <Download className="text-santaran-vermilion" size={24} />}
                            {resource.type === 'Video' && <PlayCircle className="text-santaran-vermilion" size={24} />}
                            {resource.type !== 'PDF' && resource.type !== 'Video' && <Frame className="text-santaran-vermilion" size={24} />}
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <h4 className="text-lg font-bold mb-2">{resource.title}</h4>
                              <span className="bg-santaran-amber/10 text-santaran-amber text-xs px-2 py-1 rounded">
                                {resource.type}
                              </span>
                            </div>
                            <p className="mb-4 text-gray-600">{resource.description}</p>
                            <Button size="sm" variant="outline" onClick={() => handleDownloadResource(resource)}>
                              {resource.type === 'Video' ? 'Watch' : 'Download'}
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-6">
                    <Frame className="w-16 h-16 mx-auto text-santaran-jade/50" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No Resources Available</h3>
                  <p className="text-gray-500 mb-8">Resources for this program will be added soon.</p>
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Request Materials
                    </Link>
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="testimonials">
              {program.testimonials ? (
                <div>
                  <AnimatedHeading 
                    text="Testimonials"
                    tag="h2"
                    className="heading-md mb-8"
                    color="text-santaran-teal"
                    animation="wave"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {program.testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-md border border-santaran-jade/10 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-start">
                          <div className="mr-4 flex-shrink-0">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-16 h-16 rounded-full object-cover border-2 border-santaran-amber"
                            />
                          </div>
                          <div>
                            <p className="italic mb-4">"{testimonial.quote}"</p>
                            <div>
                              <h4 className="font-bold">{testimonial.name}</h4>
                              <p className="text-santaran-vermilion text-sm">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-12 text-center">
                    <p className="mb-6 text-lg">Want to share your experience with {program.title}?</p>
                    <Button asChild>
                      <Link to="/contact">
                        Share Your Feedback
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-6">
                    <Users className="w-16 h-16 mx-auto text-santaran-jade/50" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No Testimonials Yet</h3>
                  <p className="text-gray-500 mb-8">Be the first to share your experience with this program!</p>
                  <Button asChild>
                    <Link to="/contact">
                      Submit a Testimonial
                    </Link>
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 md:px-8 lg:px-12 bg-santaran-cream/50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedHeading 
            text="Program Gallery"
            tag="h2"
            className="heading-md text-center mb-10"
            color="text-santaran-teal"
            animation="rotate"
          />

          <div className="relative">
            <div className="overflow-hidden rounded-xl aspect-[16/9] mb-4">
              <motion.img
                key={activeImageIndex}
                src={program.gallery[activeImageIndex]}
                alt={`${program.title} gallery image ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button 
                className="p-2 rounded-full bg-white border border-santaran-jade/20 shadow-md hover:shadow-lg transition-all"
                onClick={() => setActiveImageIndex((prev) => (prev === 0 ? program.gallery.length - 1 : prev - 1))}
                aria-label="Previous image"
              >
                <ArtisticArrow direction="left" size="sm" />
              </button>
              
              <div className="flex gap-2">
                {program.gallery.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeImageIndex ? 'bg-santaran-vermilion scale-150' : 'bg-santaran-jade/40'
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                className="p-2 rounded-full bg-white border border-santaran-jade/20 shadow-md hover:shadow-lg transition-all"
                onClick={() => setActiveImageIndex((prev) => (prev === program.gallery.length - 1 ? 0 : prev + 1))}
                aria-label="Next image"
              >
                <ArtisticArrow direction="right" size="sm" />
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link to="/gallery">
                View Full Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - If Available */}
      {program.faq && (
        <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
          <div className="container mx-auto max-w-3xl">
            <AnimatedHeading 
              text="Frequently Asked Questions"
              tag="h2"
              className="heading-md text-center mb-10"
              color="text-santaran-teal"
              animation="wave"
            />
            
            <div className="space-y-4">
              {program.faq.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-santaran-cream/40 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                  <p>{item.answer}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="mb-4">Have more questions about this program?</p>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  Ask Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Related Programs */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-santaran-cream/20">
        <div className="container mx-auto max-w-6xl">
          <AnimatedHeading 
            text="Explore Other Programs"
            tag="h2"
            className="heading-md text-center mb-10"
            color="text-santaran-teal"
            animation="wave"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.values(programsData)
              .filter(p => p.id !== program.id)
              .slice(0, 3)
              .map(p => (
                <Link to={`/programs/${p.id}`} key={p.id}>
                  <motion.div 
                    className="relative overflow-hidden rounded-xl group cursor-pointer h-64"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="h-full overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-medium py-1 px-2 rounded-full bg-santaran-jade text-white mb-2 inline-block">
                        {p.category}
                      </span>
                      <h3 className="text-white text-xl font-display">{p.title}</h3>
                      <p className="text-white/80 text-sm line-clamp-2 mt-1">{p.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>

          <div className="text-center mt-10">
            <Button onClick={() => navigate('/programs')}>
              View All Programs
              <motion.div
                className="ml-2"
                animate={{ 
                  x: [0, 5, 0],
                  rotate: [-5, 5, -5, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  times: [0, 0.2, 1]
                }}
              >
                <Paintbrush className="w-4 h-4 text-white" />
              </motion.div>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramDetail;
