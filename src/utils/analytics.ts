declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);
};

// Initialize Google Tag Manager
export const initGTM = (containerId: string) => {
  const script = document.createElement('script');
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${containerId}');
  `;
  document.head.appendChild(script);
};

// Initialize Google Analytics
export const initializeGA = () => {
  if (process.env.REACT_APP_GA_MEASUREMENT_ID && process.env.REACT_APP_ENABLE_ANALYTICS === 'true') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID);
  }
};

// Initialize Google Tag Manager
export const initializeGTM = () => {
  if (process.env.REACT_APP_GTM_CONTAINER_ID && process.env.REACT_APP_ENABLE_ANALYTICS === 'true') {
    (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
      const f=d.getElementsByTagName(s)[0],
      j=d.createElement(s) as HTMLScriptElement,
      dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode?.insertBefore(j,f);
    })(window,document,'script','dataLayer',process.env.REACT_APP_GTM_CONTAINER_ID);
  }
};

// Track page view
export const pageview = (url: string) => {
  window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID as string, {
    page_path: url,
  });
};

// Track page views
export const trackPageView = (path: string) => {
  if (window.gtag && process.env.REACT_APP_ENABLE_ANALYTICS === 'true') {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
};

// Track event
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track custom events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (window.gtag && process.env.REACT_APP_ENABLE_ANALYTICS === 'true') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
