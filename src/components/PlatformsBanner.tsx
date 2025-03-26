
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import PlatformItem from './PlatformItem';
import { platforms } from '@/data/platformsData';

const PlatformsBanner = () => {
  return (
    <div className="w-full py-6 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50">
      <div className="container">
        <h3 className="text-center text-lg font-medium text-muted-foreground mb-4">
          Powered by Industry-Leading Platforms
        </h3>
        <Separator className="mb-6" />
        <ScrollArea className="w-full whitespace-nowrap" type="always">
          <div className="flex items-center gap-8 px-1 py-4">
            {platforms.map((platform) => (
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

export default PlatformsBanner;
