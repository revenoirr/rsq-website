// components/Battalions/Battalions.jsx
import React, { useState } from 'react';
import BattalionCard from './components/BattalionCard/BattalionCard';
import { battalions, battalionTypes } from '../../data/battalions';
import styles from './Battalions.module.css';

const Battalions = () => {
  const [filterType, setFilterType] = useState('all');

  const filteredBattalions = filterType === 'all' 
    ? battalions 
    : battalions.filter(b => b.type === filterType);

  return (
    <div className={styles.battalions}>
      <div className={styles.header}>
        <h2 className={styles.title}>Батальоны 6-го корпуса</h2>
        
        <div className={styles.filters}>
          <label className={styles.filterLabel}>Фильтр по типу:</label>
          <select 
            className={styles.filterSelect}
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">Все типы</option>
            {Object.keys(battalionTypes).map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{battalions.length}</span>
          <span className={styles.statLabel}>Всего батальонов</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{filteredBattalions.length}</span>
          <span className={styles.statLabel}>Показано</span>
        </div>
      </div>

      <div className={styles.grid}>
        {filteredBattalions.map((battalion) => (
          <BattalionCard key={battalion.id} battalion={battalion} />
        ))}
      </div>
    </div>
  );
};

export default Battalions;