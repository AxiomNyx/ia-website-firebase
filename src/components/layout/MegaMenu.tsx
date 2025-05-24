// Attempting to resolve motion import issue
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-40 w-[96%] max-w-screen-xl
        bg-gradient-to-br from-secondary/20 to-background/95 backdrop-blur-md border border-border/30 rounded-xl shadow-2xl overflow-hidden"    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white text-3xl">
            &times;
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Example Mega Menu Column 1 */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Section 1</h3>
            <ul>
              <li className="mb-2">
                <Link href="/page1" className="text-foreground hover:text-primary transition-colors duration-200">
                  Page 1
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/page2" className="text-foreground hover:text-primary transition-colors duration-200">
                  Page 2
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/page3" className="text-foreground hover:text-primary transition-colors duration-200">
                  Page 3
                </Link>
              </li>
            </ul>
          </div>

          {/* Example Mega Menu Column 2 */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Section 2</h3>
            <ul>
              <li className="mb-2">
                <Link href="/page4" className="text-foreground hover:text-primary transition-colors duration-200">
                  Page 4
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/page5" className="text-foreground hover:text-primary transition-colors duration-200">
                  Page 5
                </Link>
              </li>
            </ul>
          </div>

          {/* Example Mega Menu Column 3 */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-4">Section 3</h3>
            <ul>
              <li className="mb-2">
                <Link href="/page6" className="text-foreground hover:text-primary transition-colors duration-200">
                  Page 6
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/page7" className="text-foreground hover:text-primary transition-colors duration-200">
                  Page 7
                </Link>
              </li>
            </ul>
              {/* Example Featured Item */}
              <div className="mt-6">
                <Link href="/featured" className="block bg-primary text-primary-foreground p-4 rounded hover:bg-primary/90 transition-colors duration-200">
 Featured Item
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;