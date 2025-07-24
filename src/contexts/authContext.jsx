// contexts/AuthContext.jsx
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Временная простая авторизация без Firebase
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        if (email && password) {
          setCurrentUser({ email, uid: Date.now().toString() });
          setLoading(false);
          resolve({ user: { email, uid: Date.now().toString() } });
        } else {
          setLoading(false);
          reject(new Error('Неверные данные'));
        }
      }, 1000);
    });
  };

  const register = (email, password) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        if (email && password.length >= 6) {
          setCurrentUser({ email, uid: Date.now().toString() });
          setLoading(false);
          resolve({ user: { email, uid: Date.now().toString() } });
        } else {
          setLoading(false);
          reject(new Error('Пароль должен быть не менее 6 символов'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    return new Promise((resolve) => {
      setCurrentUser(null);
      resolve();
    });
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};