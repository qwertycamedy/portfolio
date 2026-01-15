import { navLinks } from '@/utils';
import { Card, Section } from '../ui';

export const Works = () => {
  return (
    <Section id={navLinks[2].path}>
      <Card className={'h-100'}>Works</Card>
    </Section>
  );
};
