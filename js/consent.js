const CONSENT_KEY = "raffa_cookie_consent";

function hasTrackingConfigured() {
  return Boolean(SITE_CONFIG.ga4MeasurementId || SITE_CONFIG.metaPixelId);
}

function wireConsent() {
  if (!hasTrackingConfigured()) return;

  const savedChoice = localStorage.getItem(CONSENT_KEY);
  if (savedChoice === "accepted") {
    initializeTrackingProviders();
    return;
  }
  if (savedChoice === "rejected") return;

  const banner = document.createElement("div");
  banner.className = "consent-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Preferências de privacidade");
  banner.innerHTML = `
    <p>Usamos cookies de medição somente com sua autorização. <a href="politica-de-privacidade.html">Saiba mais</a>.</p>
    <div class="consent-actions">
      <button class="btn btn-outline" type="button" data-consent="rejected">Recusar</button>
      <button class="btn btn-primary" type="button" data-consent="accepted">Aceitar</button>
    </div>`;
  document.body.appendChild(banner);

  banner.querySelectorAll("[data-consent]").forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.getAttribute("data-consent");
      localStorage.setItem(CONSENT_KEY, choice);
      banner.remove();
      if (choice === "accepted") initializeTrackingProviders();
    });
  });
}
