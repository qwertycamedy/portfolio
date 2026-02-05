import { cn } from '@/utils';
import { ClassNameValue } from 'tailwind-merge';

export const ZustandIco = ({
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
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.25 11.25L11.25 14.25M14.25 5.25L5.25 14.25M0.75 10.25C0.75 5.772 0.75 3.532 2.141 2.141C3.532 0.75 5.771 0.75 10.25 0.75C14.728 0.75 16.968 0.75 18.359 2.141C19.75 3.532 19.75 5.771 19.75 10.25C19.75 14.728 19.75 16.968 18.359 18.359C16.968 19.75 14.729 19.75 10.25 19.75C5.772 19.75 3.532 19.75 2.141 18.359C0.75 16.968 0.75 14.729 0.75 10.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
