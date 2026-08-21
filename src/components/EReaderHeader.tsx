"use client";

import React, { useState, useEffect } from "react";
import { useEReader } from "@/context/EReaderContext";
import { usePathname } from "next/navigation";

const CHAPTER_MAP: Record<string, { number: string; title: string }> = {
    "/": { number: "Chapter I", title: "Front Matter & Summary" },
    "/experience": { number: "Chapter II", title: "Professional History" },
    "/projects": { number: "Chapter III", title: "Projects & Initiatives" },
    "/certifications": { number: "Chapter IV", title: "Credentials & Badges" },
    "/about": { number: "Chapter V", title: "Philosophy & Context" },
    "/resume": { number: "Chapter VI", title: "Curriculum Vitae" },
};

export default function EReaderHeader() {
    const {
        theme,
        toggleDarkMode,
        isControlsOpen,
        setIsControlsOpen,
        isTocOpen,
        setIsTocOpen,
        isTocOpen: _unused,
        toggleBookmark,
        isBookmarked,
        deviceFrame,
        setDeviceFrame,
        setIsXrayOpen
    } = useEReader();

    const pathname = usePathname();
    const currentChapter = CHAPTER_MAP[pathname] || {
        number: "Monograph",
        title: pathname.startsWith("/projects/") ? "Case Study" : "Section"
    };

    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
        };
        updateTime();
        const timer = setInterval(updateTime, 30000);
        return () => clearInterval(timer);
    }, []);

    const bookmarked = isBookmarked(pathname);

    return (
        <header className="reader-header w-full flex items-center justify-between px-4 py-2 text-xs font-mono select-none border-b border-reader-subtle tracking-tight z-40 transition-colors">
            {/* Left: Device & Time info */}
            <div className="flex items-center gap-3">
                <span className="font-bold opacity-80 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse"></span>
                    {currentTime || "11:36 AM"}
                </span>
                <span className="hidden sm:inline-block text-[10px] opacity-40">|</span>
                <span className="hidden sm:inline-block opacity-60 text-[10px] uppercase tracking-wider">
                    Wi-Fi ⚡ 98%
                </span>
                {theme === "dark" && (
                    <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 font-mono text-[10px] border border-amber-400/20">
                        🌙 Night Mode
                    </span>
                )}
            </div>

            {/* Middle: Book / Chapter Title */}
            <div className="text-center font-serif truncate max-w-[200px] sm:max-w-[320px] md:max-w-[450px] opacity-90 px-2">
                <span className="font-semibold text-xs tracking-tight">{currentChapter.number}:</span>{" "}
                <span className="italic text-xs">{currentChapter.title}</span>
            </div>

            {/* Right: Controls & Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
                {/* Quick Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className={`p-1.5 rounded hover:bg-reader-hover transition-colors flex items-center justify-center ${theme === "dark" ? "text-amber-300 opacity-100" : "opacity-70 hover:opacity-100"}`}
                    title={theme === "dark" ? "Switch to Paper / Light Theme" : "Switch to Dark Night Theme"}
                    aria-label="Toggle Dark Mode"
                >
                    {theme === "dark" ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>

                {/* Dictionary X-Ray */}
                <button
                    onClick={() => setIsXrayOpen(true)}
                    className="p-1.5 rounded hover:bg-reader-hover transition-colors opacity-70 hover:opacity-100 flex items-center gap-1 text-[11px]"
                    title="X-Ray / Term Dictionary"
                    aria-label="X-Ray"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="hidden lg:inline text-[10px] font-mono">X-Ray</span>
                </button>

                {/* Bookmark Toggle */}
                <button
                    onClick={() => toggleBookmark(currentChapter.title, pathname)}
                    className={`p-1.5 rounded hover:bg-reader-hover transition-colors ${bookmarked ? "text-amber-600 dark:text-amber-400 opacity-100" : "opacity-60 hover:opacity-100"}`}
                    title={bookmarked ? "Remove Bookmark" : "Bookmark this Chapter"}
                    aria-label="Bookmark"
                >
                    <svg className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button>

                {/* Aa Display Settings */}
                <button
                    onClick={() => setIsControlsOpen(!isControlsOpen)}
                    className={`p-1.5 px-2 rounded hover:bg-reader-hover font-serif font-bold text-sm transition-all border ${isControlsOpen ? "border-reader-accent bg-reader-hover" : "border-transparent opacity-80 hover:opacity-100"}`}
                    title="Display Settings (Aa)"
                    aria-label="Font and Display Settings"
                >
                    Aa
                </button>

                {/* Table of Contents Button */}
                <button
                    onClick={() => setIsTocOpen(!isTocOpen)}
                    className="p-1.5 rounded hover:bg-reader-hover transition-colors opacity-80 hover:opacity-100 flex items-center gap-1"
                    title="Table of Contents"
                    aria-label="Table of Contents"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>

                {/* Bezel Device Frame Toggle */}
                <button
                    onClick={() => setDeviceFrame(!deviceFrame)}
                    className={`hidden md:flex p-1.5 rounded hover:bg-reader-hover transition-colors text-[10px] font-mono border ${deviceFrame ? "border-reader-accent opacity-100" : "border-reader-subtle opacity-50"}`}
                    title={deviceFrame ? "Switch to Full Screen Reader" : "Switch to Device Frame"}
                    aria-label="Toggle Frame"
                >
                    {deviceFrame ? "📱 Frame" : "📄 Full"}
                </button>
            </div>
        </header>
    );
}
