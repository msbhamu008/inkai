import React from 'react';

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl -z-10" />
      <div className="relative bg-[#150B2E]/50 backdrop-blur-md rounded-2xl border border-purple-900/50 p-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
          alt="AI Education"
          className="w-full h-[400px] object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-transparent to-transparent" />
        
        {/* Floating Elements */}
        <div className="absolute top-8 right-8 bg-purple-500/10 backdrop-blur-md rounded-lg p-4 border border-purple-500/30 animate-float-slow">
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
        </div>
        <div className="absolute bottom-16 left-8 bg-blue-500/10 backdrop-blur-md rounded-lg p-4 border border-blue-500/30 animate-float">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}