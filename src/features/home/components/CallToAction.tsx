
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  FileText, 
  Zap, 
  ArrowRight, 
  GraduationCap, 
  BookMarked,
  Video,
  Github
} from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Build Your Personal AI?
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg text-center mb-8 sm:mb-12 text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start your journey today by exploring the tools and techniques that match your skill level.
            From simple assistants to advanced AI systems, the possibilities are endless.
          </motion.p>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-blue-100 text-blue-700 p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Free Resources</h3>
              <p className="text-sm text-muted-foreground mb-3">Access guides, tutorials, and documentation to help you build your AI project.</p>
              <a href="https://learnprompting.org/" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center gap-1 text-sm hover:underline">
                Learn more <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-purple-100 text-purple-700 p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <BookMarked className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Structured Courses</h3>
              <p className="text-sm text-muted-foreground mb-3">Enroll in comprehensive courses on AI application development and deployment.</p>
              <a href="https://www.deeplearning.ai/" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center gap-1 text-sm hover:underline">
                Find courses <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-green-100 text-green-700 p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Community Support</h3>
              <p className="text-sm text-muted-foreground mb-3">Join forums and communities where you can ask questions and share your projects.</p>
              <a href="https://huggingface.co/join" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center gap-1 text-sm hover:underline">
                Join now <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-red-100 text-red-700 p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <Video className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Video Tutorials</h3>
              <p className="text-sm text-muted-foreground mb-3">Learn by watching step-by-step video guides for creating AI applications.</p>
              <a href="https://www.youtube.com/playlist?list=PLIivdWyY5sqLsaG5hNms0D9aZRBE7DHBb" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center gap-1 text-sm hover:underline">
                Watch tutorials <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-yellow-100 text-yellow-700 p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Open Source Projects</h3>
              <p className="text-sm text-muted-foreground mb-3">Explore and contribute to open source AI projects to accelerate your learning.</p>
              <a href="https://github.com/topics/ai-applications" target="_blank" rel="noopener noreferrer" className="text-primary flex items-center gap-1 text-sm hover:underline">
                Discover projects <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button className="bg-primary text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-sm sm:text-base h-auto flex items-center gap-2">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              Start Your Learning Journey
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-4">
              Track your progress and earn certificates as you complete each level
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
