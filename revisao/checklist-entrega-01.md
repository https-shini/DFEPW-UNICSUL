# Checklist — Entrega 01

Atividade de laboratório: construir uma Home Page usando tudo que foi apresentado na aula. **O tema é livre, mas a estrutura e os elementos são obrigatórios.**

## Requisitos obrigatórios

| # | Requisito | Tag(s) esperada(s) | ✔ |
|---|-----------|--------------------|---|
| 1 | Esqueleto HTML5 completo | `!DOCTYPE`, `html`, `head`, `body` | ☐ |
| 2 | Metadados no head (charset, viewport, title) | `meta`, `title` | ☐ |
| 3 | Cabeçalho com título e menu | `header`, `h1`, `nav`, `ul`, `li`, `a` | ☐ |
| 4 | Conteúdo principal com pelo menos 2 seções | `main`, `section`, `h2` | ☐ |
| 5 | Pelo menos 1 imagem com legenda | `figure`, `img`, `figcaption` | ☐ |
| 6 | Pelo menos 1 lista (ordenada ou não) | `ul`/`ol`, `li` | ☐ |
| 7 | Pelo menos 1 tabela com thead e tbody | `table`, `thead`, `tbody`, `tr`, `th`, `td` | ☐ |
| 8 | Links internos (âncoras) e externos | `a href` | ☐ |
| 9 | Formatação de texto | `strong`, `em`, `mark` | ☐ |
| 10 | Rodapé com copyright | `footer`, `small`, `&copy;` | ☐ |

## Requisitos do projeto (Entrega 01 completa)

- ☐ Estrutura HTML5 semântica sólida
- ☐ **No mínimo 3 páginas HTML conectadas**
- ☐ Hierarquia de títulos lógica (h1 → h2 → h3, sem saltos)
- ☐ Uso obrigatório de imagens integradas ao layout

## Requisitos de qualidade (perfil profissional)

- ☐ **Responsividade** — mobile-first, breakpoints, mídia adaptável
- ☐ **Desempenho** — carregamento abaixo de 5 segundos, lazy loading
- ☐ **Acessibilidade** — WCAG 2.1 nível AA
- ☐ **Segurança e validação** — inputs HTML5 e regex no cliente
- ☐ **SEO** — meta tags ricas e semântica correta

## Desafios extras (bônus)

| Desafio | O que exercita |
|---------|----------------|
| Vídeo do YouTube incorporado via `iframe` | multimídia e incorporação |
| Segunda página (`sobre.html`) linkada com a home | navegação entre páginas |
| `<details>` + `<summary>` para criar um FAQ | tags HTML5 interativas |
| Vincular `style.css` e aplicar cores ao header | integração HTML + CSS |

---

## Checklist final de revisão

Antes de entregar, verifique:

1. ☐ Todas as tags possuem fechamento?
2. ☐ Existe apenas um `<h1>` por página?
3. ☐ Todas as imagens possuem `alt` descritivo?
4. ☐ Os links internos apontam para IDs que existem?
5. ☐ O `<title>` é descritivo?
6. ☐ A página passa no validador do W3C?
7. ☐ A navegação funciona só com a tecla TAB?
8. ☐ Os arquivos referenciados (CSS, imagens, favicon) realmente existem?
9. ☐ Nomes de arquivo em minúsculas, sem acentos e sem espaços?

---

## Referência rápida — tags essenciais

**Estrutura:** `html`, `head`, `body`, `meta`, `title`, `link`
**Semântica:** `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `figure`
**Texto:** `h1`–`h6`, `p`, `br`, `hr`, `strong`, `em`, `mark`, `small`, `blockquote`
**Listas:** `ul`, `ol`, `li`, `dl`, `dt`, `dd`
**Tabela:** `table`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`
**Mídia:** `img`, `video`, `audio`, `source`, `iframe`, `figure`, `figcaption`
**Links:** `a` (`href`, `target`)
**Formulário:** `form`, `fieldset`, `legend`, `label`, `input`, `select`, `optgroup`, `option`, `textarea`, `button`
