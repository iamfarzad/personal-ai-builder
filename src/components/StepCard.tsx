
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check, ExternalLink } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface PlatformLink {
  name: string;
  url: string;
  description: string;
}

interface StepCardProps {
  number: number;
  title: string;
  children: ReactNode;
  className?: string;
  platforms?: PlatformLink[];
  completed?: boolean;
}

const StepCard = ({ 
  number, 
  title, 
  children, 
  className, 
  platforms = [],
  completed = false
}: StepCardProps) => {
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
        <div className={cn(
          "text-primary rounded-full h-8 w-8 flex items-center justify-center font-medium text-sm shrink-0",
          completed ? "bg-primary/20" : "bg-primary/10"
        )}>
          {completed ? <Check className="h-4 w-4 text-primary" /> : number}
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            {completed && (
              <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                Completed
              </span>
            )}
          </div>
          <div className="text-foreground/70 text-base leading-relaxed mb-4">
            {children}
          </div>
          
          {platforms.length > 0 && (
            <div className="mt-3 space-y-2">
              <h4 className="text-sm font-medium text-foreground">Recommended Platforms:</h4>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform) => (
                  <TooltipProvider key={platform.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href={platform.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs bg-background border border-border rounded-full px-3 py-1.5 hover:bg-accent transition-colors"
                        >
                          {platform.name}
                          <ExternalLink className="h-3 w-3 ml-0.5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs max-w-[200px]">{platform.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StepCard;
