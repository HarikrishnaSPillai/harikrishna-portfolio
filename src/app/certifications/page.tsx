"use client";

import data from "@/data/portfolio.json";
import Link from "next/link";
import { useEReader } from "@/context/EReaderContext";

function CredentialSeal({ type }: { type: string }) {
    switch (type) {
        case "microsoft":
            return (
                <div className="w-8 h-8 rounded border border-reader-subtle flex items-center justify-center font-mono text-[10px] font-bold opacity-60">
                    MS
                </div>
            );
        case "databricks":
            return (
                <div className="w-8 h-8 rounded border border-reader-subtle flex items-center justify-center font-mono text-[10px] font-bold opacity-60">
                    DB
                </div>
            );
        case "google":
            return (
                <div className="w-8 h-8 rounded border border-reader-subtle flex items-center justify-center font-mono text-[10px] font-bold opacity-60">
                    GCP
                </div>
            );
        default:
            return (
                <div className="w-8 h-8 rounded border border-reader-subtle flex items-center justify-center font-mono text-[10px] font-bold opacity-60">
                    CERT
                </div>
            );
    }
}

export default function Certifications() {
    const { triggerPageFlash } = useEReader();

    return (
        <article className="space-y-10">
            {/* Chapter Header */}
            <header className="border-b-2 border-reader-subtle pb-6 space-y-3">
                <div className="flex justify-between items-baseline font-mono text-xs opacity-60 uppercase tracking-widest">
                    <span>CHAPTER IV</span>
                    <span>OFFICIAL REGISTRY</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                    Credentials & Verification
                </h1>
                <p className="text-base sm:text-lg font-serif italic opacity-85">
                    Validated professional credentials in cloud infrastructure, data engineering platforms, and artificial intelligence.
                </p>
            </header>

            {/* Certifications Groups */}
            <section className="space-y-8">
                {data.certifications.map((certGroup, idx) => (
                    <div key={idx} className="space-y-4">
                        <h2 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                            Registry Section IV.{idx + 1}: {certGroup.category}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {certGroup.items.map((cert: any, cIdx: number) => (
                                <div
                                    key={cIdx}
                                    className="p-5 border border-reader-subtle rounded-lg bg-reader-hover/20 hover:border-reader-accent transition-all flex flex-col justify-between space-y-3"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <span className="font-mono text-[10px] uppercase tracking-wider opacity-60 block mb-1">
                                                {cert.issuer}
                                            </span>
                                            <h3 className="font-serif font-bold text-base leading-snug">
                                                {cert.name}
                                            </h3>
                                        </div>
                                        <CredentialSeal type={cert.logo} />
                                    </div>

                                    <div className="pt-3 border-t border-reader-subtle font-mono text-[10px] opacity-70 space-y-1">
                                        {cert.credentialId && (
                                            <div>
                                                <span className="opacity-50">REGISTRY ID:</span> {cert.credentialId}
                                            </div>
                                        )}
                                        <div>
                                            <span className="opacity-50">ISSUED:</span> {cert.issuedDate}
                                            {cert.expiryDate && (
                                                <span> &bull; <span className="opacity-50">EXPIRES:</span> {cert.expiryDate}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Academic Education Section */}
            <section className="space-y-4 pt-4">
                <h2 className="font-mono text-xs uppercase tracking-widest opacity-60 border-b border-reader-subtle pb-1">
                    Academic Degree Registry
                </h2>

                <div className="space-y-3">
                    {data.education.map((edu, idx) => (
                        <div
                            key={idx}
                            className="p-5 border border-reader-subtle rounded-lg bg-reader-hover/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                        >
                            <div>
                                <h3 className="font-serif font-bold text-lg">{edu.degree}</h3>
                                <p className="font-sans text-xs opacity-75">{edu.institution}</p>
                            </div>
                            <span className="font-mono text-xs px-3 py-1 border border-reader-subtle rounded bg-reader-bg font-bold opacity-80 self-start sm:self-auto">
                                CLASS OF {edu.year}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Chapter Navigation Footer */}
            <section className="pt-6 border-t-2 border-reader-subtle flex justify-between items-center">
                <Link
                    href="/projects"
                    onClick={triggerPageFlash}
                    className="font-serif text-sm border border-reader-subtle px-4 py-2 rounded hover:bg-reader-hover transition-colors"
                >
                    ← Chapter III: Projects
                </Link>
                <Link
                    href="/about"
                    onClick={triggerPageFlash}
                    className="font-serif font-bold text-sm border-2 border-reader-accent px-5 py-2 rounded hover:bg-reader-hover transition-all"
                >
                    Chapter V: Philosophy →
                </Link>
            </section>
        </article>
    );
}
