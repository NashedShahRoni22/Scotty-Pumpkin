'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="relative z-50 px-4 py-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl md:text-4xl shadow-lg">
            🎃
          </div>
          <span className="text-xl md:text-2xl lg:text-3xl font-bold">Scotty Pumpkin</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <a href="#marketplace" className="hover:text-purple-300 transition-colors text-base xl:text-lg">
            Marketplace
          </a>
          <a href="#create" className="hover:text-purple-300 transition-colors text-base xl:text-lg">
            Create a Shop
          </a>
          <a href="#blog" className="hover:text-purple-300 transition-colors text-base xl:text-lg">
            Blog
          </a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <button className="px-4 lg:px-6 py-2 border-2 border-purple-300 rounded-lg hover:bg-purple-800 transition-colors text-sm lg:text-base">
            Sign Up
          </button>
          <button className="px-4 lg:px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg hover:from-orange-600 hover:to-red-700 transition-colors font-semibold text-sm lg:text-base">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-purple-800/50 rounded-lg transition-colors z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-gradient-to-b from-purple-900 to-purple-950 z-40 overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#marketplace" 
                className="block py-3 px-4 hover:bg-purple-800/50 rounded-lg transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </a>
              <a 
                href="#create" 
                className="block py-3 px-4 hover:bg-purple-800/50 rounded-lg transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Create a Shop
              </a>
              <a 
                href="#blog" 
                className="block py-3 px-4 hover:bg-purple-800/50 rounded-lg transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <div className="pt-4 space-y-3 border-t border-purple-500/30">
                <button className="w-full px-6 py-3 border-2 border-purple-300 rounded-lg hover:bg-purple-800 transition-colors font-medium text-base">
                  Sign Up
                </button>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg hover:from-orange-600 hover:to-red-700 transition-colors font-semibold text-base">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}