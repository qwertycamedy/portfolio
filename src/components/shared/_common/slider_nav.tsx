import { Button } from '@/components/ui';
import { cn } from '@/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SliderNavigation = ({
  className,
  prevCl,
  nextCl,
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}: {
  className?: string;
  prevCl?: string;
  nextCl?: string;
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}) => {
  return (
    <div className={cn('flex gap-3', className)}>
      <Button
        className={cn(prevCl, { 'pointer-events-none ': isPrevDisabled })}
        size={'icon-lg'}
        onClick={onPrev}
        disabled={isPrevDisabled}
      >
        <ChevronLeft size={20} />
      </Button>
      <Button
        className={cn(nextCl, { 'pointer-events-none': isNextDisabled })}
        size={'icon-lg'}
        onClick={onNext}
        disabled={isNextDisabled}
      >
        <ChevronRight size={20} />
      </Button>
    </div>
  );
};
