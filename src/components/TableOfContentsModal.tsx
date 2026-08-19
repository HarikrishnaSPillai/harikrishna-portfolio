"use client";

import React from "react";
import { useEReader } from "@/context/EReaderContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface ChapterInfo {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    path: string;
    readTime: string;
    pageRange: string;
}

export const CHAPTERS: ChapterInfo[] = [
    {
        id: "ch1",
        number: "Chapter I",
        title: "Front Matter & Introduction",
        subtitle: "Executive Overview, Focus Areas & Platform Scope",
        path: "/",
        readTime: "2 min",
        pageRange: "pp. 1–3"
    },
    {
        id: "ch2",
        number: "Chapter II",
        title: "Professional History",
        subtitle: "Enterprise Experience at CIBC & BSC Corp",
        path: "/experience",
        readTime: "5 min",
        pageRange: "pp. 4–12"
    },
    {
        id: "ch3",
        number: "Chapter III",
        title: "Projects & Technical Initiatives",
        subtitle: "Selected Works, Architecture & Case Studies",
        path: "/projects",
        readTime: "8 min",
        pageRange: "pp. 13–24"
    },
    {
        id: "ch4",
        number: "Chapter IV",
        title: "Credentials & Verification",
        subtitle: "Cloud, AI & Data Engineering Badges",
        path: "/certifications",
        readTime: "3 min",
        pageRange: "pp. 25–28"
    },
    {
        id: "ch5",
        number: "Chapter V",
        title: "Philosophy & Systems Thinking",
        subtitle: "Professional Methodology & Approach",
        path: "/about",
        readTime: "4 min",
        pageRange: "pp. 29–33"
    },
    {
        id: "ch6",
        number: "Chapter VI",
        title: "Curriculum Vitae",
        subtitle: "Official Resume & Technical Documentation",
        path: "/resume",
        readTime: "4 min",
        pageRange: "pp. 34–38"
    }
];

export default function TableOfContentsModal() {
    const { isTocOpen, setIsTocOpen, triggerPageFlash, bookmarks } = useEReader();
    const pathname = usePathname();

    if (!isTocOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setIsTocOpen(false)} />

            {/* Slide-over Reader Drawer */}
            <div className="relative w-full max-w-md bg-reader-bg border-l-2 border-reader-accent h-full shadow-2xl p-6 text-reader-fg font-serif flex flex-col z-10 animate-in slide-in-from-right duration-300 overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between border-b-2 border-reader-accent pb-4 mb-6">
                    <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest opacity-60 block">Index & Contents</span>
                        <h2 className="text-xl font-bold tracking-tight">Table of Contents</h2>
                    </div>
                    <button
                        onClick={() => setIsTocOpen(false)}
                        className="p-1 px-2 rounded border border-reader-subtle hover:bg-reader-hover transition-colors font-mono text-xs"
                    >
                        Close ✕
                    </button>
                </div>

                {/* Chapter list */}
                <div className="space-y-4 flex-1">
                    <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                        Book Chapters
                    </h3>
                    <div className="space-y-3">
                        {CHAPTERS.map((ch) => {
                            const isActive = pathname === ch.path;
                            return (
                                <Link
                                    key={ch.id}
                                    href={ch.path}
                                    onClick={() => {
                                        triggerPageFlash();
                                        setIsTocOpen(false);
                                    }}
                                    className={`block p-3 rounded border transition-all ${isActive ? "border-reader-accent bg-reader-hover shadow-xs" : "border-reader-subtle hover:border-reader-accent hover:bg-reader-hover/50"}`}
                                >
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="font-mono text-[10px] uppercase tracking-wider font-bold opacity-75">
                                            {ch.number}
                                        </span>
                                        <span className="font-mono text-[10px] opacity-50">
                                            {ch.pageRange} &bull; {ch.readTime}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-base leading-tight mb-1">
                                        {ch.title}
                                    </h4>
                                    <p className="font-sans text-xs opacity-70 leading-snug">
                                        {ch.subtitle}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Bookmarks Section */}
                    {bookmarks.length > 0 && (
                        <div className="pt-6 border-t border-reader-subtle space-y-3">
                            <h3 className="font-mono text-[10px] uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1 flex items-center gap-1">
                                <span>🔖</span> Saved Bookmarks ({bookmarks.length})
                            </h3>
                            <div className="space-y-2">
                                {bookmarks.map((bm) => (
                                    <Link
                                        key={bm.id}
                                        href={bm.path}
                                        onClick={() => {
                                            triggerPageFlash();
                                            setIsTocOpen(false);
                                        }}
                                        className="block p-2 rounded border border-reader-subtle hover:bg-reader-hover transition-colors font-sans text-xs flex justify-between items-center"
                                    >
                                        <span className="font-medium truncate">{bm.chapterTitle}</span>
                                        <span className="font-mono text-[10px] opacity-50">{bm.date}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Metadata */}
                <div className="pt-6 mt-6 border-t border-reader-subtle text-center font-mono text-[10px] opacity-50 space-y-1">
                    <p>Harikrishna S. Pillai — Portfolio Edition</p>
                    <p>Designed for E-Ink Reader UI</p>
                </div>
            </div>
        </div>
    );
}
