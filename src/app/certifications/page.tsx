import data from "@/data/portfolio.json";

function Logo({ type }: { type: string }) {
    switch (type) {
        case "microsoft":
            return (
                <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                    <path d="M0 0H11V11H0V0Z" fill="currentColor" />
                    <path d="M12 0H23V11H12V0Z" fill="currentColor" />
                    <path d="M0 12H11V23H0V12Z" fill="currentColor" />
                    <path d="M12 12H23V23H12V12Z" fill="currentColor" />
                </svg>
            );
        case "databricks":
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                    <path d="M12 0L2 6V18L12 24L22 18V6L12 0ZM12 4.5L19.5 9V15L12 19.5L4.5 15V9L12 4.5ZM12 7.5L7.5 10.2V13.8L12 16.5L16.5 13.8V10.2L12 7.5Z" fill="currentColor" />
                </svg>
            );
        case "udemy":
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18ZM11 14H13V16H11V14ZM11 8H13V12H11V8Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                </svg>
            );
        case "google":
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="currentColor" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
                </svg>
            );
        case "university":
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                    <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM12 16.5L4.5 12.4V15.5L12 19.6L19.5 15.5V12.4L12 16.5Z" fill="currentColor" />
                </svg>
            );
        default:
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                    <path d="M12 2L1 7L12 12L23 7L12 2ZM12 22L21 17.09V11.02L12 16L3 11.02V17.09L12 22Z" fill="currentColor" />
                </svg>
            );
    }
}

export default function Certifications() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
            <div className="max-w-[720px] mx-auto">
                <header className="mb-20">
                    <p className="label-caps mb-4">Verification</p>
                    <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-6 tracking-tight">Credentials</h1>
                    <p className="text-lg text-gray-500 font-sans leading-relaxed max-w-[640px]">
                        Professional validation in cloud infrastructure, data engineering, and artificial intelligence.
                    </p>
                </header>

                <section className="space-y-16">
                    {data.certifications.map((certGroup, idx) => (
                        <div key={idx}>
                            <h2 className="label-caps mb-8 border-b border-gray-100 pb-4">
                                {certGroup.category}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {certGroup.items.map((cert: any, cIdx: number) => (
                                    <div
                                        key={cIdx}
                                        className="flex flex-col p-5 bg-white border border-gray-100/60 rounded-lg hover:border-gray-900 transition-all bg-white/40 group relative min-h-[160px]"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <Logo type={cert.logo} />
                                        </div>
                                        <div className="flex flex-col h-full">
                                            <span className="text-gray-900 font-sans font-bold text-[15px] leading-snug mb-1">
                                                {cert.name}
                                            </span>
                                            <span className="mono-meta text-[10px] uppercase tracking-widest text-gray-400 mb-4">
                                                {cert.issuer}
                                            </span>

                                            {/* Hover Details */}
                                            <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="pt-3 border-t border-gray-50 space-y-1.5">
                                                    <p className="mono-meta text-[9px] text-gray-400">
                                                        <span className="text-gray-300 mr-2">ID:</span> {cert.credentialId}
                                                    </p>
                                                    <p className="mono-meta text-[9px] text-gray-400">
                                                        <span className="text-gray-300 mr-2">ISSUED:</span> {cert.issuedDate}
                                                        {cert.expiryDate && (
                                                            <>
                                                                <span className="mx-2 text-gray-200">/</span>
                                                                <span className="text-gray-300 mr-1">EXPIRES:</span> {cert.expiryDate}
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
                <footer className="pt-24 mt-32 border-t border-gray-100 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
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
