// data/galleryImages.js
export const galleryImages = [
  {
    id: 1,
    url: '/images/3kapitan.png',
    title: '3 капитана в ряд',
    description: 'Рэкс Лост и Тандер',
    category: 'battles',
    categoryLabel: 'Личности',
    date: '22.03.2025'
  },
  {
    id: 2,
    url: '/images/admiralvdoh.jpg', 
    title: 'Адмирал Вульф Юларен!',
    description: 'Самый красивый и неповторимый! <3',
    category: 'ships',
    categoryLabel: 'Личности',
    date: '15.02.2025'
  },
   {
    id: 3,
    url: '/images/noir-numeral.jpg', 
    title: 'Орех и Джедай',
    description: 'На самом деле это Ноир и Нумерал.....',
    category: 'ships',
    categoryLabel: 'Личности',
    date: '15.02.2025'
  },
  {
    id: 4,
    url: '/images/11.jpg', 
    title: '11 Учебный Батальон!',
    description: 'Всегда на страже кадетов!',
    category: 'ships',
    categoryLabel: 'Батальоны',
    date: '15.02.2025'
  },
   {
    id: 5,
    url: '/images/21.jpg', 
    title: '21 Ударно Штурмовой Батальон',
    description: 'ЗА БАКАРУ!!!!',
    category: 'ships',
    categoryLabel: 'Батальоны',
    date: '15.02.2025'
  },
  {
    id: 6,
    url: '/images/104.jpg', 
    title: '104 Разведывательный Батальон',
    description: 'Lost forever <3',
    category: 'ships',
    categoryLabel: 'Батальоны',
    date: '15.02.2025'
  },
  {
    id: 7,
    url: '/images/64.jpg', 
    title: '64 Десантный Батальон',
    description: '64 в сердцах',
    category: 'ships',
    categoryLabel: 'Батальоны',
    date: '15.02.2025'
  },
  {
    id: 8,
    url: '/images/127.jpg', 
    title: '127 Авиационный Батальон',
    description: 'Наши асы!',
    category: 'ships',
    categoryLabel: 'Батальоны',
    date: '15.02.2025'
  },
  {
    id: 9,
    url: '/images/flot.jpg', 
    title: 'Флот',
    description: 'Ньевест где наши поставки!',
    category: 'ships',
    categoryLabel: 'Батальоны',
    date: '15.02.2025'
  },
];

export const galleryStats = {
  total: galleryImages.length,
  byCategory: {
    battles: galleryImages.filter(img => img.category === 'battles').length,
    planets: galleryImages.filter(img => img.category === 'planets').length,
    ships: galleryImages.filter(img => img.category === 'ships').length,
    personnel: galleryImages.filter(img => img.category === 'personnel').length,
    equipment: galleryImages.filter(img => img.category === 'equipment').length
  }
};