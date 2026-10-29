"use client";

import { useEffect } from "react";

const VisitorTracker = () => {
  useEffect(() => {
    if (sessionStorage.getItem("visitorTracked")) {
      return;
    }

    const trackVisitor = async () => {
      try {
        const payload = {
          page: window.location.pathname,
          fullUrl: window.location.href,

          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,

          screenWidth: window.screen.width,
          screenHeight: window.screen.height,

          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,

          timezone:
            Intl.DateTimeFormat().resolvedOptions().timeZone,

          referrer: document.referrer || "Direct",

          cookiesEnabled: navigator.cookieEnabled,

          online: navigator.onLine,

          hardwareConcurrency:
            navigator.hardwareConcurrency,

          deviceMemory:
            (navigator as any).deviceMemory || null,

          timestamp: new Date().toISOString(),
        };

        await fetch("/api/visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          keepalive: true,
        });

        sessionStorage.setItem(
          "visitorTracked",
          "true"
        );
      } catch (error) {
        console.error(error);
      }
    };

    trackVisitor();
  }, []);

  return null;
};

export default VisitorTracker;