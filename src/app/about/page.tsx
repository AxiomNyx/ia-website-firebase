// Test comment
typescriptreact
import React from 'react'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
 return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-primary-dark text-gray-300"
    >
      <div className="container mx-auto px-4 py-16 pt-32"> {/* Added pt-32 for spacing below fixed navbar */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About Us</h1>
        <div className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"> {/* Added max-w-3xl and mx-auto for centering */}
          <p className="mb-6"> {/* Increased mb */}
            Welcome to Innervate Agency. We are a creative collective passionate about building digital experiences that resonate and inspire. Our journey began with a simple idea: to blend innovative technology with thoughtful design to create impactful solutions for our clients.
          </p>
          <p className="mb-6"> {/* Increased mb */}
            With a focus on collaboration and understanding, we work closely with businesses and organizations to bring their visions to life. Our team is comprised of experienced designers, developers, and strategists who are dedicated to delivering high-quality results.
         </p>
          <p>
            We believe in the power of digital transformation to drive growth and connect with audiences in meaningful ways. Let us help you navigate the digital landscape and create something truly remarkable.
          </p>
        </div>
      </div>
    </div>
  </motion.div>);
};