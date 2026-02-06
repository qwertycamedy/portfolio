import { cn } from '@/utils';
import { ClassNameValue } from 'tailwind-merge';

export const RestapiIco = ({
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
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 12C13.7 12 12.6 12.8 12.2 14H8C8 13.3 7.8 12.7 7.5 12.2L14.6 4.9C14.9 4.9 15.2 5 15.5 5C16.9 5 18 3.9 18 2.5C18 1.1 16.9 0 15.5 0C14.1 0 13 1.1 13 2.5C13 2.8 13.1 3.2 13.2 3.5L6.2 10.7C5.6 10.2 4.8 10 4 10V5.8C5.2 5.4 6 4.3 6 3C6 1.3 4.7 0 3 0C1.3 0 0 1.3 0 3C0 4.3 0.8 5.4 2 5.8V10.5C0.8 11.2 0 12.5 0 13.9C0 16.1 1.8 17.9 4 17.9C5.5 17.9 6.8 17.1 7.4 15.9H12.1C12.5 17 13.6 17.9 14.9 17.9C16.5 17.9 17.9 16.6 17.9 14.9C18 13.3 16.6 12 15 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
