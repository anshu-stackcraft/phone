import ScrollSection from '../components/ScrollSection';
import { caseStudies, services, testimonials } from '../data/siteData';
import hero from "../assets/hero_dsi.jpg";

function HomePage() {
  return (
    <article className="flex w-full flex-col gap-6 md:gap-8">

    <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 gap-10">
      
      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Grow Your Digital Presence with{" "}
          <span className="text-emerald-600">DigitalStepIn</span>
        </h1>

        <p className="text-lg text-gray-600">
          We help businesses grow online with smart digital marketing strategies, including SEO, social media, and content creation—designed to attract the right audience and turn visitors into loyal customers.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition">
            Apply Now
          </button>

          <button className="border border-gray-300 hover:border-emerald-500 hover:text-emerald-600 px-6 py-3 rounded-xl font-semibold transition">
            📩 Explore Program
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/2">
        <img
          src={hero}
          alt="Digital Marketing"
          className="rounded-3xl shadow-xl w-full h-auto object-cover"
        />
      </div>
    </div>

      <section className="relative overflow-hidden rounded-3xl border border-emerald-300/20 bg-white/90 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.45)] md:p-10">
        <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-orange-400/20 blur-3xl" />
        <p className="inline-flex rounded-sm border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-400">
          Next-Gen Digital Marketing Agency
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          We build <span className="bg-linear-to-r from-emerald-300 to-orange-300 bg-clip-text text-transparent">bold digital experiences</span> that convert attention into revenue.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-700 sm:text-lg">
          From strategy to execution, DigiCompany helps ambitious brands launch, scale, and
          dominate with measurable growth.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center rounded-xl bg-linear-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(16,185,129,0.35)] transition hover:-translate-y-0.5 hover:from-emerald-400 hover:to-emerald-500"
            href="/contact"
          >
            Start Your Growth Sprint
          </a>
          <a
            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white/10"
            href="/portfolio"
          >
            View Case Studies
          </a>
        </div>
      </section>

    <ScrollSection
  title="Core Services"
  subtitle="Integrated systems designed to accelerate every stage of the funnel."
>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {services.map((service) => (
      <article
        key={service.title}
        className="group h-full rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-md p-6 
        transition-all duration-300 ease-out 
        hover:-translate-y-2 hover:scale-[1.02] 
        hover:shadow-xl hover:shadow-emerald-200/40 
        hover:border-emerald-300/60"
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-emerald-600">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {service.detail}
            </p>
          </div>

          <span className="mt-6 inline-flex items-center text-emerald-500 opacity-70 
            transition-all duration-200 
            group-hover:translate-x-2 group-hover:opacity-100">
            →
          </span>
        </div>
      </article>
    ))}
  </div>
</ScrollSection>

      <ScrollSection
        title="Case Studies"
        subtitle="Selected client stories with outcomes that matter."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-emerald-300/40"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
              <strong className="mt-3 block text-base text-emerald-300">{item.metric}</strong>
              <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
      </ScrollSection>

      <ScrollSection
        title="Client Testimonials"
        subtitle="Trusted by founders and growth leaders across industries."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-slate-700">“{testimonial.quote}”</p>
              <footer className="mt-4">
                <strong className="block text-slate-900">{testimonial.author}</strong>
                <span className="text-sm text-slate-500">{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </ScrollSection>

      <ScrollSection className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Ready for a <span className="bg-linear-to-r from-emerald-300 to-orange-300 bg-clip-text text-transparent">brand that performs</span> like a product?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Book a strategy session and get a clear 90-day growth blueprint.
        </p>
        <a
          className="mt-6 inline-flex rounded-xl bg-linear-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(16,185,129,0.35)] transition hover:-translate-y-0.5 hover:from-emerald-400 hover:to-emerald-500"
          href="/contact"
        >
          Book a Free Strategy Call
        </a>
      </ScrollSection>
    </article>
  );
}

export default HomePage;


