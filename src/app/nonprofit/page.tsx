import React from 'react';
import { motion } from 'framer-motion';

const NonprofitProBonoPage: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="container mx-auto px-4 py-8">
 <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary">Nonprofit Pro-Bono Services</h1>
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary">Our Commitment to Nonprofits</h2>
        <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
          We believe in using our skills and resources to support organizations making a positive impact in the world. Our pro-bono program offers select nonprofit organizations our web development and design expertise at no cost.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          We partner with nonprofits whose missions align with our values and who can significantly benefit from a strong online presence.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-secondary">Featured Nonprofit Projects</h2>
        {/* Placeholder for featured projects/testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => ( // Added a map to create multiple placeholder blocks
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }} // Staggered delay
              className="bg-card p-6 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 text-foreground">[Nonprofit Name]</h3>
              <p className="text-muted-foreground">[Brief description of the project and impact.]</p>
            </motion.div>
          ))}
          </div>
        </div>
      </section>
 </motion.div>
  );
};

export default NonprofitProBonoPage;