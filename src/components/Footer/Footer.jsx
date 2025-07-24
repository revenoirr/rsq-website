// components/Footer/Footer.jsx
import React from 'react';
import { Star, Shield, Users, Mail, MapPin, Calendar } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'Батальоны', href: '#battalions' },
    { name: 'Кампании', href: '#campaigns' },
    { name: 'Командование', href: '#leadership' }
  ];

  const importantLinks = [
    { name: 'Галерея', href: '#gallery' },
    { name: 'Документы', href: '#documents' },
    { name: 'Уставы и регламенты', href: '#regulations' },
    { name: 'Обратная связь', href: '#feedback' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'Связь со штабом', value: 'command@6corps.gal' },
    { icon: MapPin, text: 'Штаб армии', value: 'Планета Акира, Северный сектор' },
    { icon: Calendar, text: 'Основан', value: '2й год Войн Клонов' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Logo and Description */}
          <div className={styles.brand}>
            <div className={styles.logoSection}>
              <Star className={styles.logo} />
              <div className={styles.brandText}>
                <h3 className={styles.brandTitle}>Rising Sun: Quasar</h3>
                <p className={styles.brandSubtitle}>6-й корпус 8-й Секторальной Армии</p>
              </div>
            </div>
            <p className={styles.brandDescription}>
              "Сверкающий бриллиант" — элитный корпус Галактической Республики, 
              сражающийся за свободу и демократию в северном театре военных действий. 
              Каждый клон — герой, каждая победа — шаг к миру в галактике.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Быстрые ссылки</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Важные разделы</h4>
            <ul className={styles.linksList}>
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Контактная информация</h4>
            <div className={styles.contactList}>
              {contactInfo.map((contact, index) => (
                <div key={index} className={styles.contactItem}>
                  <contact.icon className={styles.contactIcon} />
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>{contact.text}:</span>
                    <span className={styles.contactValue}>{contact.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <Shield className={styles.statIcon} />
            <div className={styles.statText}>
              <span className={styles.statNumber}>14</span>
              <span className={styles.statLabel}>Батальонов</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <Users className={styles.statIcon} />
            <div className={styles.statText}>
              <span className={styles.statNumber}>20</span>
              <span className={styles.statLabel}>Корпусов в армии</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <Star className={styles.statIcon} />
            <div className={styles.statText}>
              <span className={styles.statNumber}>19</span>
              <span className={styles.statLabel}>Кампаний</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <Calendar className={styles.statIcon} />
            <div className={styles.statText}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Года войны</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>© {currentYear} Rising Sun: Quasar | 6-й корпус 8-й Секторальной Армии "Сверкающий бриллиант"</p>
            <p className={styles.motto}>За Республику! За свободу в Галактике!</p>
          </div>
          
          <div className={styles.legalLinks}>
            <a href="#privacy" className={styles.legalLink}>Конфиденциальность</a>
            <a href="#terms" className={styles.legalLink}>Условия службы</a>
            <a href="#conduct" className={styles.legalLink}>Кодекс поведения</a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className={styles.decorativeElements}>
          <div className={styles.star} style={{ left: '10%', animationDelay: '0s' }} />
          <div className={styles.star} style={{ left: '30%', animationDelay: '1s' }} />
          <div className={styles.star} style={{ left: '60%', animationDelay: '2s' }} />
          <div className={styles.star} style={{ left: '80%', animationDelay: '0.5s' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;