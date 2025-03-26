
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LevelSection from '@/components/LevelSection';
import StepCard from '@/components/StepCard';
import Footer from '@/components/Footer';

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
        
        <LevelSection
          id="basic"
          title="Basic (Beginner Level)"
          subtitle="For users with beginner technical skills. Focus on using pre-built LLM services and simple tools to create a personal or small business AI assistant with minimal coding."
          level="Basic"
        >
          <div className="space-y-6">
            <StepCard number={1} title="Define your AI's purpose and use case">
              Decide what you want your AI to do – for example, a personal writing assistant, a customer 
              support chatbot, an idea generator, or a simple business automation. Keep the scope simple 
              (e.g. answering FAQs or scheduling help) to match a beginner's capability.
            </StepCard>
            
            <StepCard number={2} title="Choose a large language model service for quick use">
              Start with easy-to-access LLMs: for instance, use ChatGPT via OpenAI (through the web UI or 
              the OpenAI API) or Google's Bard/Gemini if available. These services let you leverage powerful 
              models without setup.
            </StepCard>
            
            <StepCard number={3} title="Experiment with the model using prompts">
              In the chat interface, try asking the LLM to perform your task. Refine your prompts to get better 
              results (this is "prompt engineering"). For example, if creating a content assistant, prompt it 
              with "You are a helpful writing assistant. Help me draft an email about X."
            </StepCard>
            
            <StepCard number={4} title="Use no-code tools to prototype an app">
              If you want a custom interface (like a simple web app or chatbot UI) without coding everything, 
              leverage AI app builders like Vercel's V0.dev, Lovable.dev, or other no-code platforms that can 
              help you build a functional application.
            </StepCard>
            
            <StepCard number={5} title="Set up access to the AI model's API (if needed)">
              If your use case goes beyond the chat UI, sign up for the model's API such as OpenAI API, 
              Google Cloud Vertex AI, or others depending on your chosen model.
            </StepCard>
            
            <StepCard number={6} title="Build a simple integration or workflow">
              With an API key in hand, connect the LLM to your use case. Use integration platforms like Replit, 
              Zapier or IFTTT to create simple automations without extensive coding.
            </StepCard>
            
            <StepCard number={7} title="Test with real examples">
              Try out your AI system end-to-end. Verify the answers make sense and the system is user-friendly. 
              Tweak your prompts or rules to handle common issues.
            </StepCard>
            
            <StepCard number={8} title="Deploy and share">
              Once satisfied, deploy your basic AI system so you (or others) can use it. Use simple hosting 
              platforms like Vercel, Replit hosting, or the built-in deployment features of no-code solutions.
            </StepCard>
            
            <StepCard number={9} title="Learn from the experience">
              Note what the limitations are. Does the AI give wrong answers on certain topics? Does it struggle 
              with very long inputs? Use these observations to plan improvements.
            </StepCard>
          </div>
        </LevelSection>
        
        <LevelSection
          id="intermediate"
          title="Intermediate Level"
          subtitle="For those with some programming experience. Build more customized AI tools or business automations by coding with APIs, using dev tools, and possibly light fine-tuning."
          level="Intermediate"
          className="bg-pattern-light"
        >
          <div className="space-y-6">
            <StepCard number={1} title="Plan the enhanced use case and requirements">
              Revisit your project goals with ambition. Identify new features or use cases to tackle, and consider 
              scale – will a few dozen internal users use this tool, or is it customer-facing?
            </StepCard>
            
            <StepCard number={2} title="Choose the right LLM and platform for your needs">
              Evaluate providers beyond the basic options, considering factors like cost, performance, and any 
              domain-specific strengths. Consider OpenAI, Google's Gemini, Anthropic Claude, or emerging models.
            </StepCard>
            
            <StepCard number={3} title="Set up your development environment">
              Use an IDE with AI coding assistant like VS Code with GitHub Copilot or Replit with Ghostwriter. 
              Pick a stack you're comfortable with and use version control for tracking code changes.
            </StepCard>
            
            <StepCard number={4} title="Integrate the LLM into a custom application">
              Write code to handle user queries, send them to the LLM API, and process the responses. Incorporate 
              business rules and test with sample inputs.
            </StepCard>
            
            <StepCard number={5} title="Build a user interface (web, mobile, or voice)">
              Create an interface that suits your users, whether it's a web app, mobile app, or voice interface. 
              Ensure good user experience with loading states and error handling.
            </StepCard>
            
            <StepCard number={6} title="Incorporate memory or simple data storage">
              Implement methods to store context between interactions, using conversation history or a database 
              to give your AI a "memory" of past interactions or user preferences.
            </StepCard>
            
            <StepCard number={7} title="Consider fine-tuning or customizing the model">
              If the base model isn't meeting specific needs, explore fine-tuning on your custom dataset or use 
              techniques like Retrieval Augmented Generation to combine the model with your proprietary data.
            </StepCard>
            
            <StepCard number={8} title="Test extensively with target users">
              Gather feedback on the AI's answers, interface convenience, and handling of edge cases. Iterate 
              based on this feedback.
            </StepCard>
            
            <StepCard number={9} title="Deploy on a scalable platform">
              Choose robust deployment options like Vercel, cloud platforms (AWS, Heroku), or app stores for 
              mobile apps. Set up monitoring and ensure security.
            </StepCard>
            
            <StepCard number={10} title="Documentation and training">
              Document how the system works and provide guidance to users, setting proper expectations about 
              the AI's capabilities and limitations.
            </StepCard>
          </div>
        </LevelSection>
        
        <LevelSection
          id="advanced"
          title="Advanced Level"
          subtitle="For advanced developers or organizations. This involves deep integration of AI into products or business processes, custom model fine-tuning, multi-modal interfaces, and rigorous deployment considerations."
          level="Advanced"
        >
          <div className="space-y-6">
            <StepCard number={1} title="Align AI projects with business strategy">
              Identify high-impact use cases, engage stakeholders to define success metrics, and address 
              compliance or policy requirements for your AI deployment.
            </StepCard>
            
            <StepCard number={2} title="Select an architecture and LLM approach">
              Decide whether to use existing models, fine-tune foundation models, or implement Retrieval-Augmented 
              Generation (RAG) to combine models with your knowledge base.
            </StepCard>
            
            <StepCard number={3} title="Develop with robust engineering practices">
              Implement modular design with microservices, multiple interface types, sophisticated context 
              management, and integration with external tools through agent frameworks.
            </StepCard>
            
            <StepCard number={4} title="Fine-tune and iterate on AI performance">
              Invest in domain-specific fine-tuning, optimize prompts with few-shot examples, and establish 
              feedback loops for continuous improvement.
            </StepCard>
            
            <StepCard number={5} title="Ensure scalability and reliability">
              Plan for high availability with containerization, auto-scaling, global distribution via CDNs, 
              comprehensive monitoring, and fallback mechanisms.
            </StepCard>
            
            <StepCard number={6} title="Address security, privacy, and compliance">
              Implement data privacy measures, access controls, compliance with industry standards, and content 
              filtering to prevent harmful outputs.
            </StepCard>
            
            <StepCard number={7} title="Deploy to production and distribute">
              Use staged rollout strategies, ensure consistency across platforms, and provide training to help 
              users adapt to the new AI system.
            </StepCard>
            
            <StepCard number={8} title="Ongoing maintenance and integration">
              Monitor model performance over time, update models and data regularly, expand capabilities as 
              needed, and manage costs at scale.
            </StepCard>
          </div>
        </LevelSection>
        
        {/* Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 z-0" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="heading-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Build Your Personal AI?
              </motion.h2>
              
              <motion.p
                className="paragraph mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Start your journey today by exploring the tools and techniques that match your skill level.
                From simple assistants to advanced AI systems, the possibilities are endless.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button className="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  Get Started Now
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
