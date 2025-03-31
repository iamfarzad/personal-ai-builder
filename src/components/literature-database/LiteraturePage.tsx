
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen, Users, Briefcase, HeadphonesIcon, Package, RefreshCw, BarChart3, Shield } from "lucide-react";
import LiteratureCard from "./LiteratureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data - in a real application, this would be imported from a data file
const literatureData = [
  {
    id: 1,
    title: "AI Implementation Strategies for HR Departments",
    authors: "Jennifer Smith, Robert Johnson",
    summary: "A comprehensive guide for HR professionals looking to integrate AI tools into their workflows.",
    publicationDate: "2023-03-15",
    category: "hr",
    keywords: ["human resources", "AI integration", "workflow optimization"],
    link: "#",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Leadership in the Age of AI",
    authors: "Michael Chen",
    summary: "Exploring how leadership roles are evolving with the advent of artificial intelligence in the workplace.",
    publicationDate: "2023-05-22",
    category: "leadership",
    keywords: ["leadership", "management", "organizational change"],
    link: "#",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Optimizing Customer Service with Conversational AI",
    authors: "Sophia Rodriguez, Daniel Kim",
    summary: "Case studies and strategies for implementing conversational AI in customer service departments.",
    publicationDate: "2023-02-10",
    category: "customer-service",
    keywords: ["customer service", "conversational AI", "chatbots"],
    link: "#",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Ethical Considerations in AI-Driven Decision Making",
    authors: "Aisha Patel, Thomas Wilson",
    summary: "Analyzing the ethical implications of using AI for business decisions and recommendations for responsible implementation.",
    publicationDate: "2023-07-08",
    category: "data-ethics",
    keywords: ["ethics", "decision making", "responsible AI"],
    link: "#",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Supply Chain Optimization Using Machine Learning",
    authors: "Carlos Mendez",
    summary: "How machine learning algorithms can improve efficiency and reduce costs in supply chain operations.",
    publicationDate: "2023-04-30",
    category: "operations",
    keywords: ["supply chain", "machine learning", "optimization"],
    link: "#",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Digital Transformation Roadmap for Traditional Businesses",
    authors: "Emma Williams, James Taylor",
    summary: "A step-by-step guide for traditional businesses looking to undergo digital transformation with AI technologies.",
    publicationDate: "2023-06-15",
    category: "digital-transformation",
    keywords: ["digital transformation", "traditional business", "roadmap"],
    link: "#",
    imageUrl: "/placeholder.svg"
  }
];

export default function LiteraturePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredLiterature = literatureData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === "all" || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", name: "All Categories", icon: <BookOpen className="h-4 w-4" /> },
    { id: "hr", name: "Human Resources", icon: <Users className="h-4 w-4" /> },
    { id: "leadership", name: "Leadership", icon: <Briefcase className="h-4 w-4" /> },
    { id: "operations", name: "Operations", icon: <Package className="h-4 w-4" /> },
    { id: "customer-service", name: "Customer Service", icon: <HeadphonesIcon className="h-4 w-4" /> },
    { id: "product-management", name: "Product Management", icon: <BarChart3 className="h-4 w-4" /> },
    { id: "organizational-change", name: "Organizational Change", icon: <RefreshCw className="h-4 w-4" /> },
    { id: "digital-transformation", name: "Digital Transformation", icon: <BarChart3 className="h-4 w-4" /> },
    { id: "data-ethics", name: "Data Ethics", icon: <Shield className="h-4 w-4" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-muted-foreground">/</span>
                <span className="text-sm font-medium">Literature</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-3xl font-light mb-4">
          AI Business <span className="font-semibold">Literature</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Explore our curated collection of academic and industry resources on AI implementation across different
          business domains.
        </p>

        <div className="relative max-w-xl mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <Input
            type="text"
            placeholder="Search by title, author, or keyword..."
            className="pl-10 py-6 rounded-full border-slate-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setSearchQuery("")}
            >
              Clear
            </Button>
          )}
        </div>
      </motion.div>

      <Tabs defaultValue="all" onValueChange={setActiveCategory}>
        <div className="overflow-x-auto pb-4 mb-8">
          <TabsList className="inline-flex w-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-full">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-full py-2 px-4 flex items-center gap-2 whitespace-nowrap"
              >
                {category.icon}
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredLiterature.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <LiteratureCard item={item} />
                </motion.div>
              ))}
            </div>

            {filteredLiterature.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-500 dark:text-slate-400">No results found. Try adjusting your search criteria.</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
