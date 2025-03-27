
import { motion } from 'framer-motion';
import { PenTool, ArrowRight } from 'lucide-react';

const PromptEngineeringSection = () => {
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
          <PenTool className="h-5 w-5 text-purple-700" />
        </motion.div>
        <h2 className="text-2xl font-bold">Prompt Engineering Techniques</h2>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p>Coming soon...</p>
      </div>
    </motion.section>
  );
};

export default PromptEngineeringSection;
