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
      className={cn('bg-card-opacity flex w-full rounded-3xl px-14 py-10', className)}
      {...props}
    >
      {children}
    </div>
  );
};
