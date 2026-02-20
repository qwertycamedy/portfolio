import { EProjectCategories } from '@/types';

import project_1_img_0 from '@/assets/img/project_1_0.webp';
import project_1_img_1 from '@/assets/img/project_1_1.webp';
import project_1_img_2 from '@/assets/img/project_1_2.webp';

import project_2_img_0 from '@/assets/img/project_2_0.webp';
import project_2_img_2 from '@/assets/img/project_2_2.webp';
import project_2_img_3 from '@/assets/img/project_2_3.webp';
import project_2_img_4 from '@/assets/img/project_2_4.webp';
import project_2_img_5 from '@/assets/img/project_2_5.webp';
import project_2_img_6 from '@/assets/img/project_2_6.webp';

import project_3_img_0 from '@/assets/img/project_3_0.webp';
import project_3_img_1 from '@/assets/img/project_3_1.webp';
import project_3_img_2 from '@/assets/img/project_3_2.webp';

import project_4_img_0 from '@/assets/img/project_4_0.webp';
import project_4_img_1 from '@/assets/img/project_4_1.webp';
import project_4_img_2 from '@/assets/img/project_4_2.webp';
import project_4_img_3 from '@/assets/img/project_4_3.webp';
import project_4_img_4 from '@/assets/img/project_4_4.webp';

export const projects = [
  {
    imageUrls: [
      project_2_img_0,
      project_2_img_2,
      project_2_img_3,
      project_2_img_4,
      project_2_img_5,
      project_2_img_6,
    ],
    name: 'Aura Web',
    description: `Я полностью разработал фронтенд для децентрализованной биржи (DEX) на базе блокчейна TON с нуля. 
      Проект построен на React и Redux Toolkit, что обеспечивает надёжное управление состоянием приложения и предсказуемость данных. 
      Для получения рыночных котировок в реальном времени интегрированы веб-сокеты, а взаимодействие с серверной частью происходит через REST API.
      Ключевая особенность интерфейса — интеграция с Tonconnect, благодаря которой
       пользователи могут подключать свои TON-кошельки напрямую через приложение. 
      После подключения становятся доступны все основные операции: внесение средств
       на платформу (депозит), инвестирование в пулы ликвидности и мгновенный вывод средств. 
      Веб-сокеты обеспечивают отображение актуальных рыночных изменений в реальном времени без перезагрузки страницы.
      Архитектура фронтенда спроектирована с учётом дальнейшего масштабирования. 
      В данный момент в разработке интеграция с EVM-совместимыми сетями (Ethereum, BSC и другими), 
      что позволит расширить функциональность платформы и выйти на более широкую аудиторию в будущем.`,
    categories: [
      EProjectCategories.web,
      EProjectCategories.ton,
      EProjectCategories.react,
      EProjectCategories.redux,
    ],
    siteUrl: 'https://web.cdn.auraxterminal.com/',
  },
  {
    imageUrls: [project_1_img_0, project_1_img_1, project_1_img_2],
    name: 'Aura TMA',
    description: `Telegram Mini Application, который объединяет элементы геймификации с обучающими механиками по трейдингу. 
      Проект построен на React и Redux Toolkit, взаимодействие с бэкендом происходит 
      через REST API и веб-сокеты. Через Tonconnect пользователи подключают свои
       TON-кошельки и получают доступ ко всем функциям приложения прямо внутри Telegram.
      Главная особенность платформы — обучение основам трейдинга в игровом формате. 
      Пользователи выполняют задания (подписка на Telegram-каналы, просмотр контента и другие активности) и получают за это токены. 
      Также реализована мини-игра, где нужно "ловить" падающие токены, что делает процесс накопления более увлекательным. 
      В интерфейсе отображается баланс токенов как на самой бирже, так и в подключённом кошельке.
      Для вовлечения пользователей работает реферальная система: можно приглашать друзей и получать бонусы. 
      Накопленные токены доступны для вывода на кошелёк или для обмена через встроенный свап. 
      Проект показывает, как можно эффективно совмещать обучение, игровые механики
      и реальные финансовые операции в формате мини-приложения Telegram.`,
    categories: [
      EProjectCategories.tma,
      EProjectCategories.ton,
      EProjectCategories.react,
      EProjectCategories.redux,
    ],
    githubUrl: '',
    siteUrl: 'https://t.me/auraxcryptobot',
  },
  {
    imageUrls: [project_3_img_0, project_3_img_1, project_3_img_2],
    name: 'Status RK',
    description: `Корпоративный сайт под ключ — от дизайна (в сотрудничестве с дизайнером) до финального размещения на домене. 
    Проект создавался в тесном сотрудничестве с дизайнером: мы совместно прорабатывали структуру страниц, визуальные решения и
     пользовательские сценарии, после чего я полностью реализовал фронтенд на React с адаптивной вёрсткой под все типы устройств.
    На сайте реализована форма обратной связи с отправкой писем на почту домена — за это отвечает лёгкий бэкенд на PHP, который я 
    также написал и интегрировал в проект. Пользователи могут заполнить контактные данные, отправить сообщение, и оно гарантированно 
    доставляется в почтовый ящик компании без использования сторонних сервисов.
    После завершения разработки я выполнил посадку сайта на домен, настроил хостинг и обеспечил корректную работу всех компонентов в продакшене. 
    В итоге заказчик получил полностью готовый к использованию корпоративный сайт с чистым кодом, современным интерфейсом и стабильной обратной связью.`,
    categories: [
      EProjectCategories.web,
      EProjectCategories.react,
      EProjectCategories.php,
    ],
    githubUrl: 'https://github.com/qwertycamedy/status_rk_react',
    siteUrl: 'https://statusrk.kz/',
  },
  {
    imageUrls: [
      project_4_img_0,
      project_4_img_1,
      project_4_img_2,
      project_4_img_3,
      project_4_img_4,
    ],
    name: 'AlphaBeat',
    description: `AlphaBeat — это мини-игра на React с использованием MockAPI, которая помогает тренировать 
    знание алфавита в правильной последовательности и на скорость.\n
    Игроку нужно как можно быстрее отметить все буквы по порядку. После завершения отображается результат — время прохождения.
    Его можно сохранить в базу данных и затем увидеть в общем списке результатов. 
    Также доступна возможность перезапуска игры для повторной попытки и улучшения своего рекорда.`,
    categories: [
      EProjectCategories.web,
      EProjectCategories.react,
      EProjectCategories.mockapi,
    ],
    githubUrl: 'https://github.com/qwertycamedy/alphaBeat',
    siteUrl: 'https://alpha-beat.vercel.app/',
  },
];
