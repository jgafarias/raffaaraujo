// Mensuração: eventos mínimos exigidos no briefing.
// Envia para GA4 (gtag) e Meta Pixel (fbq) quando configurados.
function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params);
  }
  // eslint-disable-next-line no-console
  console.debug("[raffa-track]", eventName, params);
}

// Eventos padrão do Meta Pixel (Lead / InitiateCheckout) — usados pelo Meta
// para otimização de campanhas, diferente dos eventos customizados acima.
function trackMetaStandard(standardEvent, params = {}) {
  if (typeof window.fbq === "function") {
    window.fbq("track", standardEvent, params);
  }
}
