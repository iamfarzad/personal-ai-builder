
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import BasicStepsList from './BasicStepsList';
import BasicResourcesSidebar from './BasicResourcesSidebar';
import { useIsMobile } from '@/hooks/use-mobile';

const BasicStepsWithResources = () => {
  const isMobile = useIsMobile();
  
  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex w-full">
        <div className="flex-1">
          <BasicStepsList />
        </div>
        <BasicResourcesSidebar />
      </div>
    </SidebarProvider>
  );
};

export default BasicStepsWithResources;
