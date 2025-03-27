
import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const UseCasesSection = () => {
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
  );
};

export default UseCasesSection;
