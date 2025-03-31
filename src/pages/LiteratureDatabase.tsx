
import { useEffect } from 'react';
import { useToast } from '@/hooks';
import { LiteraturePage } from '@/components/literature-database';

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

  return <LiteraturePage />;
};

export default LiteratureDatabase;
