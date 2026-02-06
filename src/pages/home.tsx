import {
  About,
  Hero,
  Skills,
  Projects,
} from '@/components/shared';
import { Page } from '@/components/ui';

export const Home = () => {
  return (
    <Page className={'relative z-1'}>
      <div className="flex min-w-0 flex-1 flex-col gap-4 lg:gap-6">
        <Hero />
        <Projects />
        <Skills />
        <About />
      </div>
    </Page>
  );
};
