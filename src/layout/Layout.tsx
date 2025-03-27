
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { GlobalSidebar } from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';
import { useIsMobile } from '@/hooks';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="min-h-screen flex flex-col w-full relative">
        <Header />
        <div className="flex flex-1 w-full">
          <GlobalSidebar />
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
