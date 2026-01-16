import { Title, TitleSizes } from '@/components/ui';
import { cn } from '@/utils';
import { ClassNameValue } from 'tailwind-merge';

export const SectionTitle = ({
  className,
  text,
}: {
  className?: ClassNameValue;
  text: string;
}) => {
  return (
    <div className={cn('flex flex-col gap-3 w-max', className)}>
      <Title text={text} size={TitleSizes.h3} />
      <span className="from-primary h-0.5 w-[150%] rounded-[2px] bg-linear-to-r to-[rgba(0,0,0,0)]" />
    </div>
  );
};
