import { cn } from '@/utils';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

export const Section = ({
  className,
  id,
  children,
}: {
  className?: ClassNameValue;
  id?: string;
  children: ReactNode;
}) => {
  return (
    <section className={cn('flex w-full', className)} id={id}>
      {children}
    </section>
  );
};
