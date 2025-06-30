/**
 * Mobile menu utilities
 */

export const toggleMobileMenu = (isOpen: boolean): void => {
  const navCollapse = document.getElementById('main-nav');
  if (navCollapse) {
    if (isOpen) {
      navCollapse.classList.add('in');
    } else {
      navCollapse.classList.remove('in');
    }
  }
};

export const closeMobileMenuOnResize = (): void => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      const navCollapse = document.getElementById('main-nav');
      if (navCollapse) {
        navCollapse.classList.remove('in');
      }
    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
};