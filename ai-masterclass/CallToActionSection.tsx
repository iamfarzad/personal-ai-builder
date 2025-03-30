
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
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
  );
};

export default CallToActionSection;
