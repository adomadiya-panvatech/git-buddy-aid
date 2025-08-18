
import { useEffect } from 'react';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Check if gtag is available before using it
    const reportWebVitals = (metric: any) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    // Simple performance monitoring without external dependencies
    const observePerformance = () => {
      try {
        // Monitor Largest Contentful Paint (LCP)
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              reportWebVitals({
                name: 'LCP',
                value: entry.startTime,
                id: `lcp-${Date.now()}`,
              });
            }
          });
        });

        if ('PerformanceObserver' in window) {
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }

        // Monitor First Input Delay (FID) - simplified version
        const handleFirstInput = (event: Event) => {
          reportWebVitals({
            name: 'FID',
            value: performance.now() - (event.timeStamp || 0),
            id: `fid-${Date.now()}`,
          });
          // Remove listener after first interaction
          document.removeEventListener('click', handleFirstInput, true);
          document.removeEventListener('keydown', handleFirstInput, true);
        };

        document.addEventListener('click', handleFirstInput, true);
        document.addEventListener('keydown', handleFirstInput, true);

        return () => {
          observer.disconnect();
          document.removeEventListener('click', handleFirstInput, true);
          document.removeEventListener('keydown', handleFirstInput, true);
        };
      } catch (error) {
        console.log('Performance monitoring not supported');
      }
    };

    const cleanup = observePerformance();
    return cleanup;
  }, []);

  return null;
};

export default PerformanceMonitor;
