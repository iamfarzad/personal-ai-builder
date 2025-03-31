
import { useEffect } from 'react';
import { useToast } from '@/hooks';

const LiteratureDatabase = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Show welcome toast
    toast({
      title: "Literature Database",
      description: "Explore our curated AI literature collection",
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">AI Literature Database</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our comprehensive collection of research papers, books, and articles on artificial intelligence
            and its applications in various business domains.
          </p>
          
          {/* Literature database content can be added here */}
          <div className="py-8 text-center">
            <p className="text-xl">Content coming soon...</p>
            <p className="text-muted-foreground mt-2">
              We're building a comprehensive library of AI literature for business. Check back soon!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LiteratureDatabase;
