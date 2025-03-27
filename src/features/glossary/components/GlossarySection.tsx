
import GlossaryItem from './GlossaryItem';

interface GlossaryItemData {
  term: string;
  definition: string;
}

interface GlossarySectionProps {
  letter: string;
  items: GlossaryItemData[];
}

const GlossarySection = ({ letter, items }: GlossarySectionProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{letter}</h2>
      <div className="grid gap-4">
        {items.map((item, index) => (
          <GlossaryItem 
            key={`${letter}-${index}`}
            term={item.term}
            definition={item.definition}
          />
        ))}
      </div>
    </div>
  );
};

export default GlossarySection;
