// components/Leadership/Leadership.jsx
import React, { useState } from 'react';
import LeadershipCard from './components/LeadershipCard/LeadershipCard';
import { leadership, divisions, leadershipStats } from '../../data/leadership';
import { Users, Award, Shield, Layers } from 'lucide-react';
import styles from './Leadership.module.css';

const Leadership = () => {
  const [filterDivision, setFilterDivision] = useState('all');

  const filteredLeadership = filterDivision === 'all' 
    ? leadership 
    : leadership.filter(l => l.category === filterDivision);

  return (
    <div className={styles.leadership}>
      <div className={styles.header}>
        <h2 className={styles.title}>Верховное Командование</h2>
        
        <div className={styles.filters}>
          <label className={styles.filterLabel}>Подразделение:</label>
          <select 
            className={styles.filterSelect}
            value={filterDivision}
            onChange={(e) => setFilterDivision(e.target.value)}
          >
            <option value="all">Все подразделения</option>
            {Object.entries(divisions).map(([key, division]) => (
              <option key={key} value={key}>{division.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Leadership Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Users className={styles.icon} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{leadershipStats.totalLeaders}</span>
            <span className={styles.statLabel}>Командиров</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Award className={styles.icon} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{leadershipStats.totalDeputies}</span>
            <span className={styles.statLabel}>Заместителей</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Layers className={styles.icon} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{leadershipStats.divisions}</span>
            <span className={styles.statLabel}>Подразделений</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Shield className={styles.icon} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{leadershipStats.cloneOfficers}</span>
            <span className={styles.statLabel}>Клон-офицеров</span>
          </div>
        </div>
      </div>

      {/* Command Structure */}
      <div className={styles.commandStructure}>
        <h3 className={styles.structureTitle}>Структура командования</h3>
        <div className={styles.structureGrid}>
          {Object.entries(divisions).map(([key, division]) => (
            <div key={key} className={`${styles.divisionCard} ${styles[`division--${division.color}`]}`}>
              <h4 className={styles.divisionName}>{division.name}</h4>
              <p className={styles.divisionDescription}>{division.description}</p>
              {division.ranks && (
                <div className={styles.ranksList}>
                  <h5 className={styles.ranksTitle}>Ранговая структура:</h5>
                  <ul className={styles.ranksItems}>
                    {division.ranks.slice(0, 3).map((rank, index) => (
                      <li key={index} className={styles.rankItem}>{rank}</li>
                    ))}
                    {division.ranks.length > 3 && (
                      <li className={styles.rankMore}>+{division.ranks.length - 3} рангов</li>
                    )}
                  </ul>
                </div>
              )}
              <div className={styles.divisionCount}>
                {leadership.filter(l => l.category === key).length} командир(а)
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Cards */}
      <div className={styles.leadersGrid}>
        {filteredLeadership.map((leader) => (
          <LeadershipCard key={leader.id} leader={leader} />
        ))}
      </div>

      {/* Chain of Command */}
      <div className={styles.chainOfCommand}>
        <h3 className={styles.chainTitle}>Цепь командования</h3>
        <div className={styles.chainDescription}>
          <p>
            Верховное командование 6-го корпуса построено по принципу четкой иерархии 
            и разделения ответственности между различными подразделениями. Каждый командир 
            отвечает за свою область и координирует действия с другими подразделениями.
          </p>
          <div className={styles.chainFlow}>
            <div className={styles.chainLevel}>
              <h4>Стратегическое командование</h4>
              <p>Адмирал флота, Старший Генерал-джедай, Маршал-Коммандер</p>
            </div>
            <div className={styles.chainArrow}>↓</div>
            <div className={styles.chainLevel}>
              <h4>Специализированные службы</h4>
              <p>БСО/БКО, Медицинские и Инженерные блоки</p>
            </div>
            <div className={styles.chainArrow}>↓</div>
            <div className={styles.chainLevel}>
              <h4>Исполнительный уровень</h4>
              <p>Командиры батальонов, Наёмнические формирования</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;