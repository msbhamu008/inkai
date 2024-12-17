import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, School, Mail, Phone, Lock, User, MapPin } from 'lucide-react';
import { indianStates } from '../data/indianStates';
import { createUser, loginUser } from '../services/auth';
import { useAuth } from '../context/AuthContext';

interface FormData {
  name: string;
  contact: string;
  instituteName: string;
  state: string;
  city: string;
}

export default function Demo() {
  const { user, setUser } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    instituteName: '',
    state: '',
    city: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [availableCities, setAvailableCities] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (formData.state) {
      setAvailableCities(indianStates[formData.state] || []);
      setFormData(prev => ({ ...prev, city: '' }));
    }
  }, [formData.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    // Validation
    const newErrors: Partial<FormData> = {};
    if (!isLoggedIn) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.instituteName) newErrors.instituteName = 'Institute name is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.city) newErrors.city = 'City is required';
    }

    if (!formData.contact) {
      newErrors.contact = 'Email or phone is required';
    } else if (formData.contact.includes('@')) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.contact)) {
        newErrors.contact = 'Invalid email format';
      }
    } else {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.contact)) {
        newErrors.contact = 'Invalid phone number format (10 digits required)';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      console.log('Submitting form...', isLoggedIn ? 'Login' : 'Signup');
      let response;
      
      if (isLoggedIn) {
        response = await loginUser(formData.contact);
      } else {
        response = await createUser({
          name: formData.name,
          email: formData.contact.includes('@') ? formData.contact : undefined,
          phone: !formData.contact.includes('@') ? formData.contact : undefined,
          instituteName: formData.instituteName,
          state: formData.state,
          city: formData.city,
        });
      }

      console.log('Response:', response);

      if (response.success && response.user) {
        setUser(response.user);
        console.log('Authentication successful, redirecting to dashboard...');
        navigate('/dashboard');
      } else {
        console.error('Authentication failed:', response.message);
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
              Get started with Inkredible
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            You're just a few steps away from your own AI-powered institute
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          {errorMessage && (
            <div className="mb-4 p-3 rounded bg-red-100 border border-red-300 text-red-700">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLoggedIn && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Institute Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <School className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-2 border ${
                        errors.instituteName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white`}
                      placeholder="Your Institute Name"
                    />
                  </div>
                  {errors.instituteName && (
                    <p className="mt-1 text-sm text-red-500">{errors.instituteName}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      State
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          errors.state ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white`}
                      >
                        <option value="">Select State</option>
                        {Object.keys(indianStates).map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.state && (
                      <p className="mt-1 text-sm text-red-500">{errors.state}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                      City
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        disabled={!formData.state}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          errors.city ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        } rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white ${
                          !formData.state ? 'bg-gray-100 dark:bg-gray-600 cursor-not-allowed' : ''
                        }`}
                      >
                        <option value="">Select City</option>
                        {availableCities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                    )}
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Email or Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {formData.contact.includes('@') ? (
                    <Mail className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Phone className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.contact ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white`}
                  placeholder="Email or Phone Number"
                />
              </div>
              {errors.contact && (
                <p className="mt-1 text-sm text-red-500">{errors.contact}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 
                hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200
                ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <span>
                {loading 
                  ? (isLoggedIn ? 'Logging in...' : 'Creating account...') 
                  : (isLoggedIn ? 'Continue to Demo' : 'Start Your Free Trial')}
              </span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isLoggedIn ? (
                <>
                  Don't have an account?{' '}
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
                  >
                    Log in
                  </button>
                </>
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
