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

                <section className="bg-white rounded border border-gray-100 overflow-hidden aspect-[1/1.4] relative group shadow-sm">
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-full border-none"
                        title="Harikrishna Pillai Resume"
                    />
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
