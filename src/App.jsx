// App.jsx
import React, { useState, useEffect } from 'react';
// import { AuthProvider } from './contexts/AuthContext'; // Временно отключено
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import Battalions from './components/Battalions/Battalions.jsx';
import Campaigns from './components/Campaigns/Campaigns.jsx';
import Leadership from './components/Leadership/Leadership.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Documents from './components/Documents/Documents.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Динамическое изменение title в зависимости от активной вкладки
  useEffect(() => {
    const titles = {
      home: '6-й корпус - Сверкающий бриллиант',
      battalions: '6-й корпус - Батальоны', 
      campaigns: '6-й корпус - Кампании',
      leadership: '6-й корпус - Командование',
      gallery: '6-й корпус - Галерея',
      documents: '6-й корпус - Документы'
    };
    
    document.title = titles[activeTab] || '6-й корпус - Сверкающий бриллиант';
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'battalions':
        return <Battalions />;
      case 'campaigns':
        return <Campaigns />;
      case 'leadership':
        return <Leadership />;
      case 'gallery':
        return <Gallery />;
      case 'documents':
        return <Documents />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      {/* Background with stars effect */}
      <div className="app__background">
        <div className="app__stars" />
      </div>

      <div className="app__content">
        <Header />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="app__main">
          {renderContent()}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;