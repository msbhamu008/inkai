import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, User, ArrowRight } from 'lucide-react';
import { logout } from '../services/auth';
import { useAuth } from '../context/AuthContext';
import env from '../config/env';

interface UserData {
  name: string;
  email?: string;
  phone?: string;
  instituteName: string;
  state: string;
  city: string;
}

export default function Dashboard() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/demo');
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate('/demo');
  };

  const handleDashboardAccess = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('userToken');
      
      if (!token) {
        console.error('No authentication token found');
        // Generate a new token if not found
        if (user) {
          const newToken = btoa(`${user.id}:${Date.now()}`);
          localStorage.setItem('userToken', newToken);
        } else {
          console.error('No user found');
          return;
        }
      }

      // Get the current token (either existing or newly generated)
      const currentToken = localStorage.getItem('userToken');
      if (!currentToken || !user) {
        console.error('No token or user found');
        return;
      }

      // Create user data object
      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        instituteName: user.instituteName,
        state: user.state,
        city: user.city
      };

      // Create dashboard URL with encoded user data
      const dashboardUrl = new URL(env.dashboardUrl);
      dashboardUrl.searchParams.append('token', currentToken);
      dashboardUrl.searchParams.append('userData', encodeURIComponent(JSON.stringify(userData)));
      
      // Open dashboard in new tab
      window.open(dashboardUrl.toString(), '_blank');
    } catch (error) {
      console.error('Error accessing dashboard:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Fixed position header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              Welcome, {user.name}!
            </motion.h1>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <LogOut size={20} />
              Logout
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main content with padding-top to account for fixed header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* User Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 mb-8"
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <User size={40} className="text-purple-600 dark:text-purple-300" />
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Institute Name</p>
                  <p className="font-medium">{user.instituteName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Contact</p>
                  <p className="font-medium">{user.email || user.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">State</p>
                  <p className="font-medium">{user.state}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">City</p>
                  <p className="font-medium">{user.city}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access common tasks and features here.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
            <p className="text-gray-600 dark:text-gray-300">
              View your recent actions and changes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
          >
            <h3 className="text-lg font-semibold mb-2">Statistics</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor your institute's performance.
            </p>
          </motion.div>
        </div>

        {/* Access Full Dashboard Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={handleDashboardAccess}
            disabled={isLoading}
            className={`
              px-6 py-3 
              bg-gradient-to-r from-purple-600 to-blue-600 
              hover:from-purple-700 hover:to-blue-700 
              text-white font-medium rounded-lg 
              shadow-lg hover:shadow-xl 
              transition-all duration-200 
              flex items-center justify-center 
              space-x-2
              ${isLoading ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <span>{isLoading ? 'Loading...' : 'Access Full Dashboard'}</span>
            {!isLoading && <ArrowRight className="w-5 h-5" />}
            {isLoading && (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
