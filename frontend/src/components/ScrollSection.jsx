import { useScrollReveal } from '../hooks/useScrollReveal';

function ScrollSection({ title, subtitle, children, className = '' }) {
  const { elementRef, isVisible } = useScrollReveal();
  const classes = `rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-700 md:p-8 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`.trim();

  return (
    <section ref={elementRef} className={classes}>
      {(title || subtitle) && (
        <header className="mb-5">
          {title ? <h2 className="font-semibold tracking-tight text-slate-900 sm:text-2xl">{title}</h2> : null}
          {subtitle ? <p className="mt-2 text-sm text-slate-600 sm:text-base">{subtitle}</p> : null}
        </header>
      )}
      {children}
    </section>
  );
}

export default ScrollSection;
