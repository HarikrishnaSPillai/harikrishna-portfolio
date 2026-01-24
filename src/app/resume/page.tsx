import data from "@/data/portfolio.json";

export default function Resume() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
            <div className="max-w-[900px] mx-auto">
                <header className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <p className="label-caps mb-4">Documentation</p>
                        <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-4 tracking-tight">Resume</h1>
                        <p className="text-lg text-gray-500 font-sans leading-relaxed">
                            Updated as of <span className="mono-meta text-gray-900 font-bold px-1.5 py-0.5 bg-gray-100 rounded">JANUARY 2026</span>
                        </p>
                    </div>
                    <a
                        href="/resume.pdf"
                        download="Harikrishna_Pillai_Resume.pdf"
                        className="inline-flex items-center justify-center px-10 py-3 bg-gray-900 text-white rounded font-sans text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm"
                    >
                        Download PDF
                    </a>
                </header>

                <section className="bg-white rounded p-8 md:p-12 border border-gray-100 shadow-sm relative group overflow-hidden">
                    <div className="max-w-full mx-auto font-sans text-gray-900">
                        {/* Header Section */}
                        <div className="border-b-2 border-gray-900 pb-8 mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter mb-2 uppercase">{data.name}</h2>
                            <p className="text-gray-500 font-medium mb-4">{data.role} &bull; {data.specialization}</p>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 mono-meta text-[10px] text-gray-400 uppercase tracking-widest">
                                <span>{data.location}</span>
                                <span>{data.socials.linkedin.replace('https://', '')}</span>
                                <span>{data.socials.email}</span>
                            </div>
                        </div>

                        {/* Summary Section */}
                        <div className="mb-12">
                            <h3 className="label-caps text-gray-400 mb-4 border-b border-gray-100 pb-2">Professional Summary</h3>
                            <p className="text-[15px] leading-relaxed text-gray-700 font-serif">
                                {data.summary}
                            </p>
                        </div>

                        {/* Experience Section */}
                        <div className="mb-12">
                            <h3 className="label-caps text-gray-400 mb-6 border-b border-gray-100 pb-2">Experience</h3>
                            <div className="space-y-10">
                                {data.experience.map((exp, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h4 className="font-bold text-gray-900">{exp.company}</h4>
                                            <span className="mono-meta text-[10px] text-gray-400 uppercase">{exp.period}</span>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-600 mb-3">{exp.role}</p>
                                        <ul className="space-y-2">
                                            {exp.bullets.map((bullet, bIdx) => (
                                                <li key={bIdx} className="text-sm text-gray-600 flex gap-3 leading-relaxed">
                                                    <span className="text-gray-300 flex-shrink-0 mt-1">•</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="mb-12">
                            <h3 className="label-caps text-gray-400 mb-6 border-b border-gray-100 pb-2">Core Competencies</h3>
                            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                                {Object.entries(data.skills).map(([category, items], idx) => (
                                    <div key={idx}>
                                        <h4 className="mono-meta text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-3">{category}</h4>
                                        <p className="text-sm text-gray-700 font-serif">
                                            {items.join(', ')}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education & Certs - 2 column */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <section>
                                <h3 className="label-caps text-gray-400 mb-6 border-b border-gray-100 pb-2">Education</h3>
                                {data.education.map((edu, idx) => (
                                    <div key={idx}>
                                        <h4 className="font-bold text-sm text-gray-900">{edu.degree}</h4>
                                        <p className="text-xs text-gray-500 mt-1">{edu.institution}, {edu.year}</p>
                                    </div>
                                ))}
                            </section>

                            <section>
                                <h3 className="label-caps text-gray-400 mb-6 border-b border-gray-100 pb-2">Active Credentials</h3>
                                <div className="space-y-4">
                                    {data.certifications.flatMap(g => g.items).slice(0, 4).map((cert, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-bold text-[13px] text-gray-900 leading-tight">{cert.name}</h4>
                                            <div className="flex gap-2 mono-meta text-[9px] text-gray-400 uppercase mt-1">
                                                <span>{cert.issuer}</span>
                                                <span>&bull;</span>
                                                <span>ID: {cert.credentialId.split('-')[0]}...</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

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
