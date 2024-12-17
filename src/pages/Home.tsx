import React from 'react';
import HeroImage from '../components/HeroImage';
import ExamSolution from '../components/ExamSolution';
import PricingCard from '../components/PricingCard';
import PartnersCarousel from '../components/PartnersCarousel';
import LeadForm from '../components/LeadForm';
import Testimonials from '../components/Testimonials';
import AwardsAndMedia from '../components/AwardsAndMedia';
import { GraduationCap, School, BookOpen, Users, CheckCircle, FileText, Zap } from 'lucide-react';

const comparison = [
  {
    title: "Manual Paper Generation",
    icon: <FileText className="w-8 h-8 text-gray-400 dark:text-gray-400" />,
    points: [
      "Time-consuming process (4-6 hours per paper)",
      "Inconsistent difficulty levels",
      "Limited question variety",
      "Manual evaluation needed",
      "No performance analytics",
      "Prone to human errors"
    ],
    theme: "border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/50"
  },
  {
    title: "Inkredible AI Solution",
    icon: <Zap className="w-8 h-8 text-purple-600 dark:text-purple-500" />,
    points: [
      "Quick generation (5-10 minutes)",
      "Balanced difficulty distribution",
      "Vast question bank access",
      "Automated evaluation",
      "Real-time analytics dashboard",
      "99.9% accuracy rate"
    ],
    theme: "border-purple-400 dark:border-purple-500 bg-purple-50/90 dark:bg-purple-900/20"
  }
];

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100/50 dark:from-transparent dark:via-transparent dark:to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-500/10 dark:to-purple-500/0 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">Inking the Future of Learning</span>
                <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
                  Work Smarter,
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Not Harder with</span>
                <br />
                <span className="text-gray-900 dark:text-white">Inkredible</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-slide-up">
                Unleash the power of Generative AI within Inkredible. Boost your productivity with Inkredible, and stop spending countless hours on creating exam papers and grading answer sheets.
              </p>
            </div>
            <div className="relative animate-float-slow">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Made for Schools & Students Section */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-[#000000]/50 dark:to-[#130F40]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
                Made for Schools & Students
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Empowering educational institutions and learners with intelligent assessment solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Schools */}
            <div className="bg-white/90 dark:bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-purple-900/50 hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-lg">
                  <School className="w-8 h-8 text-purple-600 dark:text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">For Schools</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Automated exam paper generation",
                  "Comprehensive question bank",
                  "Performance analytics dashboard",
                  "Custom assessment templates"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                Get School Demo
              </button>
            </div>

            {/* For Students */}
            <div className="bg-white/90 dark:bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-purple-900/50 hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-purple-600 dark:text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">For Students</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Personalized practice tests",
                  "Instant feedback and solutions",
                  "Progress tracking",
                  "Study material recommendations"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                Start Learning
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Users className="w-8 h-8 text-purple-600 dark:text-purple-500" />,
                stat: "50,000+",
                label: "Active Users"
              },
              {
                icon: <School className="w-8 h-8 text-purple-600 dark:text-purple-500" />,
                stat: "1,000+",
                label: "Partner Schools"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-500" />,
                stat: "100,000+",
                label: "Questions Generated"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/90 dark:bg-[#150B2E]/50 backdrop-blur-md p-6 rounded-xl border border-gray-200 dark:border-purple-900/50 text-center">
                <div className="bg-purple-100 dark:bg-purple-500/10 p-3 rounded-lg w-fit mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{item.stat}</h4>
                <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ExamSolution />

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-[#000000]/50 dark:to-[#130F40]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
                Traditional vs AI-Powered Solution
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See how Inkredible transforms the exam creation process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {comparison.map((option, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border ${option.theme} backdrop-blur-md hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-6">
                  {option.icon}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{option.title}</h3>
                </div>
                <ul className="space-y-4">
                  {option.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${index === 1 ? 'text-purple-600 dark:text-purple-500' : 'text-gray-400 dark:text-gray-500'}`} />
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100/50 dark:from-transparent dark:via-transparent dark:to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan that fits your needs. No hidden fees, no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="$0"
              features={["Up to 100 questions per month", "Basic analytics", "Email support", "1 user license"]}
              ctaText="Get Started"
            />
            <PricingCard
              title="Pro"
              price="$99"
              features={["Unlimited questions", "Advanced analytics", "Priority support", "5 user licenses", "Custom branding"]}
              isPopular={true}
              ctaText="Try Pro"
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={["Unlimited everything", "Dedicated support", "Custom integration", "Unlimited users", "SLA guarantee"]}
              ctaText="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-[#000000]/50 dark:to-[#130F40]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
                Trusted by Leading Institutions
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of educational institutions that trust Inkredible for their assessment needs.
            </p>
          </div>
          <PartnersCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100/50 dark:from-transparent dark:via-transparent dark:to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>

      {/* Awards and Media Coverage Section */}
      {/* <section id="awards-media" className="py-20 bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-[#000000]/50 dark:to-[#130F40]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AwardsAndMedia />
        </div>
      </section> */}

      {/* <section id="lead-form" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100/50 dark:from-transparent dark:via-transparent dark:to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm />
        </div>
      </section> */}
    </main>
  );
}