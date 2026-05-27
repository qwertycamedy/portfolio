import { navLink, networkLink } from '@/types';
import { CircleGauge, Grid2X2, RotateCcw, Smile } from 'lucide-react';

export const networkLinks: networkLink[] = [
  {
    path: 'networkLinks.cv.path',
    text: 'networkLinks.cv.text',
  },
  {
    path: 'networkLinks.git.path',
    text: 'networkLinks.git.text',
  },
  {
    path: 'networkLinks.tg.path',
    text: 'networkLinks.tg.text',
  },
  {
    path: 'networkLinks.w.path',
    text: 'networkLinks.w.text',
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
