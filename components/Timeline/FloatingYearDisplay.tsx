"use client";

import React, { useEffect, useState } from 'react';

const FloatingYearDisplay: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(1982);

  useEffect(() => {
    const handleScroll = () => {
      const events = document.querySelectorAll('.timeline-item');
      let closestEvent: Element | null = null;
      let closestDistance = Infinity;

      events.forEach(event => {
        const rect = event.getBoundingClientRect();
        const distanceFromTop = Math.abs(rect.top - window.innerHeight / 2);

        if (distanceFromTop < closestDistance) {
          closestDistance = distanceFromTop;
          closestEvent = event;
        }
      });

      if (closestEvent) {
        const eventDate = new Date((closestEvent as HTMLElement).getAttribute('data-date') || '').getFullYear();
        setCurrentYear(eventDate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-5 right-5 bg-black text-customYellow p-2 rounded-lg text-xl z-50 md:text-3xl">
      Year: {currentYear}
    </div>
  );
};

export default FloatingYearDisplay;