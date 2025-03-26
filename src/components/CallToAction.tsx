
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Build Your Personal AI?
          </motion.h2>
          
          <motion.p
            className="paragraph mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start your journey today by exploring the tools and techniques that match your skill level.
            From simple assistants to advanced AI systems, the possibilities are endless.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-primary text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
