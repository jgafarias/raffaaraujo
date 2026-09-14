# Site Raffa Araújo — Coach dos Jogadores Casuais

Site estático (HTML/CSS/JS puro, sem build). Baseado no `Briefing_Oficial_Site_Raffa_Araujo.docx`.

## Estrutura
- `index.html` — Home
- `manual.html` — página de vendas do Manual do Jogador Casual (`/manual`)
- `assets/favicon.svg` — favicon provisório (monograma "RA")

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
- `js/utm.js` — captura/propagação de UTMs entre páginas e checkout
- `js/tracking.js` — eventos GA4 (`trackEvent`) e Meta Pixel (`trackMetaStandard`)
- `js/cta.js` — conecta os botões de WhatsApp/checkout às funções acima
- `js/mobile-menu.js` — menu hambúrguer
- `js/page-nav.js` — destaque do indicador de scroll conforme a seção visível
- `js/main.js` — ponto de entrada (`DOMContentLoaded`), sempre carregado por último

Ao adicionar algo novo: se for específico de uma página, vai em `home.css`/`manual.css`; se for usado nas duas, vai em `components.css`. Evite voltar a empilhar tudo num arquivo só.

## O que precisa ser substituído antes de publicar

Marcado no código com `[ ... ]` ou comentários `TODO`:

1. ~~**Fotos do Raffa**~~ — `assets/1.jpeg` já está em uso no Hero e nas seções "Por que o Raffa" / "Quem é o Raffa". Trocar por outra foto (ou adicionar mais variações) sempre que quiser.
2. **Depoimentos/resultados** — os cards em "Resultados" (Home e /manual) têm texto `[Espaço reservado...]`. Trocar por depoimentos reais autorizados.
3. **Número de WhatsApp** — em `js/whatsapp.js`, constante `WHATSAPP_NUMBER`. Trocar `"5500000000000"` pelo número comercial real.
4. **Link de checkout da Kiwify** — em `manual.html`, os dois links `data-checkout="manual"` apontam para `https://pay.kiwify.com.br/SEU-LINK-AQUI`. Trocar pelo link real.
5. **Domínio/OG** — meta tags `og:url` assumem `https://raffaaraujo.com.br`. Ajustar se o domínio final for outro.
6. **Imagem de Open Graph** — `assets/og-image.jpg` é referenciada mas ainda não existe; adicionar uma imagem (1200x630px) para preview em redes sociais.
7. **Módulos do Manual** — a lista em `manual.html#modulos` é um rascunho de exemplo; confirmar com o Raffa a estrutura real do curso antes de publicar.
8. **Analytics** — em `index.html` (e `manual.html`) há blocos comentados para Google Analytics 4 e Meta Pixel. Descomentar e inserir os IDs reais quando as contas estiverem prontas.

## Rodando localmente

Qualquer servidor estático funciona, por exemplo:

```bash
npx serve .
```

Depois abra `http://localhost:3000`. Também funciona abrindo `index.html`/`manual.html` direto no navegador (duplo clique), sem precisar de servidor.

## Deploy sugerido

Como é HTML/CSS/JS puro, pode ser hospedado em qualquer serviço de arquivos estáticos (Vercel, Netlify, Hostinger, etc.) apontando o domínio `raffaaraujo.com.br` para a pasta `site/`.
