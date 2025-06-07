import { useEffect } from 'react';

// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = 'G-HPGEMMPXGL';

// Initialize gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Define gtag function
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    
    // Initialize with current date
    window.gtag('js', new Date());
    
    // Configure with our measurement ID
    window.gtag('config', GA_MEASUREMENT_ID, {
      // Enhanced tracking
      send_page_view: true,
      allow_google_signals: true,
      allow_ad_personalization_signals: true,
      // Privacy settings for GDPR compliance
      anonymize_ip: true,
      // Enhanced ecommerce and events
      custom_map: {
        'custom_parameter_1': 'form_submission'
      }
    });

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      const existingScript = document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

// Utility functions for tracking custom events
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, formData: Record<string, any> = {}) => {
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