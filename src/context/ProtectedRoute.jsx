// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../pages/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

 //  return isAuthenticated ? children : <Navigate to="/Login" replace />;
};

export default ProtectedRoute;