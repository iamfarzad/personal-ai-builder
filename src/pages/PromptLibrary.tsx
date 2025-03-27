
import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Copy } from 'lucide-react';

const PromptLibrary = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Show welcome toast
    toast({
      title: "Prompt Library",
      description: "Browse and use effective AI prompts",
      duration: 4000,
    });
  }, [toast]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The prompt has been copied to your clipboard.",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent -z-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent -z-10 rounded-full blur-3xl" />
      
      <main className="flex-grow">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Prompt Library</h1>
          <p className="text-lg text-muted-foreground mb-8">A collection of effective prompts for various AI tasks to help you get better results.</p>
          
          <Separator className="my-8" />
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Content Creation Assistant</CardTitle>
                    <CardDescription>For generating high-quality blog posts</CardDescription>
                  </div>
                  <Badge>Writing</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md mb-4 text-sm">
                  <p>I want you to act as a content creation assistant for a blog post about [TOPIC]. Create an outline with 5 main sections, each with 3 subsections. For each subsection, provide 2-3 bullet points of information to include. The target audience is [AUDIENCE] and the tone should be [TONE].</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => copyToClipboard("I want you to act as a content creation assistant for a blog post about [TOPIC]. Create an outline with 5 main sections, each with 3 subsections. For each subsection, provide 2-3 bullet points of information to include. The target audience is [AUDIENCE] and the tone should be [TONE].")}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Prompt
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Code Explanation</CardTitle>
                    <CardDescription>For understanding complex code</CardDescription>
                  </div>
                  <Badge>Development</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md mb-4 text-sm">
                  <p>Explain the following code as if you were teaching a beginner programmer. Break down each line or block, explain what it does, and why it's important. Then suggest one way to improve or optimize this code: [PASTE CODE HERE]</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => copyToClipboard("Explain the following code as if you were teaching a beginner programmer. Break down each line or block, explain what it does, and why it's important. Then suggest one way to improve or optimize this code: [PASTE CODE HERE]")}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Prompt
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Product Description Generator</CardTitle>
                    <CardDescription>For e-commerce listings</CardDescription>
                  </div>
                  <Badge>Marketing</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md mb-4 text-sm">
                  <p>Create a compelling product description for [PRODUCT NAME]. Include key features, benefits, ideal use cases, and a unique selling proposition. The description should be approximately 150 words and appeal to [TARGET AUDIENCE]. Use persuasive language that highlights the value proposition and creates urgency.</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => copyToClipboard("Create a compelling product description for [PRODUCT NAME]. Include key features, benefits, ideal use cases, and a unique selling proposition. The description should be approximately 150 words and appeal to [TARGET AUDIENCE]. Use persuasive language that highlights the value proposition and creates urgency.")}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Prompt
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PromptLibrary;
