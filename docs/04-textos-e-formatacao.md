# 04 — Textos, Títulos e Formatação

Usar os elementos corretos garante acessibilidade e SEO. A tag escolhida comunica *importância*, não aparência — aparência é trabalho do CSS.

## Hierarquia de títulos (h1 a h6)

```html
<!-- h1 = título principal (use UMA VEZ por página) -->
<h1>Título Principal da Página</h1>

<!-- h2 = subtítulos (seções) -->
<h2>Seção Importante</h2>

<!-- h3 = subdivisões dentro de uma seção -->
<h3>Subtópico</h3>

<!-- h4, h5, h6 = níveis adicionais (uso raro) -->
<h4>Detalhe</h4>
```

### Erro comum

Nunca pule níveis de título por estética — ir de `h1` direto para `h4` porque "o h4 é menor" quebra a estrutura do documento. A hierarquia deve ser lógica: h1 → h2 → h3. Para mudar a aparência, use CSS.

Leitores de tela navegam pelos títulos como um índice. Uma hierarquia quebrada é um índice quebrado.

---

## Parágrafos e quebras

```html
<!-- Parágrafos: bloco de texto com espaçamento automático -->
<p>Este é um parágrafo. O navegador adiciona espaço acima e abaixo.</p>
<p>Este é outro parágrafo, separado do anterior.</p>

<!-- Quebra de linha dentro de um parágrafo -->
<p>Linha 1<br>Linha 2 (sem criar novo parágrafo)</p>

<!-- Linha horizontal (separador temático) -->
<hr>
```

Não use `<br>` repetido para criar espaçamento. Espaçamento é CSS (`margin`, `padding`).

---

## Formatação semântica inline

```html
<p>
    Texto <strong>muito importante</strong> (negrito semântico).
    Texto com <em>ênfase</em> (itálico semântico).
    Texto <mark>destacado</mark> (marca-texto).
    Texto <small>menor</small> (letra miúda).
</p>
```

| Tag | Propósito | Visual padrão |
|-----|-----------|---------------|
| `<strong>` | importância semântica forte | negrito |
| `<em>` | ênfase semântica | itálico |
| `<mark>` | texto em destaque | fundo amarelo |
| `<small>` | texto secundário/legal | fonte menor |
| `<del>` | texto removido/riscado | tachado |
| `<sub>` / `<sup>` | subscrito / sobrescrito | H₂O / X² |
| `<blockquote>` | citação em bloco | recuado |
| `<code>` | código/monospace inline | fonte monoespaçada |
| `<pre>` | texto pré-formatado | preserva espaços e quebras |

### `<strong>` × `<b>`, `<em>` × `<i>`

`<b>` e `<i>` são puramente visuais — herança do HTML antigo. `<strong>` e `<em>` carregam significado: um leitor de tela muda a entonação. Prefira sempre os semânticos.

---

## Entidades HTML

Alguns caracteres precisam ser escritos por código:

```html
&copy;   <!-- © -->
&amp;    <!-- & -->
&lt;     <!-- < -->
&gt;     <!-- > -->
&nbsp;   <!-- espaço não-quebrável -->
```

O `&lt;` e `&gt;` são indispensáveis quando você quer *mostrar* código HTML na página em vez de executá-lo.
