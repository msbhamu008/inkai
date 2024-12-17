import React from 'react';
import { BrowserRouter as Router, Routes as RoutesComponent, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import Dashboard from './pages/Dashboard';
import DashboardRedirect from './pages/DashboardRedirect';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import CookieConsent from './components/CookieConsent';
import SEOMetaTags from './components/SEOMetaTags';

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <ThemeProvider>
            <SEOMetaTags />
            <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#000000] dark:to-[#130F40] text-gray-900 dark:text-gray-100">
              <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-blue-100/20 dark:from-purple-900/20 dark:via-transparent dark:to-blue-900/20 pointer-events-none" />
              <Navbar />
              <RoutesComponent>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/career" element={<Career />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard-app" element={<DashboardRedirect />} />
              </RoutesComponent>
              <Footer />
              <CookieConsent />
            </div>
          </ThemeProvider>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;