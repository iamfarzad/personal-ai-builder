
import { motion } from 'framer-motion';
import GlossaryItem from './GlossaryItem';
import { Separator } from '@/components/ui/separator';

interface GlossaryItemData {
  term: string;
  definition: string;
}

interface GlossarySectionProps {
  letter: string;
  items: GlossaryItemData[];
}

const GlossarySection = ({ letter, items }: GlossarySectionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
      id={`section-${letter.toLowerCase()}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
          <span className="text-xl font-bold">{letter}</span>
        </div>
        <h2 className="text-2xl font-bold">{letter}</h2>
        <Separator className="flex-1" />
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 sm:grid-cols-1 md:grid-cols-2"
      >
        {items.map((item, index) => (
          <GlossaryItem 
            key={`${letter}-${index}`}
            term={item.term}
            definition={item.definition}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GlossarySection;
