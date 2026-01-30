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

                <section className="relative pl-8 md:pl-12">
                    {/* Vertical Line */}
                    <div className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-[2px] bg-gray-100" />

                    <div className="space-y-24">
                        {data.experience.map((exp, idx) => (
                            <div
                                key={idx}
                                className={`relative group cursor-pointer transition-all duration-300 ${activeIndex === idx ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                                onClick={() => setActiveIndex(idx)}
                            >
                                {/* Timeline Node */}
                                <div className={`absolute -left-[37px] md:-left-[49px] top-1.5 w-6 h-6 rounded-full border-4 border-white shadow-sm transition-all duration-500 ${activeIndex === idx ? 'bg-gray-900 scale-110' : 'bg-gray-200 group-hover:bg-gray-400'}`} />

                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-8 gap-4">
                                    <div>
                                        <h2 className={`text-2xl font-sans font-bold transition-all ${activeIndex === idx ? 'text-gray-900' : 'text-gray-600'}`}>{exp.company}</h2>
                                        <p className="text-gray-500 font-sans mt-1 text-base font-semibold">{exp.role}</p>
                                    </div>
                                    <span className="mono-meta text-gray-400 font-medium px-2 py-0.5 border border-gray-100 rounded bg-white/50 tracking-wider text-[10px] uppercase">
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="prose prose-gray prose-lg max-w-none">
                                    <p className="text-gray-800 leading-relaxed font-sans mb-10 text-[18px] italic border-l-2 border-gray-100 pl-6 py-2">
                                        {exp.narrative}
                                    </p>

                                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <h3 className="label-caps mb-8 text-gray-400">Selected Contributions</h3>
                                        <ul className="space-y-6 list-none p-0">
                                            {exp.bullets.map((bullet, bIdx) => (
                                                <li key={bIdx} className="flex gap-5 items-start text-gray-700 text-[17px] leading-relaxed group/bullet">
                                                    <span className="mt-2.5 w-2 h-2 rounded-full bg-gray-200 shrink-0 group-hover/bullet:bg-gray-900 transition-colors" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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
