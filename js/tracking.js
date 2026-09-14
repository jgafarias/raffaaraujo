let trackingInitialized = false;

function initializeTrackingProviders() {
  if (trackingInitialized) return;
  trackingInitialized = true;

  if (SITE_CONFIG.ga4MeasurementId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(SITE_CONFIG.ga4MeasurementId)}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", SITE_CONFIG.ga4MeasurementId, { anonymize_ip: true });
  }

  if (SITE_CONFIG.metaPixelId) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", SITE_CONFIG.metaPixelId);
    window.fbq("track", "PageView");
  }
}

// Mensuração: eventos mínimos exigidos no briefing.
// Só envia após consentimento e quando os IDs estiverem configurados.
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
