// components/Navigation/Navigation.jsx
import React from 'react';
import { Star, Users, MapPin, FileText, Shield, Sword, Camera } from 'lucide-react';
import styles from './Navigation.css';

const Navigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Главная', icon: Star },
    { id: 'battalions', label: 'Батальоны', icon: Shield },
    { id: 'campaigns', label: 'Кампании', icon: Sword },
    { id: 'leadership', label: 'Командование', icon: Users },
    { id: 'gallery', label: 'Галерея', icon: Camera },
    { id: 'documents', label: 'Документы', icon: FileText }
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.navList}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`${styles.navItem} ${
                activeTab === id ? styles.navItemActive : ''
              }`}
            >
              <Icon className={styles.navIcon} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;