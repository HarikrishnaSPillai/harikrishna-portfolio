"use client";

import data from "@/data/portfolio.json";
import { useState } from "react";
import Link from "next/link";
import { useEReader } from "@/context/EReaderContext";

export default function Resume() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const { triggerPageFlash } = useEReader();

    return (
        <article className="space-y-10">
            {/* Chapter Header & PDF Export Action */}
            <header className="border-b-2 border-reader-subtle pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs opacity-60 uppercase tracking-widest">
                        <span>CHAPTER VI</span>
                        <span>&bull;</span>
                        <span>OFFICIAL CV MONOGRAPH</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                        Curriculum Vitae
                    </h1>
                    <p className="text-sm font-mono opacity-70">
                        DOCUMENT SPECIFICATION &bull; UPDATED <span className="font-bold border border-reader-subtle px-1.5 py-0.5 rounded">JANUARY 2026</span>
                    </p>
                </div>

                <a
                    href="/resume.pdf"
                    download="Harikrishna_Pillai_Resume.pdf"
                    className="px-6 py-2.5 border-2 border-reader-accent rounded font-serif font-bold text-sm hover:bg-reader-hover transition-all flex items-center justify-center gap-2 shadow-xs whitespace-nowrap"
                >
                    <span>Export PDF Document</span>
                    <span>📥</span>
                </a>
            </header>

            {/* Resume Document Box */}
            <section className="p-6 sm:p-10 border-2 border-reader-accent rounded-lg bg-reader-hover/10 space-y-8">
                {/* Document Header */}
                <div className="border-b-2 border-reader-accent pb-6 space-y-2">
                    <h2 className="text-3xl font-serif font-bold tracking-tight uppercase">
                        {data.name}
                    </h2>
                    <p className="font-sans font-semibold text-sm opacity-80">
                        {data.role} &bull; {data.specialization}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs opacity-70">
                        <span>{data.location}</span>
                        <span>&bull;</span>
                        <span>{data.socials.linkedin.replace('https://', '')}</span>
                        <span>&bull;</span>
                        <span>{data.socials.email}</span>
                    </div>
                </div>

                {/* Professional Summary */}
                <div className="space-y-2">
                    <h3 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                        Executive Summary
                    </h3>
                    <p className="font-serif text-base leading-relaxed opacity-90">
                        {data.summary}
                    </p>
                </div>

                {/* Interactive Experience Timeline */}
                <div className="space-y-4">
                    <h3 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                        Professional Work Experience
                    </h3>

                    {/* Timeline Position Buttons */}
                    <div className="flex overflow-x-auto gap-2 pb-2">
                        {data.experience.map((exp, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`px-4 py-2 rounded font-mono text-xs whitespace-nowrap transition-all ${activeIndex === idx ? "border-2 border-reader-accent bg-reader-hover font-bold shadow-xs" : "border border-reader-subtle opacity-70 hover:opacity-100"}`}
                            >
                                {exp.company}
                            </button>
                        ))}
                    </div>

                    {/* Active Position Details */}
                    {data.experience[activeIndex] && (
                        <div className="p-5 border border-reader-subtle rounded-lg bg-reader-bg space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-reader-subtle pb-3">
                                <div>
                                    <h4 className="font-serif font-bold text-xl">
                                        {data.experience[activeIndex].company}
                                    </h4>
                                    <p className="font-sans text-xs font-semibold opacity-75">
                                        {data.experience[activeIndex].role}
                                    </p>
                                </div>
                                <span className="font-mono text-xs opacity-60">
                                    {data.experience[activeIndex].period}
                                </span>
                            </div>

                            <p className="font-serif text-sm italic opacity-85 border-l-2 border-reader-accent pl-3 py-0.5">
                                {data.experience[activeIndex].narrative}
                            </p>

                            <ul className="space-y-2 pt-1">
                                {data.experience[activeIndex].bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex gap-3 items-start font-serif text-sm opacity-90">
                                        <span className="font-mono text-xs font-bold opacity-40 mt-0.5">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Core Competencies Grid */}
                <div className="space-y-3">
                    <h3 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                        Technical Skills & Competencies
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(data.skills).map(([category, items], idx) => (
                            <div key={idx} className="p-3 border border-reader-subtle rounded bg-reader-bg space-y-1">
                                <h4 className="font-mono text-[10px] uppercase tracking-wider font-bold opacity-60">
                                    {category}
                                </h4>
                                <p className="font-serif text-sm opacity-90">
                                    {items.join(', ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education & Certifications Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-reader-subtle">
                    <div className="space-y-2">
                        <h3 className="font-mono text-xs uppercase tracking-widest opacity-60">
                            Academic Education
                        </h3>
                        {data.education.map((edu, idx) => (
                            <div key={idx} className="font-serif">
                                <p className="font-bold text-sm">{edu.degree}</p>
                                <p className="text-xs opacity-75 font-sans">{edu.institution}, {edu.year}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-mono text-xs uppercase tracking-widest opacity-60">
                            Active Credentials
                        </h3>
                        <div className="space-y-1">
                            {data.certifications.flatMap(g => g.items).slice(0, 3).map((cert, idx) => (
                                <div key={idx} className="font-serif text-xs">
                                    <span className="font-bold">{cert.name}</span>
                                    <span className="font-mono text-[10px] opacity-60 block">{cert.issuer}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter Navigation Footer */}
            <section className="pt-6 border-t-2 border-reader-subtle flex justify-between items-center">
                <Link
                    href="/about"
                    onClick={triggerPageFlash}
                    className="font-serif text-sm border border-reader-subtle px-4 py-2 rounded hover:bg-reader-hover transition-colors"
                >
                    ← Chapter V: Philosophy
                </Link>
                <Link
                    href="/"
                    onClick={triggerPageFlash}
                    className="font-serif font-bold text-sm border-2 border-reader-accent px-5 py-2 rounded hover:bg-reader-hover transition-all"
                >
                    Return to Chapter I ↺
                </Link>
            </section>
        </article>
    );
}
