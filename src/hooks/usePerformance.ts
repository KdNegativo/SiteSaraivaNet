import { useEffect } from 'react';

/**
 * Hook for performance optimizations
 * Implements lazy loading, preconnect hints, and resource prioritization
 */
export const usePerformance = () => {
  useEffect(() => {
    // Preconnect to important domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://wa.me'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Optimize font loading
    const fontDisplay = document.createElement('link');
    fontDisplay.rel = 'preload';
    fontDisplay.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap';
    fontDisplay.as = 'style';
    fontDisplay.onload = () => {
      fontDisplay.rel = 'stylesheet';
    };
    document.head.appendChild(fontDisplay);

    // Cleanup function
    return () => {
      const links = document.querySelectorAll('link[rel="preconnect"], link[rel="preload"]');
      links.forEach(link => {
        const linkElement = link as HTMLLinkElement;
        if (preconnectDomains.some(domain => linkElement.href.includes(domain)) || 
            linkElement.href.includes('fonts.googleapis.com')) {
          linkElement.remove();
        }
      });
    };
  }, []);

  // Performance observer for Core Web Vitals
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics for debugging
          console.log(`Performance: ${entry.name} - ${entry.startTime}ms`);
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation'] });

      return () => observer.disconnect();
    }
  }, []);

  return {
    // Helper functions for performance
    prefetchResource: (url: string, type: 'script' | 'style' | 'image' = 'script') => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      link.as = type;
      document.head.appendChild(link);
    },
    
    preloadCriticalResource: (url: string, type: 'script' | 'style' | 'image' = 'script') => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = type;
      if (type === 'image') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    }
  };
};