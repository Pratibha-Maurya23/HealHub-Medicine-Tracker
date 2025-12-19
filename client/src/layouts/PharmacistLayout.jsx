import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Menu, X, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

export default function PharmacistLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const { signout } = useAuth();

  const navItems = [
  { name: 'Dashboard', path: '/pharmacist', icon: 'home' },
  { name: 'Medicines', path: '/pharmacist/medicines', icon: 'medicine' },
  { name: 'Hospitals', path: '/pharmacist/hospitals', icon: 'hospitals' },
  { name: 'Overview', path: '/pharmacist/overview', icon: 'chart' },
  { name: 'Profile', path: '/pharmacist/profile', icon: 'user' }
];


  return (
    <div className="flex h-screen bg-gray-100">
      <motion.aside
        animate={{ width: sidebarOpen ? 256 : 64 }}
        className="bg-gray-900 text-white transition-all duration-300"
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
          {sidebarOpen && <span className="font-bold text-lg">Pharmacist</span>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-gray-800 p-2 rounded"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 space-y-2 px-3">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded transition-colors ${
                location.pathname === item.path
                  ? 'bg-teal-600'
                  : 'hover:bg-gray-800'
              }`}
            >
              <Home className="h-5 w-5" />
              {sidebarOpen && <span className="text-sm">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-4">
  <button
    onClick = {signout}
    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium bg-red-600 hover:bg-red-700 transition-colors"
  >
    <LogOut className="h-4 w-4" />
    {sidebarOpen && <span>Logout</span>}
  </button>
</div>
      </motion.aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md">
  <div className="px-6 py-4 flex justify-between items-center">
    
    {/* Left Title */}
    <h1 className="text-2xl font-bold text-gray-900">
      Pharmacist Portal
    </h1>

    {/* Right Profile Section */}
    <div className="flex items-center gap-3">
      <div className="text-right hidden sm:block">
        <p className="text-sm font-semibold text-gray-800">John Smith</p>
        <p className="text-xs text-gray-500">Pharmacist</p>
      </div>

      {/* Avatar Circle */}
      <Link
    to="/pharmacist/profile" className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
        JS
      </Link>
    </div>
  </div>
</header>


        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
