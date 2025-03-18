'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";  
import './globals.css'; // Import global styles

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Remove the timeout to avoid non-deterministic behavior
    document.body.style.zoom = "75%"; // Set zoom level to 75%
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-900 text-white dark:bg-charcoal-black dark:text-white light:bg-creamy-white light:text-black"> {/* Tailwind and global styles applied */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <main className="p-6">
              <div className="container mx-auto">
                {children}
              </div>
            </main>
          )}
        </motion.div>
      </body>
    </html>
  );
}
