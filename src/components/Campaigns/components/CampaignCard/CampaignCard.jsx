// components/Campaigns/components/CampaignCard/CampaignCard.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Users, Globe } from 'lucide-react';
import styles from './CampaignCard.module.css';

const CampaignCard = ({ campaign, index, totalCampaigns }) => {
  const [expanded, setExpanded] = useState(false);
  const getStatusInfo = (status) => {
    switch (status) {
      case 'Выполнена':
        return { isSuccess: true, color: 'success' };
      case 'Провалена':
        return { isSuccess: false, color: 'failure' };
      case 'В процессе':
        return { isSuccess: null, color: 'progress' };
      case 'Частично выполнена':
        return { isSuccess: null, color: 'partial' };
      default:
        return { isSuccess: true, color: 'success' };
    }
  };
  
  const statusInfo = getStatusInfo(campaign.status);

  return (
    <div className={`${styles.card} ${styles[`card${statusInfo.color.charAt(0).toUpperCase() + statusInfo.color.slice(1)}`]}`}>
      <div className={styles.timeline}>
        <div className={`${styles.timelineMarker} ${styles[`marker${statusInfo.color.charAt(0).toUpperCase() + statusInfo.color.slice(1)}`]}`}>
          {index + 1}
        </div>
        {index < totalCampaigns - 1 && <div className={styles.timelineLine} />}
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h3 className={styles.name}>{campaign.name}</h3>
            <div className={styles.planet}>
              <MapPin className={styles.planetIcon} />
              <span>{campaign.planet}</span>
            </div>
          </div>
          
          <div className={styles.headerRight}>
            <span className={`${styles.status} ${styles[`status${statusInfo.color.charAt(0).toUpperCase() + statusInfo.color.slice(1)}`]}`}>
              {campaign.status}
            </span>
            <button
              className={styles.expandButton}
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? 'Свернуть' : 'Развернуть'}
            >
              {expanded ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
        </div>

        <div className={styles.basicInfo}>
          <div className={styles.infoItem}>
            <Users className={styles.infoIcon} />
            <span>{campaign.population}</span>
          </div>
          <div className={styles.infoItem}>
            <Globe className={styles.infoIcon} />
            <span>{campaign.region}</span>
          </div>
        </div>

        {expanded && (
          <div className={styles.expandedContent}>
            <div className={styles.description}>
              <p>{campaign.description}</p>
            </div>
            
            <div className={styles.details}>
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Сектор:</span>
                  <span className={styles.detailValue}>{campaign.sector}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Система:</span>
                  <span className={styles.detailValue}>{campaign.system}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Столица:</span>
                  <span className={styles.detailValue}>{campaign.capital}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Обитатели:</span>
                  <span className={styles.detailValue}>{campaign.inhabitants}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Период вращения:</span>
                  <span className={styles.detailValue}>{campaign.rotationPeriod}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Орбитальный период:</span>
                  <span className={styles.detailValue}>{campaign.orbitalPeriod}</span>
                </div>
              </div>
            </div>

            <div className={styles.objectives}>
              <h4 className={styles.objectivesTitle}>Цели операции:</h4>
              <ul className={styles.objectivesList}>
                {campaign.objectives.map((objective, idx) => (
                  <li key={idx} className={styles.objectiveItem}>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>

            {campaign.failureReasons && (
              <div className={styles.failureReasons}>
                <h4 className={styles.failureTitle}>Причины неудачи:</h4>
                <ul className={styles.failureList}>
                  {campaign.failureReasons.map((reason, idx) => (
                    <li key={idx} className={styles.failureItem}>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {campaign.specialNotes && (
              <div className={styles.specialNotes}>
                <h4 className={styles.specialNotesTitle}>Особые заметки:</h4>
                <p className={styles.specialNotesText}>{campaign.specialNotes}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignCard;