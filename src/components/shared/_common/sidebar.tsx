import { Link } from 'react-router-dom';
import { Card, Title, TitleSizes } from '@/components/ui';
import meImg from '@/assets/img/me.jpg';
import { useEffect, useState } from 'react';
import { cn, navLinks, networkLinks } from '@/utils';

export const Sidebar = () => {
  const [activeNavLink, setActiveNavLink] = useState<string>(navLinks[0].path);

  useEffect(() => {
    const observers = navLinks.map(({ path }) => {
      const element = document.getElementById(path);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveNavLink(path);
          }
        },
        { threshold: 0.5 },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <aside className="flex h-max w-full max-w-60 flex-col">
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
              <Link
                className={cn(
                  'text-secondary-foreground relative flex items-center gap-3 text-sm hover:opacity-70 transition-opacity',
                  { 'text-foreground': activeNavLink === navLink.path },
                )}
                to={`/#${navLink.path}`}
              >
                <span
                  className={cn(
                    'bg-primary pointer-events-none absolute right-[calc(100%+8px)] flex h-1.5 w-1.5 rounded-full opacity-0 transition-opacity',
                    { 'opacity-100': activeNavLink === navLink.path },
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
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </aside>
  );
};
