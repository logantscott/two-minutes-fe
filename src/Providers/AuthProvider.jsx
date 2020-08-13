/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchSignup, fetchLogin, fetchVerify } from '../services/auth';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const authService = (serviceFn, ...args) => {
    setAuthError(null);
    return serviceFn(...args)
      .then(user => setCurrentUser(user))
      .catch(err => setAuthError(err));
  };

  const signup = (name, email, password) =>
    authService(fetchSignup, name, email, password);

  const login = (email, password) => 
    authService(fetchLogin, email, password);

  const signout = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    fetchVerify()
      .then(user => setCurrentUser(user));
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, authError, signup, login, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
