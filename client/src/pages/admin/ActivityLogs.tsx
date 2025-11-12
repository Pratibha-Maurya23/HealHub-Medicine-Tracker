import { motion } from 'framer-motion';
import { AlertTriangle, Activity, Ambulance, Package } from 'lucide-react';
import { activityLogs } from '../../data/dummyData';

export default function ActivityLogs() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'emergency_call':
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'ambulance_dispatched':
        return <Ambulance className="h-5 w-5 text-orange-600" />;
      case 'medicine_added':
        return <Package className="h-5 w-5 text-green-600" />;
      default:
        return <Activity className="h-5 w-5 text-blue-600" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'emergency_call':
        return 'bg-red-50';
      case 'ambulance_dispatched':
        return 'bg-orange-50';
      case 'medicine_added':
        return 'bg-green-50';
      default:
        return 'bg-blue-50';
    }
  };

  return (
    <div className="p-8">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        System Activity Logs
      </motion.h1>

      <div className="space-y-4">
        {activityLogs.map((log, index) => (
          <motion.div
            key={log.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`${getColor(log.type)} rounded-xl shadow-lg p-6 border-l-4 ${
              log.type === 'emergency_call' ? 'border-l-red-600' :
              log.type === 'ambulance_dispatched' ? 'border-l-orange-600' :
              log.type === 'medicine_added' ? 'border-l-green-600' : 'border-l-blue-600'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-lg">
                {getIcon(log.type)}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{log.message}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {log.pharmacist ? `By: ${log.pharmacist}` : log.user}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-700">{log.timestamp}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
                  log.type === 'emergency_call' ? 'bg-red-200 text-red-800' :
                  log.type === 'ambulance_dispatched' ? 'bg-orange-200 text-orange-800' :
                  log.type === 'medicine_added' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'
                }`}>
                  {log.type.replace('_', ' ').toUpperCase()}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
