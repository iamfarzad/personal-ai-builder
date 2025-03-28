
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
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-10 pb-16 overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 via-accent/30 to-background z-0" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              width: `${80 + Math.random() * 200}px`,
              height: `${80 + Math.random() * 200}px`,
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary mb-4 sm:mb-6 shadow-sm">
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Comprehensive Learning Path</span>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-primary-foreground/90 dark:from-primary-foreground dark:to-primary/90 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Understanding AI Technologies
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            From beginner concepts to advanced implementations — learn how to leverage AI systems effectively, 
            whether you're new to AI or looking to deepen your technical expertise.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="rounded-full px-6 sm:px-8 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 gap-2 w-full sm:w-auto"
              onClick={handleGetStarted}
            >
              <Zap className="h-4 w-4" />
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-6 sm:px-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 gap-2 w-full sm:w-auto"
              onClick={handleLearnMore}
            >
              <Code className="h-4 w-4" />
              Explore Topics
            </Button>
          </motion.div>
          
          {/* Feature badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {['Beginner Friendly', 'Practical Examples', 'Advanced Techniques', 'Prompt Engineering'].map((badge, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <a href="#basic" className="flex flex-col items-center hover:text-primary transition-colors duration-300">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
