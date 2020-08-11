/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { fetchSignup } from '../services/auth';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = (name, email, password) => {
    fetchSignup(name, email, password)
      .then(user => setCurrentUser(user));
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
