// components/Campaigns/Campaigns.jsx
import React, { useState } from 'react';
import CampaignCard from './components/CampaignCard/CampaignCard';
import { campaigns, campaignStats } from '../../data/campaigns';
import { MapPin, CheckCircle, XCircle, Users, Clock } from 'lucide-react';
import styles from './Campaigns.module.css';

const Campaigns = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredCampaigns = filterStatus === 'all' 
    ? campaigns 
    : campaigns.filter(c => c.status === filterStatus);

  return (
    <div className={styles.campaigns}>
      <div className={styles.header}>
        <h2 className={styles.title}>Военные кампании</h2>
        
        <div className={styles.filters}>
          <label className={styles.filterLabel}>Статус:</label>
          <select 
            className={styles.filterSelect}
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">Все кампании</option>
            <option value="Выполнена">Выполненные</option>
            <option value="Провалена">Провальные</option>
            <option value="В процессе">В процессе</option>
            <option value="Частично выполнена">Частично выполненные</option>
          </select>
        </div>
      </div>

      {/* Campaign Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <MapPin className={styles.icon} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{campaignStats.total}</span>
            <span className={styles.statLabel}>Всего кампаний</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <CheckCircle className={`${styles.icon} ${styles.iconSuccess}`} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{campaignStats.successful}</span>
            <span className={styles.statLabel}>Успешных</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <XCircle className={`${styles.icon} ${styles.iconDanger}`} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{campaignStats.failed}</span>
            <span className={styles.statLabel}>Провальных</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Clock className={`${styles.icon} ${styles.iconInfo}`} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{campaignStats.inProgress}</span>
            <span className={styles.statLabel}>В процессе</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Users className={styles.icon} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>
              {(campaignStats.totalPopulation / 1000000000).toFixed(1)}Б
            </span>
            <span className={styles.statLabel}>Население</span>
          </div>
        </div>
      </div>

      {/* Campaign Timeline */}
      <div className={styles.timeline}>
        <h3 className={styles.timelineTitle}>Хронология кампаний</h3>
        <div className={styles.timelineContent}>
          {filteredCampaigns.map((campaign, index) => (
            <CampaignCard key={campaign.id} campaign={campaign} index={index} />
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className={styles.summary}>
        <h3 className={styles.summaryTitle}>Итоги боевых действий</h3>
        <div className={styles.summaryContent}>
          <p>
            6-й корпус 8-й Секторальной Армии провел {campaignStats.total} крупных военных кампаний 
            в различных регионах галактики. Из них {campaignStats.successful} завершились успешно, 
            {campaignStats.failed} провалились, {campaignStats.partiallySuccessful} выполнены частично, 
            а {campaignStats.inProgress} продолжаются в настоящее время.
          </p>
          <p>
            Общее население освобожденных и контролируемых территорий составляет более{' '}
            {Math.round(campaignStats.totalPopulation / 1000000000)} миллиардов граждан галактики.
          </p>
          <p>
            Корпус активно действует во всех регионах: от Внешнего Кольца до Дикого пространства, 
            демонстрируя свою способность адаптироваться к различным условиям и противникам.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;