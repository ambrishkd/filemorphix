import { cn } from "@/utils/cn";

type SpinnerProps = {
    size?: "sm" | "md" | "lg";
    className?: string;
};

const sizeMap = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
};

export default function Spinner({ size = "md", className }: SpinnerProps) {
    return (
        <div
            className={cn(
                "animate-spin rounded-full border-2 border-border border-t-primary",
                sizeMap[size],
                className
            )}
        />
    );
}
