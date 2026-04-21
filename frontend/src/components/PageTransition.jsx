function PageTransition({ routeKey, children }) {
  return (
    <div key={routeKey} className="w-full animate-[pageIn_0.55s_ease_both]">
      {children}
    </div>
  );
}

export default PageTransition;
