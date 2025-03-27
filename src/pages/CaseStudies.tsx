
import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Show welcome toast
    toast({
      title: "AI Case Studies",
      description: "Learn from real-world AI implementation examples",
      duration: 4000,
    });
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent -z-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent -z-10 rounded-full blur-3xl" />
      
      <main className="flex-grow">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">AI Case Studies</h1>
          <p className="text-lg text-muted-foreground mb-8">Explore real-world examples of how individuals and organizations are leveraging AI tools for personal and professional growth.</p>
          
          <Separator className="my-8" />
          
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Writing Assistance</CardTitle>
                    <CardDescription>How a novelist used AI to overcome writer's block</CardDescription>
                  </div>
                  <Badge>Creative</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">A struggling novelist used AI tools to generate plot ideas and character backgrounds, helping to overcome severe writer's block while maintaining their unique voice and style.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>40% increase in daily word count</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>Completed novel draft in 3 months instead of estimated 8 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>Maintained authentic voice while using AI as an ideation tool</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-auto">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Personal Learning</CardTitle>
                    <CardDescription>How a career changer mastered programming with AI</CardDescription>
                  </div>
                  <Badge>Education</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">A marketing professional transitioning to web development used AI tools to create a personalized learning curriculum, debug code, and accelerate their career transition.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>Reduced learning time by 60%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>Built portfolio of 5 projects in 3 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>Secured junior developer position after 6 months of learning</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-auto">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Content Creation</CardTitle>
                    <CardDescription>How a small business scaled their content marketing</CardDescription>
                  </div>
                  <Badge>Business</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">A small e-commerce business with limited resources used AI tools to scale their content marketing efforts across multiple channels while maintaining quality and brand voice.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>300% increase in content output</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>70% reduction in content creation costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>45% increase in organic traffic over 6 months</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-auto">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Personal Productivity</CardTitle>
                    <CardDescription>How a busy professional reclaimed 10+ hours weekly</CardDescription>
                  </div>
                  <Badge>Productivity</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">A project manager integrated AI tools into their daily workflow to automate routine tasks, summarize meetings, and manage communications more efficiently.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>10+ hours saved weekly on routine tasks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>90% reduction in meeting note-taking time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span>Improved work-life balance reported by team members</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-auto">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;
