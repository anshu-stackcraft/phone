import { useEffect, useMemo, useState } from 'react';
import { navLinks } from './data/siteData';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const ROUTE_MAP = {
  home: HomePage,
  services: ServicesPage,
  about: AboutPage,
  portfolio: PortfolioPage,
  blog: BlogPage,
  contact: ContactPage,
};

const PAGE_TITLES = {
  home: 'DigiCompany | Next-Gen Digital Agency',
  services: 'Services | DigiCompany',
  about: 'About | DigiCompany',
  portfolio: 'Portfolio | DigiCompany',
  blog: 'Blog | DigiCompany',
  contact: 'Contact | DigiCompany',
};

const getRouteFromPathname = () => {
  const pathname = window.location.pathname.replace(/^\//, '').trim().toLowerCase();
  const slug = pathname === '' ? 'home' : pathname.split('/')[0];
  return ROUTE_MAP[slug] ? slug : 'home';
};

function App() {
  const [activeRoute, setActiveRoute] = useState(getRouteFromPathname);

  useEffect(() => {
    if (!window.location.pathname || window.location.pathname === '/') {
      window.history.replaceState(null, '', '/home');
    }

    const onPopState = () => setActiveRoute(getRouteFromPathname());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[activeRoute] ?? PAGE_TITLES.home;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [activeRoute]);

  const ActivePage = useMemo(() => ROUTE_MAP[activeRoute] ?? HomePage, [activeRoute]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(249,115,22,0.12),transparent_35%),linear-gradient(to_bottom,#f8fafc,#eef2ff)]" />
      <a
        className="sr-only z-100 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 focus:not-sr-only focus:absolute focus:left-3 focus:top-3"
        href="#content"
      >
        Skip to content
      </a>
      <Navbar
        navLinks={navLinks}
        activeRoute={activeRoute}
      />
      <main id="content" className="relative mx-auto flex w-[92%] max-w-6xl flex-1 py-8 md:py-12" tabIndex="-1">
        <PageTransition routeKey={activeRoute}>
          <ActivePage />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}

export default App;
