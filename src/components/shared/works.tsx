import { navLinks } from '@/utils';
import { Card } from '../ui';
import { Element } from 'react-scroll';

export const Works = () => {
  return (
    <Element name={navLinks[2].path} id={navLinks[2].path}>
      <Card className={'h-100'}>Works</Card>
    </Element>
  );
};
