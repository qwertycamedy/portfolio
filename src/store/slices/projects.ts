import { EProjectCategories, TProject } from '@/types';

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

export const projects: TProject[] = [
  {
    imageUrls: [
      project_2_img_0,
      project_2_img_2,
      project_2_img_3,
      project_2_img_4,
      project_2_img_5,
      project_2_img_6,
    ],
    path: 'aura_web',
    name: 'projects.projects.auraWeb.name',
    description: 'projects.projects.auraWeb.description',
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
    path: 'aura_tma',
    name: 'projects.projects.auraTma.name',
    description: 'projects.projects.auraTma.description',
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
    path: 'status_rk',
    name: 'projects.projects.statusRk.name',
    description: 'projects.projects.statusRk.description',
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
    path: 'alpha_beat',
    name: 'projects.projects.alphaBeat.name',
    description: 'projects.projects.alphaBeat.description',
    categories: [
      EProjectCategories.web,
      EProjectCategories.react,
      EProjectCategories.mockapi,
    ],
    githubUrl: 'https://github.com/qwertycamedy/alphaBeat',
    siteUrl: 'https://alpha-beat.vercel.app/',
  },
];
