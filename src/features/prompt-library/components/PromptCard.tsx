
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks';

interface PromptCardProps {
  title: string;
  description: string;
  category: string;
  promptText: string;
}

const PromptCard = ({ title, description, category, promptText }: PromptCardProps) => {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptText);
    toast({
      title: "Copied to clipboard",
      description: "The prompt has been copied to your clipboard.",
      duration: 2000,
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge>{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-4 rounded-md mb-4 text-sm">
          <p>{promptText}</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={copyToClipboard}
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy Prompt
        </Button>
      </CardContent>
    </Card>
  );
};

export default PromptCard;
