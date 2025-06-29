import { useEffect, useRef } from 'preact/hooks';

export const useScrollAnimation = (animationClass: string = 'animate-fade-in-up') => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate', animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    element.classList.add('animate-on-scroll');
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animationClass]);

  return elementRef;
};