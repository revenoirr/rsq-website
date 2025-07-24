// components/Navigation/Navigation.jsx
import React from 'react';
import { Star, Users, MapPin, FileText, Shield, Sword, Camera, Zap } from 'lucide-react';
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
    <div className="navigation">
      {/* Заголовок с логотипом */}
      <div className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo">
              <Zap className="logo-icon" />
            </div>
            <div className="title-section">
              <h1 className="main-title">6-й корпус 8-й Секторальной Армии</h1>
              <p className="subtitle">"Сверкающий бриллиант"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Навигация */}
      <nav className="nav-section">
        <div className="nav-container">
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
                <span className="nav-label">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;