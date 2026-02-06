import { cn } from '@/utils';
import { ClassNameValue } from 'tailwind-merge';

export const ManagementIco = ({
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
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H16V14H0V0ZM15 1H1V3H15V1ZM1 13H15V4H1V13ZM2 8V5H5V8H2ZM3 6V7H4V6H3ZM2 12V9H5V12H2ZM3 10V11H4V10H3ZM7 7V6H13V7H7ZM7 11V10H13V11H7Z"
        fill="currentColor"
      />
    </svg>
  );
};
