import ScrollSection from '../components/ScrollSection';
import { portfolioItems } from '../data/siteData';

function PortfolioPage() {
  return (
    <article className="flex w-full flex-col gap-6 md:gap-8">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 md:p-10">
        <p className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-200">
          Portfolio
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Selected work that blends craft with business outcomes.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Explore projects across SaaS, ecommerce, healthcare, and fintech.
        </p>
      </section>

      <ScrollSection title="Featured Projects">
        <div className="grid gap-4 sm:grid-cols-2">
          {portfolioItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="text-xs font-medium uppercase tracking-wide text-emerald-300">{item.type}</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              <a className="mt-4 inline-flex text-sm font-semibold text-emerald-300 transition hover:text-emerald-200" href="/contact">
                Discuss a Similar Project
              </a>
            </article>
          ))}
        </div>
      </ScrollSection>
    </article>
  );
}

export default PortfolioPage;


