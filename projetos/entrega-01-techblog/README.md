# Entrega 01 — Home Page TechBlog

Home page semântica construída na aula prática de HTML5. Tema livre; a estrutura e os elementos são obrigatórios.

## Como rodar

Abra o `index.html` no navegador. Não há build nem dependências.

## O que já está implementado

| Requisito | Status | Onde |
|-----------|--------|------|
| 1. Esqueleto HTML5 completo | OK | `!DOCTYPE`, `html`, `head`, `body` |
| 2. Metadados no head | OK | `charset`, `viewport`, `title`, `description`, `favicon` |
| 3. Cabeçalho com título e menu | OK | `header` > `h1` + `nav` > `ul` > `li` > `a` |
| 4. Conteúdo principal com 2+ seções | OK | `main` com 4 `section` (`#inicio`, `#destaques`, `#sobre`, `#contato`) |
| 5. Imagem com legenda | OK | `figure` + `img` + `figcaption` na section `#inicio` |
| 6. Pelo menos 1 lista | OK | `ol` no article de ferramentas, `ul` no menu e no contato |
| 7. Tabela com thead e tbody | OK | tabela da equipe na section `#sobre` |
| 8. Links internos e externos | OK | âncoras do menu, `mailto:`, `tel:`, GitHub externo |
| 9. Formatação de texto | **parcial** | tem `strong` e `em`; falta `mark` |
| 10. Rodapé com copyright | OK | `footer` com `&copy;` e `small` |

## Pendências

- [ ] **Adicionar `<mark>`** em algum trecho — requisito 9 pede `strong`, `em` **e** `mark`.
- [ ] **Criar as 3 páginas linkadas**: `artigo-ia.html`, `artigo-html-css.html`, `artigo-ferramentas.html`. Hoje os links "Leia mais" apontam para arquivos inexistentes. A Entrega 01 exige no mínimo 3 páginas HTML conectadas.
- [ ] **Adicionar `banner-tech.jpg`** na pasta do projeto (ou ajustar o `src`) — a imagem está referenciada mas não existe.
- [ ] **Criar `style.css`** — o `<link rel="stylesheet">` aponta para um arquivo que ainda não existe.
- [ ] **Adicionar `favicon.ico`** ou remover a linha do `<link rel="icon">`.
- [ ] **Adicionar `rel="noopener noreferrer"`** no link externo do GitHub que usa `target="_blank"`.

## Desafios extras (bônus)

| Desafio | O que exercita |
|---------|----------------|
| Vídeo do YouTube incorporado via `iframe` | multimídia e incorporação |
| Segunda página (`sobre.html`) linkada com a home | navegação entre páginas |
| `<details>` + `<summary>` para criar um FAQ | tags HTML5 interativas |
| Vincular `style.css` e aplicar cores ao header | integração HTML + CSS |

## Estrutura alvo

```
entrega-01-techblog/
├── index.html
├── artigo-ia.html            (pendente)
├── artigo-html-css.html      (pendente)
├── artigo-ferramentas.html   (pendente)
├── style.css                 (pendente)
├── favicon.ico               (pendente)
└── img/
    └── banner-tech.jpg       (pendente)
```

## Checklist de revisão antes de entregar

1. Todas as tags possuem fechamento?
2. Existe apenas um `<h1>`?
3. Todas as imagens possuem `alt`?
4. Os links internos apontam para IDs existentes?
5. O `<title>` é descritivo?
