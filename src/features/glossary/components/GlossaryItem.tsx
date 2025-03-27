
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface GlossaryItemProps {
  term: string;
  definition: string;
}

const GlossaryItem = ({ term, definition }: GlossaryItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
    >
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
        <CardContent className="p-5">
          <h3 className="text-lg font-semibold text-foreground mb-2">{term}</h3>
          <p className="text-muted-foreground text-sm">{definition}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GlossaryItem;
