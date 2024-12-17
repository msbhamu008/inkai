import React, { useEffect } from 'react'
import { Users, Target, Lightbulb } from 'lucide-react';
import TeamMember from '../components/TeamMember';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    bio: "With over 15 years in EdTech, Sarah leads our vision to transform education through AI. Previously founded two successful education startups.",
    linkedin: "#",
    twitter: "#",
    email: "sarah@inkredible.ai",
    quote: "Education is not preparation for life; education is life itself.",
    expertise: ["Leadership", "EdTech", "AI Strategy"]
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "AI researcher turned entrepreneur, Michael brings deep expertise in machine learning and educational assessment to our platform.",
    linkedin: "#",
    website: "#",
    email: "michael@inkredible.ai",
    quote: "Technology is best when it brings people together.",
    expertise: ["AI/ML", "EdTech", "System Architecture"]
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Education",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    bio: "Former high school principal with a PhD in Educational Technology. Emily ensures our solutions meet real classroom needs.",
    linkedin: "#",
    twitter: "#",
    quote: "Every student deserves a chance to shine.",
    expertise: ["Education", "Curriculum Design", "EdTech"]
  },
  {
    name: "David Kim",
    role: "Lead AI Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Expert in NLP and machine learning, David leads the development of our AI-powered question generation engine.",
    linkedin: "#",
    github: "#",
    quote: "AI is not just technology, it's a bridge to better learning.",
    expertise: ["NLP", "Machine Learning", "Python"]
  },
  {
    name: "Priya Patel",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Bridging technology and user needs, Priya ensures our platform delivers intuitive and effective solutions for educators.",
    linkedin: "#",
    twitter: "#",
    quote: "Great products solve real problems.",
    expertise: ["Product Strategy", "UX", "Analytics"]
  },
  {
    name: "Alex Thompson",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    bio: "With a passion for user-centered design, Alex crafts beautiful and accessible interfaces that make complex tasks simple.",
    website: "#",
    twitter: "#",
    quote: "Design is not just what it looks like, design is how it works.",
    expertise: ["UI/UX", "Design Systems", "Accessibility"]
  }
];

export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="pt-32 bg-gray-50 dark:bg-transparent"
    >
      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
                About Inkredible
              </span>
              <motion.div
                className="absolute -z-10 w-full h-full top-0 left-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing education through AI-powered solutions that make learning and assessment more efficient and effective.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              whileInView={{ x: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 dark:from-purple-500/30 dark:to-blue-500/30 blur-3xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </motion.div>
            <motion.div 
              className="space-y-6"
              whileInView={{ x: [-50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Founded in 2024, Inkredible emerged from a simple observation: educators spend countless hours creating and grading assessments, time that could be better spent teaching and mentoring students.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our team of educators, technologists, and AI experts came together with a shared vision: to harness the power of artificial intelligence to transform educational assessment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white/50 dark:bg-gradient-to-br dark:from-[#000000]/50 dark:to-[#130F40]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-purple-900/50 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-lg"
                >
                  <Target className="w-8 h-8 text-purple-600 dark:text-purple-500" />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To create a world where quality education is accessible to all, powered by intelligent technology that understands and adapts to individual learning needs.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-[#150B2E]/50 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-purple-900/50 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-lg"
                >
                  <Lightbulb className="w-8 h-8 text-purple-600 dark:text-purple-500" />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower educators with AI-driven tools that streamline assessment creation and grading, allowing them to focus on what matters most: inspiring and guiding students.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A diverse group of passionate educators, engineers, and innovators working together to transform education through AI.
            </p>
          </motion.div>

          {/* Interactive Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Member Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    
                    {/* Expertise Tags */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-md rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                        {member.role}
                      </p>
                      
                      {/* Quote */}
                      <div className="mb-4 relative">
                        <div className="absolute -left-2 -top-2 text-4xl text-purple-400/20">"</div>
                        <p className="text-gray-600 dark:text-gray-300 italic pl-4">
                          {member.quote}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                    </motion.div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
                      {member.linkedin && (
                        <motion.a
                          href={member.linkedin}
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </motion.a>
                      )}
                      {member.twitter && (
                        <motion.a
                          href={member.twitter}
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                          </svg>
                        </motion.a>
                      )}
                      {member.github && (
                        <motion.a
                          href={member.github}
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </motion.a>
                      )}
                      {member.website && (
                        <motion.a
                          href={member.website}
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-20 pb-32 text-center bg-gradient-to-b from-transparent to-purple-50/30 dark:to-purple-900/10"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-500/10 rounded-full px-4 py-2 mb-4 cursor-pointer"
        >
          <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">We're Growing!</span>
        </motion.div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
            Join Our Journey
          </span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          We're always looking for talented individuals who share our passion for education and innovation.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
        >
          View Open Positions
        </motion.button>
      </motion.div>
    </motion.main>
  );
}