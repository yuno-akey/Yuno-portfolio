import { useState, useEffect, useRef } from 'react';

export const useActiveSection = (sectionIds: string[], rootMargin = '-50% 0px -50% 0px') => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    const { current: currentObserver } = observer;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        currentObserver.observe(el);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          currentObserver.unobserve(el);
        }
      });
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
};