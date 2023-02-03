import React, { useState, createContext } from 'react';
export const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signin = (newUser, cb) => {
    setUser(newUser);
    cb();
  };
  const signout = cb => {
    setUser(null);
    cb();
  };
  const value = { user, signout, signin };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
