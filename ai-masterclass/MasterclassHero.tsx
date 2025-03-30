
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Zap, Code } from 'lucide-react';

const MasterclassHero = () => {
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
  );
};

export default MasterclassHero;
