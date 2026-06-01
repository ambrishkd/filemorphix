import { cn } from "@/utils/cn";

type BadgeVariant = "default" | "success" | "error" | "converting";

type BadgeProps = {
    variant?: BadgeVariant;
    children: React.ReactNode;
    className?: string;
};

const variantMap: Record<BadgeVariant, string> = {
    default: "bg-muted text-muted-foreground",
    success: "bg-success/10 text-success",
    error: "bg-error/10 text-error",
    converting: "bg-primary/10 text-primary",
};

export default function Badge({
    variant = "default",
    children,
    className,
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                variantMap[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
