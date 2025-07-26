// components/Auth/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { User, Lock, Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import styles from './Login.module.css';

const Login = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState(''); // Новое поле
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        // При регистрации передаем также nickname
        await register(email, password, nickname);
      }
      onClose();
    } catch (error) {
      setError(getErrorMessage(error.code));
    }
    setLoading(false);
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'Пользователь не найден';
      case 'auth/wrong-password':
        return 'Неверный пароль';
      case 'auth/email-already-in-use':
        return 'Email уже используется';
      case 'auth/weak-password':
        return 'Пароль слишком слабый';
      case 'auth/invalid-email':
        return 'Неверный формат email';
      case 'auth/invalid-credential':
        return 'Неверный email или пароль';
      case 'auth/nickname-required':
        return 'Укажите никнейм';
      case 'auth/nickname-too-short':
        return 'Никнейм должен содержать минимум 2 символа';
      case 'auth/nickname-too-long':
        return 'Никнейм не должен превышать 20 символов';
      default:
        return 'Произошла ошибка при авторизации';
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {isLogin ? 'Авторизация' : 'Регистрация'}
          </h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div className={styles.inputGroup}>
              <div className={styles.inputWrapper}>
                <User className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="Никнейм"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className={styles.input}
                  required={!isLogin}
                  minLength="2"
                  maxLength="20"
                />
              </div>
            </div>
          )}

          <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? (
              'Загрузка...'
            ) : (
              <>
                {isLogin ? <LogIn size={16} /> : <UserPlus size={16} />}
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
              </>
            )}
          </button>

          <div className={styles.switchMode}>
            <span>
              {isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}
            </span>
            <button
              type="button"
              className={styles.switchButton}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;