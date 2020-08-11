import React from 'react';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = (email, password) => {
    fetchSignup(email, password)
      .then(user => setCurrentUser(user));
  };

  return (
    <AuthContext.Provider value={(currentUser, signup)}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
