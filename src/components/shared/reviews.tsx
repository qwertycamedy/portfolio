import { navLinks } from '@/utils';
import { SectionTitle } from '@/components/shared';
import { Card } from '@/components/ui';
import { Element } from 'react-scroll';

export const Reviews = () => {
  return (
    <Element name={navLinks[4].path} id={navLinks[4].path}>
      <Card className={'h-150'}>
        <SectionTitle text="Отзывы" />
      </Card>
    </Element>
  );
};
