import { Button } from '@/components/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SliderNavigation = ({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) => {
  return (
    <div className="flex gap-3">
      <Button size={'icon-lg'} onClick={onPrev}>
        <ChevronLeft size={20} />
      </Button>
      <Button size={'icon-lg'} onClick={onNext}>
        <ChevronRight size={20} />
      </Button>
    </div>
  );
};
