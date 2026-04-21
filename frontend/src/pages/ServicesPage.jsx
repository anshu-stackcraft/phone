import ScrollSection from '../components/ScrollSection';
import { services } from '../data/siteData';

function ServicesPage() {
  return (
    <article className="flex w-full flex-col gap-6 md:gap-8">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 md:p-10">
        <p className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-200">
          Services
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Modular capabilities for modern marketing teams.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Pick focused engagements or deploy a full-stack growth partnership.
        </p>
      </section>

      <ScrollSection title="What We Deliver">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.detail}</p>
            </article>
          ))}
        </div>
      </ScrollSection>

      <ScrollSection title="How We Work" subtitle="High-velocity collaboration with full visibility.">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['1. Discover', 'Audit current funnel, data quality, and market opportunity map.'],
            ['2. Design', 'Create messaging, creative concepts, and channel strategy.'],
            ['3. Deploy', 'Launch quickly, instrument analytics, and validate assumptions.'],
            ['4. Scale', 'Optimize winning assets and build compounding growth loops.'],
          ].map(([title, detail]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </ScrollSection>
    </article>
  );
}

export default ServicesPage;