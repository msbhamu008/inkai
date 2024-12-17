
import React, { useEffect } from 'react'
import { Briefcase, MapPin, Clock } from 'lucide-react';

const positions = [
  {
    title: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "We're looking for an experienced Full Stack Developer to help build and scale our educational platform.",
    requirements: [
      "5+ years of experience with React and Node.js",
      "Experience with TypeScript and modern JavaScript",
      "Strong understanding of database design and optimization",
      "Experience with cloud platforms (AWS/GCP)"
    ]
  },
  {
    title: "AI/ML Engineer",
    location: "Remote",
    type: "Full-time",
    description: "Join our AI team to develop and improve our intelligent assessment systems.",
    requirements: [
      "MS/PhD in Computer Science or related field",
      "Experience with PyTorch or TensorFlow",
      "Strong background in NLP and machine learning",
      "Published research is a plus"
    ]
  },
  {
    title: "Education Content Specialist",
    location: "New York, NY",
    type: "Full-time",
    description: "Help shape our educational content strategy and ensure high-quality learning materials.",
    requirements: [
      "5+ years in educational content development",
      "Experience with curriculum design",
      "Strong understanding of educational assessment",
      "Teaching experience is preferred"
    ]
  }
];

export default function Career() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adds smooth scrolling animation
    });
  }, []);

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Join Our Mission
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Help us transform education through innovative technology. We're always looking for passionate individuals to join our team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Innovation",
                description: "Work on cutting-edge AI technology that's reshaping education."
              },
              {
                title: "Impact",
                description: "Make a real difference in how millions learn and teach."
              },
              {
                title: "Growth",
                description: "Continuous learning and development opportunities."
              }
            ].map((perk, index) => (
              <div key={index} className="bg-[#150B2E]/50 backdrop-blur-md p-6 rounded-2xl border border-purple-900/50">
                <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                <p className="text-gray-400">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-[#000000]/50 to-[#130F40]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Open Positions
            </span>
          </h2>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border border-purple-900/50 hover:border-purple-500 transition-all duration-300">
                <div className="flex flex-wrap gap-6 items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-400 mb-6">{position.description}</p>

                <div>
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Why Join Us?
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer competitive compensation and benefits to help you do your best work.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Health & Wellness",
                perks: ["Comprehensive health insurance", "Mental health support", "Gym membership"]
              },
              {
                title: "Work-Life Balance",
                perks: ["Flexible working hours", "Remote work options", "Unlimited PTO"]
              },
              {
                title: "Growth",
                perks: ["Learning stipend", "Conference budget", "Career development"]
              },
              {
                title: "Team Building",
                perks: ["Regular team events", "Annual retreats", "Social activities"]
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#150B2E]/50 backdrop-blur-md p-6 rounded-2xl border border-purple-900/50">
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {benefit.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
