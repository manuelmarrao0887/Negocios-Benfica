# ProofStudio — Portfólio de Rebuild de Websites

Rebuild de **13 websites** de negócios da zona da **Calçada do Tojal** (Benfica / Carnide, Lisboa),
apresentados num **portfólio em grelha** com a marca **ProofStudio**. Cada negócio tem um site
multi-página completo, com identidade visual própria ao seu setor.

## Como correr

```bash
npm install
npm run dev      # http://localhost:5173
```

Outros comandos:

```bash
npm run build    # build de produção (dist/)
npm run preview  # servir o build
node scripts/ssr-smoke.mjs   # smoke test: renderiza todas as páginas e reporta erros
```

## Estrutura

```
src/
  App.jsx                 Router principal (/ → portfólio, /site/:slug/* → site)
  portfolio/              Página de seleção (grelha) com branding ProofStudio
    Portfolio.jsx
    SiteCard.jsx          Cartão com mini-mockup do site (paleta + fonte da marca)
  shared/                 Kit partilhado (NÃO duplicar)
    utils.js              cn(), siteLink(slug, sub)
    hooks.js              useReveal, usePageMeta, useScrolled
    Reveal.jsx            <Reveal> — animação de entrada no scroll
    SiteHost.jsx          Monta cada site + botão "Voltar ao portfólio"
    ScrollToTop.jsx
  sites/
    registry.jsx          META (dados da grelha) + APPS (lazy imports dos sites)
    <slug>/               Um site auto-contido por negócio
      data.jsx            Conteúdo + ícones
      Layout.jsx          Header sticky + menu mobile + footer (<Outlet/>)
      index.jsx           <Routes> do site (default export)
      pages/              Home + Serviços/Projetos/Imóveis + Sobre + Contacto
```

### Adicionar / ligar um site

1. O site vive em `src/sites/<slug>/` e faz `export default` de um componente com `<Routes>`.
2. Liga-se na grelha adicionando uma linha ao objeto `APPS` em `src/sites/registry.jsx`:
   ```js
   '<slug>': lazy(() => import('./<slug>/index.jsx')),
   ```
   Sem essa linha, o cartão aparece mas mostra "em construção".

## Stack

React 18 · Vite 6 · React Router 6 · Tailwind CSS 3 · lucide-react (ícones).
17 pares de fontes Google carregados em `index.html`; cada site usa a sua via utilitários
`font-<nome>` definidos em `tailwind.config.js`.

## Os 13 negócios

| Negócio | Slug | Setor | Domínio |
|---|---|---|---|
| Filipitsch — Terapia Activa | `filipitsch` | Terapia & Bem-estar | filipitsch.pt |
| Reparação TV Lisboa | `reparacao-tv-lisboa` | Reparação de TV | reparacaotvlisboa.pt |
| Pedrita Studio | `pedrita-studio` | Estúdio de Design | pedrita.net |
| Técnico Frio | `tecnico-frio` | Frio & Ar Condicionado | tecnicofrio.pt |
| Nipolândia | `nipolandia` | Climatização AVAC | nipolandia.pt |
| Farol Vibrante — Construções LSF | `farol-vibrante` | Construção LSF | farolvibrante.pt |
| Fornoportugal — Refractários | `fornoportugal` | Refractários Industriais | fornoportugal.com |
| IRI — Isolamentos e Revestimentos | `iri` | Isolamentos & Revestimentos | iri.pt |
| Conta 100% — Contabilidade | `conta-100` | Contabilidade | contacemporcento.pt |
| Rui Dinis, Lda. | `rui-dinis` | Eletrónica Industrial | ruidinis.com |
| DoubleSpace Beauty Salon | `doublespace` | Salão de Beleza | double-space.eu |
| Linda Mulher Studio | `linda-mulher` | Extensões Capilares | lindamulherstudio.com |
| Imobenfica by Marta Pereira | `imobenfica` | Imobiliária | imobenfica.pt |

## Notas sobre os conteúdos

- O conteúdo de cada site baseia-se em **pesquisa pública** de cada negócio (sites atuais, Google,
  redes sociais, registos). **Factos a confirmar com cada cliente antes de publicar.**
- **Não foram inventados** telefones, emails, preços ou testemunhos. Onde existiam avaliações reais
  (ex.: **Nipolândia**, **Imobenfica**) são usadas textualmente e atribuídas; onde não existiam,
  usaram-se secções de confiança (valores, certificações, marcas, estatísticas) em vez de reviews falsas.
- **Imagens** são placeholders (`picsum.photos`) em blocos de galeria/portfólio, claramente
  ilustrativos — a substituir por fotografias reais de cada negócio.
- Alguns dados ficaram por confirmar (ex.: código postal exato da Filipitsch, morada da Técnico Frio,
  horários de vários negócios, contactos da Pedrita e Farol Vibrante). Estão assinalados de forma
  conservadora, sem invenção.

---

Redesenhado por **ProofStudio** · 2025
