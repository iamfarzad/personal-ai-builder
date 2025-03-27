
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Zap, Code, ArrowRight, Brain, Lightbulb, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const staggerChildren = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const floatAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [0, -10, 0],
      transition: { 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent -z-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent -z-10 rounded-full blur-3xl" />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-background pt-16 pb-12 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary/10"
                style={{
                  width: 100 + Math.random() * 200,
                  height: 100 + Math.random() * 200,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  x: [0, Math.random() * 30, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
          
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div 
                className="mb-6 inline-block"
                {...floatAnimation}
              >
                <div className="inline-flex items-center justify-center p-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                  <Sparkles className="h-6 w-6 text-primary mr-2" />
                  <span className="text-sm font-medium">Comprehensive Guide</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                AI Masterclass
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                A comprehensive guide to understanding and effectively using AI in your work and life
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="badge bg-blue-100 text-blue-800 flex items-center gap-1 shadow-sm hover:shadow-md transition-shadow">
                  <BookOpen className="h-3.5 w-3.5" /> Beginner Friendly
                </span>
                <span className="badge bg-purple-100 text-purple-800 flex items-center gap-1 shadow-sm hover:shadow-md transition-shadow">
                  <Zap className="h-3.5 w-3.5" /> Practical Skills
                </span>
                <span className="badge bg-amber-100 text-amber-800 flex items-center gap-1 shadow-sm hover:shadow-md transition-shadow">
                  <Code className="h-3.5 w-3.5" /> Prompting Techniques
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Table of Contents */}
        <section className="py-12 bg-muted/30 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container max-w-4xl mx-auto px-4">
            <motion.div 
              className="bg-card rounded-xl p-6 shadow-md border border-border/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-semibold text-xl mb-6 inline-flex items-center">
                <div className="mr-2 p-1.5 rounded-full bg-primary/10">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                What You'll Learn
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "The fundamentals of how AI models work",
                  "Different AI models and their specialized uses",
                  "Effective prompt engineering techniques",
                  "Practical AI use cases to save hours each week",
                  "How to create and use AI prompt templates",
                  "Advanced techniques for content creation"
                ].map((item, i) => (
                  <motion.div 
                    className="flex items-start gap-2.5 group"
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  >
                    <div className="rounded-full p-1 bg-green-100 text-green-700 shrink-0 mt-0.5 transition-colors group-hover:bg-green-200">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="transition-colors group-hover:text-foreground/90">{item}</p>
                  </motion.div>
                ))}
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
              <motion.div 
                className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Brain className="h-5 w-5 text-blue-700" />
              </motion.div>
              <h2 className="text-2xl font-bold">The Basics of AI Models & Tools</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                LLMs (Large Language Models) are what we call "AI" today. When you chat with one, your text gets 
                converted into "tokens" for processing. Think of tokens as pieces of words – sometimes a full word, 
                sometimes part of one.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Each new chat starts a fresh "context window" that determines what tokens the AI can access 
                or remember. The more you chat with an AI, the larger the token stream becomes.
              </motion.p>
              
              <motion.h3
                className="flex items-center gap-2 mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 text-blue-700" />
                </div>
                Major AI Players and Models
              </motion.h3>
              
              <motion.div 
                className="grid sm:grid-cols-2 gap-4 my-6"
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "OpenAI (ChatGPT)",
                    description: "Creator of GPT models, with 4o and 4.5 being the current flagships with large context windows and advanced reasoning."
                  },
                  {
                    title: "Anthropic (Claude)",
                    description: "Claude Sonnet 3.7 excels at writing and programming tasks with detailed, thoughtful responses."
                  },
                  {
                    title: "Google (Gemini)",
                    description: "Cost-effective with multimodal capabilities and large context windows for processing entire books."
                  },
                  {
                    title: "Others",
                    description: "xAI (Grok), Meta (Llama), LeChat (Mistral), and Deepseek (V3) offer various capabilities and pricing models."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="bg-card border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                    variants={{
                      initial: { opacity: 0, y: 10 },
                      animate: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.4, delay: 0.1 * i }
                      }
                    }}
                  >
                    <h4 className="font-medium mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Models differ based on pre-training (what data they learned from), post-training (personality and tone), 
                context window size (how much they can "remember"), and pricing.
              </motion.p>
              
              <motion.h3
                className="flex items-center gap-2 mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 text-blue-700" />
                </div>
                Thinking Models
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                When basic models aren't enough, "Reasoning" or "Thinking" models like ChatGPT o1, 
                Claude Sonnet 3.7 (in Thinking Mode), or Deepseek R1 provide extra processing power. 
                These simulate human-like problem-solving with visible "thinking" processes.
              </motion.p>
              
              <motion.h3
                className="flex items-center gap-2 mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 text-blue-700" />
                </div>
                Tools and Wrappers
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                AI tools like Perplexity enhance models with internet search capabilities, acting as 
                "Google Search on steroids." Specialized wrappers integrate LLMs with specific tools:
              </motion.p>
              
              <motion.ul 
                className="list-disc list-inside mb-6 space-y-2 pl-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <li className="pl-2"><span className="text-primary font-medium">Perplexity:</span> Combines multiple LLMs with internet search</li>
                <li className="pl-2"><span className="text-primary font-medium">Cursor:</span> Programming IDE with AI that can access your codebase</li>
                <li className="pl-2"><span className="text-primary font-medium">Kortex:</span> A central hub for your work, notes, and ideas to reference with AI</li>
              </motion.ul>
            </div>
          </motion.section>
          
          <Separator className="my-16" />
          
          {/* Prompt Engineering Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="h-5 w-5 text-purple-700" />
              </motion.div>
              <h2 className="text-2xl font-bold">Learn This New Skill — Prompt Engineering</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Becoming "good" at AI is about shifting from tasks thinking to systems thinking. 
                When you write prompts, you are building a system in written text. Similar to writing code:
              </motion.p>
              
              <motion.ul 
                className="list-disc list-inside mb-6 space-y-2 pl-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <li className="pl-2">You have a vision for the project</li>
                <li className="pl-2">You understand the steps to get there</li>
                <li className="pl-2">You execute tasks until it's complete</li>
              </motion.ul>
              
              <motion.div 
                className="bg-amber-50 border border-amber-200 rounded-lg p-5 my-8 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-amber-800 font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Important Note
                </h4>
                <p className="text-amber-700 text-sm">
                  AI doesn't make up for a lack of competency. Typing one sentence into AI hoping that it 
                  one-shots whatever task you want to complete will get you nowhere. For most use cases, 
                  you need something much longer and detailed.
                </p>
              </motion.div>
              
              <motion.h3
                className="flex items-center gap-2 mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 text-purple-700" />
                </div>
                How To Write Effective Prompts
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                There are 2 types of prompts:
              </motion.p>
              
              <motion.ol 
                className="list-decimal list-inside mb-6 space-y-2 pl-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <li className="pl-2 font-medium">A system or meta prompt – <span className="font-normal">The first prompt that frames the entire task</span></li>
                <li className="pl-2 font-medium">Subsequent prompts – <span className="font-normal">Shorter prompts to refine the output</span></li>
              </motion.ol>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                A good meta prompt can be written in 6 parts:
              </motion.p>
              
              <motion.div 
                className="grid gap-3 my-8"
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    number: 1,
                    title: "System",
                    description: "Assign a role and description of the task"
                  },
                  {
                    number: 2,
                    title: "Context",
                    description: "Reference information or an expectation of what you want to do"
                  },
                  {
                    number: 3,
                    title: "Instructions",
                    description: "Detailed instructions to accomplish the task"
                  },
                  {
                    number: 4,
                    title: "Examples (Optional)",
                    description: "Specific examples like social post templates"
                  },
                  {
                    number: 5,
                    title: "Constraints",
                    description: "What to avoid or include that may not be considered"
                  },
                  {
                    number: 6,
                    title: "Output",
                    description: "How you want the output to be formatted"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="bg-card border rounded-lg p-5 shadow-sm hover:shadow-md transition-all flex gap-4 items-center"
                    variants={{
                      initial: { opacity: 0, x: -10 },
                      animate: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.4, delay: 0.05 * i }
                      }
                    }}
                    whileHover={{
                      backgroundColor: "var(--purple-50)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="bg-purple-100 text-purple-800 h-9 w-9 rounded-full flex items-center justify-center font-semibold text-sm shrink-0">
                      {item.number}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.h3
                className="flex items-center gap-2 mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 text-purple-700" />
                </div>
                The Prompt Creation Process
              </motion.h3>
              
              <motion.ol 
                className="list-decimal list-inside mb-6 space-y-5 pl-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {[
                  {
                    title: "Give as much detail as you can",
                    description: "Think of AI as an intelligent person who has no specific information. To make output incredible, provide specific instructions and details."
                  },
                  {
                    title: "Consider writing a short guide on your process",
                    description: "This may take time, but if you get the prompt right, you can use it repeatedly to save hours."
                  },
                  {
                    title: "Test and refine",
                    description: "Start with a basic prompt, then improve it by adding examples from your own work or others you admire."
                  },
                  {
                    title: "Perfect the output format",
                    description: "Specify exactly how you want the information presented to avoid messy formatting."
                  }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  >
                    {item.title}
                    <p className="font-normal mt-1 ml-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </motion.section>
          
          <Separator className="my-16" />
          
          {/* Use Cases Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Lightbulb className="h-5 w-5 text-emerald-700" />
              </motion.div>
              <h2 className="text-2xl font-bold">Practical Use Cases to Save Hours Weekly</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <motion.div 
                className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 my-8 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-emerald-700 text-base font-medium italic">
                  "AI should be used to enhance the creative work you love and automate the busy work you hate."
                </p>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                To find how AI can best help you, answer these questions:
              </motion.p>
              
              <motion.ul 
                className="list-disc list-inside mb-8 space-y-2 pl-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <li className="pl-2">What do you do every day?</li>
                <li className="pl-2">Which parts do you love and not want to give up?</li>
                <li className="pl-2">Which parts do you hate and don't require creativity?</li>
                <li className="pl-2">How can you incorporate AI into your routine?</li>
              </motion.ul>
              
              <motion.h3
                className="flex items-center gap-2 mt-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 text-emerald-700" />
                </div>
                Five Powerful Use Cases
              </motion.h3>
              
              <motion.div 
                className="space-y-6 mt-8"
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Use Case 1 – The New Google Search",
                    description: "Retrain your habits to use AI tools like Perplexity for information searches instead of Google.",
                    items: [
                      "Open AI instead of Google when you have a question",
                      "Use Perplexity for deep research with follow-up questions",
                      "Use keyboard shortcuts to access AI quickly while working",
                      "Ask for help when stuck in creative tools or programming"
                    ]
                  },
                  {
                    title: "Use Case 2 – Learning Faster",
                    description: "Use AI as an intellectual sparring partner to accelerate your learning process.",
                    items: [
                      "Upload book chapters to explore concepts more deeply",
                      "Create a language coach for learning new languages",
                      "Extract specific information from PDFs without scrolling",
                      "Generate practice questions to test your understanding"
                    ]
                  },
                  {
                    title: "Use Case 3 – Idea Generation",
                    description: "Leverage AI for creative content or business ideas when you're feeling stuck.",
                    items: [
                      "Analyze successful content to understand its structure",
                      "Generate audience pain points and content ideas",
                      "Rewrite content in different styles for new perspectives",
                      "Evaluate business ideas for viability and market fit"
                    ]
                  },
                  {
                    title: "Use Case 4 – Voice & Style Analysis",
                    description: "Analyze and replicate writing styles for marketing and content creation.",
                    items: [
                      "Break down YouTube video structures for script creation",
                      "Create customer avatars for targeted marketing",
                      "Analyze writing voices to mimic specific styles",
                      "Generate content that matches brand voice consistently"
                    ]
                  },
                  {
                    title: "Use Case 5 – Personal Growth & Clarity",
                    description: "Use AI as a strategic advisor for personal development and problem-solving.",
                    items: [
                      "Break down goals into actionable tasks and habits",
                      "Journal with AI feedback for self-reflection",
                      "Identify root causes of personal challenges",
                      "Use AI as a logical problem solver for emotional issues"
                    ]
                  }
                ].map((useCase, i) => (
                  <motion.div 
                    key={i}
                    className={cn(
                      "bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-all",
                      i % 2 === 0 ? "hover:bg-gradient-to-r hover:from-background hover:to-emerald-50/50" : "hover:bg-gradient-to-r hover:from-background hover:to-blue-50/50"
                    )}
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.6, delay: 0.1 * i }
                      }
                    }}
                  >
                    <h4 className="font-semibold text-lg mb-2">{useCase.title}</h4>
                    <p className="mb-4 text-muted-foreground">
                      {useCase.description}
                    </p>
                    <ul className="list-disc list-inside text-sm space-y-1.5 pl-1">
                      {useCase.items.map((item, j) => (
                        <motion.li 
                          key={j} 
                          className="pl-2 text-muted-foreground"
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.05 * j }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
          
          {/* Call To Action */}
          <motion.section
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-2xl p-8 sm:p-12 border border-primary/10 shadow-lg"
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Ready to Master AI?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Start by identifying the tasks you dislike but need to do, and create prompts to help you complete them faster.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/">
                  <Button size="lg" variant="outline" className="gap-2 shadow-sm hover:shadow-md transition-shadow">
                    <ArrowRight className="h-4 w-4" />
                    Explore Our Roadmap
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button size="lg" className="gap-2 shadow-sm hover:shadow-md transition-shadow">
                    <BookOpen className="h-4 w-4" />
                    View Beginner Resources
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIMasterclass;
