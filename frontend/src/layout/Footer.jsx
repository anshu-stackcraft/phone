function Footer() {
  const linkClass = 'text-slate-600 transition hover:text-emerald-600';

  return (
    <footer className="relative mt-14 border-t border-slate-200 bg-white/85 py-12">
      <div className="mx-auto grid w-[92%] max-w-6xl gap-8 text-sm md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <section>
          <h3 className="text-xl font-semibold text-slate-900">DigiCompany</h3>
          <p className="mt-3 max-w-sm text-slate-600">
            Next-gen digital marketing systems for brands that want measurable growth.
          </p>
        </section>

        <section>
          <h4 className="font-semibold text-slate-900">Services</h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a className={linkClass} href="/services">Brand Strategy</a>
            </li>
            <li>
              <a className={linkClass} href="/services">Performance Marketing</a>
            </li>
            <li>
              <a className={linkClass} href="/services">Web Experience</a>
            </li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a className={linkClass} href="/about">About</a>
            </li>
            <li>
              <a className={linkClass} href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a className={linkClass} href="/blog">Blog</a>
            </li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-slate-900">Connect</h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a className={linkClass} href="mailto:hello@digicompany.com">hello@digicompany.com</a>
            </li>
            <li>
              <a className={linkClass} href="tel:+911234567890">+91 12345 67890</a>
            </li>
            <li>
              <a className={linkClass} href="/contact">Book a Strategy Call</a>
            </li>
          </ul>
        </section>
      </div>
      <p className="mx-auto mt-8 w-[92%] max-w-6xl border-t border-slate-200 pt-5 text-xs text-slate-500">
        © {new Date().getFullYear()} DigiCompany. Designed for modern growth teams.
      </p>
    </footer>
  );
}

export default Footer;
