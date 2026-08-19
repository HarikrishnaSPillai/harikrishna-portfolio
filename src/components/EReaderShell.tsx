"use client";

import React from "react";
import { useEReader } from "@/context/EReaderContext";
import EReaderHeader from "./EReaderHeader";
import EReaderFooter from "./EReaderFooter";
import EReaderControlsModal from "./EReaderControlsModal";
import TableOfContentsModal from "./TableOfContentsModal";
import XRayDictionaryModal from "./XRayDictionaryModal";

export default function EReaderShell({ children }: { children: React.ReactNode }) {
    const {
        theme,
        font,
        fontSize,
        spacing,
        margin,
        deviceFrame,
        isFlashing
    } = useEReader();

    // Map font family
    const fontClassMap = {
        serif: "font-serif",
        sans: "font-sans",
        mono: "font-mono"
    };

    // Map font size scale
    const sizeClassMap = {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl"
    };

    // Map line spacing
    const spacingClassMap = {
        compact: "leading-snug space-y-4",
        normal: "leading-relaxed space-y-6",
        relaxed: "leading-loose space-y-8"
    };

    // Map container padding / margins
    const marginClassMap = {
        narrow: "max-w-4xl px-4 md:px-8",
        normal: "max-w-3xl px-6 md:px-12",
        wide: "max-w-2xl px-6 md:px-16"
    };

    return (
        <div className={`theme-${theme} min-h-screen w-full transition-colors duration-300 flex flex-col items-center justify-between select-text`}>
            {/* E-Ink Page Refresh Overlay */}
            {isFlashing && (
                <div className="fixed inset-0 bg-black z-50 animate-eink-flash pointer-events-none" />
            )}

            {/* Optional Device Bezel Frame (Kindle / Kobo style) */}
            <div className={`w-full flex-1 flex flex-col transition-all duration-300 ${deviceFrame ? "py-2 sm:py-6 px-2 sm:px-6 md:px-12 max-w-[1100px] mx-auto" : "w-full"}`}>
                <div className={`w-full flex-1 flex flex-col bg-reader-bg border-reader-border text-reader-fg rounded-xl shadow-2xl transition-all overflow-hidden ${deviceFrame ? "border-[12px] sm:border-[16px] md:border-[20px] ring-1 ring-black/10" : "border-0 shadow-none rounded-none"}`}>
                    
                    {/* Physical Bezel Top Branding if Frame Enabled */}
                    {deviceFrame && (
                        <div className="bg-reader-bezel px-4 py-1 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-reader-subtle border-b border-reader-subtle select-none">
                            <span className="font-bold tracking-tighter">BUDJET READER &bull; PAPERWHITE EDITION</span>
                            <span className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                E-INK HD
                            </span>
                        </div>
                    )}

                    {/* E-Reader Top Status Bar */}
                    <EReaderHeader />

                    {/* Main Book Page Content Scroll Area */}
                    <main className={`flex-1 overflow-y-auto ${fontClassMap[font]} ${sizeClassMap[fontSize]} ${spacingClassMap[spacing]} transition-all duration-200 py-8`}>
                        <div className={`mx-auto ${marginClassMap[margin]}`}>
                            {children}
                        </div>
                    </main>

                    {/* E-Reader Bottom Footer Progress Bar */}
                    <EReaderFooter />

                    {/* Physical Bezel Bottom Chin Logo if Frame Enabled */}
                    {deviceFrame && (
                        <div className="bg-reader-bezel py-2 text-center font-serif font-bold tracking-widest text-xs opacity-40 uppercase border-t border-reader-subtle select-none">
                            H A R I K R I S H N A &nbsp; P I L L A I
                        </div>
                    )}
                </div>
            </div>

            {/* Floating Modals */}
            <EReaderControlsModal />
            <TableOfContentsModal />
            <XRayDictionaryModal />
        </div>
    );
}
