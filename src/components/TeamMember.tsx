import React, { useState } from 'react';
import { X, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: string;
    bio?: string;
    email?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export default function TeamMember({ member }: TeamMemberProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-[#150B2E]/50 backdrop-blur-md rounded-2xl border border-purple-900/50 overflow-hidden group hover:border-purple-500 transition-all duration-300 cursor-pointer flex flex-col items-center p-6"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{member.name}</h3>
          <p className="text-gray-400">{member.role}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-[#150B2E] rounded-2xl border border-purple-500/30 w-full max-w-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
            >
              <X className="w-5 h-5 text-purple-400" />
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Image Section */}
              <div className="relative h-full min-h-[300px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150B2E] via-transparent to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-6 md:pr-12">
                <h3 className="text-2xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    {member.name}
                  </span>
                </h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                
                {member.bio && (
                  <p className="text-gray-400 mb-6">
                    {member.bio}
                  </p>
                )}

                {/* Social Links */}
                <div className="flex gap-4">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                      title="Email"
                    >
                      <Mail className="w-5 h-5 text-purple-400" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-purple-400" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                      title="Twitter"
                    >
                      <Twitter className="w-5 h-5 text-purple-400" />
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                      title="Website"
                    >
                      <Globe className="w-5 h-5 text-purple-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
