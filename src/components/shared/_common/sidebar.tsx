import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { cn, navLinks } from '@/utils';
import { useIsMobile, useScrollBottomMonitor } from '@/hooks';
import { NetworkLinks, Switchers } from '@/components/shared';
import { Card, Title, TitleSizes } from '@/components/ui';
import meImg from '@/assets/img/me.jpg';

export const Sidebar = () => {
  const { isMobile, isTablet } = useIsMobile();
  const isBottom = useScrollBottomMonitor(navLinks[3].path);
  const [activeNavLink, setActiveNavLink] = useState<string>(navLinks[0].path);

  const onSetActive = (curLink: string) => {
    setActiveNavLink(curLink);
  };

  return (
    <aside
      className={cn(
        'flex flex-col lg:sticky lg:top-5 lg:bottom-[unset] lg:left-[unset] lg:h-max lg:w-60 lg:min-w-60 lg:bg-transparent lg:pb-0',
        'fixed bottom-0 left-0 z-1000 w-full pb-5',
      )}
    >
      <Card
        className={cn(
          'mx-auto w-max flex-col gap-7 rounded-full px-8 pt-5 pb-5 shadow-2xl backdrop-blur-lg md:rounded-full md:px-8 md:pt-5 md:pb-5 lg:mx-0 lg:w-auto lg:px-5.5 lg:pt-5.5 lg:pb-12 lg:shadow-none lg:backdrop-blur-none',
        )}
      >
        {!isMobile && !isTablet && (
          <>
            <img
              className="h-19 w-19 scale-x-[-1] rounded-full"
              src={meImg}
              alt="Adil Kairbekov qwertycamedy Frontend Developer"
            />
            <div className="flex flex-col gap-2">
              <Title text="Адиль Каирбеков" size={TitleSizes.h5} />
              <p className="text-secondary-foreground text-xs">
                Frontend Разработчик
              </p>
            </div>
            <NetworkLinks />
          </>
        )}
        <ul className="mx-auto flex gap-5 pl-0 lg:mx-0 lg:flex-col lg:gap-3 lg:pl-3.5">
          {navLinks.map((navLink) => (
            <li key={navLink.path}>
              <ScrollLink
                className={cn(
                  'text-secondary-foreground relative flex items-center gap-3 text-sm transition-opacity hover:opacity-70',
                  {
                    'text-foreground':
                      (!isBottom && activeNavLink === navLink.path) ||
                      (isBottom && navLink.path === navLinks[3].path),
                  },
                )}
                to={`${navLink.path}`}
                spy={true}
                hashSpy={true}
                duration={500}
                offset={-150}
                onSetActive={onSetActive}
              >
                <span
                  className={cn(
                    'bg-primary pointer-events-none absolute top-[calc(100%-4px)] left-1/2 flex h-1.5 w-1.5 -translate-1/2 rounded-full opacity-0 transition-all duration-500 lg:top-[unset] lg:right-[calc(100%+8px)] lg:left-[unset] lg:translate-0 lg:transition-opacity lg:duration-200',
                    {
                      'top-[calc(100%+4px)] opacity-100':
                        (!isBottom && activeNavLink === navLink.path) ||
                        (isBottom && navLink.path === navLinks[3].path),
                    },
                  )}
                />
                <span
                  className={cn(
                    'bg-primary text-background dark:text-foreground flex h-10 w-10 items-center justify-center overflow-hidden rounded-full opacity-70 transition-all lg:h-5 lg:w-5 lg:translate-y-0 lg:opacity-100 lg:transition-none',
                    {
                      'rotate-180': navLink.path === 'about',
                      '-translate-y-1 opacity-100':
                        (!isBottom && activeNavLink === navLink.path) ||
                        (isBottom && navLink.path === navLinks[3].path),
                    },
                  )}
                >
                  <navLink.icon size={14} />
                </span>
                {!isMobile && !isTablet && <span>{navLink.text}</span>}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {!isMobile && !isTablet && <Switchers />}
      </Card>
    </aside>
  );
};
