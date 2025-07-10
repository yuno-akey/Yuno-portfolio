import { useState, useEffect, useRef } from 'react';

export const useActiveSection = (sectionIds: string[], rootMargin = '-50% 0px -50% 0px') => {
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const { current: currentObserver } = observer;
    if (currentObserver) {
        currentObserver.disconnect();
    }

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

    const { current: newObserver } = observer;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        newObserver.observe(el);
      }
    });

    return () => {
      if (newObserver) {
        newObserver.disconnect();
      }
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
};