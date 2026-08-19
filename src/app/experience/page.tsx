"use client";

import data from "@/data/portfolio.json";
import { useState } from "react";
import { useEReader } from "@/context/EReaderContext";
import Link from "next/link";

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const { openXrayTerm, triggerPageFlash } = useEReader();

    return (
        <article className="space-y-10">
            {/* Chapter Header */}
            <header className="border-b-2 border-reader-subtle pb-6 space-y-3">
                <div className="flex justify-between items-baseline font-mono text-xs opacity-60 uppercase tracking-widest">
                    <span>CHAPTER II</span>
                    <span>CAREER CHRONICLE</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                    Professional History
                </h1>
                <p className="text-base sm:text-lg font-serif italic opacity-85">
                    A track record of technical clarity and operational excellence in complex, regulated banking and technology environments.
                </p>
            </header>

            {/* Interactive E-Ink Chapter Timeline Selector */}
            <section className="space-y-4">
                <h2 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                    Select Position Volume
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {data.experience.map((exp, idx) => {
                        const isSelected = activeIndex === idx;
                        return (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`p-4 rounded border text-left transition-all ${isSelected ? "border-reader-accent bg-reader-hover ring-1 ring-reader-fg shadow-xs" : "border-reader-subtle opacity-70 hover:opacity-100 hover:bg-reader-hover/40"}`}
                            >
                                <span className="font-mono text-[10px] uppercase tracking-wider block opacity-60 mb-1">
                                    {exp.period}
                                </span>
                                <h3 className="font-serif font-bold text-base leading-tight mb-1">
                                    {exp.company}
                                </h3>
                                <p className="font-sans text-xs opacity-75 truncate">
                                    {exp.role}
                                </p>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Selected Position Reading Monograph */}
            {data.experience[activeIndex] && (
                <section className="p-6 sm:p-8 border-2 border-reader-accent rounded-lg bg-reader-hover/20 space-y-6 animate-in fade-in duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-reader-subtle pb-4 gap-2">
                        <div>
                            <span className="font-mono text-xs opacity-50 uppercase tracking-widest">VOLUME {activeIndex + 1} OF 3</span>
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
                                {data.experience[activeIndex].company}
                            </h2>
                            <p className="font-sans text-sm font-semibold opacity-80 mt-0.5">
                                {data.experience[activeIndex].role}
                            </p>
                        </div>
                        <span className="font-mono text-xs px-3 py-1 border border-reader-subtle rounded bg-reader-bg font-bold opacity-80 self-start">
                            {data.experience[activeIndex].period}
                        </span>
                    </div>

                    {/* Executive Narrative */}
                    <div>
                        <h4 className="font-mono text-[11px] uppercase tracking-wider opacity-60 mb-2">
                            Context & Narrative
                        </h4>
                        <p className="drop-cap text-base sm:text-lg font-serif italic leading-relaxed opacity-95 border-l-2 border-reader-accent pl-4 py-1">
                            {data.experience[activeIndex].narrative}
                        </p>
                    </div>

                    {/* Detailed Highlights & Key Deliverables */}
                    <div className="space-y-3 pt-2">
                        <h4 className="font-mono text-[11px] uppercase tracking-wider opacity-60">
                            Key Deliverables & System Impact
                        </h4>
                        <ul className="space-y-3">
                            {data.experience[activeIndex].bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex gap-3 items-start text-sm sm:text-base font-serif leading-relaxed opacity-90">
                                    <span className="font-mono text-xs font-bold opacity-40 mt-1">[{bIdx + 1}]</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick X-Ray lookup trigger */}
                    <div className="pt-4 border-t border-reader-subtle flex items-center justify-between font-mono text-xs opacity-70">
                        <span>Related Domain Terminology:</span>
                        <div className="flex gap-2">
                            <button onClick={() => openXrayTerm("SQL")} className="underline hover:opacity-100">SQL</button>
                            <button onClick={() => openXrayTerm("Databricks")} className="underline hover:opacity-100">Databricks</button>
                            <button onClick={() => openXrayTerm("Business Analysis")} className="underline hover:opacity-100">BA Workflows</button>
                        </div>
                    </div>
                </section>
            )}

            {/* Chapter Navigation Footer */}
            <section className="pt-6 border-t-2 border-reader-subtle flex justify-between items-center">
                <Link
                    href="/"
                    onClick={triggerPageFlash}
                    className="font-serif text-sm border border-reader-subtle px-4 py-2 rounded hover:bg-reader-hover transition-colors"
                >
                    ← Chapter I: Front Matter
                </Link>
                <Link
                    href="/projects"
                    onClick={triggerPageFlash}
                    className="font-serif font-bold text-sm border-2 border-reader-accent px-5 py-2 rounded hover:bg-reader-hover transition-all"
                >
                    Chapter III: Projects →
                </Link>
            </section>
        </article>
    );
}
