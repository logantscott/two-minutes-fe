import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCurrentUser, useAuthLoading } from '../../hooks/AuthContext';

const PrivateRoute = (props) => {
  const currentUser = useCurrentUser();
  const loading = useAuthLoading();

  if(loading) return null;
  if(!loading && !currentUser) return <Redirect to="/" />;

  return <Route {...props} />;
};

export default PrivateRoute;
