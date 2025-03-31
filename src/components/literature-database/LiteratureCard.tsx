
import { ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface LiteratureItem {
  id: number;
  title: string;
  authors: string;
  summary: string;
  publicationDate: string;
  category: string;
  keywords: string[];
  link: string;
  imageUrl: string;
}

export default function LiteratureCard({ item }: { item: LiteratureItem }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="h-full flex flex-col group hover:shadow-md transition-all duration-300">
      <div className="bg-slate-50 dark:bg-slate-900 relative aspect-video overflow-hidden rounded-t-md">
        <img
          src={item.imageUrl || "/placeholder.svg"}
          alt={item.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-2 flex-grow">
        <CardTitle className="text-lg">{item.title}</CardTitle>
        <div className="text-sm text-muted-foreground">
          <span>{item.authors}</span>
        </div>
        <div className="flex items-center text-xs text-muted-foreground mt-1">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{formatDate(item.publicationDate)}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-3">{item.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1">
          {item.keywords.slice(0, 3).map((keyword, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {keyword}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          asChild
          variant="outline"
          className="w-full mt-2 justify-between items-center text-xs py-1 h-8"
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <span>Read Paper</span>
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
