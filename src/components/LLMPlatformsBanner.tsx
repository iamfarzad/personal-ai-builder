
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { CarouselItem, Carousel, CarouselContent, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import PlatformItem from './PlatformItem';
import { llmPlatforms } from '@/data/llmPlatformsData';

const LLMPlatformsBanner = () => {
  return (
    <div className="w-full py-10 md:py-14 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-blue-950/20">
      <div className="container max-w-7xl mx-auto px-4">
        <h3 className="text-center text-lg md:text-xl font-medium text-foreground mb-4 md:mb-6">
          Popular LLM Platforms & Services
        </h3>
        <Separator className="mb-8 max-w-xs sm:max-w-sm md:max-w-2xl mx-auto" />
        
        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {llmPlatforms.map((platform, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
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
              <div className="flex gap-2 md:gap-4">
                <CarouselPrevious className="static translate-y-0 transform-none h-8 w-8 md:h-9 md:w-9" />
                <CarouselNext className="static translate-y-0 transform-none h-8 w-8 md:h-9 md:w-9" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LLMPlatformsBanner;
