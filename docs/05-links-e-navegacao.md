# 05 — Links e Navegação

A tag `<a>` (âncora) é o que torna a web uma *rede* — ela conecta páginas entre si.

## Os cinco tipos de link

```html
<!-- Link externo: abre em nova aba -->
<a href="https://www.google.com" target="_blank">Ir para o Google</a>

<!-- Link interno: navega para outra página do mesmo site -->
<a href="sobre.html">Página Sobre</a>

<!-- Link âncora: navega para um id na MESMA página -->
<a href="#contato">Ir para Contato</a>
<!-- ... mais abaixo na página: -->
<section id="contato">...</section>

<!-- Link para e-mail -->
<a href="mailto:professor@email.com">Enviar E-mail</a>

<!-- Link para telefone (útil em mobile) -->
<a href="tel:+5511999999999">Ligar</a>
```

## Atributos

| Atributo | Função |
|----------|--------|
| `href` | define o destino: URL absoluta, relativa, âncora (`#id`), `mailto:` ou `tel:` |
| `target` | onde abrir — `_blank` abre em nova aba |
| `rel` | relação com o destino; use `noopener noreferrer` junto com `target="_blank"` |
| `title` | texto auxiliar exibido no hover |

---

## Caminhos absolutos × relativos

Considere esta árvore:

```
meu-projeto/
├── index.html
├── css/
├── js/
├── img/
│   └── logo.png
└── assets/
```

### Caminho absoluto
Para acessar arquivos **externos** à nossa estrutura de pastas:

```html
<img src="http://www.cruzeirodosul.edu.br/img/logo.png" />
```

### Caminho relativo
A partir do arquivo atual, navegando na própria árvore:

```html
<img src="img/logo.png" />
```

### Sintaxe de navegação relativa

| Notação | Significado |
|---------|-------------|
| `arquivo.html` | mesmo diretório |
| `pasta/arquivo.html` | desce um nível |
| `../arquivo.html` | sobe um nível |
| `../../arquivo.html` | sobe dois níveis |
| `/arquivo.html` | a partir da raiz do site |

> Prefira caminhos **relativos** para arquivos do próprio projeto. Assim o site funciona igual em `localhost`, em pen drive e em produção, sem reescrever nada.

---

## Menus de navegação

A construção padrão de um menu combina `<nav>` + `<ul>` + `<li>` + `<a>`:

```html
<nav>
    <ul>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#destaques">Destaques</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
    </ul>
</nav>
```

Por que lista? Porque um menu **é** uma lista de opções. A tag `<nav>` marca semanticamente o bloco como navegação principal, e leitores de tela oferecem um atalho direto para ele.

---

## Erros comuns

- Âncora apontando para um `id` que não existe na página — o link simplesmente não faz nada.
- Texto de link genérico ("clique aqui"). Leitores de tela listam os links fora de contexto; o texto precisa descrever o destino sozinho.
- `target="_blank"` sem `rel="noopener"` — brecha de segurança conhecida.
