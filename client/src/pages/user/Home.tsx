import { motion } from 'framer-motion';
import { Pill, Heart, Ambulance, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UserHome() {
  const features = [
    {
      icon: Pill,
      title: 'Find Medicines',
      description: 'Check availability of medicines near you'
    },
    {
      icon: Heart,
      title: 'Hospital Beds',
      description: 'View real-time hospital bed availability'
    },
    {
      icon: Heart,
      title: 'Find Doctors',
      description: 'Locate available doctors by specialization'
    },
    {
      icon: Ambulance,
      title: 'Emergency Help',
      description: 'Call ambulance instantly in emergencies'
    }
  ];

  return (
    <div className="min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-teal-50 to-blue-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Find Medicines, Doctors & Emergency Services{' '}
              <span className="text-teal-600">Near You</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Access real-time availability of medicines, hospital beds, doctors, and emergency
              services instantly. Your health is our priority.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/user/search"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all shadow-lg flex items-center justify-center group"
              >
                Search Medicine
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/user/hospitals"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
              >
                Check Hospital Beds
              </Link>
              <Link
                to="/user/emergency"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg"
              >
                Emergency Help
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Support Available</h2>
          <p className="text-gray-600 mb-8">24/7 ambulance and emergency medical services</p>
          <Link
            to="/user/emergency"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Call Ambulance Now
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
