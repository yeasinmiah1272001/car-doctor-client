import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg ml-96 my-60"></span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={ location.pathname } to="/login" replace></Navigate>;
};

export default Private;