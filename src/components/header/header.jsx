// components/Header/Header.jsx
import React from 'react';
import { Star } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Star className={styles.icon} />
            <div className={styles.title}>
              <h1 className={styles.mainTitle}>
                Rising Sun: Quasar
              </h1>
              <p className={styles.subtitle}>6-й корпус 8-й Секторальной Армии</p>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.republic}>Галактическая Республика</p>
            <p className={styles.motto}>За Республику и свободу!</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;