// Test comment
import React from 'react';
import { motion } from 'framer-motion';
import { MotionDiv } from '@/components/common/MotionDiv'; // Assuming a common motion wrapper if needed

const WorkPage: React.FC = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

 return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary drop-shadow-md">Our Work</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder Project Item */}
        <motion.div
          className="bg-card rounded-lg overflow-hidden shadow-lg border border-border"
          variants={projectVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }} // Stagger delay will be handled by parent if using in view
        >
          <div className="w-full h-48 bg-muted flex items-center justify-center text-muted-foreground">
            Placeholder Image
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-foreground">Project Title</h2>
            <p className="text-muted-foreground text-sm">Brief project description or technologies used.</p>
          </div>
        </motion.div>
        {/* Add more placeholder project items as needed */}
      </section>
    </div>
 );
};

export default WorkPage;