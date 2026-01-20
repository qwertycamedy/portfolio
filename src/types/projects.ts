export enum EProjectCategories {
  webDev = 'Web-dev',
  layout = 'Верстка',
  cms = 'CMS',
  react = 'React.js',
  tma = 'TMA',
}

export type TProject = {
  imageUrls: string[];
  name: string;
  description: string;
  categories: EProjectCategories[];
};
