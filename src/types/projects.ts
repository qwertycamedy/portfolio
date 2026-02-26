export enum EProjectCategories {
  web = 'Web',
  html = 'HTML',
  cms = 'CMS',
  wp = 'Wordpress',
  react = 'React.js',
  next = 'Next.js',
  php = 'PHP',
  redux = 'Redux-toolkit',
  tma = 'TMA',
  ton = 'TON',
  mockapi = 'Mock API',
  chartJs = 'Chart.js',
  responsive = 'Responsive',
  gulp = 'GULP',
  scss = 'SCSS',
  landing = 'Landing',
  multipage = 'Multipage',
}

export type TProject = {
  imageUrls: string[];
  path: string;
  name: string;
  description: string;
  categories: EProjectCategories[];
  githubUrl?: string;
  siteUrl?: string;
};
