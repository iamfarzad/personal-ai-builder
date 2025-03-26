
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import BasicStepsList from './BasicStepsList';
import BasicResourcesSidebar from './BasicResourcesSidebar';

const BasicStepsWithResources = () => {
  return (
    <SidebarProvider defaultOpen={true}>
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
