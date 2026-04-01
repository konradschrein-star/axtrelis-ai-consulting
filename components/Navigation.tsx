'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold">
              <span className="text-white">Axtrelis</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/leistungen"
              className="text-text-secondary hover:text-white transition-colors duration-200"
            >
              Leistungen
            </Link>
            <Link
              href="/workshop"
              className="text-text-secondary hover:text-white transition-colors duration-200"
            >
              AI Clarity Workshop
            </Link>
            <Link
              href="/ueber-uns"
              className="text-text-secondary hover:text-white transition-colors duration-200"
            >
              Über uns
            </Link>
            <Link
              href="/blog"
              className="text-text-secondary hover:text-white transition-colors duration-200"
            >
              Blog
            </Link>
          </div>

          {/* Pulsing Button + CTA */}
          <div className="flex items-center space-x-4">
            {/* Pulsing Button - Links zur alten Website */}
            <Link
              href="https://webseiten.axtrelis.com"
              className="relative px-5 py-2.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg pulsing-button hover:scale-105 transition-transform duration-200"
            >
              Sie brauchen eine Website?
            </Link>

            {/* Primary CTA */}
            <Link
              href="/kontakt"
              className="hidden lg:block px-6 py-2.5 bg-accent-primary text-white font-semibold rounded-lg hover:bg-accent-secondary transition-colors duration-200"
            >
              Gespräch vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
