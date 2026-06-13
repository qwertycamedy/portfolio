export enum EProjectCategories {
  web = 'Web',
  html = 'HTML',
  vanilla = 'Vanilla JS',
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
  zod = 'Zod',
  rhf = 'React Hook Form',
  tailwind = 'Tailwind',
  cssModules = 'Css Modules',
  dnd = 'Drag&Drop',
  games = 'Games',
  tilda = 'Tilda',
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
