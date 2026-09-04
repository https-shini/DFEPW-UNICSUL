# Banco de Questões — Unidade I

Verificação de aprendizagem da Unidade I (8 questões), com gabarito e comentário do raciocínio.

---

### 1. Objetivo do desenvolvimento front-end

**Resposta:** construir a parte da aplicação web com a qual o usuário interage diretamente, criando experiências digitais funcionais e intuitivas.

**Por quê:** é a única alternativa que descreve a camada de interface. As distratoras descrevem back-end (banco de dados e lógica de servidor), IA sem interface, infraestrutura de redes e análise de dados — todas fora do escopo. Front-end é a interface com o humano; back-end, a interface com a máquina.

---

### 2. Protocolo com camada TLS

**Resposta:** HTTPS.

**Por quê:** HTTPS é o HTTP acrescido do TLS (*Transport Layer Security*), que criptografa toda a comunicação entre cliente e servidor. FTP é transferência de arquivos, SMTP é envio de e-mail, HTTP é a versão sem criptografia e TCP/IP é a pilha de transporte/rede — não uma camada de segurança.

---

### 3. Tag que NÃO representa lista

**Resposta:** `<table>`.

**Por quê:** `<table>` é para dados tabulares. As outras quatro são de lista: `<ul>` (não ordenada), `<ol>` (ordenada), `<li>` (item) e `<dl>` (definição). Reforço da aula: tabela nunca deve ser usada para layout.

---

### 4. Importância dos elementos semânticos

**Resposta:** melhora a estrutura do documento, fornecendo significado ao conteúdo e auxiliando na acessibilidade e SEO.

**Por quê:** são os três pilares citados na aula — acessibilidade, SEO e manutenibilidade. As distratoras erram ao afirmar que semântica dispensa CSS, elimina `div`/`span`, valida formulários automaticamente ou é a única forma de incorporar multimídia. Nenhuma dessas é verdade.

---

### 5. Validação client-side × server-side (asserções I e II)

**Resposta:** a asserção I é verdadeira e a II é falsa.

**Por quê:**
- **I (verdadeira)** — `required` e `pattern` dão feedback instantâneo e melhoram a experiência de uso.
- **II (falsa)** — contraria diretamente Robbins (2022): a validação client-side deve **sempre** ser complementada pela server-side. Ela é burlada trivialmente pelo DevTools ou enviando a requisição direto, sem passar pelo navegador.

---

### 6. Ordem cronológica do registro de domínio

**Resposta:** 2 – 3 – 4 – 1
(escolha da extensão → verificação de disponibilidade → configuração de hospedagem → configuração de DNS)

**Por quê:** a extensão vem primeiro porque a disponibilidade só existe dentro de um namespace — `exemplo.com.br` pode estar ocupado e `exemplo.dev.br` livre. O DNS vem por último porque depende do IP ou dos nameservers que só a hospedagem fornece. Depois disso ainda há a propagação DNS.

---

### 7. Canvas × SVG em cenário misto

**Resposta:** Canvas para os gráficos dinâmicos do painel e SVG para o logotipo e os ícones interativos.

**Por quê:** Canvas é bitmap — desenha pixels e não guarda objetos no DOM, o que dá performance com centenas de pontos atualizados em tempo real. SVG é vetorial — cada forma é um nó do DOM, o que garante escalabilidade sem perda no zoom e eventos (`hover`, `click`) por elemento, mas custa caro com muitos nós. Cada tecnologia atende exatamente um dos dois requisitos; nenhuma é universalmente superior.

---

### 8. Futuro do front-end e relevância dos fundamentos

**Resposta:** embora as tecnologias de superfície evoluam, os princípios subjacentes — comunicação web segura, estruturação de conteúdo e acessibilidade — permanecem cruciais para a adaptação às novas tendências.

**Por quê:** WebAssembly, PWAs e Web Components rodam *sobre* HTTP, o DOM e a semântica HTML — não os substituem. As quatro distratoras são variações do mesmo erro: tratar fundamento e novidade como excludentes.

---

## Padrões que se repetem nas questões

Vale memorizar estes três, que aparecem em formatos diferentes:

1. **Front-end é a camada de interação com o usuário** — tudo que envolve banco de dados, servidor, rede ou análise de dados é distratora.
2. **Validação client-side nunca dispensa a server-side** — qualquer alternativa que diga o contrário é falsa.
3. **Fundamento e tecnologia nova não são excludentes** — as novidades se apoiam nos fundamentos.

E dois pares que costumam ser trocados de propósito:

- **Canvas × SVG** — bitmap/performance × vetorial/interatividade.
- **HTTP × HTTPS** — o segundo é o primeiro + TLS, não um protocolo diferente.
