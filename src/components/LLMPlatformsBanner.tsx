
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { CarouselItem, Carousel, CarouselContent, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import PlatformItem from './PlatformItem';
import { llmPlatforms } from '@/data/llmPlatformsData';

const LLMPlatformsBanner = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-blue-950/20">
      <div className="container">
        <h3 className="text-center text-xl font-medium text-foreground mb-6">
          Popular LLM Platforms & Services
        </h3>
        <Separator className="mb-8 max-w-2xl mx-auto" />
        
        <div className="px-4 mx-auto max-w-6xl relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {llmPlatforms.map((platform, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                  <div className="flex justify-center">
                    <PlatformItem
                      name={platform.name}
                      url={platform.url}
                      logo={platform.logo}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <div className="flex gap-2">
                <CarouselPrevious className="static translate-y-0 transform-none" />
                <CarouselNext className="static translate-y-0 transform-none" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LLMPlatformsBanner;
