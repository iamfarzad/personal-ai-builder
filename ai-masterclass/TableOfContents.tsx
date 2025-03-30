
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2 } from 'lucide-react';

const TableOfContents = () => {
  return (
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
  );
};

export default TableOfContents;
