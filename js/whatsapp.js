// Número vem de js/config.js, no formato internacional sem símbolos.
const WHATSAPP_NUMBER = SITE_CONFIG.whatsappNumber;

const WHATSAPP_MESSAGES = {
  coach: "Oi, Raffa! Vim pelo seu site e quero saber mais sobre o Coach 1:1.",
  analise: "Oi, Raffa! Vim pelo seu site e quero fazer uma Análise de Gameplay.",
  tatica: "Oi, Raffa! Vim pelo seu site e quero minha Tática Certa.",
};

function buildWhatsAppLink(key) {
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) return "";
  const msg = WHATSAPP_MESSAGES[key] || "Oi, Raffa! Vim pelo seu site.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
