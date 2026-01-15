import {
  About,
  Hero,
  QcIcoOutline,
  Reviews,
  Skills,
  Works,
} from '@/components/shared';
import { Page } from '@/components/ui';

export const Home = () => {
  return (
    <Page className={'relative z-1 flex-row'}>
      <div className="flex w-full flex-col gap-6">
        <Hero />
        <About />
        <Works />
        <Skills />
        <Reviews />
      </div>
      <QcIcoOutline />
    </Page>
  );
};
