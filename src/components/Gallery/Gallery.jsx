// components/Gallery/Gallery.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera, Filter, Upload, LogIn } from 'lucide-react';
import { galleryImages } from '../../data/galleryimages.js';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filterCategory, setFilterCategory] = useState('all');
  
  // Временные заглушки для авторизации
  const currentUser = null; // Пока что всегда null
  const logout = () => console.log('logout');

  const filteredImages = filterCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filterCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const categories = [
    { key: 'all', label: 'Все изображения' },
    { key: 'battles', label: 'Битвы' },
    { key: 'planets', label: 'Планеты' },
    { key: 'ships', label: 'Корабли' },
    { key: 'personnel', label: 'Личный состав' },
    { key: 'equipment', label: 'Техника' }
  ];

  if (filteredImages.length === 0) {
    return (
      <div className={styles.gallery}>
        <div className={styles.header}>
          <h2 className={styles.title}>Галерея</h2>
        </div>
        <div className={styles.empty}>
          <Camera className={styles.emptyIcon} />
          <p>Нет изображений в выбранной категории</p>
        </div>
      </div>
    );
  }

  const currentImage = filteredImages[currentImageIndex];

  return (
    <div className={styles.gallery}>
      <div className={styles.header}>
        <h2 className={styles.title}>Галерея</h2>
        
        <div className={styles.headerActions}>
          <div className={styles.filters}>
            <Filter className={styles.filterIcon} />
            <select 
              className={styles.filterSelect}
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value);
                setCurrentImageIndex(0);
              }}
            >
              {categories.map(category => (
                <option key={category.key} value={category.key}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {currentUser ? (
            <div className={styles.userActions}>
              <button className={styles.uploadButton}>
                <Upload className={styles.uploadIcon} />
                Добавить фото
              </button>
              <div className={styles.userInfo}>
                <span className={styles.userEmail}>{currentUser.email}</span>
                <button className={styles.logoutButton} onClick={logout}>
                  Выйти
                </button>
              </div>
            </div>
          ) : (
            <button 
              className={styles.loginButton}
              onClick={() => alert('Форма входа будет здесь')}
            >
              <LogIn className={styles.loginIcon} />
              Войти
            </button>
          )}
        </div>
      </div>

      {/* Main Image Viewer */}
      <div className={styles.mainViewer}>
        <div className={styles.imageContainer}>
          <img 
            src={currentImage.url} 
            alt={currentImage.title}
            className={styles.mainImage}
          />
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevImage}
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            disabled={filteredImages.length <= 1}
          >
            <ChevronLeft className={styles.navIcon} />
          </button>
          <button 
            onClick={nextImage}
            className={`${styles.navButton} ${styles.navButtonRight}`}
            disabled={filteredImages.length <= 1}
          >
            <ChevronRight className={styles.navIcon} />
          </button>

          {/* Image Info Overlay */}
          <div className={styles.imageInfo}>
            <div className={styles.imageCounter}>
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
        
        <div className={styles.imageDetails}>
          <h3 className={styles.imageTitle}>{currentImage.title}</h3>
          <p className={styles.imageDescription}>{currentImage.description}</p>
          <div className={styles.imageMeta}>
            <span className={styles.imageCategory}>{currentImage.categoryLabel}</span>
            {currentImage.date && (
              <span className={styles.imageDate}>{currentImage.date}</span>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className={styles.thumbnailSection}>
        <h3 className={styles.thumbnailTitle}>Все изображения</h3>
        <div className={styles.thumbnailGrid}>
          {filteredImages.map((image, index) => (
            <button
              key={`${image.id}-${index}`}
              onClick={() => goToImage(index)}
              className={`${styles.thumbnail} ${
                index === currentImageIndex ? styles.thumbnailActive : ''
              }`}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className={styles.thumbnailImage}
              />
              <div className={styles.thumbnailOverlay}>
                <span className={styles.thumbnailTitle}>{image.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;