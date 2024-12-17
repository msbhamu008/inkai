// Report Web Vitals
export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

// Monitor Resource Timing
export const monitorResourceTiming = () => {
  if ('performance' in window) {
    const resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter((resource: any) => {
      return resource.duration > 1000; // Resources taking more than 1 second
    });

    if (slowResources.length > 0) {
      console.warn('Slow resources detected:', slowResources);
    }
  }
};

// Monitor Memory Usage
export const monitorMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
      console.warn('High memory usage detected');
    }
  }
};

// Monitor Network Status
export const monitorNetworkStatus = (callback: (online: boolean) => void) => {
  window.addEventListener('online', () => callback(true));
  window.addEventListener('offline', () => callback(false));
  
  return () => {
    window.removeEventListener('online', () => callback(true));
    window.removeEventListener('offline', () => callback(false));
  };
};
