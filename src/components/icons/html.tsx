import { cn } from '@/utils';
import { ClassNameValue } from 'tailwind-merge';

export const HtmlIco = ({
  size = 16,
  className,
}: {
  size: number;
  className: ClassNameValue;
}) => {
  return (
    <svg
      className={cn(`min-w-[${size}px] w-[${size}px] h-[${size}px]`, className)}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 14L8 16L14 14L16 0H0M2 2H14V4H5L6 6H13L12 12H4V10H10V8H4"
        fill="currentColor"
      />
    </svg>
  );
};
