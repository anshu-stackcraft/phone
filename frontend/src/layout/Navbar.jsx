import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ navLinks, activeRoute }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    e.preventDefault();
    window.history.pushState(null, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    closeMobileMenu();
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    const onClickOutside = (event) => {
      if (!mobileMenuOpen) return;
      if (!navRef.current?.contains(event.target)) {
        closeMobileMenu();
      }
    };

    const onResize = () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
      window.removeEventListener('resize', onResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav
        ref={navRef}
        className="relative mx-auto flex w-[92%] max-w-6xl items-center gap-4 py-3"
        aria-label="Primary"
      >
        <a className="inline-flex items-center gap-3" href="/home" onClick={handleNavClick}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-emerald-500 to-orange-400 font-bold text-white shadow-[0_8px_24px_rgba(16,185,129,0.35)]">DSI</span>
          <span className="hidden flex-col sm:flex">
            <strong className="text-base font-semibold tracking-tight text-slate-900">Digital Step In </strong>
            <small className="text-xs text-slate-500">Digital Marketing</small>
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 md:flex">
          {navLinks.map((link) => {
            const linkRoute = link.path.replace(/^\//, '');
            const isActive = activeRoute === linkRoute;
            return (
              <li key={link.path}>
                <a
                  className={`inline-flex rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${isActive ? 'bg-linear-to-r from-emerald-500 to-emerald-600 text-white shadow-[0_10px_20px_rgba(16,185,129,0.3)]' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}`}
                  href={link.path}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className={`ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 md:hidden ${mobileMenuOpen ? 'rotate-90 bg-emerald-50' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-panel"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          id="mobile-nav-panel"
          className={`absolute left-0 right-0 top-[calc(100%+0.35rem)] z-40 transition-all duration-300 md:hidden ${mobileMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}
          aria-hidden={!mobileMenuOpen}
        >
          <ul className="space-y-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.14)]">
            {navLinks.map((link) => {
              const linkRoute = link.path.replace(/^\//, '');
              const isActive = activeRoute === linkRoute;
              return (
                <li key={link.path}>
                  <a
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-linear-to-r ' : 'text-slate-700 hover:bg-slate-100'}`}
                    href={link.path}
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
