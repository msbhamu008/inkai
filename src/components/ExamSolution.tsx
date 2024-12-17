import React from 'react';
import { CheckCircle, Brain, ArrowRight, Sparkles, Clock, BarChart3 } from 'lucide-react';

const features = [
  {
    title: "AI-Powered Generation",
    description: "Create high-quality questions instantly with our advanced AI algorithms that understand exam patterns.",
    icon: <Brain className="w-6 h-6 text-purple-600 dark:text-purple-500" />
  },
  {
    title: "Smart Assembly",
    description: "Automatically structure papers with balanced difficulty levels and topic coverage.",
    icon: <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-500" />
  },
  {
    title: "Time-Saving",
    description: "Reduce paper creation time from hours to minutes with automated solutions.",
    icon: <Clock className="w-6 h-6 text-purple-600 dark:text-purple-500" />
  },
  {
    title: "Detailed Analytics",
    description: "Get comprehensive insights into student performance and question effectiveness.",
    icon: <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-500" />
  }
];

const examTypes = [
  {
    name: "CBSE Board Exams",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
    description: "Comprehensive coverage of CBSE curriculum with focus on board exam patterns and requirements."
  },
  {
    name: "Competitive Exams",
    subjects: ["IIT-JEE", "NEET", "GATE"],
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=500&q=80",
    description: "Specialized question banks designed for competitive exam preparation with advanced problem-solving focus."
  },
  {
    name: "School Entrance",
    subjects: ["Sainik School", "Navodaya", "KVPY"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80",
    description: "Tailored content for entrance exam preparation with focus on analytical and logical reasoning."
  }
];

export default function ExamSolution() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100/50 dark:from-transparent dark:via-transparent dark:to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
              Create Perfect Exam Papers in Minutes
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transform your assessment process with AI-powered exam generation. Create balanced, comprehensive papers tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 dark:bg-[#150B2E]/50 backdrop-blur-md p-6 rounded-xl border border-gray-200 dark:border-purple-900/50 hover:border-purple-500 transition-all duration-300 group hover:scale-105"
            >
              <div className="bg-purple-100 dark:bg-purple-500/10 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Exam Types */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-500/10 rounded-full px-4 py-2 mb-6">
              <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">Exam Solutions</span>
              <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
              Ready to ace your exams?
              </span>
              <br />
              {/* <span className="text-gray-900 dark:text-white">All Exam Types</span> */}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Whether you're preparing for board exams, competitive tests, or entrance exams, we've got you covered.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {examTypes.map((exam, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-[#150B2E]/50 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-purple-900/50 overflow-hidden group hover:border-purple-500 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <img
                    src={exam.image}
                    alt={exam.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900 dark:via-[#0A0118]/70 dark:to-[#0A0118]" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold mb-2 text-white">{exam.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                      <span className="text-gray-300 text-sm">{exam.subjects.length} Exams</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{exam.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center gap-2">
                      <span>Exams Covered</span>
                      <span className="w-4 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exam.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30 hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:border-purple-500 transition-colors cursor-pointer"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}