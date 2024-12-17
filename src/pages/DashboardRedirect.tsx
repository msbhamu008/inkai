import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:3001';

interface UserData {
  id: string;
  email: string;
  name: string;
  role: string;
  institution?: string;
  department?: string;
  subjects?: string[];
  avatar?: string;
  createdAt: string;
  lastLogin: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
    language: string;
  };
  stats: {
    papersCreated: number;
    questionsAdded: number;
    evaluationsCompleted: number;
  };
}

export default function DashboardRedirect() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToDashboard = async () => {
      if (!user) {
        console.error('No user found, redirecting to login');
        navigate('/login');
        return;
      }

      try {
        // Get the authentication token
        const token = localStorage.getItem('userToken');
        if (!token) {
          console.error('No authentication token found');
          throw new Error('No authentication token found');
        }

        // Create a user data object with only the necessary fields
        const userData = {
          id: user.id,
          name: user.name || '',
          email: user.email,
          instituteName: user.institution || '',
          state: user.state || '',
          city: user.city || '',
        };

        // Log data being sent (for debugging)
        console.log('Redirecting to dashboard with:', {
          dashboardUrl: DASHBOARD_URL,
          token: token ? 'present' : 'missing',
          userData: userData,
        });

        // Create the dashboard URL with all necessary data
        const dashboardUrl = new URL(DASHBOARD_URL);
        
        // Add parameters - userData will be automatically URL encoded by URLSearchParams
        dashboardUrl.searchParams.append('token', token);
        dashboardUrl.searchParams.append('userData', JSON.stringify(userData));

        console.log('Final URL:', dashboardUrl.toString());

        // Open dashboard in new tab
        window.open(dashboardUrl.toString(), '_blank', 'noopener,noreferrer');
        
        // Navigate back
        navigate(-1);
      } catch (error) {
        console.error('Error redirecting to dashboard:', error);
        navigate('/login');
      }
    };

    redirectToDashboard();
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent mb-4"></div>
      <p className="text-lg text-gray-600 dark:text-gray-300">Opening dashboard in new tab...</p>
    </div>
  );
}
