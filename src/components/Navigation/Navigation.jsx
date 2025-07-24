// components/Navigation/Navigation.jsx
import React from 'react';
import { Star, Users, MapPin, FileText, Shield, Sword, Camera } from 'lucide-react';
import './Navigation.css';

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
    <nav className="navigation">
      <div className="container">
        <div className="nav-list">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`nav-item ${
                activeTab === id ? 'nav-item-active' : ''
              }`}
            >
              <Icon className="nav-icon" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;