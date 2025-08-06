// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = 'G-NP66MNMQGL';

// Initialize gtag function
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Utility functions for tracking custom events
export const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, formData: Record<string, unknown> = {}) => {
  trackEvent('form_submit', {
    form_name: formName,
    form_id: formName.toLowerCase().replace(/\s+/g, '_'),
    ...formData
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', {
    scroll_depth: percentage,
    engagement_time_msec: Date.now()
  });
};

// Track page views manually (for SPA navigation)
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}; 