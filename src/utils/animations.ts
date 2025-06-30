/**
 * Animation utilities for portfolio and other components
 */

export const fadeInElements = (selector: string, delay: number = 100): void => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animate', 'animate-fade-in-up');
    }, index * delay);
  });
};

export const staggerAnimation = (elements: NodeListOf<Element>, animationClass: string, delay: number = 100): void => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animate', animationClass);
    }, index * delay);
  });
};

export const portfolioFilterAnimation = (containerId: string, duration: number = 300): Promise<void> => {
  return new Promise((resolve) => {
    const container = document.getElementById(containerId);
    if (container) {
      container.style.opacity = '0.3';
      container.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
        resolve();
      }, duration);
    } else {
      resolve();
    }
  });
};