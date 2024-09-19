import React, { createContext, useEffect, useRef } from 'react';

export const ScrollContext = createContext();

function SmoothScroll({ children }) {
  const sectionsRef = useRef([]);
  const isScrollingRef = useRef(false);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrollingRef.current) return;
      if (event.target.closest('.slider')) {
        return;
      }

      event.preventDefault();

      const deltaY = event.deltaY;
      if (deltaY > 0) {
        scrollToNextSection();
      } else if (deltaY < 0) {
        scrollToPreviousSection();
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    const section = sectionsRef.current[index];
    if (section) {
      isScrollingRef.current = true;
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    }
  };

  const scrollToNextSection = () => {
    currentIndexRef.current = Math.min(
      currentIndexRef.current + 1,
      sectionsRef.current.length - 1
    );
    scrollToSection(currentIndexRef.current);
  };

  const scrollToPreviousSection = () => {
    currentIndexRef.current = Math.max(currentIndexRef.current - 1, 0);
    scrollToSection(currentIndexRef.current);
  };

  return (
    <ScrollContext.Provider value={{ scrollToNextSection, scrollToPreviousSection }}>
      {React.Children.map(children, (child, index) => (
        <div
          ref={(el) => (sectionsRef.current[index] = el)}
          style={{ height: '100vh', scrollSnapAlign: 'start' }}
        >
          {child}
        </div>
      ))}
    </ScrollContext.Provider>
  );
}

export default SmoothScroll;