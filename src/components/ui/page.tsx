import { cn } from '@/utils';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';
import { Sidebar } from '../shared';

export const Page = ({
  sidebar = true,
  className,
  children,
}: {
  sidebar?: boolean;
  className?: ClassNameValue;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        'page mx-auto flex w-full max-w-7xl flex-1 flex-col p-5 gap-5',
        className,
      )}
    >
      {sidebar && <Sidebar />}
      {children}
    </div>
  );
};
