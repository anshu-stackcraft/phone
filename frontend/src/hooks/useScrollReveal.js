import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || isVisible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
        ...options,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, options]);

  return { elementRef, isVisible };
}
