/**
 * Helper unificado para mensuração e eventos de conversão
 * Suporta Google Analytics 4 (gtag), Google Tag Manager (dataLayer) e Meta Pixel (fbq)
 */

export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  const eventData = {
    ...params,
    page: params.page || "legalizacao-de-imoveis",
    timestamp: new Date().toISOString(),
  };

  // 1. Google Analytics 4 (gtag)
  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, eventData);
    } catch (e) {
      console.warn("gtag track warning:", e);
    }
  }

  // 2. Google Tag Manager (dataLayer)
  if (Array.isArray(window.dataLayer)) {
    try {
      window.dataLayer.push({
        event: eventName,
        ...eventData,
      });
    } catch (e) {
      console.warn("dataLayer track warning:", e);
    }
  }

  // 3. Meta Pixel (fbq)
  if (typeof window.fbq === "function") {
    try {
      if (eventName === "generate_lead") {
        window.fbq("track", "Lead", eventData);
      } else if (eventName === "whatsapp_click") {
        window.fbq("trackCustom", "WhatsAppClick", eventData);
      } else {
        window.fbq("trackCustom", eventName, eventData);
      }
    } catch (e) {
      console.warn("fbq track warning:", e);
    }
  }
}
