
import { useEffect, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { GlossarySection } from './components';
import { GLOSSARY_DATA } from './constants';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const AIGlossaryPage = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id.startsWith('section-')) {
              setActiveSection(id.replace('section-', ''));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[id^="section-"]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  
  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Show welcome toast
    toast({
      title: "AI Glossary",
      description: "Learn AI terminology and concepts",
      duration: 4000,
    });
  }, [toast]);

  const scrollToSection = (letter: string) => {
    const element = document.getElementById(`section-${letter.toLowerCase()}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-primary/5 to-transparent -z-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent -z-10 rounded-full blur-3xl" />
      
      <main className="flex-grow">
        <div className="container max-w-5xl mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">AI Glossary</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of AI terms and concepts to help you navigate the world of artificial intelligence.
            </p>
          </motion.div>
          
          {/* Alphabet navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10 sticky top-20 z-10 py-3 backdrop-blur-sm bg-background/80 rounded-lg border"
          >
            {Object.keys(GLOSSARY_DATA).map((letter) => (
              <Button 
                key={letter}
                variant={activeSection === letter.toLowerCase() ? "default" : "ghost"}
                size="sm"
                className="w-10 h-10 p-0 rounded-full font-medium"
                onClick={() => scrollToSection(letter)}
              >
                {letter}
              </Button>
            ))}
          </motion.div>
          
          <Separator className="my-8" />
          
          <div className="space-y-12">
            {Object.entries(GLOSSARY_DATA).map(([letter, items]) => (
              <GlossarySection 
                key={letter}
                letter={letter} 
                items={items} 
              />
            ))}
          </div>
        </div>
      </main>
      
      {/* Scroll to top button */}
      <motion.div
        className="fixed right-6 bottom-6 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? 'auto' : 'none'
        }}
        transition={{ duration: 0.2 }}
      >
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full h-12 w-12 shadow-lg"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default AIGlossaryPage;
