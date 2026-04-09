import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all `.rv` elements
 * and adds `.visible` when they enter the viewport.
 * Call once in App.js after mount.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
