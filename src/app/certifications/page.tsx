import data from "@/data/portfolio.json";

export default function Certifications() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
            <div className="max-w-[720px] mx-auto">
                <header className="mb-16">
                    <h1 className="text-3xl font-sans font-bold text-gray-900 mb-4 tracking-tight">Certifications</h1>
                    <p className="text-lg text-gray-500 font-sans leading-relaxed">
                        Professional validation in cloud infrastructure, data engineering, and artificial intelligence.
                    </p>
                </header>

                <section className="space-y-16">
                    {data.certifications.map((certGroup, idx) => (
                        <div key={idx}>
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-gray-100 pb-4">
                                {certGroup.category}
                            </h2>
                            <ul className="grid grid-cols-1 gap-4">
                                {certGroup.items.map((cert, cIdx) => (
                                    <li key={cIdx} className="group flex justify-between items-center p-6 bg-white border border-gray-100 rounded-lg hover:border-gray-900 hover:shadow-sm transition-all">
                                        <span className="text-gray-900 font-sans font-medium text-[17px]">{cert}</span>
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

                <section className="mt-24">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-gray-100 pb-4">
                        Education
                    </h2>
                    {data.education.map((edu, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                            <div>
                                <h3 className="text-xl font-sans font-bold text-gray-900">{edu.degree}</h3>
                                <p className="text-gray-600 font-sans mt-1">{edu.institution}</p>
                            </div>
                            <span className="text-sm font-sans text-gray-400 font-medium tabular-nums mt-2 md:mt-0">
                                {edu.year}
                            </span>
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
