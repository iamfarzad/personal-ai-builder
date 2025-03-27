import { motion } from 'framer-motion';
import { Brain, ArrowRight } from 'lucide-react';

const BasicsOfAISection = () => {
  const staggerChildren = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
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
  );
};

export default BasicsOfAISection;
