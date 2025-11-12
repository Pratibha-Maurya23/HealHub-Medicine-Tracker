import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Menu, Users, BarChart3, AlertTriangle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: BarChart3 },
    { name: 'Pharmacists', path: '/admin/pharmacists', icon: Users },
    { name: 'System Logs', path: '/admin/logs', icon: AlertTriangle },
    { name: 'Hospitals', path: '/admin/hospitals', icon: Users }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <motion.aside
        animate={{ width: sidebarOpen ? 256 : 64 }}
        className="bg-blue-900 text-white transition-all duration-300"
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-blue-800">
          {sidebarOpen && <span className="font-bold text-lg">Admin</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hover:bg-blue-800 p-2 rounded">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 space-y-2 px-3">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-600'
                    : 'hover:bg-blue-800'
                }`}
              >
                <Icon className="h-5 w-5" />
                {sidebarOpen && <span className="text-sm">{item.name}</span>}
              </Link>
            );
          })}
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
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
