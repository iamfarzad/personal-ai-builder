
import { motion } from 'framer-motion';
import { Heart, Twitter, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <motion.h3 
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              AI Education
            </motion.h3>
            <motion.p 
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering individuals to understand and harness AI technology through accessible, 
              practical education — from beginner concepts to advanced implementations.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
          
          <div>
            <motion.h4 
              className="font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Learning
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <li><a href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">Resources</a></li>
              <li><a href="/ai-masterclass" className="text-muted-foreground hover:text-foreground transition-colors">AI Masterclass</a></li>
              <li><a href="/ai-glossary" className="text-muted-foreground hover:text-foreground transition-colors">AI Glossary</a></li>
              <li><a href="/prompt-library" className="text-muted-foreground hover:text-foreground transition-colors">Prompt Library</a></li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h4 
              className="font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Links
            </motion.h4>
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <li>
                <a href="https://farzadbayat.com" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                  Main Site <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </motion.ul>
          </div>
        </div>
        
        <motion.div 
          className="mt-12 pt-6 border-t border-border text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="flex items-center justify-center flex-wrap gap-1">
            <span>© {currentYear} AI Education.</span>
            <span className="flex items-center">Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Farzad Bayat</span>
          </p>
          <div className="mt-2">
            <Button variant="link" size="sm" asChild>
              <a href="https://farzadbayat.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                Visit the main site <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
