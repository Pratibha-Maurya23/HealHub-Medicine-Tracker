import { motion } from 'framer-motion';
import { hospitals } from '../../data/dummyData';
import { Bed, Users } from 'lucide-react';

export default function PharmacistOverview() {
  return (
    <div className="p-8">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        Hospital & Bed Overview
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {hospitals.map((hospital, index) => (
          <motion.div
            key={hospital.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 text-white">
              <h2 className="text-2xl font-bold">{hospital.name}</h2>
              <p className="text-teal-100">{hospital.address}</p>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Bed className="h-5 w-5 mr-2 text-teal-600" />
                  Bed Availability
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-red-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-red-600">{hospital.beds.icu}</p>
                    <p className="text-xs text-gray-600">ICU Beds</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-blue-600">{hospital.beds.general}</p>
                    <p className="text-xs text-gray-600">General Beds</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-orange-600">{hospital.beds.emergency}</p>
                    <p className="text-xs text-gray-600">Emergency</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-teal-600" />
                  Available Doctors
                </h3>
                <div className="space-y-2">
                  {hospital.doctors.map(doctor => (
                    <div key={doctor.id} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-900 text-sm">{doctor.name}</p>
                      <p className="text-xs text-gray-600">{doctor.specialization}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
