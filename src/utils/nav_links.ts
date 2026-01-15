import { navLink, networkLink } from '@/types';
import { CircleGauge, Grid2X2, RotateCcw, Smile, Star } from 'lucide-react';

export const networkLinks: networkLink[] = [
  {
    path: 'https://t.me/qwertycamedy',
    text: 'tg',
  },
  {
    path: 'https://www.weblancer.net/users/qwertycamedy/',
    text: 'w',
  },
  {
    path: 'https://qwertycamedy-portfolio.vercel.app/resume_Adil_Kairbekov_Frontend_Developer.pdf',
    text: 'hh',
  },
];

export const navLinks: navLink[] = [
  {
    path: 'hero',
    text: 'Начало',
    icon: RotateCcw,
  },
  {
    path: 'about',
    text: 'Обо мне',
    icon: Smile,
  },
  {
    path: 'works',
    text: 'Портфолио',
    icon: Grid2X2,
  },
  {
    path: 'skills',
    text: 'Скиллы',
    icon: CircleGauge,
  },
  {
    path: 'reviews',
    text: 'Отзывы',
    icon: Star,
  },
];
