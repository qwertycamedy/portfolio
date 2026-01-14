import { cn } from "@/utils";
import type { ClassNameValue } from "tailwind-merge";

export const sizes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

type TSizes = keyof typeof sizes;

type TTitle = {
  size?: TSizes;
  text: string;
  className?: ClassNameValue;
};

export const Title = ({ size = sizes.h1, text, className }: TTitle) => {
  const Tag = size;

  return (
    <Tag
      className={cn("font-medium", className, {
        "text-xl md:text-2xl xl:text-3xl": size === sizes.h1,
        "text-lg md:text-xl xl:text-2xl": size === sizes.h2,
        "text-base md:text-lg xl:text-xl": size === sizes.h3,
        "text-sm md:text-base xl:text-lg": size === sizes.h4,
        "text-xs md:text-sm xl:text-base": size === sizes.h5,
        "text-[10px] md:text-xs xl:text-sm": size === sizes.h6,
      })}
    >
      {text}
    </Tag>
  );
};
