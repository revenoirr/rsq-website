// components/Home/components/StatsCard/StatsCard.jsx
import React from 'react';
import styles from './StatsCard.module.css';

const StatsCard = ({ icon: Icon, value, label, color }) => {
  return (
    <div className={`${styles.card} ${styles[`card--${color}`]}`}>
      <div className={styles.content}>
        <Icon className={`${styles.icon} ${styles[`icon--${color}`]}`} />
        <div className={styles.info}>
          <p className={`${styles.value} ${styles[`value--${color}`]}`}>{value}</p>
          <p className={styles.label}>{label}</p>
        </div>
      </div>
      <div className={`${styles.glow} ${styles[`glow--${color}`]}`} />
    </div>
  );
};

export default StatsCard;