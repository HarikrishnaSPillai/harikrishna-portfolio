import data from "@/data/portfolio.json";
import Link from "next/link";

export default function Projects() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
            <div className="max-w-[720px] mx-auto">
                <header className="mb-16 text-center md:text-left">
                    <p className="label-caps mb-4">Portfolio</p>
                    <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-4 tracking-tight">Projects & Initiatives</h1>
                    <p className="text-lg text-gray-500 font-sans leading-relaxed">
                        Conceptual systems and technical strategies designed for scalability and correctness.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {data.projects.map((project, idx) => (
                        <div key={idx} className="flex flex-col border-t border-gray-100 pt-8 group">
                            <h2 className="text-xl font-sans font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                                {project.title}
                            </h2>
                            <p className="mono-meta text-gray-400 mb-6 uppercase tracking-wider">
                                {project.oneLine}
                            </p>
                            <p className="text-[16px] text-gray-600 leading-relaxed font-sans mb-8 line-clamp-3">
                                {project.approach}
                            </p>
                            <div className="mt-auto">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="text-sm font-sans font-bold text-gray-900 hover:text-gray-500 transition-colors inline-flex items-center gap-2"
                                >
                                    View details
                                    <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                                </Link>
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
