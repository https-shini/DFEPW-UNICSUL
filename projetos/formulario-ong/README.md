# Formulário de Cadastro de Voluntários

Exercício de formulários HTML5 com CSS aplicado. Tema: cadastro de voluntários para uma ONG.

## Como rodar

Abra o `index.html` no navegador.

## Arquivos

```
formulario-ong/
├── index.html    # estrutura do formulário
└── styles.css    # estilos (cores institucionais)
```

O HTML e o CSS estavam no mesmo arquivo no rascunho original; foram separados aqui conforme o princípio de separação de responsabilidades (estrutura ≠ estilo).

## Conceitos aplicados

| Recurso | Uso no projeto |
|---------|----------------|
| `<form method="post">` | dados viajam no corpo da requisição, não na URL |
| `<fieldset>` + `<legend>` | dois agrupamentos: "Informações Pessoais" e "Sua Contribuição" |
| `<label for>` | vínculo de acessibilidade em todos os campos |
| `type="email"` | validação de formato + teclado com `@` no mobile |
| `required` | obrigatoriedade em nome, e-mail e motivo |
| `placeholder` | exemplos de preenchimento |
| `<select>` + `<optgroup>` | opções agrupadas por área (Educação / Saúde) |
| `<textarea rows="4">` | campo de texto longo |
| `:focus` no CSS | indicador visual de foco (acessibilidade) |
| `box-sizing: border-box` | evita que o padding quebre a largura |
| `transition` + `:hover` | feedback visual no botão |

## Paleta

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul escuro institucional | `#002b5c` | fundo do formulário, texto do botão |
| Amarelo suave | `#ffcc00` | botão, outline de foco |
| Ouro intenso | `#e6b800` | hover do botão |
| Cinza claro | `#f0f2f5` | fundo da página |

## Pontos de melhoria

- [ ] **`action` no `<form>`** — hoje o formulário não tem destino definido; ao enviar, recarrega a própria página.
- [ ] **Opção vazia no `<select>`** — adicionar `<option value="">Selecione...</option>` como primeira opção, senão o usuário envia "Reforço Escolar" sem ter escolhido.
- [ ] **Campo de telefone com `pattern`** — a Unidade I cobra validação por regex; um `type="tel"` com `pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"` e `title` cobriria isso.
- [ ] **Contraste do `:focus`** — verificar se o amarelo sobre o fundo claro atinge os 3:1 exigidos pela WCAG 2.1 AA para elementos de interface.
- [ ] **Validação server-side** — lembrar que a validação HTML5 aqui é só UX; segurança depende do servidor.
