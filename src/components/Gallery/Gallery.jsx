// components/Gallery/Gallery.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Filter, Upload, LogIn, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import Login from '../Auth/Login';
import ImageUpload from './ImageUpload';
import { galleryImages } from '../../data/galleryimages.js';
import { 
  db, 
  collection, 
  getDocs, 
  deleteDoc, 
  doc, 
  orderBy, 
  query
} from '../../utils/firebase';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filterCategory, setFilterCategory] = useState('all');
  const [showLogin, setShowLogin] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [firebaseImages, setFirebaseImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { currentUser, logout } = useAuth();

  // Загрузка изображений из Firebase при монтировании компонента
  useEffect(() => {
    loadFirebaseImages();
  }, []);

  const loadFirebaseImages = async () => {
    try {
      const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const images = [];
      
      querySnapshot.forEach((doc) => {
        images.push({ id: doc.id, ...doc.data() });
      });
      
      setFirebaseImages(images);
    } catch (error) {
      console.error('Ошибка при загрузке изображений:', error);
    }
  };

  // Объединяем статические и загруженные изображения
  const allImages = [...galleryImages, ...firebaseImages];
  
  const filteredImages = filterCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === filterCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleUploadSuccess = () => {
    setShowUpload(false);
    loadFirebaseImages(); // Перезагружаем изображения
  };

  const handleDeleteImage = async (imageId) => {
    if (!currentUser || !window.confirm('Вы уверены, что хотите удалить это изображение?')) {
      return;
    }

    try {
      setLoading(true);
      
      // Для Imgur изображений удаляем только запись из Firestore
      // (изображения на Imgur останутся, но это нормально для бесплатного хостинга)
      await deleteDoc(doc(db, 'gallery', imageId));
      
      // Обновляем локальное состояние
      await loadFirebaseImages();
      
      // Корректируем индекс если нужно
      if (currentImageIndex >= filteredImages.length - 1) {
        setCurrentImageIndex(Math.max(0, filteredImages.length - 2));
      }
      
    } catch (error) {
      console.error('Ошибка при удалении изображения:', error);
      alert('Ошибка при удалении изображения');
    } finally {
      setLoading(false);
    }
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
              <button 
                className={styles.uploadButton}
                onClick={() => setShowUpload(true)}
              >
                <Upload className={styles.uploadIcon} />
                Добавить фото
              </button>
              <div className={styles.userInfo}>
                <span className={styles.userEmail}>
                  {currentUser.nickname || currentUser.email}
                </span>
                <button className={styles.logoutButton} onClick={logout}>
                  Выйти
                </button>
              </div>
            </div>
          ) : (
            <button 
              className={styles.loginButton}
              onClick={() => setShowLogin(true)}
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

          {/* Delete Button для загруженных пользователем изображений */}
          {currentUser && currentImage.uploadedBy === currentUser.uid && (
            <button 
              onClick={() => handleDeleteImage(currentImage.id)}
              className={styles.deleteButton}
              disabled={loading}
              title="Удалить изображение"
            >
              <X className={styles.deleteIcon} />
            </button>
          )}

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
            {currentImage.uploadedBy && (
              <span className={styles.imageUploader}>
                Загружено: {currentImage.uploaderNickname || 'Аноним'}
              </span>
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

      {/* Модальные окна */}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )}

      {showUpload && (
        <ImageUpload 
          onClose={() => setShowUpload(false)}
          onUploadSuccess={handleUploadSuccess}
        />
      )}
    </div>
  );
};

export default Gallery;