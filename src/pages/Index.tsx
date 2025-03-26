
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LevelSection from '@/components/LevelSection';
import Footer from '@/components/Footer';
import BasicSteps from '@/components/basic/BasicSteps';
import IntermediateSteps from '@/components/intermediate/IntermediateSteps';
import AdvancedSteps from '@/components/advanced/AdvancedSteps';
import CallToAction from '@/components/CallToAction';
import PlatformsBanner from '@/components/PlatformsBanner';

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
        
        <PlatformsBanner />
        
        <LevelSection
          id="basic"
          title="Basic (Beginner Level)"
          subtitle="For users with beginner technical skills. Focus on using pre-built LLM services and simple tools to create a personal or small business AI assistant with minimal coding."
          level="Basic"
        >
          <BasicSteps />
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
