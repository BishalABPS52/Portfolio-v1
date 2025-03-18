'use client';

import './Navbar.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // state for dark mode
  const [isOptionsOpen, setIsOptionsOpen] = useState(false); // state for options menu

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // UseEffect to set the default theme to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    document.body.classList.add(savedTheme);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleOptions = () => setIsOptionsOpen(!isOptionsOpen);

  return (
    <>
      <div className={`navbar-container ${isDarkMode ? 'dark' : 'light'}`}>
        <nav className="w-full flex items-center">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li><Link href="/resume" className="hover:underline">Resume</Link></li>
            <li><Link href="/creative" className="hover:underline">Creative</Link></li>
            <li><Link href="/certificates" className="hover:underline">Certificates</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>

          {/* Theme Switcher */}
          <label 
            className="switch absolute top-4 right-4 cursor-pointer" 
            onClick={toggleTheme}
          >
            <div className="slider round">
              <div className="sun-moon">
                {isDarkMode ? (
                  // Moon SVG for Dark Mode
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="white"
                  >
                    <path d="M21.9 13.1a9.1 9.1 0 0 1-10.9-10.9 9 9 0 1 0 10.9 10.9z"/>
                  </svg>
                ) : (
                  // Sun SVG for Light Mode
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="yellow"
                  >
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="4" stroke="yellow" strokeWidth="2"/>
                    <line x1="12" y1="20" x2="12" y2="23" stroke="yellow" strokeWidth="2"/>
                    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="yellow" strokeWidth="2"/>
                    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="yellow" strokeWidth="2"/>
                    <line x1="1" y1="12" x2="4" y2="12" stroke="yellow" strokeWidth="2"/>
                    <line x1="20" y1="12" x2="23" y2="12" stroke="yellow" strokeWidth="2"/>
                    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="yellow" strokeWidth="2"/>
                    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="yellow" strokeWidth="2"/>
                  </svg>
                )}
              </div>
            </div>
          </label>

          {/* 3-dash icon */}
          <div className="dash-icon-container">
            <button onClick={toggleOptions} className="dash-icon">
              &#9776;
            </button>
            {isOptionsOpen && (
              <div className={`options-menu ${isDarkMode ? 'dark' : 'light'}`}>
                <ul>
                  <li><Link href="/updates">Updates</Link></li>
                  <li><Link href="/services">Our Services</Link></li>
                  <li><Link href="/profiles">Profiles</Link></li>
                  <li><Link href="/feedback">Feedback</Link></li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
