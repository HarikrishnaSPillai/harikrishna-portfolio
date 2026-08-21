"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ReaderTheme = "paper" | "dark" | "sepia" | "monochrome";
export type ReaderFont = "serif" | "sans" | "mono";
export type ReaderFontSize = "sm" | "base" | "lg" | "xl";
export type ReaderSpacing = "compact" | "normal" | "relaxed";
export type ReaderMargin = "narrow" | "normal" | "wide";

export interface Bookmark {
    id: string;
    chapterTitle: string;
    path: string;
    date: string;
}

interface EReaderContextType {
    theme: ReaderTheme;
    setTheme: (theme: ReaderTheme) => void;
    toggleDarkMode: () => void;
    isDarkMode: boolean;
    font: ReaderFont;
    setFont: (font: ReaderFont) => void;
    fontSize: ReaderFontSize;
    setFontSize: (size: ReaderFontSize) => void;
    spacing: ReaderSpacing;
    setSpacing: (spacing: ReaderSpacing) => void;
    margin: ReaderMargin;
    setMargin: (margin: ReaderMargin) => void;
    einkRefresh: boolean;
    setEinkRefresh: (enable: boolean) => void;
    deviceFrame: boolean;
    setDeviceFrame: (enable: boolean) => void;
    isControlsOpen: boolean;
    setIsControlsOpen: (open: boolean) => void;
    isTocOpen: boolean;
    setIsTocOpen: (open: boolean) => void;
    isXrayOpen: boolean;
    setIsXrayOpen: (open: boolean) => void;
    triggerPageFlash: () => void;
    isFlashing: boolean;
    bookmarks: Bookmark[];
    toggleBookmark: (chapterTitle: string, path: string) => void;
    isBookmarked: (path: string) => boolean;
    activeXrayTerm: string | null;
    openXrayTerm: (term: string) => void;
}

const EReaderContext = createContext<EReaderContextType | undefined>(undefined);

export const EReaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<ReaderTheme>("paper");
    const [font, setFontState] = useState<ReaderFont>("serif");
    const [fontSize, setFontSizeState] = useState<ReaderFontSize>("base");
    const [spacing, setSpacingState] = useState<ReaderSpacing>("normal");
    const [margin, setMarginState] = useState<ReaderMargin>("normal");
    const [einkRefresh, setEinkRefreshState] = useState<boolean>(true);
    const [deviceFrame, setDeviceFrameState] = useState<boolean>(true);

    const [isControlsOpen, setIsControlsOpen] = useState(false);
    const [isTocOpen, setIsTocOpen] = useState(false);
    const [isXrayOpen, setIsXrayOpen] = useState(false);
    const [activeXrayTerm, setActiveXrayTerm] = useState<string | null>(null);
    const [isFlashing, setIsFlashing] = useState(false);

    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

    const applyThemeToHtml = (t: ReaderTheme) => {
        if (typeof document !== "undefined") {
            if (t === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    };

    // Hydrate from localStorage or system preference
    useEffect(() => {
        try {
            const savedTheme = localStorage.getItem("ereader_theme") as ReaderTheme;
            if (savedTheme) {
                setThemeState(savedTheme);
                applyThemeToHtml(savedTheme);
            } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setThemeState("dark");
                applyThemeToHtml("dark");
            }

            const savedFont = localStorage.getItem("ereader_font") as ReaderFont;
            if (savedFont) setFontState(savedFont);

            const savedFontSize = localStorage.getItem("ereader_fontsize") as ReaderFontSize;
            if (savedFontSize) setFontSizeState(savedFontSize);

            const savedSpacing = localStorage.getItem("ereader_spacing") as ReaderSpacing;
            if (savedSpacing) setSpacingState(savedSpacing);

            const savedMargin = localStorage.getItem("ereader_margin") as ReaderMargin;
            if (savedMargin) setMarginState(savedMargin);

            const savedEink = localStorage.getItem("ereader_eink");
            if (savedEink !== null) setEinkRefreshState(savedEink === "true");

            const savedFrame = localStorage.getItem("ereader_frame");
            if (savedFrame !== null) setDeviceFrameState(savedFrame === "true");

            const savedBookmarks = localStorage.getItem("ereader_bookmarks");
            if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
        } catch {
            // Default fallbacks if SSR or localStorage unavailable
        }
    }, []);

    const setTheme = (t: ReaderTheme) => {
        setThemeState(t);
        applyThemeToHtml(t);
        localStorage.setItem("ereader_theme", t);
        triggerPageFlash();
    };

    const toggleDarkMode = () => {
        const nextTheme = theme === "dark" ? "paper" : "dark";
        setTheme(nextTheme);
    };

    const setFont = (f: ReaderFont) => {
        setFontState(f);
        localStorage.setItem("ereader_font", f);
    };

    const setFontSize = (s: ReaderFontSize) => {
        setFontSizeState(s);
        localStorage.setItem("ereader_fontsize", s);
    };

    const setSpacing = (sp: ReaderSpacing) => {
        setSpacingState(sp);
        localStorage.setItem("ereader_spacing", sp);
    };

    const setMargin = (m: ReaderMargin) => {
        setMarginState(m);
        localStorage.setItem("ereader_margin", m);
    };

    const setEinkRefresh = (enable: boolean) => {
        setEinkRefreshState(enable);
        localStorage.setItem("ereader_eink", String(enable));
    };

    const setDeviceFrame = (enable: boolean) => {
        setDeviceFrameState(enable);
        localStorage.setItem("ereader_frame", String(enable));
    };

    const triggerPageFlash = () => {
        if (!einkRefresh) return;
        setIsFlashing(true);
        setTimeout(() => {
            setIsFlashing(false);
        }, 300);
    };

    const toggleBookmark = (chapterTitle: string, path: string) => {
        setBookmarks((prev) => {
            const exists = prev.some((b) => b.path === path);
            let updated: Bookmark[];
            if (exists) {
                updated = prev.filter((b) => b.path !== path);
            } else {
                updated = [
                    ...prev,
                    {
                        id: String(Date.now()),
                        chapterTitle,
                        path,
                        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }),
                    },
                ];
            }
            localStorage.setItem("ereader_bookmarks", JSON.stringify(updated));
            return updated;
        });
    };

    const isBookmarked = (path: string) => {
        return bookmarks.some((b) => b.path === path);
    };

    const openXrayTerm = (term: string) => {
        setActiveXrayTerm(term);
        setIsXrayOpen(true);
    };

    return (
        <EReaderContext.Provider
            value={{
                theme,
                setTheme,
                toggleDarkMode,
                isDarkMode: theme === "dark",
                font,
                setFont,
                fontSize,
                setFontSize,
                spacing,
                setSpacing,
                margin,
                setMargin,
                einkRefresh,
                setEinkRefresh,
                deviceFrame,
                setDeviceFrame,
                isControlsOpen,
                setIsControlsOpen,
                isTocOpen,
                setIsTocOpen,
                isXrayOpen,
                setIsXrayOpen,
                triggerPageFlash,
                isFlashing,
                bookmarks,
                toggleBookmark,
                isBookmarked,
                activeXrayTerm,
                openXrayTerm,
            }}
        >
            {children}
        </EReaderContext.Provider>
    );
};

export const useEReader = () => {
    const context = useContext(EReaderContext);
    if (!context) {
        throw new Error("useEReader must be used within an EReaderProvider");
    }
    return context;
};
