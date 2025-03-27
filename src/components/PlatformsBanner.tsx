
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { CarouselItem, Carousel, CarouselContent } from '@/components/ui/carousel';
import PlatformItem from './PlatformItem';
import { platforms } from '@/data/platformsData';

const PlatformsBanner = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-indigo-950/20">
      <div className="container">
        <h3 className="text-center text-xl font-medium text-foreground mb-4">
          Powered by Industry-Leading Platforms
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
              {platforms.map((platform, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                  <PlatformItem
                    name={platform.name}
                    url={platform.url}
                    logo={platform.logo}
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

export default PlatformsBanner;
