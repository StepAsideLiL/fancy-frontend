import fonts from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function WPTextDesign({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-[#00749C]",
        fonts.ppneuemontreal.medium.className,
        className,
      )}
    >
      WordPress
    </span>
  );
}
