# 07 — Semântica HTML5

## A revolução semântica

O HTML5 introduziu tags que dão **significado** à estrutura da página. Em vez de usar `<div>` para tudo, usamos elementos que descrevem o papel de cada área.

Semântica comunica significado estrutural para navegadores, mecanismos de busca e tecnologias assistivas — transcende a aparência.

## As tags semânticas

| Tag | Função | Onde usar |
|-----|--------|-----------|
| `<header>` | cabeçalho da página ou seção | logo, título, navegação principal |
| `<nav>` | bloco de navegação | menu principal, breadcrumbs |
| `<main>` | conteúdo principal (**único por página**) | área central da página |
| `<section>` | seção temática do conteúdo | blocos com título próprio |
| `<article>` | conteúdo independente/reutilizável | posts, cards, notícias |
| `<aside>` | conteúdo lateral/complementar | sidebar, banners, links relacionados |
| `<footer>` | rodapé da página ou seção | copyright, contato, links secundários |
| `<figure>` | conteúdo ilustrativo com legenda | imagens, gráficos, diagramas |

### `<section>` × `<article>`

A regra prática: um `<article>` faria sentido **sozinho**, fora da página — um post de blog, uma notícia, um card de produto. Uma `<section>` é um agrupamento temático que só faz sentido no contexto da página.

Toda `<section>` deve ter um título próprio (`<h2>`, `<h3>`…). Se você não consegue dar um título a ela, provavelmente queria uma `<div>`.

### E a `<div>`?

`<div>` e `<span>` continuam válidos e necessários — são elementos **não-semânticos**, usados para agrupamento e estilização quando nenhuma tag semântica descreve o papel do bloco. `<div>` é bloco; `<span>` é inline.

Semântica não elimina `<div>`. Ela evita a "div soup" — páginas inteiras montadas só com divs, ilegíveis para máquinas e humanos.

---

## Mapa visual da estrutura

```
┌─────────────────────────────────────────────┐
│ <header>                                    │
│   Logo  | <nav> Início | Sobre | Contato </nav> │
│ </header>                                   │
├─────────────────────────────────────────────┤
│ <main>                                      │
│   ┌──────────────────────┐ ┌──────────────┐ │
│   │ <section>            │ │ <aside>      │ │
│   │   <article> Post 1   │ │   Links      │ │
│   │   </article>         │ │   relacionados│ │
│   │   <article> Post 2   │ │              │ │
│   │   </article>         │ │ </aside>     │ │
│   │ </section>           │ └──────────────┘ │
│   └──────────────────────┘                  │
│ </main>                                     │
├─────────────────────────────────────────────┤
│ <footer>  © 2026 | Redes Sociais | Contato  │
│ </footer>                                   │
└─────────────────────────────────────────────┘
```

---

## Por que usar tags semânticas

Três benefícios, sempre citados juntos:

1. **Acessibilidade** — leitores de tela entendem a estrutura e oferecem navegação por regiões (pular direto para o conteúdo principal, para o menu etc.).
2. **SEO** — mecanismos de busca indexam melhor o conteúdo quando entendem o que é título, o que é navegação e o que é conteúdo principal.
3. **Manutenibilidade** — código mais legível para outros devs e para você no futuro.

### O que a semântica **não** faz

- Não deixa a página bonita — isso é CSS.
- Não elimina a necessidade de outras tags.
- Não valida formulários automaticamente.
- Não incorpora multimídia — isso é `<video>`, `<audio>`, `<canvas>`, `<svg>`.

---

## Regras de uso

- **Um `<main>` por documento.** Ele marca o conteúdo que é o propósito da página.
- **Um `<h1>` por página.** É o título principal.
- `<header>` e `<footer>` podem se repetir dentro de `<article>` e `<section>` — não são exclusivos da página.
- Use `id` nas `<section>` para permitir navegação por âncora a partir do menu.

```html
<nav>
    <ul><li><a href="#sobre">Sobre</a></li></ul>
</nav>
...
<section id="sobre">
    <h2>Sobre</h2>
</section>
```
