import { cn } from '@/utils';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';
import { Footer, Sidebar } from '@/components/shared';
import { QcIcoOutline } from '@/components/icons';

export const Page = ({
  sidebar = true,
  // burger = true,
  footer = true,
  logo = true,
  className,
  contentCl,
  children,
}: {
  sidebar?: boolean;
  // burger?: boolean;
  footer?: boolean;
  logo?: boolean;
  className?: ClassNameValue;
  contentCl?: ClassNameValue;
  children: ReactNode;
}) => {
  // const { isMobile, isTablet } = useIsMobile();

  return (
    <div
      className={cn(
        'flex min-h-svh flex-1 flex-col gap-5 px-5 pt-5 pb-30 lg:p-5',
        className,
      )}
    >
      <div
        className={cn('mx-auto flex w-full max-w-7xl flex-1 gap-5', contentCl)}
      >
        {/* {!isMobile && !isTablet && sidebar && <Sidebar />} */}
        {sidebar && <Sidebar />}
        {children}
      </div>
      {/* {(isMobile || isTablet) && burger && (
        <>
          <Burger />
          <BurgerMenu />
        </>
      )} */}
      {footer && <Footer />}
      {logo && (
        <QcIcoOutline
          className="text-primary/5 pointer-events-none fixed bottom-40 left-[calc(40%+100px)] lg:left-[calc(60%+100px)] -z-1 h-[40vh] w-[40vh]  md:h-[27vw] md:w-[27vw]"
          size={400}
        />
      )}
    </div>
  );
};
