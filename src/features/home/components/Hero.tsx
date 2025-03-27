import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/resources');
  };

  const handleLearnMore = () => {
    document.getElementById('basic')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 via-accent/30 to-background z-0" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 300}px`,
              height: `${100 + Math.random() * 300}px`,
              opacity: 0.3 + Math.random() * 0.4
            }}
            animate={{
              top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              scale: [1, 1.1, 1],
              opacity: [0.3 + Math.random() * 0.4, 0.5 + Math.random() * 0.3, 0.3 + Math.random() * 0.4],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Properly centered grid pattern for texture */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: 'center center'
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 shadow-sm">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Comprehensive Learning Path</span>
            </div>
          </motion.div>
          
          <motion.h1
            className="heading-xl mb-6 bg-gradient-to-r from-primary to-primary-foreground/90 dark:from-primary-foreground dark:to-primary/90 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Understanding AI Technologies
          </motion.h1>
          
          <motion.p
            className="paragraph mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            From beginner concepts to advanced implementations — learn how to leverage AI systems effectively, 
            whether you're new to AI or looking to deepen your technical expertise.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 gap-2"
              onClick={handleGetStarted}
            >
              <Zap className="h-4 w-4" />
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 gap-2"
              onClick={handleLearnMore}
            >
              <Code className="h-4 w-4" />
              Explore Topics
            </Button>
          </motion.div>
          
          {/* Feature badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {['Beginner Friendly', 'Practical Examples', 'Advanced Techniques', 'Prompt Engineering'].map((badge, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <a href="#basic" className="flex flex-col items-center hover:text-primary transition-colors duration-300">
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
