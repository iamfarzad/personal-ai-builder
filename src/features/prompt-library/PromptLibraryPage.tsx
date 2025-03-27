
import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks';
import { PromptCard } from './components';
import { PROMPT_LIBRARY_DATA } from './constants';

const PromptLibraryPage = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Show welcome toast
    toast({
      title: "Prompt Library",
      description: "Browse and use effective AI prompts",
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">Prompt Library</h1>
          <p className="text-lg text-muted-foreground mb-8">A collection of effective prompts for various AI tasks to help you get better results.</p>
          
          <Separator className="my-8" />
          
          <div className="grid gap-6">
            {PROMPT_LIBRARY_DATA.map((prompt) => (
              <PromptCard
                key={prompt.id}
                title={prompt.title}
                description={prompt.description}
                category={prompt.category}
                promptText={prompt.promptText}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PromptLibraryPage;
