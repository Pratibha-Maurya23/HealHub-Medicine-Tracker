import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import PharmacistLayout from './layouts/PharmacistLayout';

import UserHome from './pages/user/Home';
import SearchMedicine from './pages/user/SearchMedicine';
import Hospitals from './pages/user/Hospitals';
import Emergency from './pages/user/Emergency';
import UserContact from './pages/user/Contact';
import UserLogin from './pages/user/Login';
import UserProfile from "./pages/user/UserProfile";

import { ProtectedRoute } from './components/ProtectedRoute';

import PharmacistDashboard from './pages/pharmacist/Dashboard';
import MedicineManagement from './pages/pharmacist/MedicineManagement';
import PharmacistOverview from './pages/pharmacist/Overview';
import HospitalsPharmacist from './pages/pharmacist/Hospitals';
import PharmacistProfile from './pages/pharmacist/PharmacistProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout><UserHome /></UserLayout>} />
        <Route path="/search" element={<UserLayout><SearchMedicine /></UserLayout>} />
        <Route path="/hospitals" element={<UserLayout><Hospitals /></UserLayout>} />
        <Route path="/emergency" element={<UserLayout><Emergency /></UserLayout>} />
        <Route path="/contact" element={<UserLayout><UserContact /></UserLayout>} />
        <Route path="/login" element={<UserLayout><UserLogin /></UserLayout>} />

        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserLayout><UserHome /></UserLayout>
            </ProtectedRoute>
          }
        />
        <Route 
  path="/user/profile" 
  element={
    <ProtectedRoute>
      <UserLayout><UserProfile /></UserLayout>
    </ProtectedRoute>
  } 
/>

        <Route
          path="/pharmacist"
          element={
            <ProtectedRoute role="pharmacist">
              <PharmacistLayout><PharmacistDashboard /></PharmacistLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/pharmacist/medicines"
          element={
            <ProtectedRoute role="pharmacist">
              <PharmacistLayout><MedicineManagement /></PharmacistLayout>
            </ProtectedRoute>
          }
        />
         <Route
          path="/pharmacist/hospitals"
          element={
            <ProtectedRoute role="pharmacist">
              <PharmacistLayout><HospitalsPharmacist /></PharmacistLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/pharmacist/overview"
          element={
            <ProtectedRoute role="pharmacist">
              <PharmacistLayout><PharmacistOverview /></PharmacistLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pharmacist/profile"
          element={
            <ProtectedRoute role="pharmacist">
              <PharmacistLayout><PharmacistProfile /></PharmacistLayout>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
