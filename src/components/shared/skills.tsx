import { navLinks } from '@/utils';
import { Card } from '../ui';
import { Element } from 'react-scroll';

export const Skills = () => {
  return (
    <Element name={navLinks[3].path} id={navLinks[3].path}>
      <Card className={'h-150'}>Skills</Card>
    </Element>
  );
};
