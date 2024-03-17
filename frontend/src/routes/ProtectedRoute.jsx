/* eslint-disable react/prop-types */
import React, { useContext } from 'react'; // Importing React and useContext
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext'; // Importing authContext

const ProtectedRoute = ({children, allowedRoles}) => {
  const {token , role} = useContext(authContext); // Using useContext to consume the context

  const isAllowed = allowedRoles.includes(role);
  const accessibleRoute = token && isAllowed ? children : <Navigate to='/login' replace={true} />;
 
  return accessibleRoute;
};

export default ProtectedRoute;
