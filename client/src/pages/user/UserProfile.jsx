import { motion } from "framer-motion";
import { Mail, Phone, Calendar } from "lucide-react";
import { useAuth } from "../../AuthProvider";
import UserLayout from "../../layouts/UserLayout";

export default function UserProfile() {
  const { user } = useAuth();

  if (!user) return null;

  return (<>
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
          <div className="w-24 h-24 bg-teal-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
            {user.name?.[0] || 'U'}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-500">Registered User</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-teal-600" />
            <span className="text-gray-700">{user.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-teal-600" />
            <span className="text-gray-700">{user.phone || "Not provided"}</span>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-teal-600" />
            <span className="text-gray-700">
              Joined: {user.createdAt || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
