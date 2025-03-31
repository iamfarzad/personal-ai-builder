
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen, Users, Briefcase, HeadphonesIcon, Package, RefreshCw, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import LiteratureCard from "./LiteratureCard";

// This is temporary mock data until we connect to a real API
const literatureData = [
  {
    id: 1,
    title: "The Impact of AI on Knowledge Work",
    authors: "Zhang et al.",
    summary: "This paper explores how AI is transforming knowledge-intensive professions and suggests frameworks for human-AI collaboration across different sectors.",
    publicationDate: "2023-05-15",
    category: "leadership",
    keywords: ["AI adoption", "knowledge work", "digital transformation"],
    link: "https://example.com/paper1",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Ethical Considerations in AI Implementation",
    authors: "Johnson & Patel",
    summary: "A comprehensive analysis of ethical challenges businesses face when implementing AI systems, with case studies from healthcare, finance, and retail sectors.",
    publicationDate: "2023-02-28",
    category: "data-ethics",
    keywords: ["AI ethics", "responsible AI", "business ethics"],
    link: "https://example.com/paper2",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Optimizing Customer Service with AI Assistants",
    authors: "Rodriguez et al.",
    summary: "This research examines the effectiveness of AI assistants in customer service environments, measuring customer satisfaction, resolution times, and agent productivity.",
    publicationDate: "2023-07-10",
    category: "customer-service",
    keywords: ["customer experience", "AI assistants", "service optimization"],
    link: "https://example.com/paper3",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "AI-Driven Organizational Change",
    authors: "Williams & Taylor",
    summary: "A study of how AI implementation drives organizational restructuring, with strategies for managing change and mitigating employee resistance.",
    publicationDate: "2023-04-22",
    category: "organizational-change",
    keywords: ["change management", "organizational psychology", "digital adoption"],
    link: "https://example.com/paper4",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "The Future of HR: AI's Role in Talent Management",
    authors: "Garcia & Brown",
    summary: "This paper investigates how AI tools are transforming recruitment, onboarding, training, and employee development in leading organizations.",
    publicationDate: "2023-08-05",
    category: "hr",
    keywords: ["talent management", "HR technology", "recruitment"],
    link: "https://example.com/paper5",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Supply Chain Optimization through AI",
    authors: "Lee et al.",
    summary: "A technical analysis of AI applications in supply chain management, including demand forecasting, inventory optimization, and logistics planning.",
    publicationDate: "2023-06-30",
    category: "operations",
    keywords: ["supply chain", "logistics", "optimization algorithms"],
    link: "https://example.com/paper6",
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
                <p className="text-slate-500">No results found. Try adjusting your search criteria.</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
