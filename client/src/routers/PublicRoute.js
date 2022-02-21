import React from "react";
import { Navigate} from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoute = ({ children, isAuthenticated}) => {
    if (!isAuthenticated ) {
      return children
    }
    
      
    return <Navigate to="/" />
}

PublicRoute.prototypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    children: PropTypes.func.isRequired
}