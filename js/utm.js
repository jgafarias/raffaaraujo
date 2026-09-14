// Preserva utm_source/medium/campaign/content/term entre a Home e /manual,
// e repassa para o checkout da Kiwify.
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

function captureUTMs() {
  const params = new URLSearchParams(window.location.search);
  const found = {};
  let hasAny = false;
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) {
      found[key] = value;
      hasAny = true;
    }
  });
  if (hasAny) {
    sessionStorage.setItem("raffa_utms", JSON.stringify(found));
  }
  return hasAny ? found : readStoredUTMs();
}

function readStoredUTMs() {
  try {
    return JSON.parse(sessionStorage.getItem("raffa_utms") || "{}");
  } catch (e) {
    return {};
  }
}

function appendUTMs(url) {
  const utms = readStoredUTMs();
  const keys = Object.keys(utms);
  if (keys.length === 0) return url;
  const u = new URL(url, window.location.origin);
  keys.forEach((k) => u.searchParams.set(k, utms[k]));
  return u.toString();
}
