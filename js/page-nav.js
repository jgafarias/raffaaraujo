// Indicador de scroll (pontos fixos à direita, desktop).
// Destaca o ponto correspondente à seção visível conforme o usuário rola a página.
function wirePageNav() {
  const dots = document.querySelectorAll(".page-navigation a");
  if (!dots.length) return;

  const sections = [...dots]
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const headerH = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
    10
  ) || 76;

  function updateActive() {
    let current = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= headerH + 10) {
        current = section;
      }
    });
    dots.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${current.id}`);
    });
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
}
