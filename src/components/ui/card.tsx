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
      className={cn('bg-card-opacity flex rounded-xl md:rounded-2xl lg:rounded-3xl px-6.5 md:px-11 py-5 md:py-8 lg:px-14 lg:py-10', className)}
      {...props}
    >
      {children}
    </div>
  );
};
