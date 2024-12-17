import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export default function PricingCard({ title, price, features, isPopular, ctaText }: PricingCardProps) {
  return (
    <div className={`relative bg-white/90 dark:bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border ${
      isPopular 
        ? 'border-purple-500 shadow-lg shadow-purple-500/10' 
        : 'border-gray-200 dark:border-purple-900/50'
    } hover:border-purple-500 transition-all duration-300 hover:scale-105`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 rounded-full text-sm text-white font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">{price}</span>
        {price !== 'Custom' && <span className="text-gray-500 dark:text-gray-400">/month</span>}
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-purple-600 dark:text-purple-500 flex-shrink-0" />
            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-xl font-medium transition-all duration-300 text-white ${
        isPopular 
          ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' 
          : 'bg-gray-900 dark:bg-purple-900/50 hover:bg-gray-800 dark:hover:bg-purple-900/70'
      }`}>
        {ctaText}
      </button>
    </div>
  );
}