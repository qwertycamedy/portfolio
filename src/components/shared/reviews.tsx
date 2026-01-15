import { navLinks } from '@/utils';
import { Card } from '../ui';
import { Element } from 'react-scroll';

export const Reviews = () => {
  return (
    <Element name={navLinks[4].path} id={navLinks[4].path}>
      <Card className={'h-150'}>Reviews</Card>
    </Element>
  );
};
