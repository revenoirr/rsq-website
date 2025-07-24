// components/Home/components/InfoSection/InfoSection.jsx
import React from 'react';
import styles from './InfoSection.module.css';

const InfoSection = ({ title, titleColor, items }) => {
  return (
    <div className={styles.section}>
      <h3 className={`${styles.title} ${styles[`title--${titleColor}`]}`}>
        {title}
      </h3>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <span className={styles.label}>{item.label}:</span>
            <span className={styles.value}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoSection;