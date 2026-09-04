# 02 — Fundamentos da Web

## A viagem do dado

Todo acesso a uma página segue três etapas:

### 1. O pedido (cliente)
O navegador envia uma requisição via URL.

```
GET /index.html HTTP/1.1
```

### 2. O transporte (protocolos)
A requisição atravessa a rede até o servidor.

O HTTP é **stateless**: cada requisição é independente das anteriores, e o servidor não guarda memória do que aconteceu antes (Tanenbaum & Wetherall, 2021). Sessões e logins existem justamente para contornar isso.

### 3. A resposta (servidor web)
O servidor processa o pedido e devolve os arquivos — HTML, CSS, JS — que o navegador monta na tela.

---

## HTTP × HTTPS

| | HTTP | HTTPS |
|---|------|-------|
| Criptografia | não | sim, via TLS |
| Porta padrão | 80 | 443 |
| Dados sensíveis | expostos em trânsito | protegidos |

**HTTPS** é o HTTP acrescido da camada **TLS** (*Transport Layer Security*), que criptografa toda a comunicação entre cliente e servidor usando algoritmos matemáticos. É o que protege senhas e dados bancários em trânsito.

Não confundir com outros protocolos que aparecem nas provas:

- **FTP** — transferência de arquivos
- **SMTP** — envio de e-mail
- **TCP/IP** — pilha de transporte e roteamento (não é camada de segurança)

---

## Anatomia de uma URL

```
https://www.cruzeirodosul.edu.br/pesquisa.jsp?q=java
└──┬──┘ └──────────┬────────────┘└─────┬────┘└──┬──┘
   1               2                   3        4
```

| # | Parte | O que é |
|---|-------|---------|
| 1 | **Protocolo** | identificador do protocolo de comunicação |
| 2 | **Nome do domínio** | endereço único, registrado no Registro.br, que aponta para o servidor |
| 3 | **Caminho do arquivo** | o recurso específico solicitado dentro do servidor |
| 4 | **Query string** | dados extras enviados na requisição para filtrar ou instruir o servidor |

Formato completo:

```
protocolo://domínio:porta/caminho/recurso?query_string#referência
```

---

## Registro de domínio

No Brasil, o **Registro.br** (NIC.br) é responsável pelos domínios `.br` e suas extensões (`.com.br`, `.dev.br`, `.app.br`, `.edu.br`…).

### Ordem cronológica do processo

1. **Escolha da extensão apropriada** — define o namespace onde a busca acontece.
2. **Verificação de disponibilidade** — só faz sentido dentro de uma extensão; `exemplo.com.br` pode estar ocupado e `exemplo.dev.br` livre.
3. **Configuração de hospedagem** — contratar o servidor que vai abrigar os arquivos.
4. **Configuração de DNS** — apontar os registros para o servidor contratado.

O DNS vem **por último** porque depende do IP ou dos nameservers que só a hospedagem fornece. Depois disso ainda há a **propagação DNS**, que pode levar horas até se completar globalmente.

---

## Erros comuns

- Achar que HTTPS é "outro protocolo": é o mesmo HTTP com TLS por baixo.
- Inverter a ordem DNS → hospedagem. Sem hospedagem contratada não há para onde apontar.
- Confundir domínio com hospedagem. São dois serviços separados: um é o endereço, o outro é o terreno.
