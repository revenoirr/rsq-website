// data/leadership.js
export const leadership = [
  {
    id: 1,
    rank: 'Адмирал флота [ADM]',
    name: 'Wullf Yularen',
    division: 'Флот',
    category: 'fleet',
    equivalentRank: 'MC',
    bio: 'Опытный адмирал, руководящий всеми военно-морскими операциями 8-й Секторальной Армии. Приравнивается к званию Маршал-Коммандер.',
    achievements: [
      'Победа в битве при Кристофсисе',
      'Успешная блокада системы Райлот',
      'Командование 15 крупными флотскими операциями'
    ],
    deputies: [
      {
        rank: 'Вице-адмирал [V-ADM]',
        name: 'Gilad Harrsk',
        specialization: 'Тактические операции',
        equivalent: 'CC'
      },
      {
        rank: 'Контр-адмирал [K-ADM]',
        name: 'Saz Vel',
        specialization: 'Логистика флота',
        equivalent: 'CPT'
      },
      {
        rank: 'Контр-адмирал [K-ADM]',
        name: 'Fobos Grey',
        specialization: 'Разведка',
        equivalent: 'CPT'
      }
    ]
  },
  {
    id: 2,
    rank: 'Старший Генерал-джедай [SGN]',
    name: 'Mack Restor',
    division: 'Орден Джедаев',
    category: 'jedi',
    equivalentRank: 'MC',
    bio: 'Глава ордена джедаев в корпусе. Мудрый джедай-мастер, координирующий действия всех джедаев. Приравнивается к званию Маршал-Коммандер.',
    achievements: [
      'Освобождение планеты Рион',
      'Дипломатическое урегулирование конфликта на Шоре',
      'Подготовка 12 джедаев-падаванов'
    ],
    deputies: [
      {
        rank: 'Генерал-джедай [GEN]',
        name: 'Keira Zol',
        specialization: 'Боевые операции',
        equivalent: 'CC'
      },
      {
        rank: 'Генерал-джедай [GEN]',
        name: 'Alexsander Dez',
        specialization: 'Дипломатия и переговоры',
        equivalent: 'CC'
      }
    ]
  },
  {
    id: 3,
    rank: 'Маршал-Коммандер [MC]',
    name: 'MC 03-1527 Noir',
    division: 'Регулярная Армия',
    category: 'army',
    equivalentRank: 'MC',
    bio: 'Высокопоставленный клон-офицер, ответственный за все сухопутные операции корпуса. Высший ранг в регулярных силах ВАР.',
    achievements: [
      'Командование штурмом крепости на Кейтуме',
      'Реорганизация структуры батальонов',
      'Обучение более 500 клонов-офицеров'
    ],
    deputies: [
      {
        rank: 'Клон-Коммандер [CC]',
        name: 'CC 18-8178 Creed',
        specialization: 'Пехотные операции',
        equivalent: 'CC'
      },
      {
        rank: 'Клон-Коммандер [CC]',
        name: 'CC 6662 Numeral',
        specialization: 'Механизированные силы',
        equivalent: 'CC'
      }
    ]
  },
  {
    id: 4,
    rank: 'Директор БСО/БКО [DIR]',
    name: 'DIR **/71 Der',
    division: 'БСО/БКО',
    category: 'special',
    equivalentRank: 'MC',
    bio: 'Руководитель всех специальных и контрразведывательных операций корпуса. Приравнивается к званию Маршал-Коммандер.',
    achievements: [
      'Ликвидация сепаратистской шпионской сети',
      'Успешное проведение 25 секретных миссий',
      'Создание новых методов допроса'
    ],
    deputies: [
      {
        rank: 'Зам. Директора БСО [CC]',
        name: 'CC 02-1442 Reaper',
        specialization: 'Специальные операции',
        equivalent: 'CC'
      },
      {
        rank: 'Зам. Директора БКО',
        name: 'Arcane-IV',
        specialization: 'Контрразведка',
        equivalent: 'CC'
      }
    ]
  },
  {
    id: 5,
    rank: 'Лидер Конкорд-3 [CL]',
    name: 'CL Orchis Marchall',
    division: 'Наёмники Конкорд-3',
    category: 'mercenary',
    equivalentRank: 'CPT',
    bio: 'Командир наёмно-добровольческого батальона, поддерживающего идеалы Республики. Приравнивается к званию Капитан.',
    achievements: [
      'Формирование первого наёмнического подразделения',
      'Привлечение 150 добровольцев',
      'Успешные рейды против пиратов'
    ],
    deputies: [
      {
        rank: 'Зам. Лидера Конкорд-3 [DCL]',
        name: 'Неизвестно',
        specialization: 'Тактические операции',
        equivalent: 'SLT'
      }
    ]
  },
  {
    id: 6,
    rank: 'Главный Медик Корпуса',
    name: 'SLT 02-5964 Mahara',
    division: 'Медицинский блок',
    category: 'medical',
    equivalentRank: 'SLT',
    bio: 'Штаб-лейтенант, ответственный за медицинское обеспечение всего корпуса и подготовку медперсонала.',
    achievements: [
      'Снижение смертности на 40%',
      'Разработка новых протоколов лечения',
      'Обучение 80 полевых медиков'
    ],
    deputies: [
      {
        rank: 'Лейтенант [LT]',
        name: 'LT 9250 Rami',
        specialization: 'Полевая медицина',
        equivalent: 'LT'
      },
      {
        rank: 'Лейтенант [LT]',
        name: 'LT 6745 Siga',
        specialization: 'Хирургия',
        equivalent: 'LT'
      }
    ]
  },
  {
    id: 7,
    rank: 'Главный Инженер Корпуса',
    name: 'CS 4137 Shade',
    division: 'Инженерный блок',
    category: 'engineering',
    equivalentRank: 'CS',
    bio: 'Клон-специалист, руководящий всеми инженерными работами и техническим обслуживанием корпуса.',
    achievements: [
      'Модернизация 200 единиц техники',
      'Строительство 15 военных баз',
      'Разработка новых защитных сооружений'
    ],
    deputies: [
      {
        rank: 'Клон-специалист [CS]',
        name: 'CS 5969 Key',
        specialization: 'Военная техника',
        equivalent: 'CS'
      }
    ]
  }
];

// Обновленная структура подразделений
export const divisions = {
  fleet: {
    name: 'Флот',
    color: 'blue',
    description: 'Военно-морские силы корпуса',
    ranks: [
      'Адмирал флота [ADM] = MC',
      'Вице-Адмирал [V-ADM] = CC',
      'Контр-Адмирал [K-ADM] = CPT',
      'Лейтенант-Коммандер [LC] = CPT',
      'Лейтенант 1-го ранга [1LT] = LT',
      'Лейтенант 2-го ранга [2LT] = LT'
    ]
  },
  jedi: {
    name: 'Орден Джедаев',
    color: 'green',
    description: 'Джедаи-генералы и их падаваны',
    ranks: [
      'Старший Генерал Джедай [SGN] = MC',
      'Генерал Джедай [GEN] = CC',
      'Старший Коммандер [HCM] = CPT',
      'Коммандер [COM] = Офицерский состав',
      'Младший Коммандер [JCM] = Сержантский состав',
      'Представитель ордена [RO] = PVT'
    ]
  },
  army: {
    name: 'Регулярная Армия',
    color: 'yellow',
    description: 'Сухопутные войска и основные силы',
    ranks: [
      'Маршал Коммандер [MC]',
      'Клон Коммандер [CC]',
      'Капитан [CPT]',
      'Спец-Лейтенант [SPLT]',
      'Штаб-Лейтенант [SLT]',
      'Лейтенант [LT]'
    ]
  },
  special: {
    name: 'БСО/БКО',
    color: 'purple',
    description: 'Бригада Специальных и Контрразведывательных Операций',
    ranks: [
      'Директор БСО/БКО [DIR] = MC',
      'Зам. Директора БСО [CC]',
      'Зам. Директора БКО [CC]',
      'Советник Штаба [ADV] = CPT',
      'Координатор Штаба [COR] = LT'
    ]
  },
  mercenary: {
    name: 'Конкорд-3',
    color: 'orange',
    description: 'Наёмно-добровольческий батальон',
    ranks: [
      'Лидер Конкорда [CL] = CPT',
      'Зам. Лидера Конкорда [DCL] = SLT',
      'Офицер Конкорда [CO] = LT',
      'Мастер-Сержант [MSG] = SSG',
      'Сержант [SGT]',
      'Капрал [CPL]'
    ]
  },
  aviation: {
    name: 'Эскадрилья',
    color: 'cyan',
    description: 'Воздушные силы и пилоты',
    ranks: [
      'Командир Эскадрильи [SLC] = CPT',
      'Младший командир Эскадрильи [MSL] = SPLT',
      'Лейтенант Эскадрильи [SL] = LT',
      'Эксперт-Сержант пилот [ESP] = SGT',
      'Клон-Капрал Пилот [CP] = CPL',
      'Клон-Специалист Пилот [CSP] = CS'
    ]
  },
  medical: {
    name: 'Медицинский блок',
    color: 'red',
    description: 'Медицинские службы корпуса'
  },
  engineering: {
    name: 'Инженерный блок',
    color: 'gray',
    description: 'Техническое обеспечение корпуса'
  }
};

// Детальная структура рангов
export const rankStructure = {
  'Верховное Командование [HC]': {
    'Маршал Коммандер [MC]': { limit: 1, equivalent: 'MC' },
    'Старший Генерал-джедай [SGN]': { limit: 1, equivalent: 'MC' },
    'Директор БСО/БКО [DIR]': { limit: 1, equivalent: 'MC' },
    'Клон Коммандер [CC]': { limit: 2, equivalent: 'CC' },
    'Генерал-джедай [GEN]': { limit: 'без ограничений', equivalent: 'CC' },
    'Заместители директора': { limit: 2, equivalent: 'CC' }
  },
  'Старший офицерский состав': {
    'Капитан [CPT]': { limit: 1, equivalent: 'CPT' }
  },
  'Офицерский состав': {
    'Спец-Лейтенант [SPLT]': { limit: 1, equivalent: 'SPLT' },
    'Штаб-Лейтенант [SLT]': { limit: 2, equivalent: 'SLT' },
    'Лейтенант [LT]': { limit: 4, equivalent: 'LT' }
  },
  'Сержантский состав': {
    'Спец-Сержант [SPSG]': { limit: 2, equivalent: 'SPSG' },
    'Штаб-Сержант [SSG]': { limit: 4, equivalent: 'SSG' },
    'Сержант [SGT]': { limit: 6, equivalent: 'SGT' }
  },
  'Рядовой состав': {
    'Капрал [CPL]': { limit: 8, equivalent: 'CPL' },
    'Клон Специалист [CS]': { limit: 'без ограничений', equivalent: 'CS' },
    'Рядовой первого класса [PFC]': { limit: 'без ограничений', equivalent: 'PFC' },
    'Рядовой [PVT]': { limit: 'без ограничений', equivalent: 'PVT' },
    'Клон-Солдат [CT]': { limit: 'без ограничений', equivalent: 'CT' },
    'Клон-Рекрут [CR]': { limit: 'без ограничений', equivalent: 'CR' }
  }
};

export const leadershipStats = {
  totalLeaders: leadership.length,
  totalDeputies: leadership.reduce((sum, leader) => sum + leader.deputies.length, 0),
  divisions: Object.keys(divisions).length,
  cloneOfficers: leadership.filter(l => l.name.includes('CT') || l.name.includes('CC') || l.name.includes('MC')).length,
  equivalentRanks: {
    'MC': leadership.filter(l => l.equivalentRank === 'MC').length,
    'CC': leadership.filter(l => l.equivalentRank === 'CC').length,
    'CPT': leadership.filter(l => l.equivalentRank === 'CPT').length
  }
};