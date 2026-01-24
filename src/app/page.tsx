import Link from "next/link";
import data from "@/data/portfolio.json";

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-0">
      <div className="max-w-[720px] mx-auto">

        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl mb-6 font-sans tracking-tight text-gray-900 leading-[1.1] font-bold">
            {data.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-sans mb-10 leading-relaxed">
            {data.positioning}
          </p>
          <p className="text-sm font-sans text-gray-400 uppercase tracking-[0.2em] mb-12">
            Azure • Databricks • SQL • AI Platforms
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-md font-sans text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="px-8 py-3 border border-gray-200 text-gray-900 rounded-md font-sans text-sm font-semibold hover:bg-gray-50 transition-all"
            >
              View Resume
            </Link>
          </div>
        </section>

        {/* Narrative Summary */}
        <section className="mb-24 prose prose-gray prose-lg max-w-none">
          <p className="text-gray-800 leading-relaxed font-serif text-xl border-l-4 border-gray-100 pl-8 py-2">
            {data.summary}
          </p>
          <div className="mt-12 text-gray-700 leading-relaxed space-y-6">
            <p>
              I work on problems where systems correctness is paramount. In my experience at CIBC and Walmart Canada, I've seen how critical it is to bridge the gap between technical data silos and the actual business workflows they are meant to support.
            </p>
            <p>
              Whether it's preparing enterprise data platforms for AI/ML integration or ensuring SQL-driven reconciliation frameworks meet regulatory standards, I focus on building reliable, auditable, and scalable systems.
            </p>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:text-gray-900 transition-colors">Platform Readiness</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              Translating business workflows into scalable data & AI platform solutions.
            </p>
          </div>
          <div className="group">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:text-gray-900 transition-colors">Data Governance</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              Ensuring compliance and system correctness in highly regulated environments.
            </p>
          </div>
          <div className="group">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:text-gray-900 transition-colors">Systems Thinking</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              Navigating ambiguity and real-world constraints to deliver operational excellence.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-gray-100 flex flex-col md:flex-row md:justify-between items-center">
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
