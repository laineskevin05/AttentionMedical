//import { useContext } from 'react';

import { Navigate } from "react-router-dom";
//import { AuthContext } from '../auth/AuthContext';

export const PrivateRoute = ({ children, uid }) => {
  //const { user } = useContext(AuthContext )

  return typeof uid === "string" && uid ? children : <Navigate to="/login" />;
};
