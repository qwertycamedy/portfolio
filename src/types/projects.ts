export enum EProjectCategories {
  webDev = 'Web-dev',
  layout = 'Верстка',
  cms = 'CMS',
  react = 'React.js',
}

export type TProject = {
  imageUrls: string[];
  name: string;
  description: string;
  categories: EProjectCategories[];
};
