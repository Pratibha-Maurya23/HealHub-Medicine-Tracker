import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Menu, X, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface PharmacistLayoutProps {
  children: React.ReactNode;
}

export default function PharmacistLayout({ children }: PharmacistLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/pharmacist', icon: 'home' },
    { name: 'Medicines', path: '/pharmacist/medicines', icon: 'medicine' },
    { name: 'Overview', path: '/pharmacist/overview', icon: 'chart' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <motion.aside
        animate={{ width: sidebarOpen ? 256 : 64 }}
        className="bg-gray-900 text-white transition-all duration-300"
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
          {sidebarOpen && <span className="font-bold text-lg">Pharmacist</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hover:bg-gray-800 p-2 rounded">
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

        <div className="absolute bottom-0 left-0 right-0 p-4">
          {sidebarOpen && (
            <button className="w-full flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-medium transition-colors">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          )}
        </div>
      </motion.aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Pharmacist Portal</h1>
            <button className="md:hidden text-gray-600">
              <X className="h-6 w-6" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
