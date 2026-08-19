"use client";

import Link from "next/link";
import data from "@/data/portfolio.json";
import { useEReader } from "@/context/EReaderContext";

export default function Home() {
  const { openXrayTerm, triggerPageFlash } = useEReader();

  return (
    <article className="space-y-12">
      {/* Front Matter Header */}
      <header className="border-b-2 border-reader-subtle pb-8 space-y-4">
        <div className="flex justify-between items-baseline font-mono text-xs opacity-60 uppercase tracking-widest">
          <span>CHAPTER I</span>
          <span>BOOK VOLUME &bull; 2026 EDITION</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight">
          {data.name}
        </h1>

        <p className="text-xl sm:text-2xl font-serif italic opacity-85 leading-relaxed pt-2">
          {data.positioning}
        </p>

        {/* Tech Stack Pills / X-Ray Dictionary Triggers */}
        <div className="pt-4 flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="opacity-50">COMPETENCIES:</span>
          {["AZURE", "DATABRICKS", "SWIFTUI", "SQL", "AI READINESS"].map((tech) => (
            <button
              key={tech}
              onClick={() => openXrayTerm(tech === "AI READINESS" ? "AI Readiness" : tech === "AZURE" ? "Azure" : tech === "DATABRICKS" ? "Databricks" : tech === "SWIFTUI" ? "SwiftUI" : "SQL")}
              className="px-2.5 py-1 rounded border border-reader-subtle hover:bg-reader-hover transition-colors font-bold uppercase tracking-wider text-[11px] flex items-center gap-1 group"
              title="Click for X-Ray Dictionary Lookup"
            >
              <span>{tech}</span>
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">🔍</span>
            </button>
          ))}
        </div>
      </header>

      {/* Book Preface / Summary Section */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
          Executive Preface & Scope
        </h2>

        <p className="drop-cap text-lg sm:text-xl font-serif leading-relaxed opacity-95">
          {data.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-5 border border-reader-subtle rounded-lg bg-reader-hover/30 space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider font-bold opacity-80">
              01. Enterprise Systems Correctness
            </h3>
            <p className="text-sm font-serif opacity-85 leading-relaxed">
              Experience at CIBC and BSC Corp bridging technical data silos with business workflows, ensuring reconciliation frameworks meet strict regulatory compliance standards.
            </p>
          </div>

          <div className="p-5 border border-reader-subtle rounded-lg bg-reader-hover/30 space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider font-bold opacity-80">
              02. AI Platform Operations
            </h3>
            <p className="text-sm font-serif opacity-85 leading-relaxed">
              Preparing enterprise data platforms for AI/ML integration with auditable schemas, data lineage, and reliable operational governance.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter Index / Core Pillars */}
      <section className="pt-6 space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
          Core Pillars of Practice
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 border border-reader-subtle rounded space-y-2">
            <span className="font-mono text-xs font-bold opacity-50 block">PILLAR A</span>
            <h4 className="font-serif font-bold text-base">Platform Strategy</h4>
            <p className="font-sans text-xs opacity-75 leading-relaxed">
              Translating business workflows into scalable data & AI solutions.
            </p>
          </div>

          <div className="p-4 border border-reader-subtle rounded space-y-2">
            <span className="font-mono text-xs font-bold opacity-50 block">PILLAR B</span>
            <h4 className="font-serif font-bold text-base">Data Governance</h4>
            <p className="font-sans text-xs opacity-75 leading-relaxed">
              Ensuring compliance and systems correctness in regulated banking spaces.
            </p>
          </div>

          <div className="p-4 border border-reader-subtle rounded space-y-2">
            <span className="font-mono text-xs font-bold opacity-50 block">PILLAR C</span>
            <h4 className="font-serif font-bold text-base">Operational Delivery</h4>
            <p className="font-sans text-xs opacity-75 leading-relaxed">
              Navigating real-world constraints to deliver enterprise clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter Action Navigation */}
      <section className="pt-8 border-t-2 border-reader-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs opacity-60">
          <span>Turn page to proceed to Chapter II</span>
        </div>

        <div className="flex gap-4">
          <Link
            href="/experience"
            onClick={triggerPageFlash}
            className="px-6 py-2.5 border-2 border-reader-accent rounded font-serif font-bold text-sm hover:bg-reader-hover transition-all flex items-center gap-2 shadow-xs"
          >
            <span>Read Experience (Ch. II)</span>
            <span>→</span>
          </Link>

          <Link
            href="/projects"
            onClick={triggerPageFlash}
            className="px-6 py-2.5 border border-reader-subtle rounded font-serif text-sm hover:bg-reader-hover transition-colors"
          >
            Explore Projects
          </Link>
        </div>
      </section>
    </article>
  );
}
