import { navLinks } from '@/utils';
import { Card } from '../ui';
import { Element } from 'react-scroll';

export const About = () => {
  return (
    <Element name={navLinks[1].path} id={navLinks[1].path}>
      <Card className={'h-100'}>About</Card>
    </Element>
  );
};
