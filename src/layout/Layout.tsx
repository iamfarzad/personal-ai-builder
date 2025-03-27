
import React, { useEffect } from 'react';
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
  
  // Check for dark mode preference on mount
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
    
    // Listen for changes in system dark mode preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
  }, []);
  
  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="min-h-screen flex flex-col w-full relative bg-background text-foreground transition-colors duration-300">
        <Header />
        <div className="flex flex-1 w-full pt-16 md:pt-20">
          <GlobalSidebar />
          <main className="flex-1 w-full">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
