import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Slight delay before showing for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    setIsClosing(true);
    setTimeout(() => {
      localStorage.setItem('cookieConsent', 'accepted');
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-8 right-8 max-w-sm w-full bg-white dark:bg-[#0A0118] rounded-2xl shadow-2xl border border-purple-200/50 dark:border-purple-900/30 p-6 z-50 transition-all duration-300 ${
      isClosing ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
    }`}>
      <div className="relative">
        {/* Close button */}
        <button
          onClick={acceptCookies}
          className="absolute -top-2 -right-2 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
          aria-label="Close cookie consent"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            🍪 Cookie Settings
          </h3>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={acceptCookies}
              className="w-full px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
            >
              Accept All
            </button>
            <a
              href="/privacy-policy"
              className="w-full px-6 py-2.5 text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 font-medium text-center transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
