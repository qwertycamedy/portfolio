import { navLinks } from '@/utils';
import { Card, Section } from '../ui';

export const Skills = () => {
  return (
    <Section id={navLinks[3].path}>
      <Card className={'h-100'}>Skills</Card>
    </Section>
  );
};
