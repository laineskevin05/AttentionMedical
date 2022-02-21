import React from "react";
import { Navigate} from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({ children, isAuthenticated}) => {
        
    if (isAuthenticated ) {
      return children
    }
      
    return <Navigate to="/login" />
}

PrivateRoute.prototypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.func.isRequired
}