import data from "@/data/portfolio.json";

export default function About() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
            <div className="max-w-[720px] mx-auto">
                <header className="mb-16">
                    <h1 className="text-3xl font-sans font-bold text-gray-900 mb-4 tracking-tight">About</h1>
                    <p className="text-lg text-gray-500 font-sans leading-relaxed">
                        Professional philosophy, systems thinking, and the pursuit of technical correctness.
                    </p>
                </header>

                <section className="prose prose-gray prose-lg max-w-none">
                    <div className="space-y-12 text-gray-700 leading-relaxed font-sans">
                        <div>
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Philosophy</h2>
                            <p className="text-xl font-serif text-gray-800 leading-relaxed">
                                {data.about.philosophy}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">How I Work</h2>
                            <p className="text-lg">
                                {data.about.howIWork}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Focus</h2>
                            <p className="text-lg">
                                I am particularly interested in the operationalization of AI within the enterprise. It's not just about the model—it's about the data integrity, the regulatory boundaries, and the human workflows that surround it. My work is dedicated to ensuring these moving parts mesh together with precision.
                            </p>
                        </div>
                    </div>
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
