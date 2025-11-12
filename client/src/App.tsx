import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import PharmacistLayout from './layouts/PharmacistLayout';
import AdminLayout from './layouts/AdminLayout';

import UserHome from './pages/user/Home';
import SearchMedicine from './pages/user/SearchMedicine';
import Hospitals from './pages/user/Hospitals';
import Emergency from './pages/user/Emergency';
import UserContact from './pages/user/Contact';
import UserLogin from './pages/user/Login';

import PharmacistDashboard from './pages/pharmacist/Dashboard';
import MedicineManagement from './pages/pharmacist/MedicineManagement';
import PharmacistOverview from './pages/pharmacist/Overview';

import AdminDashboard from './pages/admin/Dashboard';
import AdminPharmacists from './pages/admin/Pharmacists';
import ActivityLogs from './pages/admin/ActivityLogs';
import HospitalsAdmin from './pages/admin/Hospitals';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/user" replace />} />

        <Route element={<UserLayout><UserHome /></UserLayout>} path="/user" />
        <Route element={<UserLayout><SearchMedicine /></UserLayout>} path="/user/search" />
        <Route element={<UserLayout><Hospitals /></UserLayout>} path="/user/hospitals" />
        <Route element={<UserLayout><Emergency /></UserLayout>} path="/user/emergency" />
        <Route element={<UserLayout><UserContact /></UserLayout>} path="/user/contact" />
        <Route element={<UserLayout><UserLogin /></UserLayout>} path="/user/login" />

        <Route element={<PharmacistLayout><PharmacistDashboard /></PharmacistLayout>} path="/pharmacist" />
        <Route element={<PharmacistLayout><MedicineManagement /></PharmacistLayout>} path="/pharmacist/medicines" />
        <Route element={<PharmacistLayout><PharmacistOverview /></PharmacistLayout>} path="/pharmacist/overview" />

        <Route element={<AdminLayout><AdminDashboard /></AdminLayout>} path="/admin" />
        <Route element={<AdminLayout><AdminPharmacists /></AdminLayout>} path="/admin/pharmacists" />
        <Route element={<AdminLayout><ActivityLogs /></AdminLayout>} path="/admin/logs" />
        <Route element={<AdminLayout><HospitalsAdmin /></AdminLayout>} path="/admin/hospitals" />
      </Routes>
    </Router>
  );
}

export default App;
