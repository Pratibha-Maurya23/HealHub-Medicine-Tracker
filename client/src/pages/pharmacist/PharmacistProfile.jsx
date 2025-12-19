import { motion } from "framer-motion";
import { Mail, Building2, Phone, Calendar } from "lucide-react";

export default function PharmacistProfile() {
  const pharmacist = {
    name: "John Smith",
    email: "john@pharmacy.com",
    phone: "+1 234-567-8900",
    pharmacyName: "HealthCare Pharmacy",
    address: "123 Main Street, Downtown",
    joined: "15 Jan 2024",
    lastActive: "12 Nov 2024"
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-900 mb-8"
      >
        My Profile
      </motion.h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6">
          
          {/* Profile Avatar */}
          <div className="w-24 h-24 bg-teal-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
            JS
          </div>

          {/* Name & Role */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">John Smith</h2>
            <p className="text-sm text-gray-500">Verified Pharmacist</p>
          </div>
        </div>

        {/* Info */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-teal-600" />
            <span className="text-gray-700">{pharmacist.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-teal-600" />
            <span className="text-gray-700">{pharmacist.phone}</span>
          </div>

          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-teal-600" />
            <span className="text-gray-700">{pharmacist.pharmacyName}</span>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-teal-600" />
            <span className="text-gray-700">Joined: {pharmacist.joined}</span>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-teal-600" />
            <span className="text-gray-700">Last Active: {pharmacist.lastActive}</span>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8 text-right">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
