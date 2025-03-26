
import React from 'react';
import StepCard from '@/components/StepCard';

export const AdvancedStep1 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
    tips={[
      "Perform a thorough cost-benefit analysis before starting",
      "Identify KPIs that directly connect to business objectives",
      "Get buy-in from key stakeholders across departments",
      "Consider both short-term wins and long-term strategic value"
    ]}
  >
    Identify high-impact use cases, engage stakeholders to define success metrics, and address 
    compliance or policy requirements for your AI deployment.
  </StepCard>
);

export const AdvancedStep2 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
    tips={[
      "Consider a hybrid approach using both proprietary and open-source models",
      "Design for model version changes and improvements over time",
      "Evaluate specialized models for specific components of your system",
      "Document architecture decisions and tradeoffs for future reference"
    ]}
  >
    Decide whether to use existing models, fine-tune foundation models, or implement Retrieval-Augmented 
    Generation (RAG) to combine models with your knowledge base.
  </StepCard>
);

export const AdvancedStep3 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
    tips={[
      "Implement comprehensive logging for model inputs, outputs, and errors",
      "Use dependency injection patterns for swappable model providers",
      "Design for multiple interface types (API, chat, voice) from the start",
      "Create a fallback strategy for when primary models are unavailable"
    ]}
  >
    Implement modular design with microservices, multiple interface types, sophisticated context 
    management, and integration with external tools through agent frameworks.
  </StepCard>
);

export const AdvancedStep4 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
    tips={[
      "Create a systematic evaluation framework with objective metrics",
      "Collect and label real user interactions for improvement data",
      "Consider RLHF (Reinforcement Learning from Human Feedback) for advanced tuning",
      "Implement A/B testing to validate improvements objectively"
    ]}
  >
    Invest in domain-specific fine-tuning, optimize prompts with few-shot examples, and establish 
    feedback loops for continuous improvement.
  </StepCard>
);

export const AdvancedStep5 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
    tips={[
      "Implement circuit breakers for dependent services",
      "Design for graceful degradation when AI services are overloaded",
      "Create a caching strategy for common queries",
      "Plan for regional redundancy for mission-critical systems"
    ]}
  >
    Plan for high availability with containerization, auto-scaling, global distribution via CDNs, 
    comprehensive monitoring, and fallback mechanisms.
  </StepCard>
);

export const AdvancedStep6 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
    tips={[
      "Implement role-based access control for sensitive operations",
      "Conduct regular security audits of your AI system",
      "Create a data retention and deletion policy",
      "Have legal experts review your privacy policy and terms of service"
    ]}
  >
    Implement data privacy measures, access controls, compliance with industry standards, and content 
    filtering to prevent harmful outputs.
  </StepCard>
);

export const AdvancedStep7 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
    tips={[
      "Implement feature flags for controlled rollout",
      "Create a rollback plan for each deployment",
      "Establish clear communication channels for deployment updates",
      "Automate as much of the deployment process as possible"
    ]}
  >
    Use staged rollout strategies, ensure consistency across platforms, and provide training to help 
    users adapt to the new AI system.
  </StepCard>
);

export const AdvancedStep8 = ({ number, onMarkComplete, completed }: { number: number, onMarkComplete?: (number: number, isComplete: boolean) => void, completed?: boolean }) => (
  <StepCard 
    number={number} 
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
    onMarkComplete={onMarkComplete}
    completed={completed}
    tips={[
      "Establish a regular cadence for model updates and evaluations",
      "Create a knowledge base of common issues and solutions",
      "Monitor for data drift and model performance degradation",
      "Build a feedback loop with end users for continuous improvement"
    ]}
  >
    Monitor model performance over time, update models and data regularly, expand capabilities as 
    needed, and manage costs at scale.
  </StepCard>
);
