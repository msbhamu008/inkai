import React, { useState } from 'react';
import { X, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';

type AuthMode = 'login' | 'signup' | 'forgot';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: AuthMode;
}

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log('Form submitted:', { mode, method, formData });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#150B2E] rounded-2xl border border-purple-500/30 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
        >
          <X className="w-5 h-5 text-purple-400" />
        </button>

        <div className="p-8">
          {/* Header */}
          <h2 className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              {mode === 'login' ? 'Welcome Back' : mode === 'signup' ? 'Create Account' : 'Reset Password'}
            </span>
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {mode !== 'forgot' && (
              <div className="flex gap-4 p-1 bg-purple-500/10 rounded-lg mb-6">
                <button
                  type="button"
                  onClick={() => setMethod('email')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md ${
                    method === 'email' ? 'bg-purple-500 text-white' : 'text-purple-400 hover:bg-purple-500/10'
                  } transition-colors`}
                >
                  <Mail className="w-4 h-4" />
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setMethod('phone')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md ${
                    method === 'phone' ? 'bg-purple-500 text-white' : 'text-purple-400 hover:bg-purple-500/10'
                  } transition-colors`}
                >
                  <Phone className="w-4 h-4" />
                  Phone
                </button>
              </div>
            )}

            {/* Email/Phone Input */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                {method === 'email' ? 'Email Address' : 'Phone Number'}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                  {method === 'email' ? <Mail className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
                </span>
                <input
                  type={method === 'email' ? 'email' : 'tel'}
                  name={method === 'email' ? 'email' : 'phone'}
                  value={method === 'email' ? formData.email : formData.phone}
                  onChange={handleInputChange}
                  placeholder={method === 'email' ? 'Enter your email' : 'Enter your phone number'}
                  className="w-full bg-purple-500/10 border border-purple-500/30 rounded-lg py-3 px-12 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Password Input */}
            {mode !== 'forgot' && (
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                    <Lock className="w-5 h-5" />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full bg-purple-500/10 border border-purple-500/30 rounded-lg py-3 px-12 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 py-3 rounded-lg font-medium transition-all duration-300"
            >
              {mode === 'login' ? 'Sign In' : mode === 'signup' ? 'Create Account' : 'Reset Password'}
            </button>

            {/* Mode Toggle */}
            <div className="text-center space-y-2">
              {mode === 'login' ? (
                <>
                  <p className="text-gray-400">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      Sign Up
                    </button>
                  </p>
                  <button
                    type="button"
                    onClick={() => setMode('forgot')}
                    className="text-purple-400 hover:text-purple-300 text-sm"
                  >
                    Forgot Password?
                  </button>
                </>
              ) : mode === 'signup' ? (
                <p className="text-gray-400">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-purple-400 hover:text-purple-300"
                >
                  Back to Sign In
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
