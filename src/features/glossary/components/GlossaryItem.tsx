
import { motion } from 'framer-motion';

interface GlossaryItemProps {
  term: string;
  definition: string;
}

const GlossaryItem = ({ term, definition }: GlossaryItemProps) => {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold">{term}</h3>
      <p className="text-muted-foreground">{definition}</p>
    </div>
  );
};

export default GlossaryItem;
