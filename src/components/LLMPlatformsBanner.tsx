
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import PlatformItem from './PlatformItem';
import { llmPlatforms } from '@/data/llmPlatformsData';

const LLMPlatformsBanner = () => {
  return (
    <div className="w-full py-6 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <div className="container">
        <h3 className="text-center text-lg font-medium text-muted-foreground mb-4">
          Popular LLM & AI Development Platforms
        </h3>
        <Separator className="mb-6" />
        <ScrollArea className="w-full whitespace-nowrap" type="always">
          <div className="flex items-center gap-8 px-1 py-4">
            {llmPlatforms.map((platform) => (
              <PlatformItem 
                key={platform.name}
                name={platform.name}
                url={platform.url}
                logo={platform.logo}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default LLMPlatformsBanner;
