"use client";

import data from "@/data/portfolio.json";
import Link from "next/link";
import { useState, useMemo } from "react";

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = useMemo(() => {
        const cats = new Set(data.projects.map((p: any) => p.category));
        return ["All", ...Array.from(cats)].filter(Boolean);
    }, []);

    const filteredProjects = useMemo(() => {
        if (selectedCategory === "All") return data.projects;
        return data.projects.filter((p: any) => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0 text-gray-900">
            <div className="max-w-[900px] mx-auto">
                <header className="mb-16 text-center md:text-left">
                    <p className="label-caps mb-4">Portfolio</p>
                    <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-4 tracking-tight">Projects & Initiatives</h1>
                    <p className="text-lg text-gray-500 font-sans leading-relaxed">
                        Conceptual systems and technical strategies designed for scalability and correctness.
                    </p>
                </header>

                {/* Category Selection */}
                <nav className="mb-16 border-b border-gray-100 pb-2">
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`mono-meta text-[10px] uppercase tracking-widest pb-2 transition-all relative ${selectedCategory === cat
                                        ? "text-gray-900 font-bold"
                                        : "text-gray-400 hover:text-gray-600"
                                    }`}
                            >
                                {cat}
                                {selectedCategory === cat && (
                                    <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-gray-900" />
                                )}
                            </button>
                        ))}
                    </div>
                </nav>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 transition-all duration-500">
                    {filteredProjects.map((project, idx) => (
                        <div key={idx} className="flex flex-col border-t border-gray-100 pt-8 group animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-xl font-sans font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                                {project.title}
                            </h2>
                            <p className="mono-meta text-gray-400 mb-6 uppercase tracking-wider">
                                {project.oneLine}
                            </p>
                            <p className="text-[16px] text-gray-600 leading-relaxed font-sans mb-8 line-clamp-3">
                                {project.approach}
                            </p>
                            <div className="mt-auto flex gap-6">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="text-sm font-sans font-bold text-gray-900 hover:text-gray-500 transition-colors inline-flex items-center gap-2"
                                >
                                    View details
                                    <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                                {(project as any).link && (
                                    <a
                                        href={(project as any).link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-sans font-bold text-gray-400 hover:text-gray-900 transition-colors inline-flex items-center gap-2"
                                    >
                                        {(project as any).linkText || "External Link"}
                                        <span className="text-[10px]">↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
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
