# Site Raffa Araújo — Coach dos Jogadores Casuais

Site estático (HTML/CSS/JS puro, sem build). Baseado no `Briefing_Oficial_Site_Raffa_Araujo.docx`.

## Estrutura
- `index.html` — Home
- `manual.html` — página principal do Manual e destino dos links internos
- `manual/index.html` — rota adicional para publicação em `/manual/`
- `assets/favicon.svg` — favicon provisório (monograma "RA")
- `assets/og-image.png` — imagem de compartilhamento social

CSS modular (cada página carrega só o que usa, nessa ordem):
- `css/variables.css` — tokens de design (cores, fontes, espaçamentos)
- `css/base.css` — reset, layout base, tipografia, botões, utilitários
- `css/header.css` — cabeçalho, navegação e menu mobile
- `css/page-nav.css` — indicador de scroll (pontos fixos à direita, desktop)
- `css/components.css` — componentes usados nas duas páginas (resultados, bio, FAQ, footer, barra fixa de WhatsApp)
- `css/home.css` — específico da Home (hero, produtos, metodologia, frase, CTA final)
- `css/manual.css` — específico do `/manual` (dor, método, oferta, etc.)
- `css/responsive.css` — breakpoints (768px, 1100px); sempre por último no `<head>`

JS modular (scripts comuns, sem build e sem `import`/`export` — funcionam mesmo abrindo o `.html` direto no navegador. A ordem no `<head>`/`<body>` importa, pois cada arquivo usa funções definidas no anterior):
- `js/whatsapp.js` — número e mensagens pré-preenchidas
- `js/config.js` — WhatsApp, checkout, GA4 e Meta Pixel em um único lugar
- `js/utm.js` — captura/propagação de UTMs entre páginas e checkout
- `js/tracking.js` — eventos GA4 (`trackEvent`) e Meta Pixel (`trackMetaStandard`)
- `js/consent.js` — consentimento prévio para ferramentas de mensuração
- `js/cta.js` — conecta os botões de WhatsApp/checkout às funções acima
- `js/mobile-menu.js` — menu hambúrguer
- `js/page-nav.js` — destaque do indicador de scroll conforme a seção visível
- `js/main.js` — ponto de entrada (`DOMContentLoaded`), sempre carregado por último

Ao adicionar algo novo: se for específico de uma página, vai em `home.css`/`manual.css`; se for usado nas duas, vai em `components.css`. Evite voltar a empilhar tudo num arquivo só.

## O que precisa ser substituído antes de publicar

Marcado no código com `[ ... ]` ou comentários `TODO`:

1. ~~**Fotos do Raffa**~~ — `assets/1.jpeg` já está em uso no Hero e nas seções "Por que o Raffa" / "Quem é o Raffa". Trocar por outra foto (ou adicionar mais variações) sempre que quiser.
2. **Depoimentos/resultados** — as seções estão ocultas até existirem depoimentos reais autorizados.
3. **Número de WhatsApp** — preencher `whatsappNumber` em `js/config.js` no formato internacional.
4. **Link de checkout da Kiwify** — preencher `checkoutManual` em `js/config.js`.
5. **Domínio/OG** — meta tags `og:url` assumem `https://raffaaraujo.com.br`. Ajustar se o domínio final for outro.
6. ~~**Imagem de Open Graph**~~ — `assets/og-image.png` criada e configurada.
7. **Módulos do Manual** — a página apresenta pilares gerais; substituir pela grade confirmada quando disponível.
8. **Analytics** — preencher `ga4MeasurementId` e/ou `metaPixelId` em `js/config.js`; o carregamento ocorrerá somente após consentimento.

## Rodando localmente

Qualquer servidor estático funciona, por exemplo:

```bash
npx serve .
```

Depois abra `http://localhost:3000`. Também funciona abrindo `index.html`/`manual.html` direto no navegador (duplo clique), sem precisar de servidor.

## Deploy sugerido

Como é HTML/CSS/JS puro, pode ser hospedado em qualquer serviço de arquivos estáticos (Vercel, Netlify, Hostinger, etc.) apontando o domínio `raffaaraujo.com.br` para a pasta `site/`.
