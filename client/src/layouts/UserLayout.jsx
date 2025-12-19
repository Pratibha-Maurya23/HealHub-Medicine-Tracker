import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, AlertCircle, UserCircle, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import logo from "../assests/logo.jpg";

export default function UserLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signout } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Search', path: '/search' },
    { name: 'Hospital & Doctors', path: '/hospitals' },
    { name: 'Emergency', path: '/emergency' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="App Logo" className="h-14 w-14" />
              <span className="text-4xl font-bold text-gray-800">HealHub</span>
            </Link>

            {/* Desktop Nav */}
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

              {/* Profile (only when logged in) */}
              {user && (
                <Link
                  to="/user/profile"
                  className={`px-3 py-2 text-sm font-medium rounded ${
                    location.pathname === '/profile'
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-gray-600 hover:text-teal-600'
                  }`}
                >
                  Profile
                </Link>
              )}
            </div>

            {/* Right Side Auth Buttons */}
            <div className="flex items-center space-x-4">

              {/* Show Login only if NOT logged in */}
              {!user ? (
                <Link
                  to="/login"
                  className="text-white font-medium hover:font-semibold py-2 px-4 rounded-lg bg-teal-600"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={signout}
                  className="flex items-center gap-1 text-white font-medium hover:font-semibold rounded-lg py-2 px-4 bg-red-600 bd-ro"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
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

              {/* Profile for Mobile */}
              {user && (
                <Link
                  to="/user/profile"
                  className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </nav>

      {children}

      {/* Emergency Floating Button */}
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
