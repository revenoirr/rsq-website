// utils/firebase.js
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  orderBy, 
  query, 
  serverTimestamp,
  setDoc,
  getDoc
} from 'firebase/firestore';

// Конфигурация Firebase из переменных окружения (для Vite)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Временная отладка - удали после проверки
console.log('Firebase config:', {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? 'Загружен' : 'НЕ ЗАГРУЖЕН',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? 'Загружен' : 'НЕ ЗАГРУЖЕН',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ? 'Загружен' : 'НЕ ЗАГРУЖЕН'
});

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация сервисов (убираем Storage)
export const auth = getAuth(app);
export const db = getFirestore(app);

// Экспорт функций аутентификации
export { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
};

// Экспорт функций для работы с базой данных
export { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  orderBy, 
  query, 
  serverTimestamp,
  setDoc,
  getDoc
};