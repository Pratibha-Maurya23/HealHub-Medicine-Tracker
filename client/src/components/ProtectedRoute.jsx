import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

export const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  // Not logged in → block
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role mismatch → block
  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
