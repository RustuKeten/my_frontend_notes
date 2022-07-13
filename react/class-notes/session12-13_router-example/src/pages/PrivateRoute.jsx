import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  //? Aslinda bu bilgi Global state'den okunacak
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
