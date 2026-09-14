// Indicador de scroll (pontos fixos à direita, desktop e mobile).
// Usa uma linha de leitura dentro do viewport para acompanhar também seções altas.
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
    const readingLine = headerH + (window.innerHeight - headerH) * 0.38;
    let current = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= readingLine && rect.bottom > readingLine;
    });

    if (!current) {
      current = sections.reduce((closest, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - headerH);
        return distance < closest.distance ? { section, distance } : closest;
      }, { section: sections[0], distance: Infinity }).section;
    }

    dots.forEach((a) => {
      const active = a.getAttribute("href") === `#${current.id}`;
      a.classList.toggle("active", active);
      if (active) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive, { passive: true });
  updateActive();
}
