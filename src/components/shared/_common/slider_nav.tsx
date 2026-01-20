import { Button } from '@/components/ui';
import { cn } from '@/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SliderNavigation = ({
  className,
  prevCl,
  nextCl,
  onPrev,
  onNext,
}: {
  className?: string;
  prevCl?: string;
  nextCl?: string;
  onPrev: () => void;
  onNext: () => void;
}) => {
  return (
    <div className={cn('flex gap-3', className)}>
      <Button className={cn(prevCl)} size={'icon-lg'} onClick={onPrev}>
        <ChevronLeft size={20} />
      </Button>
      <Button className={cn(nextCl)} size={'icon-lg'} onClick={onNext}>
        <ChevronRight size={20} />
      </Button>
    </div>
  );
};
