import { Hero } from '@/components/shared';
import { Page } from '@/components/ui/page';

export const Home = () => {
  return (
    <Page className={'flex-row'}>
      <Hero />
    </Page>
  );
};
