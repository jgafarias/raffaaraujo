// Wiring de elementos com data-whatsapp="coach|analise|tatica"
// e data-checkout="manual" (link da Kiwify).
// Depende de: whatsapp.js, utm.js, tracking.js (carregar antes deste arquivo).
function wireCTAs() {
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    const key = el.getAttribute("data-whatsapp");
    const destination = buildWhatsAppLink(key);
    if (!destination) {
      disablePendingCTA(el, "WhatsApp em configuração");
      return;
    }
    el.setAttribute("href", destination);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
    el.addEventListener("click", () => {
      trackEvent(`clique_whatsapp_${key}`, { servico: key });
      trackMetaStandard("Lead", { content_name: key });
    });
  });

  document.querySelectorAll("[data-checkout]").forEach((el) => {
    if (!SITE_CONFIG.checkoutManual) {
      disablePendingCTA(el, "Checkout em configuração");
      return;
    }
    el.setAttribute("href", appendUTMs(SITE_CONFIG.checkoutManual));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
    el.addEventListener("click", () => {
      trackEvent("clique_checkout_manual", {});
      trackMetaStandard("InitiateCheckout", { content_name: "manual_jogador_casual" });
    });
  });

  document.querySelectorAll("[data-track-link]").forEach((el) => {
    if (el.getAttribute("aria-disabled") === "true") return;
    el.addEventListener("click", () => {
      trackEvent(el.getAttribute("data-track-link"), {});
    });
  });

  // Preserva UTMs em links internos entre Home <-> /manual
  document.querySelectorAll('a[href^="index"], a[href^="manual"]').forEach((el) => {
    const href = el.getAttribute("href");
    if (href && !href.startsWith("http")) {
      el.setAttribute("href", appendUTMs(href));
    }
  });
}

function disablePendingCTA(el, reason) {
  el.setAttribute("href", "#");
  el.setAttribute("aria-disabled", "true");
  el.setAttribute("title", reason);
  el.classList.add("is-pending");
  el.addEventListener("click", (event) => event.preventDefault());
}
