/**
 * Smooth scroll utility function
 */
export const smoothScrollTo = (elementId: string, offset: number = 70): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - offset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

/**
 * Get current active section based on scroll position
 */
export const getActiveSection = (sections: string[], offset: number = 100): string => {
  const scrollPosition = window.scrollY + offset;
  
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return sectionId;
      }
    }
  }
  
  return sections[0]; // Default to first section
};