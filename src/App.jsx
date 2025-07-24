// App.jsx
import React, { useState } from 'react';
// import { AuthProvider } from './contexts/AuthContext'; // Временно отключено
import Header from './components/Header/header';
import Navigation from './components/Navigation/navigation';
import Home from './components/Home/Home';
import Battalions from './components/batalions/Battalions';
import Campaigns from './components/Campaigns/Campaigns';
import Leadership from './components/Leadership/Leadership';
import Gallery from './components/Gallery/Gallery';
import Documents from './components/Documents/Documents';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

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