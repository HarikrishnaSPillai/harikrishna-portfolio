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
                    <h1 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-500 font-sans italic border-l-2 border-gray-100 pl-6 py-1">
                        {project.oneLine}
                    </p>
                </header>

                <article className="space-y-16">
                    <section>
                        <h2 className="label-caps mb-6 text-gray-400">The Problem</h2>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            {project.problem}
                        </p>
                    </section>

                    <section>
                        <h2 className="label-caps mb-6 text-gray-400">The Approach</h2>
                        <p className="text-lg text-gray-700 font-serif leading-relaxed">
                            {project.approach}
                        </p>
                    </section>

                    <section>
                        <h2 className="label-caps mb-6 text-gray-400">Technical Stack</h2>
                        <div className="flex flex-wrap gap-4">
                            {(project as any).skills?.map((skill: string, sIdx: number) => (
                                <span key={sIdx} className="mono-meta text-[11px] px-3 py-1 bg-white border border-gray-100 rounded text-gray-500 uppercase tracking-widest">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-100">
                        <section>
                            <h2 className="label-caps mb-6 text-gray-400">Challenges & Constraints</h2>
                            <p className="text-base text-gray-600 font-serif leading-relaxed">
                                {project.constraints}
                            </p>
                        </section>

                        <section>
                            <h2 className="label-caps mb-6 text-gray-400">Outcome & Learnings</h2>
                            <p className="text-base text-gray-600 font-serif leading-relaxed">
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
