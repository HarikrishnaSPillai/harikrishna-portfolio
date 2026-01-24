import data from "@/data/portfolio.json";

export default function Certifications() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
            <div className="max-w-[720px] mx-auto">
                <header className="mb-20">
                    <p className="label-caps mb-4">Verification</p>
                    <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-6 tracking-tight">Credentials</h1>
                    <p className="text-lg text-gray-500 font-sans leading-relaxed max-w-[600px]">
                        Professional validation in cloud infrastructure, data engineering, and artificial intelligence.
                    </p>
                </header>

                <section className="space-y-20">
                    {data.certifications.map((certGroup, idx) => (
                        <div key={idx}>
                            <h2 className="label-caps mb-10 border-b border-gray-100 pb-4">
                                {certGroup.category}
                            </h2>
                            <ul className="grid grid-cols-1 gap-6">
                                {certGroup.items.map((cert, cIdx) => (
                                    <li key={cIdx} className="group flex justify-between items-center p-8 bg-white border border-gray-100 rounded hover:border-gray-900 hover:shadow-sm transition-all">
                                        <span className="text-gray-900 font-sans font-bold text-[18px] tracking-tight">{cert}</span>
                                        <span className="text-gray-300 group-hover:text-gray-900 transition-colors">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                <section className="mt-32">
                    <h2 className="label-caps mb-10 border-b border-gray-100 pb-4">
                        Education
                    </h2>
                    {data.education.map((edu, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-baseline group">
                            <div>
                                <h3 className="text-xl font-sans font-bold text-gray-900 tracking-tight group-hover:text-brand-primary transition-colors">{edu.degree}</h3>
                                <p className="text-gray-500 font-sans mt-1 text-base">{edu.institution}</p>
                            </div>
                            <span className="mono-meta text-gray-400 font-medium mt-3 md:mt-0 px-2 py-0.5 border border-gray-100 rounded bg-white/50">
                                {edu.year}
                            </span>
                        </div>
                    ))}
                </section>

                {/* Footer */}
                <footer className="pt-24 mt-32 border-t border-gray-100 flex flex-col md:flex-row md:justify-between items-center">
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
