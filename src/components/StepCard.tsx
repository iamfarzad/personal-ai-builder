
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StepCardProps {
  number: number;
  title: string;
  children: ReactNode;
  className?: string;
}

const StepCard = ({ number, title, children, className }: StepCardProps) => {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 mb-6",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center font-medium text-sm shrink-0">
          {number}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <div className="text-foreground/70 text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StepCard;
