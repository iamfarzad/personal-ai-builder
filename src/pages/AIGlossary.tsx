
import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const AIGlossary = () => {
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
            <div>
              <h2 className="text-2xl font-semibold mb-4">A</h2>
              <div className="grid gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Artificial Intelligence (AI)</h3>
                  <p className="text-muted-foreground">The simulation of human intelligence processes by machines, especially computer systems.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Attention Mechanism</h3>
                  <p className="text-muted-foreground">A technique that mimics cognitive attention, allowing models to focus on specific parts of the input when generating output.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">L</h2>
              <div className="grid gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Large Language Model (LLM)</h3>
                  <p className="text-muted-foreground">A type of AI model trained on vast amounts of text data, capable of understanding and generating human-like text.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Language Understanding</h3>
                  <p className="text-muted-foreground">The ability of AI systems to comprehend and interpret human language in a meaningful way.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">P</h2>
              <div className="grid gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Prompt Engineering</h3>
                  <p className="text-muted-foreground">The process of designing and refining input prompts to elicit desired outputs from AI models.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold">Parameters</h3>
                  <p className="text-muted-foreground">Variables within a model that are learned during training and determine how input is transformed into output.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIGlossary;
