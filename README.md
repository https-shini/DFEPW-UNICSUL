# Desenvolvimento Front-End para Web

Repositório de estudos da disciplina **Desenvolvimento Front-End para Web** — Universidade Cruzeiro do Sul (UNICSUL), 2º semestre de 2026.
Professor: Marcos Venícios Araújo.

Reúne as anotações consolidadas das aulas, os projetos práticos e o material de revisão da **Unidade I — Fundamentos da Web e Estruturação de Interfaces**.

---

## Estrutura

```
front-end-web/
├── README.md
├── docs/                          # conteúdo teórico, um arquivo por tema
│   ├── 01-ementa-e-roadmap.md
│   ├── 02-fundamentos-da-web.md
│   ├── 03-html5-fundamentos.md
│   ├── 04-textos-e-formatacao.md
│   ├── 05-links-e-navegacao.md
│   ├── 06-listas-e-tabelas.md
│   ├── 07-semantica-html5.md
│   ├── 08-multimidia-e-graficos.md
│   ├── 09-formularios-e-validacao.md
│   ├── 10-acessibilidade-e-boas-praticas.md
│   ├── 11-ambiente-e-organizacao.md
│   └── 12-referencias.md
├── projetos/
│   ├── entrega-01-techblog/       # home page semântica (aula prática)
│   └── formulario-ong/            # formulário de cadastro + CSS
├── revisao/
│   ├── checklist-entrega-01.md
│   ├── banco-de-questoes.md
│   └── glossario.md
└── material-original/             # PDFs das aulas e do Blackboard
```

## Índice do conteúdo

| # | Documento | Assunto |
|---|-----------|---------|
| 01 | [Ementa e roadmap](docs/01-ementa-e-roadmap.md) | objetivos da disciplina, 12 unidades, requisitos de qualidade |
| 02 | [Fundamentos da web](docs/02-fundamentos-da-web.md) | front vs back-end, HTTP/HTTPS, URL, DNS, registro de domínio |
| 03 | [HTML5 — fundamentos](docs/03-html5-fundamentos.md) | o que é HTML, anatomia da tag, boilerplate, hierarquia |
| 04 | [Textos e formatação](docs/04-textos-e-formatacao.md) | h1–h6, parágrafos, formatação semântica inline |
| 05 | [Links e navegação](docs/05-links-e-navegacao.md) | `<a>`, âncoras, mailto/tel, caminhos absolutos e relativos |
| 06 | [Listas e tabelas](docs/06-listas-e-tabelas.md) | ul, ol, dl, listas aninhadas, table completa |
| 07 | [Semântica HTML5](docs/07-semantica-html5.md) | header, nav, main, section, article, aside, footer |
| 08 | [Multimídia e gráficos](docs/08-multimidia-e-graficos.md) | img, video, audio, iframe, object, canvas, SVG |
| 09 | [Formulários e validação](docs/09-formularios-e-validacao.md) | inputs HTML5, pattern, required, client vs server-side |
| 10 | [Acessibilidade e boas práticas](docs/10-acessibilidade-e-boas-praticas.md) | WCAG 2.1 AA, leitores de tela, navegação por teclado |
| 11 | [Ambiente e organização](docs/11-ambiente-e-organizacao.md) | VS Code, Emmet, servidores locais, árvore de pastas |
| 12 | [Referências](docs/12-referencias.md) | bibliografia e material complementar |

## Projetos

| Projeto | Descrição | Status |
|---------|-----------|--------|
| [entrega-01-techblog](projetos/entrega-01-techblog/) | Home page semântica com header, main, sections, tabela e footer | em andamento |
| [formulario-ong](projetos/formulario-ong/) | Formulário de cadastro de voluntários com fieldset, labels e CSS | concluído (com melhorias pendentes) |

## Revisão

- [Checklist da Entrega 01](revisao/checklist-entrega-01.md) — os 10 requisitos obrigatórios da atividade de laboratório
- [Banco de questões](revisao/banco-de-questoes.md) — questões da Unidade I com gabarito comentado
- [Glossário](revisao/glossario.md) — termos e siglas da disciplina

---

## Como usar

Os arquivos de `docs/` são independentes entre si e podem ser lidos em qualquer ordem, mas seguem a mesma sequência das aulas. Cada um traz a explicação do conceito, o código de referência e os erros comuns.

Os projetos em `projetos/` rodam abrindo o `index.html` direto no navegador — não há build nem dependências.

> **Nota:** este é um repositório de estudos pessoal. As anotações são reescritas com minhas próprias palavras a partir das aulas; os PDFs originais ficam em `material-original/` apenas para consulta.
