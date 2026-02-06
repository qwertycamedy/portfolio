import { cn } from '@/utils';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';
import { Burger, BurgerMenu, Footer, Sidebar } from '@/components/shared';
import { QcIcoOutline } from '@/components/icons';
import { useIsMobile } from '@/hooks';

export const Page = ({
  sidebar = true,
  burger = true,
  footer = true,
  logo = true,
  className,
  contentCl,
  children,
}: {
  sidebar?: boolean;
  burger?: boolean;
  footer?: boolean;
  logo?: boolean;
  className?: ClassNameValue;
  contentCl?: ClassNameValue;
  children: ReactNode;
}) => {
  const { isMobile, isTablet } = useIsMobile();

  return (
    <div className={cn('flex min-h-svh flex-1 flex-col gap-5 p-5', className)}>
      <div
        className={cn('mx-auto flex w-full max-w-7xl flex-1 gap-5', contentCl)}
      >
        {!isMobile && !isTablet && sidebar && <Sidebar />}
        {children}
      </div>
      {(isMobile || isTablet) && burger && (
        <>
          <Burger />
          <BurgerMenu />
        </>
      )}
      {footer && <Footer />}
      {logo && (
        <QcIcoOutline
          className="text-primary/5 pointer-events-none fixed bottom-40 left-[calc(60%+100px)] -z-1 h-[27vw] w-[27vw]"
          size={400}
        />
      )}
    </div>
  );
};
