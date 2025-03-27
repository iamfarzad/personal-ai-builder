
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  MasterclassHero, 
  TableOfContents, 
  BasicsOfAISection, 
  PromptEngineeringSection, 
  UseCasesSection, 
  CallToActionSection 
} from '@/components/ai-masterclass';

const AIMasterclass = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Show welcome toast
    toast({
      title: "Welcome to the AI Masterclass",
      description: "Scroll down to explore everything about AI and prompt engineering",
      duration: 4000,
    });
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent -z-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent -z-10 rounded-full blur-3xl" />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <MasterclassHero />
        
        {/* Table of Contents */}
        <TableOfContents />
        
        {/* Main Content Sections */}
        <div className="container max-w-4xl mx-auto px-4 py-12">
          {/* Basics of AI Models & Tools */}
          <BasicsOfAISection />
          
          <Separator className="my-16" />
          
          {/* Prompt Engineering Section */}
          <PromptEngineeringSection />
          
          <Separator className="my-16" />
          
          {/* Use Cases Section */}
          <UseCasesSection />
          
          {/* Call To Action */}
          <CallToActionSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIMasterclass;
