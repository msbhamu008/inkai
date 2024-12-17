import React, { useEffect, useState } from 'react';

const partners = [
  { name: "Sunrise School", logo: "/images/sunrise_logo.png" },
  { name: "IIT JEE", logo: "/images/sunrise_logo.png" },
  { name: "NEET", logo: "/images/sunrise_logo.png" },
  { name: "Olympiad", logo: "/images/sunrise_logo.png" },
  { name: "Sainik School", logo: "/images/sunrise_logo.png" },
];

export default function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden relative py-6 sm:py-10">
      <div className="flex items-center justify-center gap-4 sm:gap-12 animate-scroll">
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-gray-800/50 backdrop-blur-md p-2 sm:p-4 rounded-full hover:scale-105 transition-transform duration-300 border border-purple-500/30 hover:border-purple-500 group"
          >
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-purple-500/10">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}