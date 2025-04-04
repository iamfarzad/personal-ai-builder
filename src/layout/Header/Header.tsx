
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen, Moon, Sun, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    toast({
      title: newDarkMode ? "Dark mode enabled" : "Light mode enabled",
      duration: 2000,
    });
  };

  const navItems = [
    { name: 'Resources', href: '/resources' },
    { name: 'AI Masterclass', href: '/ai-masterclass' },
    { name: 'Glossary', href: '/ai-glossary' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <motion.a
              href="/"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="h-6 w-6 mr-2 text-primary" />
              <span className="text-foreground font-display font-bold text-xl">AI Education</span>
            </motion.a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium px-3 py-2 rounded-md hover:bg-primary/5"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <div className="ml-2 flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="rounded-full px-4 gap-2" 
                  onClick={() => navigate('/prompt-library')}
                >
                  <Search className="h-4 w-4" />
                  <span>Prompt Library</span>
                </Button>
              </motion.div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleDarkMode} 
                className="ml-2 rounded-full"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </nav>

          {/* Mobile menu button and dark mode toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode} 
              className="rounded-full"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 py-4 space-y-2 bg-background/95 backdrop-blur-md border-b border-border">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 px-4 text-foreground/80 hover:text-foreground font-medium rounded-md hover:bg-primary/5"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="w-full mt-4 rounded-full gap-2 justify-center"
            onClick={() => {
              navigate('/prompt-library');
              setIsMenuOpen(false);
            }}
          >
            <Search className="h-4 w-4" />
            <span>Prompt Library</span>
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
