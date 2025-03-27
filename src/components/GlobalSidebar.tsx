
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarTrigger,
  SidebarFooter
} from '@/components/ui/sidebar';
import { Home, BookOpen, GraduationCap, HelpCircle, FileText, Settings, ChevronRight, BookText, Lightbulb } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const GlobalSidebar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
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
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/")} tooltip="Home">
                    <Link to="/">
                      <Home className="mr-2" size={16} />
                      <span>Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/resources")} tooltip="Resources">
                    <Link to="/resources">
                      <BookOpen className="mr-2" size={16} />
                      <span>Resources</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/ai-masterclass")} tooltip="AI Masterclass">
                    <Link to="/ai-masterclass">
                      <GraduationCap className="mr-2" size={16} />
                      <span>AI Masterclass</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Learning Resources</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="AI Glossary">
                    <BookText className="mr-2" size={16} />
                    <span>AI Glossary</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Prompt Library">
                    <FileText className="mr-2" size={16} />
                    <span>Prompt Library</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Case Studies">
                    <Lightbulb className="mr-2" size={16} />
                    <span>Case Studies</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
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
