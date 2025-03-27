
import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { GlossarySection } from './components';
import { GLOSSARY_DATA } from './constants';

const AIGlossaryPage = () => {
  const { toast } = useToast();
  
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

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent -z-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent -z-10 rounded-full blur-3xl" />
      
      <main className="flex-grow">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">AI Glossary</h1>
          <p className="text-lg text-muted-foreground mb-8">A comprehensive glossary of AI terms and concepts to help you navigate the world of artificial intelligence.</p>
          
          <Separator className="my-8" />
          
          <div className="grid gap-8">
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
    </div>
  );
};

export default AIGlossaryPage;
