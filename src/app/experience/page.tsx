import data from "@/data/portfolio.json";

export default function Experience() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
            <div className="max-w-[720px] mx-auto">
                <header className="mb-16">
                    <h1 className="text-3xl font-sans font-bold text-gray-900 mb-4 tracking-tight">Experience</h1>
                    <p className="text-lg text-gray-500 font-sans leading-relaxed">
                        A track record of delivering technical clarity and operational excellence in complex, regulated environments.
                    </p>
                </header>

                <section className="space-y-24">
                    {data.experience.map((exp, idx) => (
                        <div key={idx} className="relative">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-6">
                                <div>
                                    <h2 className="text-2xl font-sans font-bold text-gray-900">{exp.company}</h2>
                                    <p className="text-gray-500 font-sans mt-1">{exp.role}</p>
                                </div>
                                <span className="text-sm font-sans text-gray-400 font-medium tabular-nums mt-2 md:mt-0">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="prose prose-gray prose-lg max-w-none">
                                <p className="text-gray-800 leading-relaxed font-sans mb-8">
                                    {exp.narrative}
                                </p>

                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Key Contributions</h3>
                                <ul className="space-y-4 list-none p-0">
                                    {exp.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="flex gap-4 items-start text-gray-700 text-[17px] leading-relaxed">
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-200 shrink-0" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
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
