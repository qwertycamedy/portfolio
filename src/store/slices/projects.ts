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

import project_dash_img_0 from '@/assets/img/project_dash_0.webp';
import project_dash_img_1 from '@/assets/img/project_dash_1.webp';
import project_dash_img_2 from '@/assets/img/project_dash_2.webp';
import project_dash_img_3 from '@/assets/img/project_dash_3.webp';
import project_dash_img_4 from '@/assets/img/project_dash_4.webp';
import project_dash_img_5 from '@/assets/img/project_dash_5.webp';

import project_sw_img_0 from '@/assets/img/project_sw_0.webp';
import project_sw_img_1 from '@/assets/img/project_sw_1.webp';
import project_sw_img_2 from '@/assets/img/project_sw_2.webp';
import project_sw_img_3 from '@/assets/img/project_sw_3.webp';
import project_sw_img_4 from '@/assets/img/project_sw_4.webp';
import project_sw_img_5 from '@/assets/img/project_sw_5.webp';
import project_sw_img_6 from '@/assets/img/project_sw_6.webp';
import project_sw_img_7 from '@/assets/img/project_sw_7.webp';
import project_sw_img_8 from '@/assets/img/project_sw_8.webp';
import project_sw_img_9 from '@/assets/img/project_sw_9.webp';

import project_uiwave_img_0 from '@/assets/img/project_uiwave_0.webp';
import project_uiwave_img_1 from '@/assets/img/project_uiwave_1.webp';
import project_uiwave_img_2 from '@/assets/img/project_uiwave_2.webp';
import project_uiwave_img_3 from '@/assets/img/project_uiwave_3.webp';
import project_uiwave_img_4 from '@/assets/img/project_uiwave_4.webp';
import project_uiwave_img_5 from '@/assets/img/project_uiwave_5.webp';
import project_uiwave_img_6 from '@/assets/img/project_uiwave_6.webp';

import project_artisan_img_1 from '@/assets/img/project_artisan_1.webp';
import project_artisan_img_2 from '@/assets/img/project_artisan_2.webp';
import project_artisan_img_3 from '@/assets/img/project_artisan_3.webp';
import project_artisan_img_4 from '@/assets/img/project_artisan_4.webp';
import project_artisan_img_5 from '@/assets/img/project_artisan_5.webp';
import project_artisan_img_6 from '@/assets/img/project_artisan_6.webp';

import project_qcGamesHub_img_0 from '@/assets/img/project_qcGamesHub_0.webp';
import project_qcGamesHub_img_1 from '@/assets/img/project_qcGamesHub_1.webp';
import project_qcGamesHub_img_2 from '@/assets/img/project_qcGamesHub_2.webp';
import project_qcGamesHub_img_3 from '@/assets/img/project_qcGamesHub_3.webp';
import project_qcGamesHub_img_4 from '@/assets/img/project_qcGamesHub_4.webp';

export const projects: TProject[] = [
  {
    imageUrls: [
      project_qcGamesHub_img_0,
      project_qcGamesHub_img_1,
      project_qcGamesHub_img_2,
      project_qcGamesHub_img_3,
      project_qcGamesHub_img_4,
    ],
    path: 'qc_games_hub',
    name: 'projects.projects.qcGamesHub.name',
    description: 'projects.projects.qcGamesHub.description',
    categories: [
      EProjectCategories.web,
      EProjectCategories.games,
      EProjectCategories.vanilla,
      EProjectCategories.responsive,
    ],
    githubUrl: 'https://github.com/qwertycamedy/qc_games_hub',
    siteUrl: 'https://qc-games-hub.vercel.app/',
  },
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
    imageUrls: [
      project_artisan_img_1,
      project_artisan_img_2,
      project_artisan_img_3,
      project_artisan_img_4,
      project_artisan_img_5,
      project_artisan_img_6,
    ],
    path: 'artisan',
    name: 'projects.projects.artisan.name',
    description: 'projects.projects.artisan.description',
    categories: [
      EProjectCategories.web,
      EProjectCategories.next,
      EProjectCategories.redux,
      EProjectCategories.rhf,
      EProjectCategories.zod,
      EProjectCategories.tailwind,
      EProjectCategories.responsive,
    ],
    githubUrl: 'https://github.com/qwertycamedy/artisan-kiln',
    siteUrl: 'https://artisan-kiln.vercel.app/',
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
      project_sw_img_0,
      project_sw_img_1,
      project_sw_img_2,
      project_sw_img_3,
      project_sw_img_4,
      project_sw_img_5,
      project_sw_img_6,
      project_sw_img_7,
      project_sw_img_8,
      project_sw_img_9,
    ],
    path: 'simple_wealth',
    name: 'projects.projects.sw.name',
    description: 'projects.projects.sw.description',
    categories: [
      EProjectCategories.web,
      EProjectCategories.gulp,
      EProjectCategories.scss,
      EProjectCategories.multipage,
      EProjectCategories.responsive,
    ],
    githubUrl: 'https://github.com/qwertycamedy/simple-wealth',
    siteUrl: 'https://simple-wealth.vercel.app/',
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
  {
    imageUrls: [
      project_dash_img_0,
      project_dash_img_1,
      project_dash_img_2,
      project_dash_img_3,
      project_dash_img_4,
      project_dash_img_5,
    ],
    path: 'dashka',
    name: 'projects.projects.dashka.name',
    description: 'projects.projects.dashka.description',
    categories: [
      EProjectCategories.web,
      EProjectCategories.react,
      EProjectCategories.chartJs,
      EProjectCategories.mockapi,
    ],
    githubUrl: 'https://github.com/qwertycamedy/dashka',
    siteUrl: 'https://dashka.vercel.app/',
  },
  {
    imageUrls: [
      project_uiwave_img_0,
      project_uiwave_img_1,
      project_uiwave_img_2,
      project_uiwave_img_3,
      project_uiwave_img_4,
      project_uiwave_img_5,
      project_uiwave_img_6,
    ],
    path: 'uiwave',
    name: 'projects.projects.uiwave.name',
    description: 'projects.projects.uiwave.description',
    categories: [
      EProjectCategories.web,
      EProjectCategories.react,
      EProjectCategories.landing,
      EProjectCategories.responsive,
    ],
    githubUrl: 'https://github.com/qwertycamedy/uiwave-landing',
    siteUrl: 'https://uiwave-landing.vercel.app/',
  },
];
