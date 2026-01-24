import data from "@/data/portfolio.json";

export default function About() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
            <div className="max-w-[720px] mx-auto">
                <header className="mb-20">
                    <p className="label-caps mb-4">Background</p>
                    <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-6 tracking-tight">About</h1>
                    <p className="text-lg text-gray-500 font-sans leading-relaxed max-w-[600px]">
                        Professional philosophy, systems thinking, and the pursuit of technical correctness.
                    </p>
                </header>

                <section className="prose prose-gray prose-lg max-w-none">
                    <div className="space-y-20 text-gray-700 leading-relaxed font-sans text-[18px]">
                        <div>
                            <h2 className="label-caps mb-10 border-b border-gray-100 pb-4">Philosophy</h2>
                            <p className="text-2xl font-serif text-gray-800 leading-[1.6] italic border-l-2 border-gray-900/10 pl-10 py-2">
                                {data.about.philosophy}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h2 className="label-caps mb-6">How I Work</h2>
                                <p className="text-gray-600">
                                    {data.about.howIWork}
                                </p>
                            </div>

                            <div>
                                <h2 className="label-caps mb-6">Focus</h2>
                                <p className="text-gray-600">
                                    I am particularly interested in the operationalization of AI within the enterprise. It's not just about the model—it's about the data integrity, the regulatory boundaries, and the human workflows that surround it.
                                </p>
                            </div>
                        </div>

                        <div className="pt-12 border-t border-gray-100">
                            <p className="text-gray-500 text-sm italic">
                                Currently based in Mississauga, ON. Working at the intersection of business and technical systems.
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
