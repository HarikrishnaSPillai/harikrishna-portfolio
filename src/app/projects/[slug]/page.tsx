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
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0 bg-[#f9f7f2]">
            <div className="max-w-[900px] mx-auto">
                <nav className="mb-12">
                    <Link
                        href="/projects"
                        className="mono-meta text-xs text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2 uppercase tracking-widest"
                    >
                        <span className="text-lg">←</span> Back to Projects
                    </Link>
                </nav>

                <header className="mb-16">
                    <p className="label-caps mb-4">Case Study</p>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-gray-500 font-sans italic border-l-2 border-gray-100 pl-6 py-1">
                                {project.oneLine}
                            </p>
                        </div>
                        {(project as any).link && (
                            <a
                                href={(project as any).link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded font-sans text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm whitespace-nowrap"
                            >
                                {(project as any).linkText || "View Project"}
                                <span className="ml-2 text-xs">↗</span>
                            </a>
                        )}
                    </div>
                </header>

                <article className="space-y-20">
                    {/* Project Image/Diagram if exists */}
                    {(project as any).image && (
                        <section className="bg-white p-4 md:p-8 rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                            <img
                                src={(project as any).image}
                                alt={project.title}
                                className="w-full h-auto rounded-lg"
                            />
                            <p className="mt-6 text-center text-sm text-gray-400 font-sans tracking-wide uppercase">
                                System Architecture & Data Flow Diagram
                            </p>
                        </section>
                    )}

                    <section>
                        <h2 className="label-caps mb-8 text-gray-400 border-b border-gray-100 pb-4">The Problem</h2>
                        <p className="text-xl text-gray-700 font-serif leading-relaxed md:text-2xl">
                            {project.problem}
                        </p>
                    </section>

                    {/* Detailed Sections if they exist */}
                    {(project as any).sections ? (
                        <div className="space-y-20">
                            {(project as any).sections.map((section: any, sIdx: number) => (
                                <section key={sIdx}>
                                    <h3 className="text-2xl font-sans font-bold text-gray-900 mb-6 tracking-tight">
                                        {section.title}
                                    </h3>
                                    <div className="prose prose-gray prose-lg max-w-none text-gray-700 font-sans">
                                        <p className="leading-relaxed mb-6">
                                            {section.content}
                                        </p>
                                        {section.bullets && (
                                            <ul className="space-y-3 list-none p-0">
                                                {section.bullets.map((bullet: string, bIdx: number) => (
                                                    <li key={bIdx} className="flex gap-4 items-start text-gray-600 text-base">
                                                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-200 shrink-0" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </section>
                            ))}
                        </div>
                    ) : (
                        <section>
                            <h2 className="label-caps mb-8 text-gray-400 border-b border-gray-100 pb-4">The Approach</h2>
                            <p className="text-xl text-gray-700 font-serif leading-relaxed">
                                {project.approach}
                            </p>
                        </section>
                    )}

                    <section className="pt-8 border-t border-gray-100">
                        <h2 className="label-caps mb-8 text-gray-400">Technical Stack</h2>
                        <div className="flex flex-wrap gap-3">
                            {(project as any).skills?.map((skill: string, sIdx: number) => (
                                <span key={sIdx} className="mono-meta text-[11px] px-4 py-1.5 bg-white border border-gray-200 rounded-full text-gray-600 uppercase tracking-widest hover:border-gray-900 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-gray-100">
                        <section>
                            <h2 className="label-caps mb-6 text-gray-400">Challenges & Constraints</h2>
                            <p className="text-lg text-gray-600 font-serif leading-relaxed">
                                {project.constraints}
                            </p>
                        </section>

                        <section>
                            <h2 className="label-caps mb-6 text-gray-400">Outcome & Learnings</h2>
                            <p className="text-lg text-gray-600 font-serif leading-relaxed">
                                {project.outcome}
                            </p>
                        </section>
                    </div>
                </article>

                {/* Footer */}
                <footer className="pt-24 mt-24 border-t border-gray-100 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
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

export async function generateStaticParams() {
    return data.projects.map((project) => ({
        slug: project.slug,
    }));
}
