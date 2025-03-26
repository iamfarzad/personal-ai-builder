
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LevelSection from '@/components/LevelSection';
import Footer from '@/components/Footer';
import BasicSteps from '@/components/basic/BasicSteps';
import IntermediateSteps from '@/components/intermediate/IntermediateSteps';
import AdvancedSteps from '@/components/advanced/AdvancedSteps';
import CallToAction from '@/components/CallToAction';
import PlatformsBanner from '@/components/PlatformsBanner';
import LLMPlatformsBanner from '@/components/LLMPlatformsBanner';
import LLMFrameworksBanner from '@/components/LLMFrameworksBanner';
import BasicStepsWithResources from '@/components/basic/BasicStepsWithResources';

const Index = () => {
  // Animate elements when they come into view
  useEffect(() => {
    // Optional: Add scroll-based animations
    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container py-2 flex justify-center">
          <Link 
            to="/resources" 
            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1"
          >
            New to AI development? Check our beginner resources &rarr;
          </Link>
        </div>
        
        <PlatformsBanner />
        <LLMPlatformsBanner />
        <LLMFrameworksBanner />
        
        <LevelSection
          id="basic"
          title="Basic (Beginner Level)"
          subtitle="For users with beginner technical skills. Focus on using pre-built LLM services and simple tools to create a personal or small business AI assistant with minimal coding."
          level="Basic"
        >
          <BasicStepsWithResources />
        </LevelSection>
        
        <LevelSection
          id="intermediate"
          title="Intermediate Level"
          subtitle="For those with some programming experience. Build more customized AI tools or business automations by coding with APIs, using dev tools, and possibly light fine-tuning."
          level="Intermediate"
          className="bg-pattern-light"
        >
          <IntermediateSteps />
        </LevelSection>
        
        <LevelSection
          id="advanced"
          title="Advanced Level"
          subtitle="For advanced developers or organizations. This involves deep integration of AI into products or business processes, custom model fine-tuning, multi-modal interfaces, and rigorous deployment considerations."
          level="Advanced"
        >
          <AdvancedSteps />
        </LevelSection>
        
        {/* Call to Action */}
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
