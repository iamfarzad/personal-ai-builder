
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LevelSectionProps {
  id: string;
  title: string;
  subtitle: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
  children: ReactNode;
  className?: string;
}

const LevelSection = ({ 
  id, 
  title, 
  subtitle, 
  level, 
  children, 
  className 
}: LevelSectionProps) => {
  // Define color schemes for different levels
  const levelColors = {
    Basic: 'from-blue-50 to-background border-blue-100',
    Intermediate: 'from-purple-50 to-background border-purple-100',
    Advanced: 'from-emerald-50 to-background border-emerald-100',
  };

  // Define badge colors for different levels
  const badgeColors = {
    Basic: 'bg-blue-100 text-blue-800',
    Intermediate: 'bg-purple-100 text-purple-800',
    Advanced: 'bg-emerald-100 text-emerald-800',
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-24 relative", 
        className
      )}
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-b opacity-40 z-0",
        levelColors[level]
      )} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={cn(
              "badge mb-6",
              badgeColors[level]
            )}>
              {level} Level
            </div>
          </motion.div>
          
          <motion.h2
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {title}
          </motion.h2>
          
          <motion.p
            className="paragraph mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LevelSection;
