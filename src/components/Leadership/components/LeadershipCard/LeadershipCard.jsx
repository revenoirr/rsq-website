// components/Leadership/components/LeadershipCard/LeadershipCard.jsx
import React, { useState } from 'react';
import { Users, ChevronDown, ChevronUp, Award, Star } from 'lucide-react';
import { divisions } from '../../../../data/leadership';
import styles from './LeadershipCard.module.css';

const LeadershipCard = ({ leader }) => {
  const [expanded, setExpanded] = useState(false);
  const divisionInfo = divisions[leader.category];

  return (
    <div className={`${styles.card} ${styles[`card--${divisionInfo.color}`]}`}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Users className={styles.avatarIcon} />
        </div>
        <div className={styles.basicInfo}>
          <h3 className={styles.name}>{leader.name}</h3>
          <p className={styles.rank}>{leader.rank}</p>
          {leader.equivalentRank && (
            <p className={styles.equivalent}>≡ {leader.equivalentRank}</p>
          )}
          <p className={styles.division}>{leader.division}</p>
        </div>
        <button
          className={styles.expandButton}
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? 'Свернуть' : 'Развернуть'}
        >
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      {expanded && (
        <div className={styles.expandedContent}>
          <div className={styles.bio}>
            <h4 className={styles.bioTitle}>Биография</h4>
            <p className={styles.bioText}>{leader.bio}</p>
          </div>

          {leader.achievements && leader.achievements.length > 0 && (
            <div className={styles.achievements}>
              <h4 className={styles.achievementsTitle}>
                <Award className={styles.achievementsIcon} />
                Достижения
              </h4>
              <ul className={styles.achievementsList}>
                {leader.achievements.map((achievement, index) => (
                  <li key={index} className={styles.achievementItem}>
                    <Star className={styles.achievementIcon} />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {leader.deputies && leader.deputies.length > 0 && (
            <div className={styles.deputies}>
              <h4 className={styles.deputiesTitle}>Заместители</h4>
              <div className={styles.deputiesList}>
                {leader.deputies.map((deputy, index) => (
                  <div key={index} className={styles.deputyCard}>
                    <div className={styles.deputyInfo}>
                      <p className={styles.deputyRank}>{deputy.rank}</p>
                      <p className={styles.deputyName}>{deputy.name}</p>
                    </div>
                    <p className={styles.deputySpecialization}>{deputy.specialization}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LeadershipCard;