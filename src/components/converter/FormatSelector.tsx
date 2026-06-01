import { getTargetFormats } from "@/utils/getTargetFormats";
import { cn } from "@/utils/cn";

type FormatSelectorProps = {
    from: string;
    fileType: string;
    value: string | null;
    onChange: (format: string) => void;
    disabled?: boolean;
};

export default function FormatSelector({
    from,
    fileType,
    value,
    onChange,
    disabled,
}: FormatSelectorProps) {
    const formats = getTargetFormats(from, fileType);

    return (
        <select
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className={cn(
                "text-sm rounded-lg border border-border bg-background text-foreground",
                "px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary",
                "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
        >
            <option value="" disabled>
                Convert to...
            </option>
            {formats.map((fmt) => (
                <option key={fmt} value={fmt}>
                    {fmt.toUpperCase()}
                </option>
            ))}
        </select>
    );
}
