import { cn } from "@/lib/utils";

export default function WPTextDesign({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span className={cn("font-semibold text-[#00749C]", className)}>
      WordPress
    </span>
  );
}
