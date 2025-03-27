
import React from 'react';
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent,
  SidebarFooter,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  BookText, 
  FileText, 
  Lightbulb,
  HelpCircle, 
  Settings
} from 'lucide-react';
import { useIsMobile } from '@/hooks';
import { Button } from '@/components/ui/button';
import SidebarNavItem from './SidebarNavItem';
import SidebarNavGroup from './SidebarNavGroup';

const GlobalSidebar = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      {isMobile && (
        <div className="fixed bottom-4 right-4 z-20">
          <SidebarTrigger className="bg-primary text-primary-foreground h-12 w-12 rounded-full shadow-lg" />
        </div>
      )}
      <Sidebar variant="floating" className="w-64">
        <SidebarHeader className="flex flex-row items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">PersonalAI</h3>
            <p className="text-xs text-muted-foreground">
              Learn AI for personal use
            </p>
          </div>
          {isMobile && <SidebarTrigger className="h-8 w-8" />}
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarNavGroup label="Navigation">
            <SidebarNavItem href="/" label="Home" icon={Home} />
            <SidebarNavItem href="/resources" label="Resources" icon={BookOpen} />
            <SidebarNavItem href="/ai-masterclass" label="AI Masterclass" icon={GraduationCap} />
          </SidebarNavGroup>
          
          <SidebarNavGroup label="Learning Resources">
            <SidebarNavItem href="/ai-glossary" label="AI Glossary" icon={BookText} />
            <SidebarNavItem href="/prompt-library" label="Prompt Library" icon={FileText} />
            <SidebarNavItem href="/case-studies" label="Case Studies" icon={Lightbulb} />
          </SidebarNavGroup>
          
          <SidebarFooter className="mt-auto">
            <Button variant="outline" className="w-full justify-start" size="sm">
              <HelpCircle className="mr-2" size={16} />
              <span>Help & Support</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Settings className="mr-2" size={16} />
              <span>Settings</span>
            </Button>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default GlobalSidebar;
