import { navLinks } from '@/utils';
import { Card } from '@/components/ui';
import { SectionTitle } from '@/components/shared';
import { Element } from 'react-scroll';

export const Skills = () => {
  return (
    <Element name={navLinks[3].path} id={navLinks[3].path}>
      <Card className={'h-150'}>
        <SectionTitle text="Скиллы" />
      </Card>
    </Element>
  );
};
