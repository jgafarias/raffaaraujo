// TODO (Raffa/dev): trocar pelo número comercial real,
// formato internacional sem espaços/símbolos. Ex: 5511999999999
const WHATSAPP_NUMBER = "5500000000000";

const WHATSAPP_MESSAGES = {
  coach: "Oi, Raffa! Vim pelo seu site e quero saber mais sobre o Coach 1:1.",
  analise: "Oi, Raffa! Vim pelo seu site e quero fazer uma Análise de Gameplay.",
  tatica: "Oi, Raffa! Vim pelo seu site e quero minha Tática Certa.",
};

function buildWhatsAppLink(key) {
  const msg = WHATSAPP_MESSAGES[key] || "Oi, Raffa! Vim pelo seu site.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
