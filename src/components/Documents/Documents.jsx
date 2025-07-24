// components/Documents/Documents.jsx
import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Search, Folder, Clock, Star } from 'lucide-react';
import { documents } from '../../data/documents';
import styles from './Documents.module.css';

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || doc.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { key: 'all', label: 'Все документы' },
    { key: 'regulations', label: 'Уставы и регламенты' },
    { key: 'reports', label: 'Отчёты' },
    { key: 'tables', label: 'Таблицы составов' },
    { key: 'maps', label: 'Карты и схемы' },
    { key: 'forms', label: 'Формы и заявления' }
  ];

  const handleDocumentClick = (document) => {
    // В реальном проекте здесь будет открытие документа или переход по ссылке
    console.log(`Открытие документа: ${document.title}`);
  };

  return (
    <div className={styles.documents}>
      <div className={styles.header}>
        <h2 className={styles.title}>Документы и материалы</h2>
        
        <div className={styles.headerActions}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Поиск документов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          
          <select 
            className={styles.categorySelect}
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.key} value={category.key}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <FileText className={styles.statIcon} />
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{documents.length}</span>
            <span className={styles.statLabel}>Всего документов</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <Folder className={styles.statIcon} />
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>{categories.length - 1}</span>
            <span className={styles.statLabel}>Категорий</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <Star className={styles.statIcon} />
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>
              {documents.filter(d => d.important).length}
            </span>
            <span className={styles.statLabel}>Важных</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <Clock className={styles.statIcon} />
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>
              {documents.filter(d => d.isNew).length}
            </span>
            <span className={styles.statLabel}>Новых</span>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className={styles.documentsGrid}>
        {filteredDocuments.map((document) => (
          <div 
            key={document.id} 
            className={`${styles.documentCard} ${document.important ? styles.cardImportant : ''}`}
            onClick={() => handleDocumentClick(document)}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <FileText className={styles.fileIcon} />
              </div>
              
              <div className={styles.cardBadges}>
                {document.isNew && (
                  <span className={styles.badgeNew}>Новый</span>
                )}
                {document.important && (
                  <Star className={styles.badgeImportant} />
                )}
              </div>
            </div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{document.title}</h3>
              <p className={styles.cardDescription}>{document.description}</p>
              
              <div className={styles.cardMeta}>
                <span className={styles.cardCategory}>{document.categoryLabel}</span>
                <span className={styles.cardDate}>{document.lastUpdated}</span>
              </div>
            </div>
            
            <div className={styles.cardActions}>
              <button className={styles.actionButton} title="Открыть">
                <ExternalLink className={styles.actionIcon} />
              </button>
              <button className={styles.actionButton} title="Скачать">
                <Download className={styles.actionIcon} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <div className={styles.emptyState}>
          <FileText className={styles.emptyIcon} />
          <h3>Документы не найдены</h3>
          <p>Измените критерии поиска или фильтрации</p>
        </div>
      )}

      {/* Important Notice */}
      <div className={styles.notice}>
        <div className={styles.noticeHeader}>
          <Star className={styles.noticeIcon} />
          <h3>Важная информация</h3>
        </div>
        <div className={styles.noticeContent}>
          <p>
            Для доступа к некоторым документам требуется специальное разрешение. 
            Обратитесь к своему командиру или в штаб корпуса для получения доступа.
          </p>
          <div className={styles.noticeActions}>
            <button className={styles.noticeButton}>
              Запросить доступ
            </button>
            <button className={styles.noticeButtonSecondary}>
              Связаться со штабом
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;