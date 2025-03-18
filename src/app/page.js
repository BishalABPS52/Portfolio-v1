'use client';

import Image from 'next/image';
import SocialLink from './components/SocialLink';
import TechBadge from './components/TechBadge';
import { useEffect, useState } from 'react';
import Chat from './chat';
import Timeline from './components/Timeline'; // Import Timeline component
import SkillsList from './components/SkillsList'; // Import SkillsList component

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [isOptionsOpen, setIsOptionsOpen] = useState(false); // state for options menu

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  // Apply saved theme preference on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.classList.add(savedTheme);
  }, []);

  // State to store star positions and delays
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }).map((_, index) => ({
      left: `${(index * 2) % 100}vw`,
      top: `${(index * 2) % 100}vh`,
      animationDelay: `${(index % 5)}s`,
    }));
    setStars(generatedStars);
  }, []);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const toggleOptions = () => setIsOptionsOpen(!isOptionsOpen);

  return (
    <div className="relative min-h-screen p-8 pb-40 gap-32 sm:p-20 font-sans">
      {/* Main Content */}
      <main className="container z-10 relative">
        {/* Intro Block */}
        <div className="block p-4 animate__animated animate__fadeIn">
          <div className="w-48 h-48 mb-8 mx-auto sm:mx-0">
            <Image
              src="/images/bishal.png" // Local path to the animated logo
              alt="Logo"
              width={192}
              height={192}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="block-heading text-center sm:text-left">It's Me</h1>
          <p className="text-lg sm:text-xl text-center sm:text-left text-white mt-4">
            Let’s create, solve, and explore together — one line of code at a time. Always up for new challenges and learning!
          </p>
          <p className="mt-4 text-lg sm:text-xl italic text-center sm:text-left text-white">
            In a blank space, Let's Code.
          </p>
        </div>

        {/* Social Media Block */}
        <div className="block p-4 animate__animated animate__fadeIn">
          <h2 className="block-heading text-center sm:text-left">Links</h2>
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <span className="text-lg text-current username">_bishalshrestha52</span>
              <SocialLink href="https://discord.gg/_bishalshrestha" label="Discord" color="#7289DA" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg text-current username">बिशाल श्रेष्ठ</span>
              <SocialLink href="https://facebook.com/profile.php?id=100067072687802" label="Facebook" color="#1877F2" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg text-current username">bs52.py</span>
              <SocialLink href="https://instagram.com/bs52.py" label="Instagram" color="#E4405F" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg text-current username">Bishal Shrestha</span>
              <SocialLink href="https://linkedin.com/in/bishal-shrestha-2b05b1302" label="LinkedIn" color="#0077B5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg text-current username">Ai Aether</span>
              <SocialLink href="https://youtube.com/@ai_aether_ai" label="YouTube" color="#FF0000" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg text-current username">BishalABPS52</span>
              <SocialLink href="https://github.com/BishalABPS52" label="GitHub" color="#333" />
            </div>
          </div>
        </div>

        {/* Tech Stack Block */}
        <div className="block p-4 animate__animated animate__fadeIn">
          <h2 className="block-heading text-center sm:text-left">Tech Stack</h2>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <TechBadge src="/images/c .png" alt="C" className="tech-badge" /> {/* Local image */}
            <TechBadge src="/images/js.png" alt="JavaScript" className="tech-badge" /> {/* Local image */}
            <TechBadge src="/images/cpp.png" alt="C++" className="tech-badge" /> {/* Local image */}
            <TechBadge src="/images/python-badge.svg" alt="Python" className="tech-badge" /> {/* Local image */}
            <TechBadge src="/images/react.png" alt="React Js" className="tech-badge" /> {/* Local image */}
            <TechBadge src="/images/hc.png" alt="HTML & CSS" className="tech-badge" /> {/* Local image */}
          </div>
        </div>

        {/* Timeline Block */}
        <div className="block p-4 animate__animated animate__fadeIn">
          <Timeline />
        </div>

        {/* Skills List Block */}
        <div className="block p-4 animate__animated animate__fadeIn">
          <SkillsList />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex gap-8 flex-wrap items-center justify-center mt-20">
        <p className="text-lg sm:text-xl text-center sm:text-left text-white">
          &copy; 2024 Bishal Shrestha. All rights reserved.
        </p>
      </footer>

      {/* Animated Background with Falling Stars Effect */}
      <div className="falling-stars">
        {stars.map((star, index) => (
          <div
            key={index}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
            }}
          ></div>
        ))}
      </div>

      {/* Theme Toggle Button */}
      <button
        id="chat"
        className="fixed bottom-10 right-10 p-4 bg-blue-500 text-white rounded-full shadow-md"
        onClick={toggleChat}
      >
        Chat
      </button>

      {/* Chat Component */}
      {isChatOpen && <Chat />}
    </div>
  );
}
