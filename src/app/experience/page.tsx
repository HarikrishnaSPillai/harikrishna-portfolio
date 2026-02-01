"use client";

import data from "@/data/portfolio.json";
import { useState } from "react";

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
            <div className="max-w-[900px] mx-auto">
                <header className="mb-20">
                    <p className="label-caps mb-4">Professional History</p>
                    <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-6 tracking-tight">Experience</h1>
                    <p className="text-lg text-gray-500 font-sans leading-relaxed max-w-[600px]">
                        A track record of technical clarity and operational excellence in complex, regulated environments.
                    </p>
                </header>

                <section className="mb-12">
                    <div className="relative mb-12">
                        {/* Horizontal Timeline Container */}
                        <div className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
                            <div className="flex gap-12 min-w-max relative pt-12">
                                {/* Horizontal Connecting Line */}
                                <div className="absolute left-0 top-[60px] right-0 h-[2px] bg-gray-100" />

                                {data.experience.map((exp, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative w-72 cursor-pointer transition-all duration-300 ${activeIndex === idx ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                                        onClick={() => setActiveIndex(idx)}
                                    >
                                        {/* Timeline Node */}
                                        <div className={`absolute left-0 top-[4px] w-6 h-6 rounded-full border-4 border-white shadow-sm transition-all duration-500 z-10 ${activeIndex === idx ? 'bg-gray-900 scale-110' : 'bg-gray-200 group-hover:bg-gray-400'}`} />

                                        <div className="pt-12">
                                            <span className="mono-meta text-[11px] text-gray-400 uppercase tracking-widest mb-3 block">{exp.period}</span>
                                            <h2 className={`text-xl font-sans font-bold mb-1 transition-all ${activeIndex === idx ? 'text-gray-900' : 'text-gray-600'}`}>{exp.company}</h2>
                                            <p className="text-sm font-sans text-gray-500 font-semibold">{exp.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Detailed Experience Content (Revealed on click) */}
                    <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-12 min-h-[400px] transition-all duration-500 shadow-sm">
                        {data.experience.map((exp, idx) => (
                            <div
                                key={idx}
                                className={`${activeIndex === idx ? 'block animate-in fade-in slide-in-from-top-6 duration-700' : 'hidden'}`}
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-8 gap-4 pb-8 border-b border-gray-50">
                                    <div>
                                        <h3 className="text-3xl font-sans font-bold text-gray-900 mb-1">{exp.company}</h3>
                                        <p className="text-lg text-gray-500 font-sans font-medium">{exp.role}</p>
                                    </div>
                                    <span className="mono-meta text-gray-400 font-medium px-3 py-1 border border-gray-100 rounded-full bg-gray-50 tracking-wider text-[11px] uppercase">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-xl text-gray-800 leading-relaxed font-sans mb-12 italic border-l-4 border-gray-900 pl-8 py-2 max-w-4xl">
                                    {exp.narrative}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                                    {exp.bullets.map((bullet, bIdx) => (
                                        <div key={bIdx} className="flex gap-6 items-start group/bullet">
                                            <span className="mt-3 w-2 h-2 rounded-full bg-gray-200 shrink-0 group-hover/bullet:bg-gray-900 transition-colors" />
                                            <p className="text-gray-700 text-[16px] leading-relaxed font-sans">
                                                {bullet}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="pt-24 mt-24 border-t border-gray-100 flex flex-col md:flex-row md:justify-between items-center">
                    <p className="text-sm text-gray-400 font-sans mb-4 md:mb-0">
                        {data.name} &bull; {data.location}
                    </p>
                    <div className="flex gap-8 text-sm font-sans text-gray-400">
                        <a href={data.socials.linkedin} target="_blank" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                        <a href={`mailto:${data.socials.email}`} className="hover:text-gray-900 transition-colors">Email</a>
                    </div>
                </footer>
            </div>
        </main>
    );
}
