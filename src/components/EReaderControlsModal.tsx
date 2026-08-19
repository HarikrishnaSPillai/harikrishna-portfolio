"use client";

import React from "react";
import { useEReader, ReaderTheme, ReaderFont, ReaderFontSize, ReaderSpacing, ReaderMargin } from "@/context/EReaderContext";

export default function EReaderControlsModal() {
    const {
        isControlsOpen,
        setIsControlsOpen,
        theme,
        setTheme,
        font,
        setFont,
        fontSize,
        setFontSize,
        spacing,
        setSpacing,
        margin,
        setMargin,
        einkRefresh,
        setEinkRefresh
    } = useEReader();

    if (!isControlsOpen) return null;

    const themes: { id: ReaderTheme; name: string; bg: string; fg: string; border: string }[] = [
        { id: "paper", name: "Paper", bg: "#F6F3EB", fg: "#1A1A1A", border: "#D8D2C2" },
        { id: "sepia", name: "Sepia", bg: "#F4ECD8", fg: "#362819", border: "#DCCAA7" },
        { id: "dark", name: "Dark", bg: "#181818", fg: "#E2E2E2", border: "#333333" },
        { id: "monochrome", name: "E-Ink", bg: "#FFFFFF", fg: "#000000", border: "#000000" },
    ];

    const fontOptions: { id: ReaderFont; name: string; fontClass: string }[] = [
        { id: "serif", name: "Book Serif", fontClass: "font-serif" },
        { id: "sans", name: "Modern Sans", fontClass: "font-sans" },
        { id: "mono", name: "Terminal Mono", fontClass: "font-mono" },
    ];

    const sizeOptions: { id: ReaderFontSize; label: string }[] = [
        { id: "sm", label: "A-" },
        { id: "base", label: "A" },
        { id: "lg", label: "A+" },
        { id: "xl", label: "A++" },
    ];

    const spacingOptions: { id: ReaderSpacing; label: string }[] = [
        { id: "compact", label: "Compact" },
        { id: "normal", label: "Normal" },
        { id: "relaxed", label: "Relaxed" },
    ];

    const marginOptions: { id: ReaderMargin; label: string }[] = [
        { id: "narrow", label: "Narrow" },
        { id: "normal", label: "Normal" },
        { id: "wide", label: "Wide" },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-end pt-14 pr-4 sm:pr-8 bg-black/20 backdrop-blur-xs animate-in fade-in duration-200">
            {/* Click outside backdrop */}
            <div className="absolute inset-0" onClick={() => setIsControlsOpen(false)} />

            {/* Modal Card */}
            <div className="relative w-full max-w-sm bg-reader-bg border-2 border-reader-accent rounded-lg shadow-2xl p-5 text-reader-fg font-sans select-none z-10 space-y-5 animate-in slide-in-from-top-4 duration-200">
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-reader-subtle pb-3">
                    <h3 className="font-serif font-bold text-base flex items-center gap-2">
                        <span>Aa</span> Display Settings
                    </h3>
                    <button
                        onClick={() => setIsControlsOpen(false)}
                        className="p-1 rounded hover:bg-reader-hover transition-colors font-mono text-xs"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                {/* Themes Selection */}
                <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider opacity-70 block mb-2">
                        Reading Theme
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setTheme(t.id)}
                                style={{ backgroundColor: t.bg, color: t.fg, borderColor: t.border }}
                                className={`h-12 rounded border flex flex-col items-center justify-center font-serif text-xs font-semibold transition-all ${theme === t.id ? "ring-2 ring-reader-fg ring-offset-2 scale-105 shadow-sm" : "opacity-80 hover:opacity-100"}`}
                            >
                                <span>{t.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Typography / Font Choice */}
                <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider opacity-70 block mb-2">
                        Typography Font
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                        {fontOptions.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => setFont(f.id)}
                                className={`py-2 px-3 rounded border text-xs font-semibold transition-all ${f.fontClass} ${font === f.id ? "border-reader-accent bg-reader-hover font-bold shadow-xs" : "border-reader-subtle opacity-70 hover:opacity-100"}`}
                            >
                                {f.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Text Size Controls */}
                <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider opacity-70 block mb-2">
                        Font Size
                    </label>
                    <div className="flex items-center gap-1.5">
                        {sizeOptions.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setFontSize(s.id)}
                                className={`flex-1 py-2 rounded border font-mono font-bold text-xs transition-all ${fontSize === s.id ? "border-reader-accent bg-reader-hover shadow-xs" : "border-reader-subtle opacity-70 hover:opacity-100"}`}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Spacing & Margins */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-[10px] font-mono uppercase tracking-wider opacity-70 block mb-1.5">
                            Line Height
                        </label>
                        <div className="flex flex-col gap-1">
                            {spacingOptions.map((sp) => (
                                <button
                                    key={sp.id}
                                    onClick={() => setSpacing(sp.id)}
                                    className={`py-1 px-2 rounded border text-[11px] font-mono text-left transition-all ${spacing === sp.id ? "border-reader-accent bg-reader-hover font-bold" : "border-reader-subtle opacity-60 hover:opacity-100"}`}
                                >
                                    {sp.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-[10px] font-mono uppercase tracking-wider opacity-70 block mb-1.5">
                            Page Margins
                        </label>
                        <div className="flex flex-col gap-1">
                            {marginOptions.map((m) => (
                                <button
                                    key={m.id}
                                    onClick={() => setMargin(m.id)}
                                    className={`py-1 px-2 rounded border text-[11px] font-mono text-left transition-all ${margin === m.id ? "border-reader-accent bg-reader-hover font-bold" : "border-reader-subtle opacity-60 hover:opacity-100"}`}
                                >
                                    {m.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* E-Ink Flash Refresh Toggle */}
                <div className="pt-3 border-t border-reader-subtle flex items-center justify-between">
                    <div>
                        <span className="text-xs font-mono font-semibold block">E-Ink Refresh Effect</span>
                        <span className="text-[10px] opacity-60 block">Simulate e-paper screen refresh flash</span>
                    </div>
                    <button
                        onClick={() => setEinkRefresh(!einkRefresh)}
                        className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${einkRefresh ? "bg-emerald-700" : "bg-gray-400"}`}
                        aria-label="Toggle E-Ink Refresh"
                    >
                        <div className={`w-5 h-5 rounded-full bg-white transition-transform ${einkRefresh ? "translate-x-5" : "translate-x-0"}`} />
                    </button>
                </div>
            </div>
        </div>
    );
}
