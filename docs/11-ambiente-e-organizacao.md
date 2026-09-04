# 11 — Ambiente de Desenvolvimento e Organização

## A estação de trabalho

| Categoria | Ferramenta | Papel |
|-----------|-----------|-------|
| **Editores de código (IDEs)** | VS Code, Notepad++, Brackets | onde escrevemos |
| **Motores de renderização** | Chrome, Firefox, Edge | onde testamos |
| **Servidores locais** | WAMP Server (opcional) | simulação de back-end |

Mantenha os navegadores sempre nas últimas versões — recursos do HTML5 e CSS3 dependem disso.

---

## VS Code

Padrão de mercado: leve, extensível e integra terminal e Git nativamente.

### Emmet — atalhos essenciais

O Emmet vem embutido no VS Code. Digite a abreviação e pressione `Tab`.

| Abreviação | Gera |
|------------|------|
| `!` ou `html:5` | esqueleto HTML5 completo |
| `ul>li*5` | uma `<ul>` com 5 `<li>` |
| `div.container` | `<div class="container">` |
| `div#header` | `<div id="header">` |
| `p*3` | três parágrafos |
| `a[href=#]` | `<a href="#"></a>` |
| `table>thead>tr>th*3` | estrutura de tabela com 3 colunas |
| `lorem20` | 20 palavras de texto lorem ipsum |

Operadores: `>` filho, `+` irmão, `*` multiplicação, `^` sobe um nível, `{}` conteúdo de texto.

### Extensões úteis

- **Live Server** — recarrega o navegador automaticamente ao salvar.
- **Prettier** — formatação automática de código.
- **Auto Rename Tag** — renomeia a tag de fechamento junto com a de abertura.
- **HTML CSS Support** — autocomplete de classes CSS no HTML.

---

## Arquitetura do projeto

> Uma estrutura bem organizada é a diferença entre um projeto que escala e um que se torna inviável. — Duckett (2014, p. 15)

### Padrão de pastas

```
meu-projeto/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── img/
│   └── logo.png
├── assets/
│   ├── fonts/
│   └── icons/
└── docs/
    └── README.md
```

### Regras

- `index.html` **sempre na raiz** — é o arquivo que o servidor entrega por padrão ao acessar o domínio.
- Uma pasta por tipo de recurso.
- Nomes em minúsculas, sem acentos, sem espaços.
- Caminhos relativos entre os arquivos do projeto.

Essa organização parece exagero em um projeto de três arquivos. Ela existe para o projeto de trezentos.

---

## Primeiros passos (roteiro da aula)

1. Crie uma pasta `aula-01` e abra no VS Code.
2. Crie um arquivo `index.html`.
3. Digite `!` e pressione `Enter`/`Tab` para gerar a base.
4. Entre as tags `<body>`, adicione `<h1>Bem-vindo ao Front-End Web!</h1>` e salve (`Ctrl+S`).
5. Abra o arquivo no navegador (ou use o Live Server).

---

## Servidor local: quando precisa?

Para HTML, CSS e JS puros, abrir o arquivo direto (`file://`) funciona. Você vai precisar de um servidor local quando:

- Usar `fetch()` ou requisições AJAX (bloqueadas em `file://` por CORS).
- Testar caminhos absolutos a partir da raiz (`/css/style.css`).
- Simular back-end com PHP (WAMP/XAMPP).
- Trabalhar com módulos JavaScript (`type="module"`).

A alternativa mais simples é a extensão Live Server do VS Code.
