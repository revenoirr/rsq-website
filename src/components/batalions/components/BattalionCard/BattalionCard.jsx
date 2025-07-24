// components/Battalions/components/BattalionCard/BattalionCard.jsx
import React, { useState } from 'react';
import { Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { battalionTypes } from '../../../../data/battalions';
import styles from './BattalionCard.module.css';

const BattalionCard = ({ battalion }) => {
  const [expanded, setExpanded] = useState(false);
  const typeInfo = battalionTypes[battalion.type];

  return (
    <div className={`${styles.card} ${styles[`card--${typeInfo.color}`]}`}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Shield className={styles.icon} />
          <span className={`${styles.type} ${styles[`type--${typeInfo.color}`]}`}>
            {battalion.type}
          </span>
        </div>
        <button
          className={styles.expandButton}
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? 'Свернуть' : 'Развернуть'}
        >
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      <h3 className={styles.name}>{battalion.name}</h3>

      <div className={styles.leadership}>
        <div className={styles.leadershipItem}>
          <span className={styles.label}>Командир:</span>
          <span className={styles.value}>{battalion.commander}</span>
        </div>
        
        {battalion.deputy1 && battalion.deputy1 !== 'неизвестно' && (
          <div className={styles.leadershipItem}>
            <span className={styles.label}>Зам. командира:</span>
            <span className={styles.value}>{battalion.deputy1}</span>
          </div>
        )}
        
        {battalion.deputy2 && battalion.deputy2 !== 'неизвестно' && battalion.deputy2 !== 'отсутствует' && (
          <div className={styles.leadershipItem}>
            <span className={styles.label}>Зам. командира:</span>
            <span className={styles.value}>{battalion.deputy2}</span>
          </div>
        )}
      </div>

      {expanded && (
        <div className={styles.expandedContent}>
          <div className={styles.description}>
            <p>{typeInfo.description}</p>
          </div>
          
          {battalion.members && battalion.members.length > 0 && (
            <div className={styles.members}>
              <h4 className={styles.membersTitle}>Состав батальона:</h4>
              <div className={styles.membersList}>
                {battalion.members.map((member, index) => (
                  <span key={index} className={styles.member}>
                    {member}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BattalionCard;