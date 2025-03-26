
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LevelSection from '@/components/LevelSection';
import StepCard from '@/components/StepCard';
import Footer from '@/components/Footer';

const Index = () => {
  // Animate elements when they come into view
  useEffect(() => {
    // Optional: Add scroll-based animations
    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <LevelSection
          id="basic"
          title="Basic (Beginner Level)"
          subtitle="For users with beginner technical skills. Focus on using pre-built LLM services and simple tools to create a personal or small business AI assistant with minimal coding."
          level="Basic"
        >
          <div className="space-y-6">
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
            >
              Note what the limitations are. Does the AI give wrong answers on certain topics? Does it struggle 
              with very long inputs? Use these observations to plan improvements.
            </StepCard>
          </div>
        </LevelSection>
        
        <LevelSection
          id="intermediate"
          title="Intermediate Level"
          subtitle="For those with some programming experience. Build more customized AI tools or business automations by coding with APIs, using dev tools, and possibly light fine-tuning."
          level="Intermediate"
          className="bg-pattern-light"
        >
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
        </LevelSection>
        
        <LevelSection
          id="advanced"
          title="Advanced Level"
          subtitle="For advanced developers or organizations. This involves deep integration of AI into products or business processes, custom model fine-tuning, multi-modal interfaces, and rigorous deployment considerations."
          level="Advanced"
        >
          <div className="space-y-6">
            <StepCard 
              number={1} 
              title="Align AI projects with business strategy"
              platforms={[
                {
                  name: "BCG AI Strategy",
                  url: "https://www.bcg.com/capabilities/digital-technology-data/artificial-intelligence",
                  description: "Consulting on AI business strategy and implementation"
                },
                {
                  name: "Accenture AI",
                  url: "https://www.accenture.com/us-en/services/artificial-intelligence-index",
                  description: "Strategic consulting for enterprise AI implementation"
                },
                {
                  name: "McKinsey AI",
                  url: "https://www.mckinsey.com/capabilities/quantumblack/how-we-help-clients",
                  description: "AI consulting and implementation for enterprises"
                }
              ]}
            >
              Identify high-impact use cases, engage stakeholders to define success metrics, and address 
              compliance or policy requirements for your AI deployment.
            </StepCard>
            
            <StepCard 
              number={2} 
              title="Select an architecture and LLM approach"
              platforms={[
                {
                  name: "Azure OpenAI Service",
                  url: "https://azure.microsoft.com/en-us/products/ai-services/openai-service",
                  description: "Enterprise-grade deployment of OpenAI models"
                },
                {
                  name: "Weights & Biases",
                  url: "https://wandb.ai",
                  description: "MLOps platform for tracking experiments, models, and datasets"
                },
                {
                  name: "Anyscale",
                  url: "https://www.anyscale.com",
                  description: "Platform for building scalable AI applications"
                },
                {
                  name: "Databricks",
                  url: "https://www.databricks.com",
                  description: "Data and AI platform for large-scale model training"
                }
              ]}
            >
              Decide whether to use existing models, fine-tune foundation models, or implement Retrieval-Augmented 
              Generation (RAG) to combine models with your knowledge base.
            </StepCard>
            
            <StepCard 
              number={3} 
              title="Develop with robust engineering practices"
              platforms={[
                {
                  name: "LangChain",
                  url: "https://www.langchain.com",
                  description: "Framework for developing applications powered by language models"
                },
                {
                  name: "Haystack",
                  url: "https://haystack.deepset.ai",
                  description: "Open-source framework for building NLP pipelines"
                },
                {
                  name: "FastAPI",
                  url: "https://fastapi.tiangolo.com",
                  description: "Framework for building high-performance APIs"
                },
                {
                  name: "Docker",
                  url: "https://www.docker.com",
                  description: "Platform for developing, shipping, and running applications in containers"
                }
              ]}
            >
              Implement modular design with microservices, multiple interface types, sophisticated context 
              management, and integration with external tools through agent frameworks.
            </StepCard>
            
            <StepCard 
              number={4} 
              title="Fine-tune and iterate on AI performance"
              platforms={[
                {
                  name: "OpenAI Fine-tuning",
                  url: "https://platform.openai.com/docs/guides/fine-tuning",
                  description: "Guide to fine-tuning OpenAI models"
                },
                {
                  name: "TensorFlow",
                  url: "https://www.tensorflow.org",
                  description: "Platform for building and training ML models"
                },
                {
                  name: "PyTorch",
                  url: "https://pytorch.org",
                  description: "Open source machine learning framework"
                },
                {
                  name: "Ragas",
                  url: "https://docs.ragas.io",
                  description: "Evaluation framework for RAG systems"
                }
              ]}
            >
              Invest in domain-specific fine-tuning, optimize prompts with few-shot examples, and establish 
              feedback loops for continuous improvement.
            </StepCard>
            
            <StepCard 
              number={5} 
              title="Ensure scalability and reliability"
              platforms={[
                {
                  name: "Kubernetes",
                  url: "https://kubernetes.io",
                  description: "Container orchestration system for automating deployment and scaling"
                },
                {
                  name: "Terraform",
                  url: "https://www.terraform.io",
                  description: "Infrastructure as code tool for provisioning and managing resources"
                },
                {
                  name: "Datadog",
                  url: "https://www.datadoghq.com",
                  description: "Monitoring and security platform for cloud applications"
                },
                {
                  name: "New Relic",
                  url: "https://newrelic.com",
                  description: "Observability platform for monitoring applications"
                }
              ]}
            >
              Plan for high availability with containerization, auto-scaling, global distribution via CDNs, 
              comprehensive monitoring, and fallback mechanisms.
            </StepCard>
            
            <StepCard 
              number={6} 
              title="Address security, privacy, and compliance"
              platforms={[
                {
                  name: "AWS Security Hub",
                  url: "https://aws.amazon.com/security-hub",
                  description: "Security and compliance center for AWS"
                },
                {
                  name: "Auth0",
                  url: "https://auth0.com",
                  description: "Authentication and authorization platform"
                },
                {
                  name: "OpenAI Moderation API",
                  url: "https://platform.openai.com/docs/guides/moderation",
                  description: "Tool to detect harmful content"
                },
                {
                  name: "Vault",
                  url: "https://www.vaultproject.io",
                  description: "Tool for securely storing and accessing secrets"
                }
              ]}
            >
              Implement data privacy measures, access controls, compliance with industry standards, and content 
              filtering to prevent harmful outputs.
            </StepCard>
            
            <StepCard 
              number={7} 
              title="Deploy to production and distribute"
              platforms={[
                {
                  name: "GitLab CI/CD",
                  url: "https://docs.gitlab.com/ee/ci",
                  description: "Continuous integration and deployment platform"
                },
                {
                  name: "GitHub Actions",
                  url: "https://github.com/features/actions",
                  description: "CI/CD and automation platform integrated with GitHub"
                },
                {
                  name: "CircleCI",
                  url: "https://circleci.com",
                  description: "Continuous integration and delivery platform"
                },
                {
                  name: "Spinnaker",
                  url: "https://spinnaker.io",
                  description: "Multi-cloud continuous delivery platform"
                }
              ]}
            >
              Use staged rollout strategies, ensure consistency across platforms, and provide training to help 
              users adapt to the new AI system.
            </StepCard>
            
            <StepCard 
              number={8} 
              title="Ongoing maintenance and integration"
              platforms={[
                {
                  name: "MLflow",
                  url: "https://mlflow.org",
                  description: "Platform for managing the ML lifecycle"
                },
                {
                  name: "Grafana",
                  url: "https://grafana.com",
                  description: "Analytics and monitoring solution"
                },
                {
                  name: "Prometheus",
                  url: "https://prometheus.io",
                  description: "Monitoring system and time series database"
                },
                {
                  name: "GitHub",
                  url: "https://github.com",
                  description: "Platform for version control and collaboration"
                }
              ]}
            >
              Monitor model performance over time, update models and data regularly, expand capabilities as 
              needed, and manage costs at scale.
            </StepCard>
          </div>
        </LevelSection>
        
        {/* Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 z-0" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="heading-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Build Your Personal AI?
              </motion.h2>
              
              <motion.p
                className="paragraph mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Start your journey today by exploring the tools and techniques that match your skill level.
                From simple assistants to advanced AI systems, the possibilities are endless.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button className="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  Get Started Now
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
