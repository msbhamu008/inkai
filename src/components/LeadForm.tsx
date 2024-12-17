import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

type UserType = 'student' | 'institute';

export default function LeadForm() {
  const [userType, setUserType] = useState<UserType>('student');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl -z-10" />
      <div className="relative bg-[#150B2E]/50 backdrop-blur-md rounded-2xl border border-purple-900/50 p-8 md:p-12">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Join Inkredible Revolution
        </h3>
        <p className="text-gray-400 mb-8">
          Be part of the future of education. Get early access and exclusive updates.
        </p>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setUserType('student')}
            className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 ${
              userType === 'student'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                : 'bg-purple-900/30 text-gray-400 hover:bg-purple-900/50'
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setUserType('institute')}
            className={`flex-1 py-3 px-6 rounded-xl transition-all duration-300 ${
              userType === 'institute'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                : 'bg-purple-900/30 text-gray-400 hover:bg-purple-900/50'
            }`}
          >
            Institute
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                {userType === 'student' ? 'Full Name' : 'Institute Name'}
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-purple-900/20 border border-purple-900/50 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder={userType === 'student' ? 'John Doe' : 'Institute Name'}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-purple-900/20 border border-purple-900/50 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {userType === 'student' ? (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-gray-300 mb-2">
                  Grade/Year
                </label>
                <select
                  id="grade"
                  required
                  className="w-full bg-purple-900/20 border border-purple-900/50 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">Select Grade</option>
                  <option value="9">9th Grade</option>
                  <option value="10">10th Grade</option>
                  <option value="11">11th Grade</option>
                  <option value="12">12th Grade</option>
                  <option value="college">College</option>
                </select>
              </div>
              <div>
                <label htmlFor="exam" className="block text-sm font-medium text-gray-300 mb-2">
                  Preparing For
                </label>
                <select
                  id="exam"
                  required
                  className="w-full bg-purple-900/20 border border-purple-900/50 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">Select Exam</option>
                  <option value="jee">IIT JEE</option>
                  <option value="neet">NEET</option>
                  <option value="cbse">CBSE Boards</option>
                  <option value="olympiad">Olympiad</option>
                </select>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-2">
                  Institute Type
                </label>
                <select
                  id="type"
                  required
                  className="w-full bg-purple-900/20 border border-purple-900/50 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="">Select Type</option>
                  <option value="school">School</option>
                  <option value="college">College</option>
                  <option value="coaching">Coaching Institute</option>
                  <option value="university">University</option>
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full bg-purple-900/20 border border-purple-900/50 rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Join Now
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}