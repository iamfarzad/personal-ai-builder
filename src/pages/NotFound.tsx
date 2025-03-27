
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center py-20">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="bg-muted/50 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
