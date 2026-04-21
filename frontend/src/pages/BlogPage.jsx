import ScrollSection from '../components/ScrollSection';
import { blogPosts } from '../data/siteData';

function BlogPage() {
  return (
    <article className="flex w-full flex-col gap-6 md:gap-8">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 md:p-10">
        <p className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-200">
          Blog
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Insights for growth teams building modern digital brands.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Actionable strategy notes from our branding, SEO, and performance experts.
        </p>
      </section>

      <ScrollSection title="Latest Articles">
        <div className="grid gap-4 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {post.date} · {post.readTime} read
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <a className="mt-4 inline-flex text-sm font-semibold text-emerald-300 transition hover:text-emerald-200" href="/contact">
                Get Similar Strategy Support
              </a>
            </article>
          ))}
        </div>
      </ScrollSection>
    </article>
  );
}

export default BlogPage;


