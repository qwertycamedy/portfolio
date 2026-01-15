import { cn } from '@/utils';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

export const Card = ({
  className,
  children,
  ...props
}: {
  className?: ClassNameValue;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn('bg-card flex w-full rounded-2xl px-14 py-10', className)}
      {...props}
    >
      {children}
    </div>
  );
};
