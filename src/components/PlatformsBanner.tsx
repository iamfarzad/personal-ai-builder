
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { CarouselItem, Carousel, CarouselContent, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import PlatformItem from './PlatformItem';
import { platforms } from '@/data/platformsData';

const PlatformsBanner = () => {
  return (
    <div className="w-full py-14 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-indigo-950/20">
      <div className="container max-w-7xl mx-auto">
        <h3 className="text-center text-xl font-medium text-foreground mb-6">
          Powered by Industry-Leading Platforms
        </h3>
        <Separator className="mb-10 max-w-2xl mx-auto" />
        
        <div className="px-4 mx-auto relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {platforms.map((platform, index) => (
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
            <div className="flex justify-center mt-8">
              <div className="flex gap-4">
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

export default PlatformsBanner;
