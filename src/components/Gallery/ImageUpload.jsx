// components/Gallery/ImageUpload.jsx (версия с Imgur)
import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { 
  db, 
  collection, 
  addDoc, 
  serverTimestamp 
} from '../../utils/firebase';
import styles from './ImageUpload.module.css';

const ImageUpload = ({ onClose, onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('battles');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { currentUser } = useAuth();

  const categories = [
    { key: 'battles', label: 'Битвы' },
    { key: 'planets', label: 'Планеты' },
    { key: 'ships', label: 'Корабли' },
    { key: 'personnel', label: 'Личный состав' },
    { key: 'equipment', label: 'Техника' }
  ];

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith('image/')) {
        setError('Пожалуйста, выберите изображение');
        return;
      }

      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB для Imgur
        setError('Размер файла не должен превышать 10МБ');
        return;
      }

      setFile(selectedFile);
      setError('');

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const uploadToImgur = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
          'Authorization': 'Client-ID 546c25a59c58ad7' // Попробуем этот Client ID
        },
        body: formData
      });

      if (!response.ok) {
        // Если Imgur не работает, попробуем другой сервис
        console.warn('Imgur failed, trying alternative...');
        throw new Error(`Imgur error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        return data.data.link;
      } else {
        throw new Error('Imgur upload failed');
      }
      
    } catch (error) {
      console.error('Imgur upload error:', error);
      // Fallback: используем alternative image hosting
      return uploadToAlternative(file);
    }
  };

  // Альтернативный метод загрузки через File Reader (base64)
  const uploadToAlternative = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Возвращаем base64 как временное решение
        resolve(e.target.result);
      };
      reader.onerror = () => {
        reject(new Error('Ошибка чтения файла'));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!file || !title.trim()) {
      setError('Пожалуйста, выберите файл и введите название');
      return;
    }

    if (!currentUser) {
      setError('Необходимо авторизоваться');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Загружаем изображение на Imgur
      const imageUrl = await uploadToImgur(file);

      // Сохраняем метаданные в Firestore
      await addDoc(collection(db, 'gallery'), {
        title: title.trim(),
        description: description.trim(),
        category,
        categoryLabel: categories.find(cat => cat.key === category)?.label || category,
        url: imageUrl,
        uploadedBy: currentUser.uid,
        uploaderEmail: currentUser.email,
        uploaderNickname: currentUser.nickname || 'Аноним',
        createdAt: serverTimestamp(),
        date: new Date().toLocaleDateString('ru-RU'),
        imageHost: imageUrl.startsWith('data:') ? 'base64' : 'imgur' // Определяем источник
      });

      onUploadSuccess();
      
    } catch (error) {
      console.error('Ошибка при загрузке:', error);
      setError('Ошибка при загрузке изображения. Попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Загрузить изображение</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form className={styles.form} onSubmit={handleUpload}>
          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <div className={styles.fileSection}>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              onChange={handleFileSelect}
              className={styles.fileInput}
            />
            <label htmlFor="imageFile" className={styles.fileLabel}>
              {preview ? (
                <div className={styles.previewContainer}>
                  <img src={preview} alt="Превью" className={styles.preview} />
                  <div className={styles.changeFile}>
                    <Upload size={16} />
                    Изменить файл
                  </div>
                </div>
              ) : (
                <div className={styles.uploadPrompt}>
                  <ImageIcon size={48} />
                  <span>Выберите изображение</span>
                  <small>Максимум 10МБ, формат: JPG, PNG, GIF</small>
                  <small>Загрузка через Imgur или локальное хранение</small>
                </div>
              )}
            </label>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Название *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
              placeholder="Введите название изображения"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Описание</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textarea}
              placeholder="Опишите изображение (необязательно)"
              rows={3}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Категория</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={styles.select}
            >
              {categories.map(cat => (
                <option key={cat.key} value={cat.key}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
              disabled={loading}
            >
              Отмена
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading || !file || !title.trim()}
            >
              {loading ? 'Загрузка...' : 'Загрузить'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;