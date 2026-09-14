// Wiring de elementos com data-whatsapp="coach|analise|tatica"
// e data-checkout="manual" (link da Kiwify).
// Depende de: whatsapp.js, utm.js, tracking.js (carregar antes deste arquivo).
function wireCTAs() {
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    const key = el.getAttribute("data-whatsapp");
    el.setAttribute("href", buildWhatsAppLink(key));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
    el.addEventListener("click", () => {
      trackEvent(`clique_whatsapp_${key}`, { servico: key });
      trackMetaStandard("Lead", { content_name: key });
    });
  });

  document.querySelectorAll("[data-checkout]").forEach((el) => {
    const original = el.getAttribute("href");
    el.setAttribute("href", appendUTMs(original));
    el.addEventListener("click", () => {
      trackEvent("clique_checkout_manual", {});
      trackMetaStandard("InitiateCheckout", { content_name: "manual_jogador_casual" });
    });
  });

  document.querySelectorAll("[data-track-link]").forEach((el) => {
    el.addEventListener("click", () => {
      trackEvent(el.getAttribute("data-track-link"), {});
    });
  });

  // Preserva UTMs em links internos entre Home <-> /manual
  document.querySelectorAll('a[href*=".html"]').forEach((el) => {
    const href = el.getAttribute("href");
    if (href && !href.startsWith("http")) {
      el.setAttribute("href", appendUTMs(href));
    }
  });
}
