"use client";

import React from "react";
import { useEReader } from "@/context/EReaderContext";
import { xrayEntries, XRayEntry } from "@/data/xrayData";

export default function XRayDictionaryModal() {
    const { isXrayOpen, setIsXrayOpen, activeXrayTerm, openXrayTerm } = useEReader();

    if (!isXrayOpen) return null;

    const currentEntry: XRayEntry = activeXrayTerm && xrayEntries[activeXrayTerm]
        ? xrayEntries[activeXrayTerm]
        : xrayEntries["Databricks"];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
            {/* Backdrop */}
            <div className="absolute inset-0" onClick={() => setIsXrayOpen(false)} />

            {/* Modal Box */}
            <div className="relative w-full max-w-lg bg-reader-bg border-2 border-reader-accent rounded-lg shadow-2xl p-6 text-reader-fg font-serif select-none z-10 space-y-5 animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between border-b-2 border-reader-accent pb-3">
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-2 py-0.5 border border-reader-subtle rounded bg-reader-hover uppercase tracking-widest font-bold">
                            X-Ray Dictionary
                        </span>
                    </div>
                    <button
                        onClick={() => setIsXrayOpen(false)}
                        className="p-1 px-2 rounded hover:bg-reader-hover font-mono text-xs border border-reader-subtle"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>

                {/* Term Select Quick Pills */}
                <div className="flex flex-wrap gap-1.5 pb-2 border-b border-reader-subtle">
                    {Object.keys(xrayEntries).map((term) => (
                        <button
                            key={term}
                            onClick={() => openXrayTerm(term)}
                            className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${currentEntry.term === term ? "bg-reader-fg text-reader-bg font-bold" : "border border-reader-subtle hover:bg-reader-hover opacity-70 hover:opacity-100"}`}
                        >
                            {term}
                        </button>
                    ))}
                </div>

                {/* Term Details Card */}
                <div className="space-y-3 pt-2">
                    <div className="flex items-baseline justify-between">
                        <h3 className="text-2xl font-bold tracking-tight">{currentEntry.term}</h3>
                        <span className="font-mono text-[11px] uppercase tracking-wider opacity-60">
                            {currentEntry.category}
                        </span>
                    </div>

                    <p className="font-sans text-sm font-semibold italic border-l-2 border-reader-accent pl-3 py-1 opacity-90">
                        "{currentEntry.summary}"
                    </p>

                    <div className="font-sans text-sm leading-relaxed opacity-85 pt-2">
                        {currentEntry.details}
                    </div>

                    {/* Related chapters tag */}
                    <div className="pt-4 border-t border-reader-subtle flex items-center gap-2 font-mono text-[11px] opacity-70">
                        <span>Referenced in:</span>
                        <div className="flex gap-1">
                            {currentEntry.relatedChapters.map((ch, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded border border-reader-subtle bg-reader-hover text-[10px]">
                                    {ch}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
