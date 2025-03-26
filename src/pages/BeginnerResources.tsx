
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { AlertTriangle, Lightbulb, Info, CheckCircle, BookOpen } from 'lucide-react';

const BeginnerResources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center mb-4"
            >
              &larr; Back to main guide
            </Link>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Beginner Resources</h1>
            <p className="text-xl text-muted-foreground">
              Essential information to help you start your AI development journey
            </p>
          </div>
          
          <Tabs defaultValue="limitations">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="limitations">Platform Limitations</TabsTrigger>
              <TabsTrigger value="common-errors">Common Errors</TabsTrigger>
              <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
            </TabsList>
            
            <TabsContent value="limitations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-500" />
                    <span>Understanding No-Code Platform Limitations</span>
                  </CardTitle>
                  <CardDescription>
                    Every no-code platform has boundaries - knowing them helps you plan better
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Technical Constraints</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Most platforms restrict you to specific frameworks or technologies</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Limited backend capabilities without integrations</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Deployment options may be more restrictive</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Customization & Scaling</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Tradeoff between ease-of-use and flexibility</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Works well for small/medium projects but may face limitations at scale</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Complex API interactions may require coding knowledge</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">When to consider custom development</h3>
                    <p className="text-muted-foreground mb-4">
                      No-code platforms are excellent for rapid prototyping and many production use cases, 
                      but you might need custom development if:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>You need highly specialized functionality not supported by the platform</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>Your application requires extreme performance optimization</span>
                      </li>
                      <li className="flex gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>You're building complex, enterprise-grade systems with unique requirements</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="common-errors" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    <span>Common Errors & How to Avoid Them</span>
                  </CardTitle>
                  <CardDescription>
                    Troubleshooting tips for the most frequent challenges beginners face
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Technical Errors</h3>
                      <ul className="space-y-4 text-muted-foreground">
                        <li>
                          <div className="font-medium text-foreground">Type & Import Errors</div>
                          <p>Pay attention to TypeScript errors about incompatible types and ensure all components are properly imported.</p>
                        </li>
                        <li>
                          <div className="font-medium text-foreground">Non-Reactive Code</div>
                          <p>Remember that React updates based on state changes, not direct DOM manipulation.</p>
                        </li>
                        <li>
                          <div className="font-medium text-foreground">API Request Handling</div>
                          <p>Always account for loading states, errors, and proper async operation handling.</p>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Design & Architecture Errors</h3>
                      <ul className="space-y-4 text-muted-foreground">
                        <li>
                          <div className="font-medium text-foreground">Component Structure</div>
                          <p>Create focused, reusable components instead of large, monolithic ones.</p>
                        </li>
                        <li>
                          <div className="font-medium text-foreground">Prop Drilling</div>
                          <p>Use context or state management for data that needs to be accessed by many components.</p>
                        </li>
                        <li>
                          <div className="font-medium text-foreground">CSS/Styling Conflicts</div>
                          <p>Be consistent with your styling approach to avoid unexpected visual results.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Debugging Tips</h3>
                    <p className="text-muted-foreground mb-4">When you encounter errors:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Read error messages carefully - they often tell you exactly what's wrong</span>
                      </li>
                      <li className="flex gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Use console.log statements to trace data flow and component rendering</span>
                      </li>
                      <li className="flex gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Try isolating the problem by temporarily removing or simplifying components</span>
                      </li>
                      <li className="flex gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Search for the specific error message online - you're likely not the first to encounter it</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="best-practices" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-500" />
                    <span>Best Practices for No-Code Development</span>
                  </CardTitle>
                  <CardDescription>
                    Tips and strategies to build better projects with less frustration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Planning & Organization</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Start with a clear outline of features and user flows</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Break large projects into smaller, manageable milestones</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Create reusable components for repeated UI elements</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Consider data structure early - changing later is harder</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Implementation Tips</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Design with responsiveness in mind from the start</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Test frequently rather than building everything at once</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Document your work - especially custom logic and integrations</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Plan for error states and user feedback</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Learning Strategies</h3>
                    <p className="text-muted-foreground mb-4">Effective ways to improve your no-code development skills:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Start with small, complete projects rather than ambitious partial ones</span>
                      </li>
                      <li className="flex gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Reverse-engineer templates and examples to understand how they work</span>
                      </li>
                      <li className="flex gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Join communities for your chosen platform to learn from others</span>
                      </li>
                      <li className="flex gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Learn incrementally - master basics before attempting complex features</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BeginnerResources;
