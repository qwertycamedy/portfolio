import { navLink, networkLink } from '@/types';
import { CircleGauge, Grid2X2, RotateCcw, Smile } from 'lucide-react';

export const networkLinks: networkLink[] = [
  {
    path: 'https://qwertycamedy-portfolio.vercel.app/CV_Frontend_Adil_Kairbekov.pdf',
    text: 'cv',
  },
  {
    path: 'https://github.com/qwertycamedy',
    text: 'git',
  },
  {
    path: 'https://t.me/qwertycamedy',
    text: 'tg',
  },
  {
    path: 'https://www.weblancer.net/users/qwertycamedy/',
    text: 'w',
  },
];

export const navLinks: navLink[] = [
  {
    path: 'hero',
    text: 'navLinks.hero',
    icon: RotateCcw,
  },
  {
    path: 'works',
    text: 'navLinks.works',
    icon: Grid2X2,
  },
  {
    path: 'skills',
    text: 'navLinks.skills',
    icon: CircleGauge,
  },
  {
    path: 'about',
    text: 'navLinks.about',
    icon: Smile,
  },
];
