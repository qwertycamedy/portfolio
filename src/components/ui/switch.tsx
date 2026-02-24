import { cn } from '@/utils';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

export const Switch = ({
  className,
  roundCl,
  isOn,
  onChange,
  content,
}: {
  className?: ClassNameValue;
  roundCl?: ClassNameValue;
  isOn: boolean;
  onChange: any;
  content?: ReactNode;
}) => {
  return (
    <label
      className={cn(
        'relative flex h-5 w-12 items-center rounded-full pl-1 transition-colors duration-200',
        'bg-secondary/50 dark:bg-secondary-foreground/10',
        className,
        {},
      )}
    >
      <input
        className="absolute h-0 w-0 opacity-0"
        type="checkbox"
        checked={isOn}
        onChange={onChange}
      />
      <span
        className={cn(
          'color absolute left-0 h-7 w-7 cursor-pointer rounded-full transition-transform duration-300',
          'bg-primary text-background dark:text-foreground flex -translate-x-1 items-center justify-center text-center ease-in-out',
          roundCl,
          {
            'translate-x-6': isOn,
          },
        )}
      >
        {!!content && content}
      </span>
    </label>
  );
};
