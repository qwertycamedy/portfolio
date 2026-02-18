export enum EProjectCategories {
  web = 'Web',
  layout = 'Верстка',
  cms = 'CMS',
  wp = 'Wordpress',
  react = 'React.js',
  next = 'Next.js',
  vanilla = 'Javascript',
  php = 'PHP',
  redux = 'Redux-toolkit',
  tma = 'TMA',
  ton = 'TON',
}

export type TProject = {
  imageUrls: string[];
  name: string;
  description: string;
  categories: EProjectCategories[];
  githubUrl?: string;
  siteUrl?: string;
};
