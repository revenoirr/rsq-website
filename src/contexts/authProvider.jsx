// contexts/AuthProvider.jsx
import React, { useState, useEffect } from 'react';
import { AuthContext } from './authContext';
import { 
  auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  db,
  doc,
  setDoc,
  getDoc
} from '../utils/firebase';

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Слушатель изменений авторизации
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Загружаем дополнительные данные пользователя из Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setCurrentUser({
              ...user,
              nickname: userData.nickname
            });
          } else {
            setCurrentUser(user);
          }
        } catch (error) {
          console.error('Ошибка при загрузке данных пользователя:', error);
          setCurrentUser(user);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Вход в систему
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Регистрация
  const register = async (email, password, nickname) => {
    try {
      // Валидация никнейма
      if (!nickname || nickname.trim().length < 2) {
        throw { code: 'auth/nickname-too-short' };
      }
      if (nickname.trim().length > 20) {
        throw { code: 'auth/nickname-too-long' };
      }

      console.log('Attempting to register user...'); // Отладка
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully:', result.user.uid); // Отладка
      
      // Сохраняем дополнительные данные пользователя в Firestore
      console.log('Saving user data to Firestore...'); // Отладка
      await setDoc(doc(db, 'users', result.user.uid), {
        email: email,
        nickname: nickname.trim(),
        createdAt: new Date(),
        role: 'user'
      });
      console.log('User data saved successfully'); // Отладка

      return result;
    } catch (error) {
      console.error('Registration error:', error); // Отладка
      throw error;
    }
  };

  // Выход из системы
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
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
      {!loading && children}
    </AuthContext.Provider>
  );
};