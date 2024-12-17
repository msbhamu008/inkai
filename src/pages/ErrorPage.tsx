import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import SEOMetaTags from '../components/SEOMetaTags';

export default function ErrorPage() {
  const error = useRouteError() as any;
  const navigate = useNavigate();
  const is404 = error?.status === 404;

  return (
    <>
      <SEOMetaTags 
        title={is404 ? "404 - Page Not Found | Ink" : "Error | Ink"}
        description={is404 ? "The page you're looking for doesn't exist." : "An error occurred."}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-50 dark:from-[#0A0118] dark:to-purple-900/10 px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-purple-500 mb-4">
            {is404 ? '404' : 'Oops!'}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {is404 ? "Page Not Found" : "Something went wrong"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {is404 
              ? "The page you're looking for doesn't exist or has been moved."
              : "We're sorry, an unexpected error has occurred."}
          </p>
          <div className="space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-lg transition-colors"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
