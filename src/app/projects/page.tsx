import data from "@/data/portfolio.json";

export default function Projects() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
            <div className="max-w-[720px] mx-auto">
                <header className="mb-16">
                    <h1 className="text-3xl font-sans font-bold text-gray-900 mb-4 tracking-tight">Projects</h1>
                    <p className="text-lg text-gray-500 font-sans leading-relaxed">
                        Conceptual and internal-style initiatives demonstrating system design, problem-solving, and data strategy.
                    </p>
                </header>

                <section className="space-y-20">
                    {data.projects.map((project, idx) => (
                        <div key={idx} className="group border-l-2 border-gray-50 pl-8 hover:border-gray-900 transition-colors py-4">
                            <h2 className="text-2xl font-sans font-bold text-gray-900 mb-6 group-hover:text-gray-900 transition-colors">
                                {project.title}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Problem</h3>
                                    <p className="text-[17px] text-gray-700 leading-relaxed font-sans">
                                        {project.problem}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Approach</h3>
                                    <p className="text-[17px] text-gray-700 leading-relaxed font-sans">
                                        {project.approach}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Constraints</h3>
                                    <p className="text-[17px] text-gray-600 leading-relaxed font-sans italic">
                                        {project.constraints}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Outcome</h3>
                                    <p className="text-[17px] text-gray-900 leading-relaxed font-sans font-medium">
                                        {project.outcome}
                                    </p>
                                </div>
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
