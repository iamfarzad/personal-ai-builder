
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
  Settings,
  User,
  ExternalLink, 
  ChevronRight,
  Library
} from 'lucide-react';
import { useIsMobile } from '@/hooks';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import SidebarNavItem from './SidebarNavItem';
import SidebarNavGroup from './SidebarNavGroup';

const GlobalSidebar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  return (
    <>
      {isMobile && (
        <motion.div 
          className="fixed bottom-4 right-4 z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <SidebarTrigger className="bg-primary text-primary-foreground h-12 w-12 rounded-full shadow-lg" />
        </motion.div>
      )}
      <Sidebar variant="floating" className="w-64">
        <SidebarHeader className="flex flex-row items-center justify-between">
          <div>
            <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-none">AI Education</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  by Farzad Bayat
                </p>
              </div>
            </NavLink>
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
            <SidebarNavItem href="/literature" label="Literature Database" icon={Library} />
          </SidebarNavGroup>
          
          <div className="mt-6 px-3 py-4 rounded-lg bg-sidebar-accent border border-sidebar-border group hover:bg-sidebar-accent/80 transition-colors">
            <h4 className="text-sm font-medium text-sidebar-accent-foreground mb-2 flex items-center">
              <User size={14} className="mr-2" />
              Main Website
            </h4>
            <p className="text-xs text-sidebar-foreground/80 mb-3">Visit my main website for more content</p>
            <Button 
              variant="outline" 
              size="sm" 
              asChild 
              className="w-full justify-between items-center text-sidebar-primary group-hover:translate-x-1 transition-transform"
            >
              <a 
                href="https://farzadbayat.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <span>farzadbayat.com</span>
                <ChevronRight size={14} className="ml-auto" />
              </a>
            </Button>
          </div>
          
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
