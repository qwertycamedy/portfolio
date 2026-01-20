import {
  About,
  Hero,
  QcIcoOutline,
  Skills,
  Projects,
} from '@/components/shared';
import { Page } from '@/components/ui';

export const Home = () => {
  return (
    <Page className={'relative z-1 flex-row'}>
      <div className="flex flex-1 flex-col gap-6 min-w-0">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </div>
      <QcIcoOutline />
    </Page>
  );
};
