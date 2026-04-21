import ScrollSection from '../components/ScrollSection';

function AboutPage() {
  return (
    <article className="flex w-full flex-col gap-6 md:gap-8">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 md:p-10">
        <p className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-200">
          About
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Creative thinkers, growth operators, and digital builders.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          DigiCompany combines strategic depth with execution speed to help brands move ahead with
          confidence.
        </p>
      </section>

      <ScrollSection title="Our Approach">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Strategy First', 'We start with category context and customer behavior, not design trends.'],
            ['Creative That Performs', 'Every visual and message is crafted to improve clarity, trust, and action.'],
            ['Data With Judgment', 'We blend hard metrics with brand intuition for durable growth decisions.'],
          ].map(([title, detail]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{detail}</p>
            </article>
          ))}
        </div>
      </ScrollSection>

      <ScrollSection title="Team Values">
        <ul className="space-y-3 pl-5 text-slate-600 marker:text-emerald-300">
          <li>Ownership and accountability in every sprint.</li>
          <li>Rapid experimentation with disciplined learning loops.</li>
          <li>Long-term brand equity plus short-term revenue impact.</li>
        </ul>
      </ScrollSection>
    </article>
  );
}

export default AboutPage;


