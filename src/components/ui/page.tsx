import { cn } from '@/utils';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';
import { Footer, Sidebar } from '@/components/shared';
import { QcIcoOutline } from '@/components/icons';

export const Page = ({
  sidebar = true,
  footer = true,
  logo = true,
  className,
  contentCl,
  children,
}: {
  sidebar?: boolean;
  footer?: boolean;
  logo?: boolean;
  className?: ClassNameValue;
  contentCl?: ClassNameValue;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        'flex min-h-svh flex-1 flex-col gap-5 px-5 pt-5 lg:p-5',
        className,
        { 'pb-30': sidebar },
        { 'pb-5': !sidebar },
      )}
    >
      <div
        className={cn('mx-auto flex w-full max-w-7xl flex-1 gap-5', contentCl)}
      >
        {sidebar && <Sidebar />}
        {children}
      </div>
      {footer && <Footer />}
      {logo && (
        <QcIcoOutline
          className="text-primary/5 pointer-events-none fixed bottom-40 left-[calc(40%+100px)] -z-1 h-[40vh] w-[40vh] md:h-[27vw] md:w-[27vw] lg:left-[calc(60%+100px)]"
          size={400}
        />
      )}
    </div>
  );
};
