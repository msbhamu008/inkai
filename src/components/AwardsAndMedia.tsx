import React from 'react';
import { Trophy, Newspaper, ArrowRight } from 'lucide-react';

const awards = [
  {
    title: "EdTech Breakthrough Award",
    category: "Best AI-based Education Solution",
    year: "2023",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Global Education Innovation",
    category: "Excellence in Assessment Technology",
    year: "2023",
    image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=400&q=80"
  }
];

const mediaFeatures = [
  {
    source: "TechCrunch",
    title: "Inkredible Revolutionizes Education Assessment with AI",
    date: "Aug 2023",
    link: "#",
    logo: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=100&h=100"
  },
  {
    source: "Education Weekly",
    title: "The Future of Exam Creation: AI-Powered Solutions",
    date: "July 2023",
    link: "#",
    logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=100&h=100"
  },
  {
    source: "Forbes India",
    title: "Top EdTech Innovations Transforming Education",
    date: "June 2023",
    link: "#",
    logo: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=100&h=100"
  }
];

export default function AwardsAndMedia() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      {/* Awards Section */}
      <div className="relative mb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-purple-500/0 rounded-full px-4 py-2 mb-4">
            <Trophy className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Award Winning Platform</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Recognition & Excellence
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-[#0A0118]/80 to-transparent" />
              </div>
              <div className="relative p-6">
                <div className="bg-purple-500/20 text-purple-400 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  {award.year}
                </div>
                <h3 className="text-2xl font-bold mb-2">{award.title}</h3>
                <p className="text-gray-400">{award.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Coverage Section */}
      <div className="relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-purple-500/0 rounded-full px-4 py-2 mb-4">
            <Newspaper className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">In The News</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Media Coverage
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mediaFeatures.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={feature.logo}
                  alt={feature.source}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-purple-400">{feature.source}</h4>
                  <p className="text-sm text-gray-400">{feature.date}</p>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-4 group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-purple-400">
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
