
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, BookOpen, Zap, Code, ArrowRight, Brain, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PlatformsBanner from '@/components/PlatformsBanner';
import LLMPlatformsBanner from '@/components/LLMPlatformsBanner';
import LLMFrameworksBanner from '@/components/LLMFrameworksBanner';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const staggerChildren = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background pt-16 pb-12">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold mb-4">AI Masterclass</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                A comprehensive guide to understanding and effectively using AI in your work and life
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="badge bg-blue-100 text-blue-800 flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" /> Beginner Friendly
                </span>
                <span className="badge bg-purple-100 text-purple-800 flex items-center gap-1">
                  <Zap className="h-3.5 w-3.5" /> Practical Skills
                </span>
                <span className="badge bg-amber-100 text-amber-800 flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" /> Prompting Techniques
                </span>
              </div>
            </motion.div>
          </div>
        </section>
        
        <div className="container py-2 flex justify-center flex-col md:flex-row gap-3 items-center">
          <Link 
            to="/resources" 
            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1"
          >
            New to AI development? Check our beginner resources &rarr;
          </Link>
          
          <div className="hidden md:block text-muted-foreground">|</div>
          
          <Link 
            to="/ai-masterclass" 
            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1"
          >
            View full AI masterclass curriculum &rarr;
          </Link>
        </div>
        
        <PlatformsBanner />
        <LLMPlatformsBanner />
        <LLMFrameworksBanner />
        
        {/* Table of Contents */}
        <section className="py-8 bg-muted/30">
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div 
              className="bg-card rounded-xl p-6 shadow-sm border"
              {...fadeIn}
            >
              <h2 className="font-semibold text-xl mb-4">What You'll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <motion.div 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p>The fundamentals of how AI models work</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p>Different AI models and their specialized uses</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p>Effective prompt engineering techniques</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p>Practical AI use cases to save hours each week</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p>How to create and use AI prompt templates</p>
                </motion.div>
                <motion.div 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p>Advanced techniques for content creation</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Main Content Sections */}
        <div className="container max-w-4xl mx-auto px-4 py-12">
          {/* Basics of AI Models & Tools */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Brain className="h-4 w-4 text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold">The Basics of AI Models & Tools</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                LLMs (Large Language Models) are what we call "AI" today. When you chat with one, your text gets 
                converted into "tokens" for processing. Think of tokens as pieces of words – sometimes a full word, 
                sometimes part of one.
              </p>
              
              <p>
                Each new chat starts a fresh "context window" that determines what tokens the AI can access 
                or remember. The more you chat with an AI, the larger the token stream becomes.
              </p>
              
              <h3>Major AI Players and Models</h3>
              
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="font-medium mb-2">OpenAI (ChatGPT)</h4>
                  <p className="text-sm text-muted-foreground">
                    Creator of GPT models, with 4o and 4.5 being the current flagships with large context windows and advanced reasoning.
                  </p>
                </div>
                
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Anthropic (Claude)</h4>
                  <p className="text-sm text-muted-foreground">
                    Claude Sonnet 3.7 excels at writing and programming tasks with detailed, thoughtful responses.
                  </p>
                </div>
                
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Google (Gemini)</h4>
                  <p className="text-sm text-muted-foreground">
                    Cost-effective with multimodal capabilities and large context windows for processing entire books.
                  </p>
                </div>
                
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Others</h4>
                  <p className="text-sm text-muted-foreground">
                    xAI (Grok), Meta (Llama), LeChat (Mistral), and Deepseek (V3) offer various capabilities and pricing models.
                  </p>
                </div>
              </div>
              
              <p>
                Models differ based on pre-training (what data they learned from), post-training (personality and tone), 
                context window size (how much they can "remember"), and pricing.
              </p>
              
              <h3>Thinking Models</h3>
              
              <p>
                When basic models aren't enough, "Reasoning" or "Thinking" models like ChatGPT o1, 
                Claude Sonnet 3.7 (in Thinking Mode), or Deepseek R1 provide extra processing power. 
                These simulate human-like problem-solving with visible "thinking" processes.
              </p>
              
              <h3>Tools and Wrappers</h3>
              
              <p>
                AI tools like Perplexity enhance models with internet search capabilities, acting as 
                "Google Search on steroids." Specialized wrappers integrate LLMs with specific tools:
              </p>
              
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Perplexity: Combines multiple LLMs with internet search</li>
                <li>Cursor: Programming IDE with AI that can access your codebase</li>
                <li>Kortex: A central hub for your work, notes, and ideas to reference with AI</li>
              </ul>
            </div>
          </motion.section>
          
          <Separator className="my-12" />
          
          {/* Prompt Engineering Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <Code className="h-4 w-4 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold">Learn This New Skill — Prompt Engineering</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Becoming "good" at AI is about shifting from tasks thinking to systems thinking. 
                When you write prompts, you are building a system in written text. Similar to writing code:
              </p>
              
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>You have a vision for the project</li>
                <li>You understand the steps to get there</li>
                <li>You execute tasks until it's complete</li>
              </ul>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 my-6">
                <h4 className="text-amber-800 font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Important Note
                </h4>
                <p className="text-amber-700 text-sm">
                  AI doesn't make up for a lack of competency. Typing one sentence into AI hoping that it 
                  one-shots whatever task you want to complete will get you nowhere. For most use cases, 
                  you need something much longer and detailed.
                </p>
              </div>
              
              <h3>How To Write Effective Prompts</h3>
              
              <p>There are 2 types of prompts:</p>
              <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>A system or meta prompt – The first prompt that frames the entire task</li>
                <li>Subsequent prompts – Shorter prompts to refine the output</li>
              </ol>
              
              <p>A good meta prompt can be written in 6 parts:</p>
              
              <div className="grid gap-3 my-6">
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="font-medium mb-1">1. System</h4>
                  <p className="text-sm text-muted-foreground">
                    Assign a role and description of the task
                  </p>
                </div>
                
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="font-medium mb-1">2. Context</h4>
                  <p className="text-sm text-muted-foreground">
                    Reference information or an expectation of what you want to do
                  </p>
                </div>
                
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="font-medium mb-1">3. Instructions</h4>
                  <p className="text-sm text-muted-foreground">
                    Detailed instructions to accomplish the task
                  </p>
                </div>
                
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="font-medium mb-1">4. Examples (Optional)</h4>
                  <p className="text-sm text-muted-foreground">
                    Specific examples like social post templates
                  </p>
                </div>
                
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="font-medium mb-1">5. Constraints</h4>
                  <p className="text-sm text-muted-foreground">
                    What to avoid or include that may not be considered
                  </p>
                </div>
                
                <div className="bg-card border rounded-lg p-4">
                  <h4 className="font-medium mb-1">6. Output</h4>
                  <p className="text-sm text-muted-foreground">
                    How you want the output to be formatted
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
          
          <Separator className="my-12" />
          
          {/* Use Cases Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Lightbulb className="h-4 w-4 text-emerald-700" />
              </div>
              <h2 className="text-2xl font-bold">Practical Use Cases to Save Hours Weekly</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 my-6">
                <p className="text-emerald-700 text-sm font-medium">
                  AI should be used to enhance the creative work you love and automate the busy work you hate.
                </p>
              </div>
              
              <p>To find how AI can best help you, answer these questions:</p>
              <ul className="list-disc list-inside mb-6 space-y-1">
                <li>What do you do every day?</li>
                <li>Which parts do you love and not want to give up?</li>
                <li>Which parts do you hate and don't require creativity?</li>
                <li>How can you incorporate AI into your routine?</li>
              </ul>
              
              <h3 className="mt-8">Five Powerful Use Cases</h3>
              
              <div className="space-y-6 mt-4">
                <div className="bg-card border rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">Use Case 1 – The New Google Search</h4>
                  <p className="mb-4">
                    Retrain your habits to use AI tools like Perplexity for information searches instead of Google.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Open AI instead of Google when you have a question</li>
                    <li>Use Perplexity for deep research with follow-up questions</li>
                    <li>Use keyboard shortcuts to access AI quickly while working</li>
                    <li>Ask for help when stuck in creative tools or programming</li>
                  </ul>
                </div>
                
                <div className="bg-card border rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">Use Case 2 – Learning Faster</h4>
                  <p className="mb-4">
                    Use AI as an intellectual sparring partner to accelerate your learning process.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Upload book chapters to explore concepts more deeply</li>
                    <li>Create a language coach for learning new languages</li>
                    <li>Extract specific information from PDFs without scrolling</li>
                    <li>Generate practice questions to test your understanding</li>
                  </ul>
                </div>
                
                <div className="bg-card border rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">Use Case 3 – Idea Generation</h4>
                  <p className="mb-4">
                    Leverage AI for creative content or business ideas when you're feeling stuck.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Analyze successful content to understand its structure</li>
                    <li>Generate audience pain points and content ideas</li>
                    <li>Rewrite content in different styles for new perspectives</li>
                    <li>Evaluate business ideas for viability and market fit</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Call To Action */}
          <section className="mt-16 mb-8">
            <CallToAction />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
