
import React from 'react';
import StepCard from '@/components/StepCard';

const AdvancedSteps = () => {
  return (
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
  );
};

export default AdvancedSteps;
