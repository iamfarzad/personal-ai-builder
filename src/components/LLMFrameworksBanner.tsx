
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { CarouselItem, Carousel, CarouselContent } from '@/components/ui/carousel';
import PlatformItem from './PlatformItem';
import { llmFrameworks } from '@/data/llmPlatformsData';

const LLMFrameworksBanner = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-indigo-950/20">
      <div className="container">
        <h3 className="text-center text-xl font-medium text-foreground mb-4">
          LLM Development Frameworks & Tools
        </h3>
        <Separator className="mb-6 max-w-2xl mx-auto" />
        
        <div className="px-4 mx-auto max-w-6xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {llmFrameworks.map((framework, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                  <PlatformItem
                    name={framework.name}
                    url={framework.url}
                    logo={framework.logo}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LLMFrameworksBanner;
