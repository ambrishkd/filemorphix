import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
};

const variantMap: Record<ButtonVariant, string> = {
    primary: "bg-primary hover:bg-primary-hover text-white",
    secondary: "bg-muted hover:bg-card-border text-foreground",
    ghost: "hover:bg-muted text-foreground",
};

const sizeMap: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
};

export default function Button({
    variant = "primary",
    size = "md",
    isLoading = false,
    disabled,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={disabled || isLoading}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                variantMap[variant],
                sizeMap[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
