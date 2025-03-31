
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks';
import { 
  Building, 
  ShoppingBag, 
  GraduationCap, 
  HeartPulse, 
  Factory, 
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const CaseStudiesPage = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Show welcome toast
    toast({
      title: "Case Studies",
      description: "Real-world AI implementation examples",
      duration: 4000,
    });
  }, [toast]);

  const caseStudies = [
    {
      id: 1,
      title: "Customer Service Transformation",
      industry: "Retail",
      description: "How a major retail chain implemented AI chatbots to handle 78% of customer inquiries, reducing response time by 65% and improving customer satisfaction scores.",
      icon: <ShoppingBag className="h-8 w-8 text-primary" />,
      results: ["78% automation rate", "65% faster responses", "24% higher satisfaction scores"]
    },
    {
      id: 2,
      title: "Predictive Maintenance Implementation",
      industry: "Manufacturing",
      description: "A manufacturing company deployed AI to predict equipment failures, reducing downtime by 47% and maintenance costs by $2.3M annually.",
      icon: <Factory className="h-8 w-8 text-primary" />,
      results: ["47% downtime reduction", "$2.3M annual savings", "92% failure prediction accuracy"]
    },
    {
      id: 3,
      title: "AI-Enhanced Learning Platform",
      industry: "Education",
      description: "University system that implemented personalized learning paths through AI, resulting in a 32% improvement in course completion rates and higher student engagement.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      results: ["32% higher completion rate", "41% increased engagement", "Personalized learning for 50,000+ students"]
    },
    {
      id: 4,
      title: "Healthcare Diagnostic Assistant",
      industry: "Healthcare",
      description: "How a hospital network integrated AI diagnostic tools that improved early detection rates by 36% while reducing physician workload.",
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      results: ["36% improved early detection", "22% reduced diagnostic time", "17% physician time saved"]
    },
    {
      id: 5,
      title: "Enterprise Workflow Optimization",
      industry: "Corporate",
      description: "A multinational corporation's successful implementation of AI-powered workflow management tools that increased productivity across departments by 28%.",
      icon: <Building className="h-8 w-8 text-primary" />,
      results: ["28% productivity increase", "41% reduction in manual processes", "$3.7M annual operational savings"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent -z-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent -z-10 rounded-full blur-3xl" />
      
      <main className="flex-grow">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4">AI Implementation Case Studies</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore real-world examples of how organizations across various industries are 
              successfully implementing AI solutions to solve complex problems and drive 
              measurable business outcomes.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        {study.icon}
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{study.industry}</span>
                    </div>
                    <CardTitle>{study.title}</CardTitle>
                    <CardDescription className="text-base">{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="text-sm font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full justify-between group">
                      <span>Read full case study</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Looking for custom AI solutions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team can help you identify opportunities for AI implementation in your organization and 
              develop a strategy tailored to your specific business needs.
            </p>
            <Button size="lg" className="px-8">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudiesPage;
