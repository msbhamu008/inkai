import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "Visit Us",
      content: "123 Innovation Drive<br />San Francisco, CA 94107"
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "Call Us",
      content: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "Email Us",
      content: "contact@inkredible.com"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      url: "https://facebook.com",
      label: "Facebook"
    },
    {
      icon: <Twitter className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      url: "https://twitter.com",
      label: "Twitter"
    },
    {
      icon: <Linkedin className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      url: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Instagram className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      url: "https://instagram.com",
      label: "Instagram"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-transparent">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-500/10 rounded-full px-4 py-2 mb-6">
              <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">Contact Us</span>
              <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
                Get in Touch with Us
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Have questions about our AI-powered exam solutions? We'd love to hear from you.
              Our team is ready to help you transform your educational journey.
            </p>
          </div>
        </div>
      </section>

     

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white dark:bg-[#150B2E]/50 rounded-xl border border-gray-200 dark:border-purple-900/50 hover:border-purple-500 transition-colors"
                    >
                      <div className="p-2 bg-purple-100 dark:bg-purple-500/10 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{info.title}</h3>
                        <p
                          className="text-gray-600 dark:text-gray-400"
                          dangerouslySetInnerHTML={{ __html: info.content }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Connect With Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="p-3 bg-white dark:bg-[#150B2E]/50 rounded-xl border border-gray-200 dark:border-purple-900/50 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-[#150B2E]/50 p-8 rounded-2xl border border-gray-200 dark:border-purple-900/50">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-purple-900/50 bg-white dark:bg-[#0A0118] text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-purple-900/50 bg-white dark:bg-[#0A0118] text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-purple-900/50 bg-white dark:bg-[#0A0118] text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-purple-900/50 bg-white dark:bg-[#0A0118] text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition-colors resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-sm text-center">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-sm text-center">
                    Oops! Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

 {/* Map Section */}
 <section className="py-20 bg-gray-50/50 dark:bg-[#0A0118]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Visit Our Office
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Come by and say hello at our headquarters in San Francisco
            </p>
          </div>
          <div className="bg-white dark:bg-[#150B2E]/50 rounded-2xl border border-gray-200 dark:border-purple-900/50 overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977907225473!2d-122.41941682354707!3d37.77492997109447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1523456789012"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="w-full"
            />
          </div>
        </div>
      </section>


    </div>
  );
}