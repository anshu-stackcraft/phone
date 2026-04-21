import ScrollSection from '../components/ScrollSection';

function ContactPage() {
  return (
    <article className="flex w-full flex-col gap-6 md:gap-8">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 md:p-10">
        <p className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-200">
          Contact
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Let us design your next growth leap.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Share your goals and we will propose a clear execution plan within 48 hours.
        </p>
      </section>

      <ScrollSection title="Start the Conversation">
        <form className="grid gap-3" onSubmit={(event) => event.preventDefault()}>
          <label className="text-sm font-medium text-slate-700" htmlFor="name">Name</label>
          <input
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />

          <label className="text-sm font-medium text-slate-700" htmlFor="email">Email</label>
          <input
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
          />

          <label className="text-sm font-medium text-slate-700" htmlFor="service">Service Needed</label>
          <select
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-emerald-400 focus:outline-none"
            id="service"
            name="service"
            defaultValue="Growth Marketing"
          >
            <option>Growth Marketing</option>
            <option>Brand Strategy</option>
            <option>Web Experience</option>
            <option>Content Engine</option>
          </select>

          <label className="text-sm font-medium text-slate-700" htmlFor="message">Project Brief</label>
          <textarea
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
            id="message"
            name="message"
            placeholder="Tell us about your business, timeline, and goals."
            rows="5"
            required
          />

          <button
            type="submit"
            className="mt-2 inline-flex w-fit rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(16,185,129,0.35)] transition hover:-translate-y-0.5 hover:from-emerald-400 hover:to-emerald-500"
          >
            Send Inquiry
          </button>
        </form>
      </ScrollSection>
    </article>
  );
}

export default ContactPage;


