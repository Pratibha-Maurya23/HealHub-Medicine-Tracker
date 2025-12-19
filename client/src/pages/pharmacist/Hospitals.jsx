import { motion } from 'framer-motion';
import { Building2, MapPin, Phone, Power } from 'lucide-react';
import { hospitals } from '../../data/dummyData';
import { useState } from 'react';

export default function HospitalsAdmin() {
  const [hospitalStatus, setHospitalStatus] = useState(
    hospitals.reduce((acc, h) => ({ ...acc, [h.id]: h.active }), {})
  );

  const toggleStatus = (id) => {
    setHospitalStatus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-8">
      <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-bold text-gray-900 mb-8">
        Hospital & Ambulance Tracker
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {hospitals.map((hospital, index) => (
          <motion.div key={hospital.id} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold flex items-center">
                    <Building2 className="h-6 w-6 mr-2" />
                    {hospital.name}
                  </h2>
                  <p className="text-blue-100 mt-1 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {hospital.address}
                  </p>
                </div>
                <button onClick={() => toggleStatus(hospital.id)} className={`${hospitalStatus[hospital.id] ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'} px-4 py-2 rounded-lg font-semibold flex items-center`}>
                  <Power className="h-4 w-4 mr-2" />
                  {hospitalStatus[hospital.id] ? 'Active' : 'Inactive'}
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="flex items-center text-gray-700 mb-4">
                <Phone className="h-4 w-4 mr-2 text-blue-600" />
                {hospital.contact}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-red-50 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-red-600">{hospital.beds.icu}</p>
                  <p className="text-xs text-gray-600 mt-1">ICU Beds</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-blue-600">{hospital.beds.general}</p>
                  <p className="text-xs text-gray-600 mt-1">General</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-orange-600">{hospital.beds.emergency}</p>
                  <p className="text-xs text-gray-600 mt-1">Emergency</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Doctors: {hospital.doctors.length}</p>
                {hospital.doctors.slice(0, 2).map(doctor => (
                  <p key={doctor.id} className="text-xs text-gray-600">{doctor.name} - {doctor.specialization}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
