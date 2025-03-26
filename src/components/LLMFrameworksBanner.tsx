
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import PlatformItem from './PlatformItem';
import { llmFrameworks } from '@/data/llmPlatformsData';

const LLMFrameworksBanner = () => {
  return (
    <div className="w-full py-6 bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50">
      <div className="container">
        <h3 className="text-center text-lg font-medium text-muted-foreground mb-4">
          LLM Development Frameworks & Tools
        </h3>
        <Separator className="mb-6" />
        <ScrollArea className="w-full whitespace-nowrap" type="always">
          <div className="flex items-center gap-8 px-1 py-4">
            {llmFrameworks.map((framework) => (
              <PlatformItem 
                key={framework.name}
                name={framework.name}
                url={framework.url}
                logo={framework.logo}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default LLMFrameworksBanner;
