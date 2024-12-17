import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-white dark:bg-[#0A0118]/95 border-t border-purple-200 dark:border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/images/ink_logo_white.png" 
                alt="Ink Logo" 
                className="w-24 sm:w-32 h-auto"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
              Transforming education through AI-powered assessment solutions. Join us in revolutionizing the way we learn and teach.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-purple-400" />
                ) : (
                  <Moon className="w-5 h-5 text-purple-400" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 dark:text-white light:text-gray-900 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 dark:text-white light:text-gray-900 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 dark:text-white light:text-gray-900 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-400 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Ink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}