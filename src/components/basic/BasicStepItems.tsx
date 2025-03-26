
import React from 'react';
import StepCard from '@/components/StepCard';

export const BasicStep1 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
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
);

export const BasicStep2 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
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
);

export const BasicStep3 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
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
);

export const BasicStep4 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
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
);

export const BasicStep5 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
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
);

export const BasicStep6 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
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
);

export const BasicStep7 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
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
);

export const BasicStep8 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
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
);

export const BasicStep9 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
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
);
