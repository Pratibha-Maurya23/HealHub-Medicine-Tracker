import { motion } from 'framer-motion';
import { Users, Building2, AlertTriangle, TrendingUp } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { pharmacists, hospitals, activityLogs, dailyStats } from '../../data/dummyData';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Pharmacists', value: pharmacists.length.toString(), icon: Users, color: 'bg-blue-100 text-blue-600' },
    { label: 'Active Hospitals', value: hospitals.filter(h => h.active).length.toString(), icon: Building2, color: 'bg-green-100 text-green-600' },
    { label: 'Recent Alerts', value: activityLogs.filter(l => l.type.includes('emergency')).length.toString(), icon: AlertTriangle, color: 'bg-red-100 text-red-600' },
    { label: 'System Health', value: '99.8%', icon: TrendingUp, color: 'bg-teal-100 text-teal-600' }
  ];

  return (
    <div className="p-8">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        Admin Dashboard
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Daily Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="emergencies" stroke="#ef4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">System Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="medicines" fill="#14b8a6" />
              <Bar dataKey="beds" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity Logs</h2>
        <div className="space-y-3">
          {activityLogs.slice(0, 5).map(log => (
            <div key={log.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className={`p-2 rounded-lg ${
                log.type === 'emergency_call' ? 'bg-red-100' :
                log.type === 'ambulance_dispatched' ? 'bg-orange-100' :
                log.type === 'medicine_added' ? 'bg-green-100' : 'bg-yellow-100'
              }`}>
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">{log.message}</p>
                <p className="text-xs text-gray-600">{log.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
