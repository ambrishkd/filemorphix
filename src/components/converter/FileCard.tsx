"use client";

import { Action } from "@/types";
import { formatFileSize } from "@/utils/formatFileSize";
import FormatSelector from "./FormatSelector";
import Spinner from "@/components/ui/Spinner";
import { X, Download, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/utils/cn";

type FileCardProps = {
    action: Action;
    onFormatChange: (format: string) => void;
    onRemove: () => void;
};

export default function FileCard({ action, onFormatChange, onRemove }: FileCardProps) {
    return (
        <div className={cn("flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl border border-card-border bg-card transition-all")}>

            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{action.fileName}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                    {formatFileSize(action.fileSize)} · {action.from.toUpperCase()}
                </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">

                {action.status === "idle" && (
                    <FormatSelector
                        from={action.from}
                        fileType={action.fileType}
                        value={action.to}
                        onChange={onFormatChange}
                    />
                )}

                {action.status === "converting" && (
                    <div className="flex items-center gap-1.5 text-sm text-primary">
                        <Spinner size="sm" />
                        <span>Converting...</span>
                    </div>
                )}

                {action.status === "done" && action.url && (
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-sm text-success">
                            <CheckCircle2 size={14} />
                            <span>Done</span>
                        </div>
                        <a
                            href={action.url}
                            download={action.outputFileName}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-primary hover:bg-primary-hover text-white transition-colors"
                        >
                            <Download size={14} />
                            Download
                        </a>
                    </div>
                )}

                {action.status === "error" && (
                    <div className="flex items-center gap-1 text-sm text-error">
                        <AlertCircle size={14} />
                        <span>Failed</span>
                    </div>
                )}

                {action.status !== "converting" && (
                    <button
                        onClick={onRemove}
                        aria-label="Remove file"
                        className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground transition-colors"
                    >
                        <X size={16} />
                    </button>
                )}

            </div>

        </div>
    );
}
