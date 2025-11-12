import { motion } from 'framer-motion';
import { hospitals } from '../../data/dummyData';
import { Hospital as HospitalIcon, MapPin, Phone, Bed, Users } from 'lucide-react';

export default function Hospitals() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hospitals & Doctors</h1>
          <p className="text-gray-600">Check real-time bed availability and doctor schedules</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {hospitals.map((hospital, index) => (
            <motion.div
              key={hospital.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{hospital.name}</h2>
                    <p className="flex items-center text-sm mb-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      {hospital.address}, {hospital.city}
                    </p>
                    <p className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2" />
                      {hospital.contact}
                    </p>
                  </div>
                  {hospital.active && (
                    <span className="bg-green-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Active
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Bed className="h-5 w-5 mr-2 text-teal-600" />
                  Bed Availability
                </h3>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <BedCard
                    title="ICU Beds"
                    count={hospital.beds.icu}
                    color="bg-red-50 text-red-600"
                  />
                  <BedCard
                    title="General Beds"
                    count={hospital.beds.general}
                    color="bg-blue-50 text-blue-600"
                  />
                  <BedCard
                    title="Emergency"
                    count={hospital.beds.emergency}
                    color="bg-orange-50 text-orange-600"
                  />
                </div>

                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-teal-600" />
                  Available Doctors
                </h3>

                <div className="space-y-3">
                  {hospital.doctors.map(doctor => (
                    <div
                      key={doctor.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">{doctor.name}</p>
                        <p className="text-sm text-gray-600">{doctor.specialization}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            doctor.status === 'available'
                              ? 'bg-green-100 text-green-800'
                              : doctor.status === 'busy'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {doctor.status === 'available'
                            ? 'Available'
                            : doctor.status === 'busy'
                            ? 'Busy'
                            : 'On Duty'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 bg-teal-600 text-white py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                  Book Appointment
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface BedCardProps {
  title: string;
  count: number;
  color: string;
}

function BedCard({ title, count, color }: BedCardProps) {
  return (
    <div className={`${color} rounded-lg p-4 text-center`}>
      <p className="text-2xl font-bold">{count}</p>
      <p className="text-xs font-medium mt-1">{title}</p>
    </div>
  );
}
