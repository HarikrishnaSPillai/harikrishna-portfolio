import Link from "next/link";
import data from "@/data/portfolio.json";

export default function Home() {
  return (
    <main className="min-h-screen pt-40 pb-24 px-6 md:px-0">
      <div className="max-w-[720px] mx-auto">

        {/* Hero Section */}
        <section className="mb-24">
          <p className="label-caps mb-6">Introduction</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 font-sans tracking-tight text-gray-900 leading-[1.05] font-bold">
            {data.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-sans mb-12 leading-[1.4] max-w-[640px]">
            {data.positioning}
          </p>
          <div className="flex items-center gap-6 mb-16">
            <span className="mono-meta text-gray-400 font-medium tracking-wider">
              AZURE &bull; DATABRICKS &bull; SQL
            </span>
            <div className="h-px w-12 bg-gray-100" />
            <span className="mono-meta text-gray-400 font-medium tracking-wider text-xs uppercase">
              AI READY
            </span>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gray-900 text-white rounded font-sans text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="px-8 py-3 border border-gray-200 text-gray-900 rounded font-sans text-sm font-semibold hover:bg-gray-50 transition-all"
            >
              Resume
            </Link>
          </div>
        </section>

        {/* Narrative Summary */}
        <section className="mb-24 prose prose-gray prose-lg max-w-none">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gray-100" />
            <p className="label-caps m-0">Focus & Scope</p>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
          <p className="text-gray-800 leading-[1.6] font-serif text-2xl border-l-2 border-gray-900/10 pl-10 py-2 mb-12 italic">
            {data.summary}
          </p>
          <div className="mt-12 text-gray-700 leading-relaxed space-y-8 text-[19px] font-sans">
            <p>
              I work on problems where systems correctness is paramount. In my experience at CIBC and Walmart Canada, I've seen how critical it is to bridge the gap between technical data silos and the actual business workflows they are meant to support.
            </p>
            <p>
              Whether it's preparing enterprise data platforms for AI/ML integration or ensuring SQL-driven reconciliation frameworks meet regulatory standards, I focus on building reliable, auditable, and scalable systems.
            </p>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="group">
            <h3 className="label-caps mb-6 group-hover:text-gray-900 transition-colors">Platform</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-sans font-medium">
              Translating business workflows into scalable data & AI solutions.
            </p>
          </div>
          <div className="group">
            <h3 className="label-caps mb-6 group-hover:text-gray-900 transition-colors">Governance</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-sans font-medium">
              Ensuring compliance and systems correctness in regulated spaces.
            </p>
          </div>
          <div className="group">
            <h3 className="label-caps mb-6 group-hover:text-gray-900 transition-colors">Delivery</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-sans font-medium">
              Navigating real-world constraints to deliver operational excellence.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-gray-100 flex flex-col md:flex-row md:justify-between items-center opacity-60 hover:opacity-100 transition-opacity">
          <p className="mono-meta text-gray-400 mb-4 md:mb-0">
            {data.name} &bull; {data.location}
          </p>
          <div className="flex gap-10 mono-meta uppercase tracking-widest text-[10px]">
            <a href={data.socials.linkedin} target="_blank" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href={`mailto:${data.socials.email}`} className="hover:text-gray-900 transition-colors">Email</a>
          </div>
        </footer>

      </div>
    </main>
  );
}
