
import React, { useEffect } from 'react'
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of AI in Education: Beyond the Basics",
    excerpt: "Explore how artificial intelligence is revolutionizing educational assessment and personalized learning.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    category: "AI & Education"
  },
  {
    title: "Creating Effective Assessments: A Comprehensive Guide",
    excerpt: "Learn the key principles behind creating assessments that accurately measure student understanding.",
    author: "Michael Chen",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    category: "Assessment"
  },
  {
    title: "The Role of Data Analytics in Modern Education",
    excerpt: "Discover how data-driven insights can improve teaching methods and student outcomes.",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Data Analytics"
  }
];

export default function Blog() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adds smooth scrolling animation
    });
  }, []);

  return (
    <main className="pt-32">
      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl -z-10" />
            <div className="bg-[#150B2E]/50 backdrop-blur-md rounded-2xl border border-purple-900/50 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-2 mb-6">
                    <span className="text-purple-400 text-sm font-medium">Featured Post</span>
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  </div>
                  <h1 className="text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                      Transforming Education with AI: A New Era of Learning
                    </span>
                  </h1>
                  <p className="text-gray-400 mb-6">
                    Discover how artificial intelligence is reshaping the educational landscape and creating new opportunities for personalized learning experiences.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Dr. James Wilson
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      March 18, 2024
                    </div>
                  </div>
                  <button className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="relative h-full min-h-[300px] md:min-h-0">
                  <img
                    src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
                    alt="Featured post"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gradient-to-br from-[#000000]/50 to-[#130F40]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-[#150B2E]/50 backdrop-blur-md rounded-2xl border border-purple-900/50 overflow-hidden hover:border-purple-500 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500/10 backdrop-blur-md text-purple-400 text-sm px-3 py-1 rounded-full border border-purple-500/30">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#150B2E]/50 backdrop-blur-md rounded-2xl border border-purple-900/50 p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Subscribe to Our Newsletter
              </span>
            </h2>
            <p className="text-gray-400 mb-8">
              Get the latest insights on AI in education, assessment strategies, and more delivered to your inbox.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-purple-900/20 border border-purple-900/50 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
