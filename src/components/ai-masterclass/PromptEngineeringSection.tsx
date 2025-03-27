
import { motion } from 'framer-motion';
import { Code, ArrowRight, Lightbulb } from 'lucide-react';

const PromptEngineeringSection = () => {
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
  );
};

export default PromptEngineeringSection;
