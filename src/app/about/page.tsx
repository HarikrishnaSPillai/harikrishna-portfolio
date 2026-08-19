"use client";

import data from "@/data/portfolio.json";
import Link from "next/link";
import { useEReader } from "@/context/EReaderContext";

export default function About() {
    const { triggerPageFlash } = useEReader();

    return (
        <article className="space-y-10">
            {/* Chapter Header */}
            <header className="border-b-2 border-reader-subtle pb-6 space-y-3">
                <div className="flex justify-between items-baseline font-mono text-xs opacity-60 uppercase tracking-widest">
                    <span>CHAPTER V</span>
                    <span>AUTHOR'S PHILOSOPHY</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                    Philosophy & Background
                </h1>
                <p className="text-base sm:text-lg font-serif italic opacity-85">
                    Systems thinking, professional ethos, and the relentless pursuit of technical correctness.
                </p>
            </header>

            {/* Core Philosophy Section */}
            <section className="space-y-4">
                <h2 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                    I. Guiding Philosophy
                </h2>
                <div className="p-6 border-2 border-reader-accent rounded-lg bg-reader-hover/20">
                    <p className="drop-cap text-lg sm:text-xl font-serif italic leading-relaxed opacity-95">
                        {data.about.philosophy}
                    </p>
                </div>
            </section>

            {/* Methodology & Focus */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 border border-reader-subtle rounded-lg bg-reader-hover/30 space-y-3">
                    <h3 className="font-mono text-xs uppercase tracking-wider font-bold opacity-80 border-b border-reader-subtle pb-1">
                        II. Operational Methodology
                    </h3>
                    <p className="font-serif text-base opacity-90 leading-relaxed">
                        {data.about.howIWork}
                    </p>
                </div>

                <div className="p-5 border border-reader-subtle rounded-lg bg-reader-hover/30 space-y-3">
                    <h3 className="font-mono text-xs uppercase tracking-wider font-bold opacity-80 border-b border-reader-subtle pb-1">
                        III. Enterprise Focus
                    </h3>
                    <p className="font-serif text-base opacity-90 leading-relaxed">
                        Particularly interested in the operationalization of AI within the enterprise. It's not just about the model—it's about data integrity, regulatory boundaries, and the human workflows surrounding it.
                    </p>
                </div>
            </section>

            {/* Location & Contact Notes */}
            <section className="p-5 border border-reader-subtle rounded-lg space-y-3">
                <h2 className="font-mono text-xs uppercase tracking-widest opacity-60">
                    IV. Location & Correspondence
                </h2>
                <p className="font-serif text-sm opacity-85">
                    Currently based in <span className="font-bold">{data.location}</span>. Working at the intersection of enterprise business strategy and technical systems engineering.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs">
                    <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-75">
                        LinkedIn Profile ↗
                    </a>
                    <a href={`mailto:${data.socials.email}`} className="underline hover:opacity-75">
                        Direct Email Correspondence ✉
                    </a>
                </div>
            </section>

            {/* Chapter Navigation Footer */}
            <section className="pt-6 border-t-2 border-reader-subtle flex justify-between items-center">
                <Link
                    href="/certifications"
                    onClick={triggerPageFlash}
                    className="font-serif text-sm border border-reader-subtle px-4 py-2 rounded hover:bg-reader-hover transition-colors"
                >
                    ← Chapter IV: Credentials
                </Link>
                <Link
                    href="/resume"
                    onClick={triggerPageFlash}
                    className="font-serif font-bold text-sm border-2 border-reader-accent px-5 py-2 rounded hover:bg-reader-hover transition-all"
                >
                    Chapter VI: Resume →
                </Link>
            </section>
        </article>
    );
}
