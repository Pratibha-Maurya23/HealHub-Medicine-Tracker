import { motion } from 'framer-motion';
import { AlertCircle, Phone, MapPin, Ambulance, Clock } from 'lucide-react';
import { ambulances, hospitals } from '../../data/dummyData';

export default function Emergency() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Emergency Services</h1>
          <p className="text-gray-600">24/7 Emergency Support - Call Ambulance Instantly</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-2xl p-8 mb-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <button className="hover:scale-105 transition-transform">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Ambulance</h3>
              <p className="text-sm text-red-100">Emergency Response in 5-10 minutes</p>
            </button>

            <button className="hover:scale-105 transition-transform">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <MapPin className="h-10 w-10" />
              </div>
              <h3 className="font-bold text-lg mb-2">Nearest Hospital</h3>
              <p className="text-sm text-red-100">Get directions instantly</p>
            </button>

            <button className="hover:scale-105 transition-transform">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="font-bold text-lg mb-2">Emergency Contact</h3>
              <p className="text-sm text-red-100">+1 555-EMERGENCY</p>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Ambulance className="h-6 w-6 mr-2 text-red-600" />
              Nearby Ambulances
            </h2>

            <div className="space-y-4">
              {ambulances.map(ambulance => (
                <div key={ambulance.id} className="border border-gray-200 rounded-lg p-4 hover:border-red-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{ambulance.plateNumber}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        ambulance.status === 'available'
                          ? 'bg-green-100 text-green-800'
                          : ambulance.status === 'on-duty'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {ambulance.status === 'available'
                        ? 'Available'
                        : ambulance.status === 'on-duty'
                        ? 'On Duty'
                        : 'Maintenance'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Coordinates: {ambulance.latitude.toFixed(4)}, {ambulance.longitude.toFixed(4)}
                  </p>
                  <button className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors text-sm">
                    Request Ambulance
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nearest Hospitals</h2>

            <div className="space-y-4">
              {hospitals.map(hospital => (
                <div key={hospital.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{hospital.name}</h3>
                  <p className="text-sm text-gray-600 mb-2 flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    {hospital.address}, {hospital.city}
                  </p>
                  <p className="text-sm text-gray-600 mb-3 flex items-start">
                    <Phone className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    {hospital.contact}
                  </p>
                  <button className="w-full border border-teal-600 text-teal-600 py-2 rounded-lg font-medium hover:bg-teal-50 transition-colors text-sm">
                    Navigate to Hospital
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6"
        >
          <h3 className="font-bold text-gray-900 mb-3">Emergency Safety Tips</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Provide accurate location information to the dispatcher</li>
            <li>• Stay calm and follow the ambulance crew instructions</li>
            <li>• Keep emergency contact information readily available</li>
            <li>• In case of cardiac arrest, immediate CPR can save lives</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
