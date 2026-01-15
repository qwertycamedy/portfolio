import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Card, Title, TitleSizes } from '@/components/ui';
import meImg from '@/assets/img/me.jpg';
import { cn, navLinks, networkLinks } from '@/utils';
import { useScrollBottomMonitor } from '@/hooks';

export const Sidebar = () => {
  const isBottom = useScrollBottomMonitor(navLinks[4].path);
  const [activeNavLink, setActiveNavLink] = useState<string>(navLinks[0].path);

  const onSetActive = (curLink: string) => {
    setActiveNavLink(curLink);
  };

  return (
    <aside className="sticky top-5 flex h-max w-full max-w-60 flex-col">
      <Card className={'flex-col gap-5 px-5.5 pt-5.5 pb-12'}>
        <img
          className="h-19 w-19 rounded-full"
          src={meImg}
          alt="Adil Kairbekov qwertycamedy Frontend Developer"
        />
        <div className="flex flex-col gap-2">
          <Title text="Adil Kairbekov" size={TitleSizes.h5} />
          <p className="text-secondary-foreground text-xs">
            Frontend developer
          </p>
        </div>
        <ul className="flex gap-3.5">
          {networkLinks.map((networkLink) => (
            <li key={networkLink.path}>
              <Link
                className="bg-primary flex h-7.5 w-7.5 items-center justify-center overflow-hidden rounded-full text-lg transition-opacity hover:opacity-60"
                to={networkLink.path}
                target="_blank"
              >
                {networkLink.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-3 pl-3.5">
          {navLinks.map((navLink) => (
            <li key={navLink.path}>
              <ScrollLink
                className={cn(
                  'text-secondary-foreground relative flex items-center gap-3 text-sm transition-opacity hover:opacity-70',
                  {
                    'text-foreground':
                      (!isBottom && activeNavLink === navLink.path) ||
                      (isBottom && navLink.path === navLinks[4].path),
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
                    'bg-primary pointer-events-none absolute right-[calc(100%+8px)] flex h-1.5 w-1.5 rounded-full opacity-0 transition-opacity',
                    {
                      'opacity-100':
                        (!isBottom && activeNavLink === navLink.path) ||
                        (isBottom && navLink.path === navLinks[4].path),
                    },
                  )}
                />
                <span
                  className={cn(
                    'bg-primary text-foreground flex h-5 w-5 items-center justify-center overflow-hidden rounded-full',
                    { 'rotate-180': navLink.path === 'about' },
                  )}
                >
                  <navLink.icon size={14} />
                </span>
                <span>{navLink.text}</span>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </Card>
    </aside>
  );
};
