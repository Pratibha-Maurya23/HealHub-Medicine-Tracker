import { motion } from 'framer-motion';
import { BarChart3, Pill, TrendingUp, AlertTriangle } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { dailyStats } from '../../data/dummyData';

export default function PharmacistDashboard() {
  const stats = [
    { label: 'Total Medicines', value: '342', icon: Pill, color: 'bg-teal-100 text-teal-600' },
    { label: 'Low Stock', value: '12', icon: AlertTriangle, color: 'bg-red-100 text-red-600' },
    { label: 'Sold Today', value: '87', icon: TrendingUp, color: 'bg-green-100 text-green-600' },
    { label: 'Revenue Today', value: '$2,450', icon: BarChart3, color: 'bg-blue-100 text-blue-600' }
  ];

  return (
    <div className="p-8">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        Dashboard
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

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Medicine Updates</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="medicines" stroke="#14b8a6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Weekly Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="beds" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6"
      >
        <h3 className="font-bold text-yellow-900 mb-3 flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          Low Stock Alerts
        </h3>
        <ul className="space-y-2 text-sm text-yellow-800">
          <li>• Paracetamol 500mg - 15 units left</li>
          <li>• Aspirin 325mg - 8 units left</li>
          <li>• Omeprazole - 12 units left</li>
        </ul>
      </motion.div>
    </div>
  );
}
