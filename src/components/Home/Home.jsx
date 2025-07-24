// components/Home/Home.jsx
import React from 'react';
import StatsCard from './components/StatsCard/StatsCard';
import InfoSection from './components/InfoSection/InfoSection';
import { Users, MapPin, Zap, Shield } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
  const statsData = [
    { icon: Users, value: '14', label: 'Батальонов', color: 'blue' },
    { icon: MapPin, value: '19', label: 'Кампаний', color: 'green' },
    { icon: Zap, value: '20', label: 'Корпусов в армии', color: 'yellow' },
    { icon: Shield, value: '2', label: 'Года войны', color: 'red' }
  ];

  const republicInfo = [
    { label: 'Глава государства', value: 'Шив Палпатин' },
    { label: 'Правительство', value: 'Сенат республиканцев' },
    { label: 'Главнокомандующий', value: 'Шив Палпатин' },
    { label: 'Штаб армии', value: 'планета Акира' }
  ];

  const separatistInfo = [
    { label: 'Глава государства', value: 'Граф Дукку' },
    { label: 'Правительство', value: 'Совет сепаратистов' },
    { label: 'Главнокомандующий', value: 'Генерал Гривус' },
    { label: 'Противник', value: 'Сепаратистская Армия Дроидов' }
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Давным-давно в далёкой Галактике...
        </h1>
        <p className={styles.heroText}>
          Добро пожаловать в 6-й корпус 8-й Секторальной Армии "Сверкающий бриллиант". 
          Мы ведём ожесточённые бои против Конфедерации Независимых Систем в северном театре военных действий.
          Война идёт уже второй год, и каждый клон на счету!
        </p>
        <div className={styles.heroActions}>
          <button className={styles.primaryButton}>
            Присоединиться к корпусу
          </button>
          <button className={styles.secondaryButton}>
            Узнать больше
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <h2 className={styles.sectionTitle}>Статистика корпуса</h2>
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </section>

      {/* Info Sections */}
      <section className={styles.infoSections}>
        <div className={styles.infoGrid}>
          <InfoSection
            title="Галактическая Республика"
            titleColor="blue"
            items={republicInfo}
          />
          <InfoSection
            title="Конфедерация Независимых Систем"
            titleColor="red"
            items={separatistInfo}
          />
        </div>
      </section>

      {/* Army Structure */}
      <section className={styles.armyStructure}>
        <h2 className={styles.sectionTitle}>Структура армии</h2>
        <div className={styles.structureGrid}>
          <div className={styles.structureItem}>
            <h3>Верховное Командование</h3>
            <ul>
              <li>Регулярный флот → Адмирал Флота</li>
              <li>Регулярная армия → Маршал-Коммандер</li>
              <li>Орден Джедаев → Старший Генерал Джедай</li>
              <li>БСО/БКО → Директор</li>
              <li>Наёмнический батальон → Капитан</li>
            </ul>
          </div>
          <div className={styles.structureItem}>
            <h3>8-я Секторальная Армия</h3>
            <ul>
              <li>Название: "Сверкающий бриллиант"</li>
              <li>Регион: Северный сверх-сектор</li>
              <li>Штаб: планета Акира</li>
              <li>Корпусов: 20 (было 4)</li>
              <li>Батальонов в 6-м корпусе: 64</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <h2>Наша миссия</h2>
          <p>
            Мы сражаемся за свободу и демократию в галактике. Каждый клон нашего корпуса 
            готов отдать жизнь за Республику и защиту мирных граждан от тирании сепаратистов.
          </p>
          <blockquote className={styles.quote}>
            "За Республику! За свободу в Галактике!"
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;