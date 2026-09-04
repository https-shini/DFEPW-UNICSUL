# 06 — Listas e Tabelas

## Listas

O HTML possui **três tipos** de lista. São essenciais para menus de navegação, itens de conteúdo e dados estruturados.

### Lista não-ordenada (`<ul>`)
Quando a ordem **não** importa. Renderiza com marcadores.

```html
<ul>
    <li>Item com marcador</li>
    <li>Outro item</li>
    <li>Mais um item</li>
</ul>
```

### Lista ordenada (`<ol>`)
Quando a ordem **importa** — passos, rankings, cronologia. Renderiza numerada.

```html
<ol>
    <li>Primeiro passo</li>
    <li>Segundo passo</li>
    <li>Terceiro passo</li>
</ol>
```

### Lista de definição (`<dl>`)
Pares de termo e descrição — glossários, FAQs, metadados.

```html
<dl>
    <dt>HTML</dt>
    <dd>Linguagem de marcação para estruturar conteúdo web.</dd>
    <dt>CSS</dt>
    <dd>Linguagem de estilo para apresentação visual.</dd>
</dl>
```

- `<dt>` = *definition term* (o termo)
- `<dd>` = *definition description* (a descrição)

### Listas aninhadas

```html
<ul>
    <li>Front-End
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
</ul>
```

A lista interna vai **dentro** do `<li>` pai, não entre os `<li>`.

> **Atenção de prova:** `<table>` **não** é tag de lista. As tags de lista são `<ul>`, `<ol>`, `<li>` e `<dl>` (com `<dt>` e `<dd>`).

---

## Tabelas

Tabelas servem para exibir **dados tabulares** — nunca para layout. Uma tabela é formada por linhas (`<tr>`) que contêm células de cabeçalho (`<th>`) ou de dados (`<td>`).

```html
<table>
    <!-- Cabeçalho da tabela -->
    <thead>
        <tr>
            <th>Nome</th>
            <th>Curso</th>
            <th>Nota</th>
        </tr>
    </thead>

    <!-- Corpo da tabela -->
    <tbody>
        <tr>
            <td>Ana Silva</td>
            <td>Ciência da Computação</td>
            <td>9.5</td>
        </tr>
        <tr>
            <td>João Santos</td>
            <td>Sistemas de Informação</td>
            <td>8.0</td>
        </tr>
    </tbody>

    <!-- Rodapé (opcional, para totais/resumos) -->
    <tfoot>
        <tr>
            <td colspan="2">Média da Turma</td>
            <td>8.75</td>
        </tr>
    </tfoot>
</table>
```

### Anatomia

| Tag | Função |
|-----|--------|
| `<table>` | container da tabela |
| `<thead>` | agrupa as linhas de cabeçalho |
| `<tbody>` | agrupa as linhas de dados |
| `<tfoot>` | agrupa linhas de resumo/totais |
| `<tr>` | *table row* — uma linha |
| `<th>` | *table header* — célula de cabeçalho (negrito e centralizada por padrão) |
| `<td>` | *table data* — célula de dados |
| `colspan` | mescla células horizontalmente |
| `rowspan` | mescla células verticalmente |

### Por que separar thead/tbody/tfoot

Não é decoração. A separação permite que leitores de tela associem cada dado ao seu cabeçalho, que o navegador role o corpo mantendo o cabeçalho fixo e que o CSS estilize cada região independentemente.

### Erro histórico

Nos anos 1990 e 2000, tabelas eram usadas para montar layouts inteiros de página. Isso é considerado má prática desde então: quebra acessibilidade, atrapalha SEO e torna a manutenção inviável. Layout hoje é Flexbox e Grid.
