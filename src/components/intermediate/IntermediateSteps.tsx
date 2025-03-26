
import React from 'react';
import StepCard from '@/components/StepCard';

const IntermediateSteps = () => {
  return (
    <div className="space-y-6">
      <StepCard 
        number={1} 
        title="Plan the enhanced use case and requirements"
        platforms={[
          {
            name: "Miro",
            url: "https://miro.com",
            description: "Visual collaboration platform for planning and brainstorming"
          },
          {
            name: "Notion",
            url: "https://notion.so",
            description: "All-in-one workspace for notes, planning and collaboration"
          },
          {
            name: "Trello",
            url: "https://trello.com",
            description: "Visual project management tool"
          }
        ]}
      >
        Revisit your project goals with ambition. Identify new features or use cases to tackle, and consider 
        scale – will a few dozen internal users use this tool, or is it customer-facing?
      </StepCard>
      
      <StepCard 
        number={2} 
        title="Choose the right LLM and platform for your needs"
        platforms={[
          {
            name: "OpenAI Models",
            url: "https://platform.openai.com/docs/models",
            description: "Overview of all available OpenAI models"
          },
          {
            name: "Anthropic Models",
            url: "https://docs.anthropic.com/claude/docs/models-overview",
            description: "Overview of Claude model capabilities"
          },
          {
            name: "HuggingFace Model Hub",
            url: "https://huggingface.co/models",
            description: "Repository of thousands of pre-trained models"
          },
          {
            name: "Replicate",
            url: "https://replicate.com",
            description: "Run open-source models with a cloud API"
          }
        ]}
      >
        Evaluate providers beyond the basic options, considering factors like cost, performance, and any 
        domain-specific strengths. Consider OpenAI, Google's Gemini, Anthropic Claude, or emerging models.
      </StepCard>
      
      <StepCard 
        number={3} 
        title="Set up your development environment"
        platforms={[
          {
            name: "VS Code",
            url: "https://code.visualstudio.com",
            description: "Powerful code editor with GitHub Copilot integration"
          },
          {
            name: "GitHub Copilot",
            url: "https://github.com/features/copilot",
            description: "AI pair programmer that suggests code as you type"
          },
          {
            name: "Replit",
            url: "https://replit.com",
            description: "Browser-based IDE with AI assistance"
          },
          {
            name: "JupyterLab",
            url: "https://jupyter.org",
            description: "Web-based interactive development environment for notebooks"
          }
        ]}
      >
        Use an IDE with AI coding assistant like VS Code with GitHub Copilot or Replit with Ghostwriter. 
        Pick a stack you're comfortable with and use version control for tracking code changes.
      </StepCard>
      
      <StepCard 
        number={4} 
        title="Integrate the LLM into a custom application"
        platforms={[
          {
            name: "LangChain",
            url: "https://www.langchain.com",
            description: "Framework for developing applications powered by language models"
          },
          {
            name: "LlamaIndex",
            url: "https://www.llamaindex.ai",
            description: "Data framework for LLM applications"
          },
          {
            name: "Vercel AI SDK",
            url: "https://sdk.vercel.ai/docs",
            description: "Library for building AI-powered user interfaces"
          },
          {
            name: "Streamlit",
            url: "https://streamlit.io",
            description: "Framework for rapidly building ML and data science web apps"
          }
        ]}
      >
        Write code to handle user queries, send them to the LLM API, and process the responses. Incorporate 
        business rules and test with sample inputs.
      </StepCard>
      
      <StepCard 
        number={5} 
        title="Build a user interface (web, mobile, or voice)"
        platforms={[
          {
            name: "React",
            url: "https://react.dev",
            description: "JavaScript library for building user interfaces"
          },
          {
            name: "Next.js",
            url: "https://nextjs.org",
            description: "React framework for production-grade applications"
          },
          {
            name: "Flutter",
            url: "https://flutter.dev",
            description: "UI toolkit for building natively compiled applications"
          },
          {
            name: "Voiceflow",
            url: "https://www.voiceflow.com",
            description: "Design, prototype, and build voice apps"
          }
        ]}
      >
        Create an interface that suits your users, whether it's a web app, mobile app, or voice interface. 
        Ensure good user experience with loading states and error handling.
      </StepCard>
      
      <StepCard 
        number={6} 
        title="Incorporate memory or simple data storage"
        platforms={[
          {
            name: "Supabase",
            url: "https://supabase.com",
            description: "Open source Firebase alternative with PostgreSQL database"
          },
          {
            name: "Firebase",
            url: "https://firebase.google.com",
            description: "Google's platform for building web and mobile applications"
          },
          {
            name: "Redis",
            url: "https://redis.com",
            description: "In-memory data structure store, used as database and cache"
          },
          {
            name: "MongoDB",
            url: "https://www.mongodb.com",
            description: "Document-oriented NoSQL database"
          }
        ]}
      >
        Implement methods to store context between interactions, using conversation history or a database 
        to give your AI a "memory" of past interactions or user preferences.
      </StepCard>
      
      <StepCard 
        number={7} 
        title="Consider fine-tuning or customizing the model"
        platforms={[
          {
            name: "OpenAI Fine-tuning",
            url: "https://platform.openai.com/docs/guides/fine-tuning",
            description: "Guide to fine-tuning OpenAI models"
          },
          {
            name: "Hugging Face Transfer Learning",
            url: "https://huggingface.co/docs/transformers/training",
            description: "Fine-tune pre-trained models on your datasets"
          },
          {
            name: "Vector Databases",
            url: "https://www.pinecone.io",
            description: "Vector database for storing and querying embeddings"
          },
          {
            name: "LlamaIndex RAG",
            url: "https://docs.llamaindex.ai/en/stable/examples/retrievers/",
            description: "Implement retrieval augmented generation"
          }
        ]}
      >
        If the base model isn't meeting specific needs, explore fine-tuning on your custom dataset or use 
        techniques like Retrieval Augmented Generation to combine the model with your proprietary data.
      </StepCard>
      
      <StepCard 
        number={8} 
        title="Test extensively with target users"
        platforms={[
          {
            name: "UserTesting",
            url: "https://www.usertesting.com",
            description: "Platform for getting feedback from real users"
          },
          {
            name: "Maze",
            url: "https://maze.co",
            description: "Rapid testing platform for user research"
          },
          {
            name: "Hotjar",
            url: "https://www.hotjar.com",
            description: "Behavior analytics and feedback platform"
          }
        ]}
      >
        Gather feedback on the AI's answers, interface convenience, and handling of edge cases. Iterate 
        based on this feedback.
      </StepCard>
      
      <StepCard 
        number={9} 
        title="Deploy on a scalable platform"
        platforms={[
          {
            name: "AWS",
            url: "https://aws.amazon.com",
            description: "Cloud computing services for deploying scalable applications"
          },
          {
            name: "Google Cloud",
            url: "https://cloud.google.com",
            description: "Suite of cloud computing services for app deployment"
          },
          {
            name: "Vercel",
            url: "https://vercel.com",
            description: "Platform optimized for frontend frameworks and static sites"
          },
          {
            name: "Heroku",
            url: "https://www.heroku.com",
            description: "Cloud platform for building and deploying applications"
          }
        ]}
      >
        Choose robust deployment options like Vercel, cloud platforms (AWS, Heroku), or app stores for 
        mobile apps. Set up monitoring and ensure security.
      </StepCard>
      
      <StepCard 
        number={10} 
        title="Documentation and training"
        platforms={[
          {
            name: "GitBook",
            url: "https://www.gitbook.com",
            description: "Platform for creating beautiful documentation"
          },
          {
            name: "ReadMe",
            url: "https://readme.com",
            description: "Developer hub for documentation and API references"
          },
          {
            name: "Notion",
            url: "https://notion.so",
            description: "All-in-one workspace for notes and documentation"
          }
        ]}
      >
        Document how the system works and provide guidance to users, setting proper expectations about 
        the AI's capabilities and limitations.
      </StepCard>
    </div>
  );
};

export default IntermediateSteps;
