"use client";

import { useEffect, useState } from "react";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
};

export const useCookieConsent = () => {
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Load preferences from localStorage
    const savedConsent = localStorage.getItem("cookie-consent");

    if (savedConsent) {
      try {
        const parsedPreferences = JSON.parse(savedConsent);
        setPreferences(parsedPreferences);
        applyCookiePreferences(parsedPreferences);
      } catch (error) {
        console.error("Error parsing cookie preferences:", error);
        setPreferences(defaultPreferences);
      }
    }
    setIsLoaded(true);
  }, []);

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    if (typeof window === "undefined") return;

    // Configure Google Analytics consent
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        functionality_storage: prefs.necessary ? "granted" : "denied",
        security_storage: prefs.necessary ? "granted" : "denied",
      });
    }

    // Disable Google Analytics if not consented
    if (!prefs.analytics) {
      // Disable Google Analytics tracking
      window["ga-disable-GA_MEASUREMENT_ID"] = true;
    } else {
      window["ga-disable-GA_MEASUREMENT_ID"] = false;
    }
  };

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences));
    applyCookiePreferences(newPreferences);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
    };
    updatePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
    };
    updatePreferences(necessaryOnly);
  };

  const hasConsent = () => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("cookie-consent") !== null;
  };

  const clearConsent = () => {
    localStorage.removeItem("cookie-consent");
    setPreferences(defaultPreferences);
    applyCookiePreferences(defaultPreferences);
  };

  return {
    preferences,
    isLoaded,
    updatePreferences,
    acceptAll,
    acceptNecessary,
    hasConsent,
    clearConsent,
    applyCookiePreferences,
  };
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    "ga-disable-GA_MEASUREMENT_ID": boolean;
  }
}
