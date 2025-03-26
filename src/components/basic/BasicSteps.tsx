import React, { useState, useEffect } from 'react';
import StepCard from '@/components/StepCard';
import { Progress } from '@/components/ui/progress';

const BasicSteps = () => {
  const [completedSteps, setCompletedSteps] = useState<{[key: number]: boolean}>({});
  const [progress, setProgress] = useState(0);
  
  const totalSteps = 9;
  
  const handleMarkComplete = (stepNumber: number, isComplete: boolean) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepNumber]: isComplete
    }));
  };
  
  useEffect(() => {
    const completedCount = Object.values(completedSteps).filter(Boolean).length;
    setProgress(Math.round((completedCount / totalSteps) * 100));
  }, [completedSteps]);

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Your progress: {progress}% complete</span>
          <span className="text-sm text-muted-foreground">{Object.values(completedSteps).filter(Boolean).length}/{totalSteps} steps</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <StepCard 
        number={1} 
        title="Define your AI's purpose and use case"
        platforms={[
          {
            name: "AI Use Case Generator",
            url: "https://theapplaunchpad.com/ai-use-case-generator/",
            description: "A tool that helps you brainstorm potential AI use cases for your specific needs"
          },
          {
            name: "Anthropic's Claude",
            url: "https://claude.ai",
            description: "Ask Claude to help you define scope and purpose for your AI assistant"
          }
        ]}
        onMarkComplete={(isComplete) => handleMarkComplete(1, isComplete)}
        completed={completedSteps[1] || false}
        tips={[
          "Start with a very specific problem rather than a broad one",
          "Think about repetitive tasks in your workflow that could be automated",
          "Consider tasks where you need to process large amounts of text or data",
          "Focus on one core functionality first before expanding"
        ]}
      >
        Decide what you want your AI to do – for example, a personal writing assistant, a customer 
        support chatbot, an idea generator, or a simple business automation. Keep the scope simple 
        (e.g. answering FAQs or scheduling help) to match a beginner's capability.
      </StepCard>
      
      <StepCard 
        number={2} 
        title="Choose a large language model service for quick use"
        platforms={[
          {
            name: "ChatGPT",
            url: "https://chat.openai.com",
            description: "OpenAI's user-friendly chat interface for their GPT models"
          },
          {
            name: "Google's Gemini",
            url: "https://gemini.google.com",
            description: "Google's conversational AI with multimodal capabilities"
          },
          {
            name: "Anthropic's Claude",
            url: "https://claude.ai",
            description: "Anthropic's easy-to-use conversational AI assistant"
          },
          {
            name: "Hugging Face",
            url: "https://huggingface.co",
            description: "Platform with thousands of open-source models and spaces"
          }
        ]}
        onMarkComplete={(isComplete) => handleMarkComplete(2, isComplete)}
        completed={completedSteps[2] || false}
        tips={[
          "ChatGPT is great for beginners with its simple interface and good documentation",
          "Consider Claude if you need longer context windows or more nuanced responses",
          "Start with the free tiers before investing in paid plans",
          "Hugging Face offers many open source models if you prefer those over proprietary options"
        ]}
      >
        Start with easy-to-access LLMs: for instance, use ChatGPT via OpenAI (through the web UI or 
        the OpenAI API) or Google's Gemini if available. These services let you leverage powerful 
        models without setup.
      </StepCard>
      
      <StepCard 
        number={3} 
        title="Experiment with the model using prompts"
        platforms={[
          {
            name: "PromptPerfect",
            url: "https://promptperfect.jina.ai/",
            description: "AI tool to optimize and improve your prompts"
          },
          {
            name: "Learn Prompting",
            url: "https://learnprompting.org/",
            description: "Free, open-source course on prompt engineering"
          },
          {
            name: "Awesome ChatGPT Prompts",
            url: "https://github.com/f/awesome-chatgpt-prompts",
            description: "Collection of prompt examples for ChatGPT"
          }
        ]}
        onMarkComplete={(isComplete) => handleMarkComplete(3, isComplete)}
        completed={completedSteps[3] || false}
        tips={[
          "Include clear instructions and constraints in your prompts",
          "Break complex tasks into smaller steps for the AI",
          "Use examples (few-shot prompting) to guide the AI's responses",
          "Experiment with system messages to set the AI's persona or role"
        ]}
      >
        In the chat interface, try asking the LLM to perform your task. Refine your prompts to get better 
        results (this is "prompt engineering"). For example, if creating a content assistant, prompt it 
        with "You are a helpful writing assistant. Help me draft an email about X."
      </StepCard>
      
      <StepCard 
        number={4} 
        title="Use no-code tools to prototype an app"
        platforms={[
          {
            name: "Lovable",
            url: "https://lovable.dev",
            description: "Build web applications with AI assistance"
          },
          {
            name: "Vercel v0",
            url: "https://v0.dev",
            description: "Generate UI components with AI"
          },
          {
            name: "Bubble",
            url: "https://bubble.io",
            description: "Visual programming for web apps"
          },
          {
            name: "FlutterFlow",
            url: "https://flutterflow.io",
            description: "Build native mobile apps without code"
          }
        ]}
        onMarkComplete={(isComplete) => handleMarkComplete(4, isComplete)}
        completed={completedSteps[4] || false}
        tips={[
          "Start with a simple wireframe or sketch of your interface",
          "Focus on core functionality first, add bells and whistles later",
          "Take screenshots of your prototype to share with potential users for feedback",
          "Don't worry about perfection - this is just to test your concept"
        ]}
      >
        If you want a custom interface (like a simple web app or chatbot UI) without coding everything, 
        leverage AI app builders like Vercel's V0.dev, Lovable.dev, or other no-code platforms that can 
        help you build a functional application.
      </StepCard>
      
      <StepCard 
        number={5} 
        title="Set up access to the AI model's API (if needed)"
        platforms={[
          {
            name: "OpenAI API",
            url: "https://platform.openai.com",
            description: "API access to GPT models and other OpenAI services"
          },
          {
            name: "Google AI Studio",
            url: "https://ai.google.dev/",
            description: "Platform to experiment with and deploy Google's AI models"
          },
          {
            name: "Anthropic Claude API",
            url: "https://console.anthropic.com",
            description: "API access to Claude models"
          },
          {
            name: "Hugging Face Inference API",
            url: "https://huggingface.co/inference-api",
            description: "Run machine learning models as a service"
          }
        ]}
        onMarkComplete={(isComplete) => handleMarkComplete(5, isComplete)}
        completed={completedSteps[5] || false}
        tips={[
          "Store your API keys securely and never expose them in client-side code",
          "Start with the cheapest model that meets your needs to control costs",
          "Set up usage limits to avoid unexpected charges",
          "Read the documentation for rate limits and token limitations"
        ]}
      >
        If your use case goes beyond the chat UI, sign up for the model's API such as OpenAI API, 
        Google Cloud Vertex AI, or others depending on your chosen model.
      </StepCard>
      
      <StepCard 
        number={6} 
        title="Build a simple integration or workflow"
        platforms={[
          {
            name: "Replit",
            url: "https://replit.com",
            description: "Code, create, and learn together with AI assistance"
          },
          {
            name: "Zapier",
            url: "https://zapier.com",
            description: "Connect apps and automate workflows"
          },
          {
            name: "IFTTT",
            url: "https://ifttt.com",
            description: "Connect services with simple if-this-then-that rules"
          },
          {
            name: "Make",
            url: "https://make.com",
            description: "Visual platform to design, build, and automate workflows"
          }
        ]}
        onMarkComplete={(isComplete) => handleMarkComplete(6, isComplete)}
        completed={completedSteps[6] || false}
        tips={[
          "Start with pre-built templates and modify them for your needs",
          "Test your workflows with simple test cases before scaling",
          "Document your workflow for future reference",
          "Consider error handling for when the AI service is unavailable"
        ]}
      >
        With an API key in hand, connect the LLM to your use case. Use integration platforms like Replit, 
        Zapier or IFTTT to create simple automations without extensive coding.
      </StepCard>
      
      <StepCard 
        number={7} 
        title="Test with real examples"
        platforms={[
          {
            name: "GPTSandbox",
            url: "https://gptsandbox.com",
            description: "Test your AI assistant with different prompts and scenarios"
          },
          {
            name: "LangSmith",
            url: "https://smith.langchain.com",
            description: "Debug, test and evaluate your LLM applications"
          }
        ]}
        onMarkComplete={(isComplete) => handleMarkComplete(7, isComplete)}
        completed={completedSteps[7] || false}
        tips={[
          "Create a test set of diverse inputs that covers your use cases",
          "Try edge cases and unusual inputs to test robustness",
          "Get feedback from someone who hasn't been involved in building the system",
          "Track where the AI struggles to identify improvement areas"
        ]}
      >
        Try out your AI system end-to-end. Verify the answers make sense and the system is user-friendly. 
        Tweak your prompts or rules to handle common issues.
      </StepCard>
      
      <StepCard 
        number={8} 
        title="Deploy and share"
        platforms={[
          {
            name: "Vercel",
            url: "https://vercel.com",
            description: "Platform for frontend frameworks and static sites"
          },
          {
            name: "Netlify",
            url: "https://netlify.com",
            description: "Web hosting and automation platform"
          },
          {
            name: "Replit Deployments",
            url: "https://replit.com/site/hosting",
            description: "Deploy websites directly from Replit"
          },
          {
            name: "Hugging Face Spaces",
            url: "https://huggingface.co/spaces",
            description: "Host ML demos for free"
          }
        ]}
        onMarkComplete={(isComplete) => handleMarkComplete(8, isComplete)}
        completed={completedSteps[8] || false}
        tips={[
          "Start with a soft launch to a small group before wider release",
          "Create a simple landing page explaining what your AI tool does",
          "Add a feedback mechanism for users to report issues",
          "Monitor usage and performance after deployment"
        ]}
      >
        Once satisfied, deploy your basic AI system so you (or others) can use it. Use simple hosting 
        platforms like Vercel, Replit hosting, or the built-in deployment features of no-code solutions.
      </StepCard>
      
      <StepCard 
        number={9} 
        title="Learn from the experience"
        platforms={[
          {
            name: "Deeplearning.ai",
            url: "https://www.deeplearning.ai/courses/",
            description: "Online courses in AI and deep learning"
          },
          {
            name: "Coursera AI Courses",
            url: "https://www.coursera.org/courses?query=artificial%20intelligence",
            description: "Online courses on AI fundamentals and applications"
          },
          {
            name: "OpenAI Cookbook",
            url: "https://cookbook.openai.com/",
            description: "Examples and guides for building with OpenAI's API"
          }
        ]}
        onMarkComplete={(isComplete) => handleMarkComplete(9, isComplete)}
        completed={completedSteps[9] || false}
        tips={[
          "Keep a log of what worked and what didn't",
          "Join communities like Hugging Face forums or OpenAI Discord to learn from others",
          "Take a more structured course if you want to deepen your knowledge",
          "Try implementing the same solution with a different approach or model"
        ]}
      >
        Note what the limitations are. Does the AI give wrong answers on certain topics? Does it struggle 
        with very long inputs? Use these observations to plan improvements.
      </StepCard>
    </div>
  );
};

export default BasicSteps;
