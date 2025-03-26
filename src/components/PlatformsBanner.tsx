
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

// Aggregated list of all platforms mentioned across steps
const platforms = [
  { name: "ChatGPT", url: "https://chat.openai.com" },
  { name: "Google's Gemini", url: "https://gemini.google.com" },
  { name: "Anthropic's Claude", url: "https://claude.ai" },
  { name: "Hugging Face", url: "https://huggingface.co" },
  { name: "OpenAI API", url: "https://platform.openai.com" },
  { name: "Google AI Studio", url: "https://ai.google.dev/" },
  { name: "Anthropic Claude API", url: "https://console.anthropic.com" },
  { name: "Replit", url: "https://replit.com" },
  { name: "Zapier", url: "https://zapier.com" },
  { name: "IFTTT", url: "https://ifttt.com" },
  { name: "Vercel", url: "https://vercel.com" },
  { name: "Netlify", url: "https://netlify.com" },
  { name: "AWS", url: "https://aws.amazon.com" },
  { name: "Google Cloud", url: "https://cloud.google.com" },
  { name: "Heroku", url: "https://www.heroku.com" },
  { name: "OpenAI Fine-tuning", url: "https://platform.openai.com/docs/guides/fine-tuning" },
  { name: "LangChain", url: "https://www.langchain.com" },
  { name: "LlamaIndex", url: "https://www.llamaindex.ai" },
  { name: "Vercel AI SDK", url: "https://sdk.vercel.ai/docs" },
  { name: "Streamlit", url: "https://streamlit.io" },
  { name: "React", url: "https://react.dev" },
  { name: "Next.js", url: "https://nextjs.org" },
  { name: "Flutter", url: "https://flutter.dev" },
  { name: "Supabase", url: "https://supabase.com" },
  { name: "Firebase", url: "https://firebase.google.com" },
  { name: "MongoDB", url: "https://www.mongodb.com" },
  { name: "Azure OpenAI Service", url: "https://azure.microsoft.com/en-us/products/ai-services/openai-service" },
  { name: "Weights & Biases", url: "https://wandb.ai" },
  { name: "Kubernetes", url: "https://kubernetes.io" },
  { name: "TensorFlow", url: "https://www.tensorflow.org" },
  { name: "PyTorch", url: "https://pytorch.org" }
];

const PlatformsBanner = () => {
  return (
    <div className="w-full py-6 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50">
      <div className="container">
        <h3 className="text-center text-lg font-medium text-muted-foreground mb-4">
          Powered by Industry-Leading Platforms
        </h3>
        <Separator className="mb-6" />
        <ScrollArea className="w-full whitespace-nowrap" type="always">
          <div className="flex items-center gap-8 px-1 py-4">
            {platforms.map((platform) => (
              <a 
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
              >
                <div className="h-10 w-10 rounded-md bg-muted/70 flex items-center justify-center">
                  <span className="text-xs font-medium overflow-hidden text-ellipsis max-w-[40px]">
                    {platform.name.split(' ')[0]}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {platform.name.length > 12 ? platform.name.substring(0, 10) + '...' : platform.name}
                </span>
              </a>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default PlatformsBanner;
