// components/Header/Header.jsx
import React from 'react';
import { Star } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-left">
            <Star className="header-icon" />
            <div className="header-title">
              <h1 className="header-main-title">
                Rising Sun: Quasar
              </h1>
              <p className="header-subtitle">6-й корпус 8-й Секторальной Армии</p>
            </div>
          </div>
          <div className="header-right">
            <p className="header-republic">Галактическая Республика</p>
            <p className="header-motto">За Республику и свободу!</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;