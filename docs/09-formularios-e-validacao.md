# 09 — Formulários e Validação

Formulários são o principal meio de interação entre usuários e aplicações web. O HTML5 trouxe novos tipos de `input` e atributos de validação nativos.

## Estrutura básica

```html
<form action="/processar" method="post">

    <fieldset>
        <legend>Informações Pessoais</legend>

        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required
               placeholder="Ex: Maria Silva">

        <label for="email">E-mail de Contato:</label>
        <input type="email" id="email" name="email" required>
    </fieldset>

    <button type="submit">Enviar</button>
</form>
```

| Elemento | Função |
|----------|--------|
| `<form>` | container; `action` define para onde vai, `method` define como (GET/POST) |
| `<fieldset>` | agrupa campos relacionados |
| `<legend>` | título do agrupamento |
| `<label for="id">` | rótulo vinculado a um campo |
| `<input>` | campo de entrada |
| `<button type="submit">` | dispara o envio |

### GET × POST

- **GET** — dados vão na query string da URL. Visíveis, limitados em tamanho, cacheáveis. Para buscas e filtros.
- **POST** — dados vão no corpo da requisição. Para envio de dados que alteram estado ou contêm informação sensível.

---

## O `label` é obrigatório

O par `<label for="id">` + `<input id="id">` cria o vínculo entre rótulo e campo. É o "crachá de acessibilidade" do campo:

- O leitor de tela anuncia o rótulo ao focar no campo.
- Clicar no rótulo foca o campo (área de clique maior — importante para deficiências motoras e mobile).

O `for` do label deve bater exatamente com o `id` do input. O `name` é outra coisa: é a chave sob a qual o dado chega ao servidor.

---

## Tipos de input do HTML5

| Tipo | Uso | Ganho |
|------|-----|-------|
| `text` | texto livre | — |
| `email` | e-mail | teclado com `@` no mobile, validação de formato |
| `tel` | telefone | teclado numérico no mobile |
| `number` | números | setas de incremento, `min`/`max`/`step` |
| `date` | datas | seletor de calendário nativo |
| `password` | senha | mascara os caracteres |
| `url` | endereços web | validação de formato |
| `search` | busca | botão de limpar |
| `color` | cor | seletor de cores |
| `range` | faixa | slider |
| `checkbox` | múltipla escolha | — |
| `radio` | escolha única | — |
| `file` | upload | — |
| `hidden` | dado invisível | — |

---

## Seleção e texto longo

```html
<label for="area">Área de Interesse:</label>
<select id="area" name="area">
    <option value="">Selecione...</option>
    <optgroup label="Educação">
        <option value="reforco">Reforço Escolar</option>
        <option value="artes">Oficina de Artes</option>
    </optgroup>
    <optgroup label="Saúde">
        <option value="apoio">Apoio Emocional</option>
    </optgroup>
</select>

<label for="motivo">Por que você quer se unir a nós?</label>
<textarea id="motivo" name="motivo" rows="4" required
          placeholder="Conte-nos um pouco sobre sua motivação..."></textarea>
```

`<optgroup>` agrupa opções sob um rótulo. A primeira `<option value="">` vazia evita que o usuário envie a primeira opção sem querer.

`<textarea>` **não** é auto-fechada — o valor inicial vai entre as tags, não em um atributo `value`.

---

## Atributos de validação

| Atributo | Função |
|----------|--------|
| `required` | campo obrigatório |
| `pattern` | expressão regular que o valor deve satisfazer |
| `title` | mensagem exibida quando o `pattern` falha |
| `placeholder` | texto de exemplo dentro do campo (**não substitui o label**) |
| `min` / `max` | limites numéricos ou de data |
| `minlength` / `maxlength` | limites de tamanho de texto |
| `readonly` | somente leitura |
| `disabled` | desabilitado (não é enviado) |
| `autocomplete` | sugere preenchimento do navegador |

### Validação com regex (`pattern`)

```html
<!-- CPF -->
<input type="text" pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
       placeholder="000.000.000-00" title="Formato: 000.000.000-00">

<!-- CEP -->
<input type="text" pattern="[0-9]{5}-[0-9]{3}"
       placeholder="00000-000" title="Formato: 00000-000">

<!-- Telefone Celular -->
<input type="tel" pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
       placeholder="(00) 00000-0000" title="Formato: (00) 00000-0000">
```

Sempre acompanhe o `pattern` de um `title`, ou a mensagem de erro do navegador fica genérica e o usuário não sabe o que corrigir.

---

## Client-side × server-side

Este é **o ponto mais cobrado** da unidade.

A validação HTML5 fornece feedback imediato, melhora a experiência de uso e reduz erros de submissão — mas deve **sempre** ser complementada por validação no servidor para garantir segurança (Robbins, 2022).

Por quê:

| | Client-side (HTML5/JS) | Server-side |
|---|---|---|
| Propósito | experiência do usuário | segurança dos dados |
| Quando roda | antes do envio, no navegador | ao receber a requisição |
| Pode ser burlada? | **sim**, trivialmente | não pelo cliente |

Qualquer pessoa remove um `required` pelo DevTools, ou envia a requisição direto via `curl`/Postman sem passar pelo navegador. A validação do cliente é uma cortesia com o usuário, não uma barreira de segurança.

> **Afirmação falsa clássica:** "a validação server-side é dispensável quando a validação HTML5 é abrangente". Não é. Nunca é.

---

## Acessibilidade em formulários

Como garantir que formulários sejam acessíveis a pessoas com deficiências visuais ou motoras:

- `label` adequado para **todo** campo.
- Descrições de erro claras e específicas.
- Ordem lógica de tabulação (a ordem no DOM é a ordem do TAB).
- Indicador de foco visível (`:focus` com contraste suficiente).
- Suporte a leitores de tela via marcação correta.
- `fieldset`/`legend` para agrupar campos relacionados (especialmente radios e checkboxes).

Acessibilidade não é opcional — é responsabilidade social do desenvolvedor.
