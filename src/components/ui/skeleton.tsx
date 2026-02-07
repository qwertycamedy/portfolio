import { cn } from "@/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-card animate-pulse rounded-2xl", className)}
      {...props}
    />
  )
}

export { Skeleton }
