/* ==========================================================================
   TEMA CLARO/ESCURO — comum a todos os projetos da Aula 07.

   Este arquivo é carregado no <head> (sem defer) de propósito:
   a PARTE 1 precisa rodar antes da página aparecer, para não "piscar"
   o tema errado. A PARTE 2 espera o HTML carregar para criar o botão.

   Regras do tema:
   - Padrão: segue o tema do navegador/sistema.
   - O botão troca o tema e salva a escolha (vale para todos os projetos).
   - Se a escolha for igual ao tema do navegador, a preferência é apagada
     e a página volta a acompanhar o navegador automaticamente.
   ========================================================================== */

(function () {
    const raiz = document.documentElement;
    const temaDoSistema = window.matchMedia('(prefers-color-scheme: dark)');


    /* ══════════════════════════════════
       PARTE 1 — roda imediatamente, antes da página aparecer
       ══════════════════════════════════ */

    // Avisa o CSS que o JS está ativo (menus mobile só começam fechados com JS)
    raiz.classList.add('js');

    function lerTemaSalvo() {
        try {
            const tema = localStorage.getItem('tema');
            return tema === 'claro' || tema === 'escuro' ? tema : null;
        } catch (erro) {
            return null;                   // navegador bloqueou o armazenamento
        }
    }

    function salvarTema(tema) {
        try {
            if (tema) {
                localStorage.setItem('tema', tema);
            } else {
                localStorage.removeItem('tema');
            }
        } catch (erro) {
            // Sem armazenamento: o tema troca, só não fica salvo
        }
    }

    // Aplica a escolha salva. Sem escolha, o CSS segue o navegador sozinho.
    const temaSalvo = lerTemaSalvo();
    if (temaSalvo) raiz.setAttribute('data-tema', temaSalvo);


    /* ══════════════════════════════════
       PARTE 2 — cria o botão quando o HTML estiver pronto
       ══════════════════════════════════ */

    const ICONES = `
        <svg class="tema-icone tema-icone-lua" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>
        </svg>
        <svg class="tema-icone tema-icone-sol" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
        </svg>`;

    function temaNavegador() {
        return temaDoSistema.matches ? 'escuro' : 'claro';
    }

    function temaAtual() {
        return raiz.getAttribute('data-tema') || temaNavegador();
    }

    function criarBotaoTema() {
        const barra = document.querySelector('.barra-conteudo');
        if (!barra) return;

        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'tema-botao';
        botao.innerHTML = ICONES;

        function atualizarRotulo() {
            const rotulo = temaAtual() === 'escuro' ? 'Ativar tema claro' : 'Ativar tema escuro';
            botao.setAttribute('aria-label', rotulo);
            botao.title = rotulo;
        }

        botao.addEventListener('click', () => {
            const novoTema = temaAtual() === 'escuro' ? 'claro' : 'escuro';

            if (novoTema === temaNavegador()) {
                raiz.removeAttribute('data-tema');   // volta a seguir o navegador
                salvarTema(null);
            } else {
                raiz.setAttribute('data-tema', novoTema);
                salvarTema(novoTema);
            }

            atualizarRotulo();
        });

        // Se o tema do navegador mudar com a página aberta, o rótulo acompanha
        temaDoSistema.addEventListener('change', atualizarRotulo);

        atualizarRotulo();
        barra.appendChild(botao);          // entra no fim da barra de projetos
    }

    document.addEventListener('DOMContentLoaded', criarBotaoTema);
})();
