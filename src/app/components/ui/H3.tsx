import { cn } from "@/app/lib/utils";

export function H3(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={cn("text-2xl font-semibold tracking-tight", props.className)}
    />
  );
}
