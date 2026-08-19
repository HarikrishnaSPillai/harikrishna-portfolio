"use client";

import data from "@/data/portfolio.json";
import Link from "next/link";
import { useState, useMemo } from "react";
import { useEReader } from "@/context/EReaderContext";

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { triggerPageFlash } = useEReader();

    const categories = useMemo(() => {
        const cats = new Set(data.projects.map((p: any) => p.category));
        return ["All", ...Array.from(cats)].filter(Boolean);
    }, []);

    const filteredProjects = useMemo(() => {
        if (selectedCategory === "All") return data.projects;
        return data.projects.filter((p: any) => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <article className="space-y-10">
            {/* Chapter Header */}
            <header className="border-b-2 border-reader-subtle pb-6 space-y-3">
                <div className="flex justify-between items-baseline font-mono text-xs opacity-60 uppercase tracking-widest">
                    <span>CHAPTER III</span>
                    <span>TECHNICAL CATALOG</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                    Projects & Technical Initiatives
                </h1>
                <p className="text-base sm:text-lg font-serif italic opacity-85">
                    Conceptual systems, architecture designs, and software engineering initiatives built for scalability, correctness, and operational rigor.
                </p>
            </header>

            {/* Category Index Navigation */}
            <section className="space-y-3">
                <h2 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                    Catalog Classification Index
                </h2>
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => {
                        const isSelected = selectedCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1.5 rounded font-mono text-xs uppercase tracking-wider transition-all ${isSelected ? "border-2 border-reader-accent bg-reader-hover font-bold shadow-xs" : "border border-reader-subtle opacity-70 hover:opacity-100 hover:bg-reader-hover/50"}`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Project List Index Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project: any, idx: number) => (
                    <div
                        key={idx}
                        className="p-6 border border-reader-subtle hover:border-reader-accent rounded-lg bg-reader-hover/20 flex flex-col justify-between space-y-4 transition-all group hover:shadow-md"
                    >
                        <div className="space-y-2">
                            <div className="flex items-center justify-between font-mono text-[10px] opacity-60 uppercase tracking-wider">
                                <span>ITEM 0{idx + 1} &bull; {project.category}</span>
                                <span>3 min read</span>
                            </div>
                            <h3 className="font-serif font-bold text-xl leading-tight group-hover:underline">
                                {project.title}
                            </h3>
                            <p className="font-sans text-xs font-semibold opacity-75">
                                {project.oneLine}
                            </p>
                            <p className="font-serif text-sm opacity-85 line-clamp-3 pt-2">
                                {project.approach}
                            </p>
                        </div>

                        {/* Tech tags */}
                        <div className="pt-4 border-t border-reader-subtle flex flex-col gap-3">
                            <div className="flex flex-wrap gap-1">
                                {project.skills?.map((skill: string, sIdx: number) => (
                                    <span
                                        key={sIdx}
                                        className="font-mono text-[10px] px-2 py-0.5 border border-reader-subtle rounded opacity-75"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center pt-1 font-serif text-xs">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    onClick={triggerPageFlash}
                                    className="font-bold border-b-2 border-reader-accent pb-0.5 hover:opacity-75 transition-opacity flex items-center gap-1"
                                >
                                    <span>Read Monograph</span>
                                    <span>→</span>
                                </Link>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-mono text-[11px] opacity-60 hover:opacity-100 flex items-center gap-1"
                                    >
                                        <span>External</span>
                                        <span>↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Chapter Navigation Footer */}
            <section className="pt-6 border-t-2 border-reader-subtle flex justify-between items-center">
                <Link
                    href="/experience"
                    onClick={triggerPageFlash}
                    className="font-serif text-sm border border-reader-subtle px-4 py-2 rounded hover:bg-reader-hover transition-colors"
                >
                    ← Chapter II: Experience
                </Link>
                <Link
                    href="/certifications"
                    onClick={triggerPageFlash}
                    className="font-serif font-bold text-sm border-2 border-reader-accent px-5 py-2 rounded hover:bg-reader-hover transition-all"
                >
                    Chapter IV: Credentials →
                </Link>
            </section>
        </article>
    );
}
