# 03 — HTML5: Fundamentos

## O que significa HTML

| Letra | Significa | O que quer dizer |
|-------|-----------|------------------|
| **HT** | HyperText | textos interligados por links da web |
| **M** | Markup | usa etiquetas (*tags*) para estruturar títulos, parágrafos, imagens |
| **L** | Language | possui sintaxe e regras próprias |

HTML **não é linguagem de programação** — é linguagem de marcação. Não tem `if`, `else`, laços nem variáveis. Ela define a estrutura e o significado do conteúdo, não a lógica.

O HTML5 é a versão moderna, focada em **marcação semântica**: informar significado, não apenas aparência. Criado em 1989 por Tim Berners-Lee.

## A metáfora do corpo

| Tecnologia | Papel | Analogia |
|------------|-------|----------|
| **HTML5** | estrutura e significado | esqueleto |
| **CSS3** | formatação visual, cores, layout, responsividade | pele e roupas |
| **JavaScript** | movimento e comportamento, reação às ações do usuário | músculos |

---

## Anatomia de uma tag

```html
<p class="destaque">Olá Mundo</p>
```

| # | Elemento | Descrição |
|---|----------|-----------|
| 1 | `<p>` | **tag de abertura** — inicia o elemento, pode conter atributos |
| 2 | `class="destaque"` | **atributo** — informação extra, no formato `nome="valor"` |
| 3 | `Olá Mundo` | **conteúdo visível** |
| 4 | `</p>` | **tag de fechamento** — note a barra obrigatória |

Tags funcionam como *containers*, delimitados por `<` e `>`. Atributos comuns: `class`, `id`, `src`, `href`.

### Tags auto-fechadas (void)

Não carregam conteúdo e dispensam fechamento:

```html
<br>    <!-- quebra de linha -->
<img>   <!-- imagem -->
<hr>    <!-- linha horizontal -->
<meta>  <!-- metadado -->
<link>  <!-- vínculo externo -->
```

> **Regra de ouro:** sempre feche as tags que exigem fechamento. Tags abertas causam problemas de renderização difíceis de rastrear.

---

## O boilerplate obrigatório

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Primeira Página</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Bem-vindo ao HTML5!</h1>
    <p>Este é um parágrafo de exemplo.</p>
</body>
</html>
```

Linha a linha:

- `<!DOCTYPE html>` — avisa o navegador que o documento usa as regras modernas do HTML5. **Sempre a primeira linha.**
- `<html lang="pt-br">` — elemento raiz. O `lang` informa o idioma, o que ajuda acessibilidade (leitores de tela pronunciam corretamente) e SEO.
- `<head>` — o "cérebro". Tudo aqui é invisível ao usuário: metadados, codificação e título da aba.
- `<meta charset="UTF-8">` — codificação que suporta acentos, cedilha e caracteres especiais.
- `<meta name="viewport" ...>` — garante responsividade em dispositivos móveis.
- `<title>` — texto da aba do navegador e dos resultados de busca.
- `<body>` — o "corpo". Todo conteúdo visualmente perceptível vai exclusivamente aqui.

### Metadados adicionais úteis

```html
<meta name="description" content="Descrição que aparece nos resultados de busca.">
<link rel="icon" href="favicon.ico">
```

---

## Resumo da hierarquia

| Elemento | O que faz | Obrigatório? |
|----------|-----------|--------------|
| `<!DOCTYPE html>` | declara o documento como HTML5 | sim |
| `<html>` | elemento raiz que contém tudo | sim |
| `<head>` | metadados, título, links CSS | sim |
| `<meta charset>` | codificação de caracteres | fortemente recomendado |
| `<title>` | título na aba do navegador | sim |
| `<body>` | todo conteúdo visível da página | sim |

---

## Comentários

```html
<!-- Isto é um comentário. Não aparece na tela. -->
```

Servem para documentar decisões no código. Úteis para você mesmo daqui a seis meses.

---

## Dica de produtividade

No VS Code, digite `!` ou `html:5` e pressione `Tab` para gerar o esqueleto completo automaticamente. O recurso se chama **Emmet Abbreviation** — veja mais em [11-ambiente-e-organizacao.md](11-ambiente-e-organizacao.md).
