# 10 — Acessibilidade e Boas Práticas

> Código limpo e semântico muda a vida de usuários que dependem de tecnologia assistiva.

## O impacto oculto

A acessibilidade é o efeito mais concreto de escrever HTML corretamente. Um código bem estruturado semanticamente permite que pessoas com deficiência usem leitores de tela de forma efetiva.

Quatro frentes principais:

- **Design para todos** — garantir acesso a pessoas com deficiências visuais ou motoras.
- **Navegação por teclado** — uso de `<label for="...">` e testabilidade via tecla TAB.
- **Leitores de tela** — estruturação correta do DOM para compatibilidade.
- **Contraste e legibilidade** — cores e tamanhos que funcionem para baixa visão.

---

## WCAG 2.1

As *Web Content Accessibility Guidelines* são o padrão internacional. A disciplina exige conformidade com o **nível AA**.

Os quatro princípios (POUR):

| Princípio | Significa |
|-----------|-----------|
| **Perceptível** | a informação deve ser apresentável de formas que o usuário perceba (alt em imagens, legendas em vídeo, contraste) |
| **Operável** | a interface deve ser navegável (teclado, tempo suficiente, sem conteúdo que cause convulsões) |
| **Compreensível** | conteúdo e operação devem ser inteligíveis (linguagem clara, comportamento previsível, ajuda em erros) |
| **Robusto** | o conteúdo deve funcionar com diferentes tecnologias assistivas, hoje e no futuro |

Os três níveis são **A** (mínimo), **AA** (padrão de mercado e exigência legal em muitos contextos) e **AAA** (máximo, raramente atingido integralmente).

---

## Checklist prático de acessibilidade

- [ ] `lang` declarado no `<html>`
- [ ] Um `<h1>` por página, hierarquia de títulos sem saltos
- [ ] Toda `<img>` com `alt` descritivo (ou `alt=""` se for decorativa)
- [ ] Todo campo de formulário com `<label for>`
- [ ] Texto de link descritivo (nunca "clique aqui")
- [ ] Navegação completa possível apenas com o teclado
- [ ] Indicador de foco visível (`:focus`)
- [ ] Contraste de cor adequado (mínimo 4.5:1 para texto normal no nível AA)
- [ ] Tags semânticas em vez de div genérica
- [ ] Tabelas com `<th>` e `<thead>` corretamente marcados
- [ ] Vídeos e áudios com conteúdo alternativo

### Ferramentas de teste

- **Tecla TAB** — o teste mais rápido e mais revelador. Percorra a página inteira só com o teclado.
- **DevTools → Lighthouse** — auditoria automática de acessibilidade.
- **Leitores de tela** — NVDA (Windows, gratuito), VoiceOver (macOS/iOS, nativo).

---

## Boas práticas gerais

### Separação de responsabilidades

Estrutura ≠ estilo ≠ comportamento. HTML no `.html`, CSS no `.css`, JavaScript no `.js`. Evite `style=""` inline e `onclick=""` no HTML.

```html
<!-- Evite -->
<p style="color: red">Erro</p>

<!-- Prefira -->
<p class="erro">Erro</p>
```

### Indentação e legibilidade

Elementos aninhados indentados consistentemente. Comentários explicando o **porquê** de decisões não óbvias, não o óbvio.

### Nomenclatura de arquivos

Tudo em minúsculas, sem acentos, sem espaços. Use hífen como separador.

```
correto:  sobre-nos.html    banner-tech.jpg
errado:   Sobre Nós.html    Banner Tech.JPG
```

Servidores Linux diferenciam maiúsculas de minúsculas — um link para `Sobre.html` quebra se o arquivo é `sobre.html`, mesmo que funcione no Windows local.

### Controle de versão

Trabalhos profissionais não ficam soltos no PC — vão para repositórios online. Git e GitHub aparecem nas Unidades 9 e 10 da disciplina, mas quanto antes você começar a versionar, melhor.

---

## Checklist de revisão de página

Ao terminar qualquer página, verifique:

1. Todas as tags possuem fechamento?
2. Existe apenas um `<h1>`?
3. Todas as imagens possuem `alt`?
4. Os links internos apontam para IDs existentes?
5. O `<title>` é descritivo?
6. A página valida no [validator.w3.org](https://validator.w3.org/)?
