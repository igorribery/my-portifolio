'use client';

import { useEffect } from 'react';

/** Progressive enhancement only: page and links work without JavaScript. */
export function PortfolioMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    document.documentElement.classList.add('motion-ready');
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.visible)'));
    let observer: IntersectionObserver | undefined;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -20px 0px' }
      );
      elements.forEach((element) => observer?.observe(element));
    } else {
      elements.forEach((element) => element.classList.add('visible'));
    }

    const visual = document.querySelector<HTMLElement>('.visual-wrap');
    const card = visual?.querySelector<HTMLElement>('.codebox');
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    let frame = 0;
    const onMove = (event: MouseEvent) => {
      if (!visual || !card) return;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = visual.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
        card.style.transform = `rotate(${(-3 + x * 3).toFixed(2)}deg) translate3d(${(x * 6).toFixed(2)}px, ${(y * 6).toFixed(2)}px, 0)`;
      });
    };
    const onLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      if (card) card.style.transform = '';
    };
    if (finePointer && visual) {
      visual.addEventListener('mousemove', onMove, { passive: true });
      visual.addEventListener('mouseleave', onLeave);
    }
    return () => {
      observer?.disconnect();
      document.documentElement.classList.remove('motion-ready');
      if (visual) {
        visual.removeEventListener('mousemove', onMove);
        visual.removeEventListener('mouseleave', onLeave);
      }
      onLeave();
    };
  }, []);
  return null;
}
