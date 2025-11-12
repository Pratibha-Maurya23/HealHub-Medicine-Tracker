import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Menu, X, AlertCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assests/logo.jpg";

interface UserLayoutProps {
  children: React.ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/user' },
    { name: 'Search', path: '/user/search' },
    { name: 'Hospital & Doctors', path: '/user/hospitals' },
    { name: 'Emergency', path: '/user/emergency' },
    { name: 'Contact', path: '/user/contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/user" className="flex items-center space-x-2">
             {/* <Activity className="h-8 w-8 text-teal-600" /> */}
             <img src={logo} alt="App Logo" className="h-14 w-14 text-teal-600"/>
            <span className="text-4xl font-bold text-gray-800">HealHub</span>
            </Link>

            <div className="hidden md:flex space-x-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    location.pathname === item.path
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-gray-600 hover:text-teal-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/user/login"
                className="text-teal-600 font-medium hover:text-teal-700"
              >
                Login
              </Link>
              <button
                className="md:hidden text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4"
            >
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {children}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors z-40"
        title="Emergency Help"
      >
        <AlertCircle className="h-6 w-6" />
      </motion.button>
    </div>
  );
}
