import { navLinks } from '@/utils';
import { Card, Section } from '../ui';

export const Reviews = () => {
  return (
    <Section id={navLinks[4].path}>
      <Card className={'h-100'}>Reviews</Card>
    </Section>
  );
};
