import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactPage: React.FC = () => {
 return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-16 text-foreground"
    >
      <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary">
        Contact Us
      </motion.h1>
      <motion.div variants={itemVariants} className="max-w-md mx-auto bg-background/50 glass p-8 rounded-lg shadow-lg">
        <form className="grid grid-cols-1 gap-6 text-muted-foreground">
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border-border rounded-md shadow-sm bg-muted focus:ring-accent focus:border-accent sm:text-sm p-2" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border-border rounded-md shadow-sm bg-muted focus:ring-accent focus:border-accent sm:text-sm p-2" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full border-border rounded-md shadow-sm bg-muted focus:ring-accent focus:border-accent sm:text-sm p-2"></textarea>
          </motion.div>
          <motion.div variants={itemVariants}>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200">
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
 );
};
export default ContactPage;