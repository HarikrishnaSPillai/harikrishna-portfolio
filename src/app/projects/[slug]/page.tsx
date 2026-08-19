import data from "@/data/portfolio.json";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetail({ params }: PageProps) {
    const { slug } = await params;
    const project = data.projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="space-y-10">
            {/* Top Chapter Back Navigation */}
            <nav>
                <Link
                    href="/projects"
                    className="font-mono text-xs border border-reader-subtle px-3 py-1.5 rounded hover:bg-reader-hover transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider"
                >
                    <span>←</span> Back to Chapter III Catalog
                </Link>
            </nav>

            {/* Monograph Title Header */}
            <header className="border-b-2 border-reader-subtle pb-6 space-y-3">
                <div className="flex justify-between items-baseline font-mono text-xs opacity-60 uppercase tracking-widest">
                    <span>CHAPTER III MONOGRAPH</span>
                    <span>TECHNICAL SPECIFICATION</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight leading-tight">
                    {project.title}
                </h1>
                <p className="text-lg font-serif italic opacity-85 border-l-2 border-reader-accent pl-4 py-1">
                    {project.oneLine}
                </p>
                {(project as any).link && (
                    <div className="pt-2">
                        <a
                            href={(project as any).link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-reader-accent rounded font-serif font-bold text-xs hover:bg-reader-hover transition-all"
                        >
                            <span>{(project as any).linkText || "View Project Live"}</span>
                            <span>↗</span>
                        </a>
                    </div>
                )}
            </header>

            {/* Project Architecture Diagram / Image */}
            {(project as any).image && (
                <section className="p-4 border-2 border-reader-accent rounded-lg bg-reader-hover/40 text-center space-y-3">
                    <img
                        src={(project as any).image}
                        alt={project.title}
                        className="w-full h-auto rounded border border-reader-subtle shadow-sm"
                    />
                    <p className="font-mono text-xs uppercase tracking-wider opacity-60">
                        System Architecture & Operational Data Flow Monograph
                    </p>
                </section>
            )}

            {/* Problem Section */}
            <section className="space-y-3">
                <h2 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                    I. Problem Statement & Operational Challenge
                </h2>
                <p className="drop-cap text-base sm:text-lg font-serif leading-relaxed opacity-95">
                    {project.problem}
                </p>
            </section>

            {/* Detailed Approach / Monograph Sections */}
            {(project as any).sections ? (
                <section className="space-y-8">
                    <h2 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                        II. Strategic Solution & Architecture Breakdown
                    </h2>
                    {(project as any).sections.map((section: any, sIdx: number) => (
                        <div key={sIdx} className="p-5 border border-reader-subtle rounded-lg bg-reader-hover/20 space-y-3">
                            <h3 className="font-serif font-bold text-xl">
                                {sIdx + 1}. {section.title}
                            </h3>
                            <p className="font-serif text-base opacity-90 leading-relaxed">
                                {section.content}
                            </p>
                            {section.bullets && (
                                <ul className="space-y-2 pt-2">
                                    {section.bullets.map((bullet: string, bIdx: number) => (
                                        <li key={bIdx} className="flex gap-3 items-start font-serif text-sm opacity-85">
                                            <span className="font-mono text-xs font-bold opacity-50 mt-0.5">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </section>
            ) : (
                <section className="space-y-3">
                    <h2 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                        II. Implementation Strategy
                    </h2>
                    <p className="font-serif text-base sm:text-lg leading-relaxed opacity-95">
                        {project.approach}
                    </p>
                </section>
            )}

            {/* Technical Stack Pills */}
            <section className="space-y-3 pt-2">
                <h2 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                    III. Technical Stack & Tooling
                </h2>
                <div className="flex flex-wrap gap-2">
                    {(project as any).skills?.map((skill: string, sIdx: number) => (
                        <span
                            key={sIdx}
                            className="font-mono text-xs px-3 py-1 border border-reader-subtle rounded bg-reader-hover font-bold opacity-80"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Constraints & Outcomes */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-5 border border-reader-subtle rounded-lg bg-reader-hover/30 space-y-2">
                    <h3 className="font-mono text-xs uppercase tracking-wider font-bold opacity-80">
                        IV. Constraints & Edge Cases
                    </h3>
                    <p className="font-serif text-sm opacity-85 leading-relaxed">
                        {project.constraints}
                    </p>
                </div>

                <div className="p-5 border border-reader-subtle rounded-lg bg-reader-hover/30 space-y-2">
                    <h3 className="font-mono text-xs uppercase tracking-wider font-bold opacity-80">
                        V. Operational Outcome & Learnings
                    </h3>
                    <p className="font-serif text-sm opacity-85 leading-relaxed">
                        {project.outcome}
                    </p>
                </div>
            </section>

            {/* Bottom Chapter Link */}
            <div className="pt-6 border-t-2 border-reader-subtle flex justify-between items-center">
                <Link
                    href="/projects"
                    className="font-serif text-sm border border-reader-subtle px-4 py-2 rounded hover:bg-reader-hover transition-colors"
                >
                    ← Back to Chapter III Catalog
                </Link>
            </div>
        </article>
    );
}

export async function generateStaticParams() {
    return data.projects.map((project) => ({
        slug: project.slug,
    }));
}
