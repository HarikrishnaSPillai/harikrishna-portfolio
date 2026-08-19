"use client";

import React, { useEffect } from "react";
import { useEReader } from "@/context/EReaderContext";
import { usePathname, useRouter } from "next/navigation";
import { CHAPTERS } from "./TableOfContentsModal";

export default function EReaderFooter() {
    const { triggerPageFlash } = useEReader();
    const pathname = usePathname();
    const router = useRouter();

    const currentIndex = CHAPTERS.findIndex((c) => c.path === pathname);
    // If on a subpage like /projects/[slug]
    const validIndex = currentIndex >= 0 ? currentIndex : 2;

    const currentChapter = CHAPTERS[validIndex] || CHAPTERS[0];
    const prevChapter = validIndex > 0 ? CHAPTERS[validIndex - 1] : null;
    const nextChapter = validIndex < CHAPTERS.length - 1 ? CHAPTERS[validIndex + 1] : null;

    const progressPercentage = Math.round(((validIndex + 1) / CHAPTERS.length) * 100);

    const navigateTo = (path: string) => {
        triggerPageFlash();
        router.push(path);
    };

    // Keyboard navigation (Left / Right Arrow Keys)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore key events when typing inside inputs or textareas
            if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement)?.tagName)) {
                return;
            }
            if (e.key === "ArrowLeft" && prevChapter) {
                navigateTo(prevChapter.path);
            } else if (e.key === "ArrowRight" && nextChapter) {
                navigateTo(nextChapter.path);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [prevChapter, nextChapter]);

    return (
        <footer className="reader-footer w-full border-t border-reader-subtle px-4 py-2 text-xs font-mono select-none flex flex-col sm:flex-row items-center justify-between gap-2 z-40 transition-colors">
            {/* Previous Page Button */}
            <div className="w-full sm:w-1/4 flex items-center justify-start">
                {prevChapter ? (
                    <button
                        onClick={() => navigateTo(prevChapter.path)}
                        className="px-3 py-1 rounded border border-reader-subtle hover:bg-reader-hover transition-colors flex items-center gap-1.5 opacity-80 hover:opacity-100 font-serif"
                        title={`Go to ${prevChapter.number}: ${prevChapter.title}`}
                    >
                        <span>←</span>
                        <span className="truncate max-w-[120px] text-[11px]">{prevChapter.number}</span>
                    </button>
                ) : (
                    <span className="text-[10px] opacity-30 italic font-serif">Start of Book</span>
                )}
            </div>

            {/* Reading Progress Center Bar */}
            <div className="w-full sm:w-2/4 flex flex-col items-center gap-1">
                <div className="flex items-center gap-2 text-[11px] opacity-75 font-mono">
                    <span>Page {validIndex + 1} of {CHAPTERS.length}</span>
                    <span>&bull;</span>
                    <span>{progressPercentage}% read</span>
                </div>
                {/* Progress bar line */}
                <div className="w-full max-w-[280px] h-1.5 bg-reader-subtle rounded-full overflow-hidden">
                    <div
                        className="h-full bg-reader-fg transition-all duration-300 rounded-full opacity-80"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>
            </div>

            {/* Next Page Button */}
            <div className="w-full sm:w-1/4 flex items-center justify-end">
                {nextChapter ? (
                    <button
                        onClick={() => navigateTo(nextChapter.path)}
                        className="px-3 py-1 rounded border border-reader-subtle hover:bg-reader-hover transition-colors flex items-center gap-1.5 opacity-80 hover:opacity-100 font-serif"
                        title={`Go to ${nextChapter.number}: ${nextChapter.title}`}
                    >
                        <span className="truncate max-w-[120px] text-[11px]">{nextChapter.number}</span>
                        <span>→</span>
                    </button>
                ) : (
                    <button
                        onClick={() => navigateTo(CHAPTERS[0].path)}
                        className="px-3 py-1 rounded border border-reader-subtle hover:bg-reader-hover transition-colors flex items-center gap-1 opacity-80 hover:opacity-100 font-serif text-[11px]"
                    >
                        <span>Restart Book ↺</span>
                    </button>
                )}
            </div>
        </footer>
    );
}
