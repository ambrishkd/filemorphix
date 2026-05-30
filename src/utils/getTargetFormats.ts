import { formatsByType } from "@/constants/formats";

export function getTargetFormats(from: string, fileType: string): string[] {
    const formats = formatsByType[fileType as keyof typeof formatsByType];
    if (!formats) return [];
    return [...formats].filter((f) => f !== from.toLowerCase());
}
