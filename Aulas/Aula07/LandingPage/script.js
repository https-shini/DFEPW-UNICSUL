/* ==========================================================================
   PROJETO 4 — LANDING PAGE — Interações
   (Mesma lógica de menu do Projeto 2: cada projeto é independente.)
   Cria o botão do menu mobile e controla menu, sombra e link ativo.
   A aparência fica toda no style.css.
   ========================================================================== */

/* Carregado no <head> com "defer": roda depois que o HTML foi lido,
   então todos os elementos abaixo já existem. */

const cabecalho = document.getElementById('cabecalho');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-link');


/* ══════════════════════════════════
   0. CRIA O BOTÃO HAMBÚRGUER
   Ele só funciona com JS, por isso é criado aqui e não no HTML:
   sem JS, o menu fica sempre visível e nenhum botão "morto" aparece.
   ══════════════════════════════════ */
const menuBotao = document.createElement('button');
menuBotao.type = 'button';
menuBotao.className = 'menu-botao';
menuBotao.setAttribute('aria-controls', menu.id);
menuBotao.setAttribute('aria-expanded', 'false');
menuBotao.innerHTML = `
    <span class="menu-botao-linha"></span>
    <span class="menu-botao-linha"></span>
    <span class="menu-botao-linha"></span>
    <span class="sr-only">Abrir menu</span>`;

const menuBotaoTexto = menuBotao.querySelector('.sr-only');
cabecalho.querySelector('.cabecalho-conteudo').appendChild(menuBotao);


/* ══════════════════════════════════
   1. ABRIR/FECHAR O MENU NO CELULAR
   ══════════════════════════════════ */
function alternarMenu(abrir) {
    menu.classList.toggle('menu-aberto', abrir);
    menuBotao.setAttribute('aria-expanded', String(abrir));
    menuBotaoTexto.textContent = abrir ? 'Fechar menu' : 'Abrir menu';
}

menuBotao.addEventListener('click', () => {
    const aberto = menuBotao.getAttribute('aria-expanded') === 'true';
    alternarMenu(!aberto);
});

// Fecha ao escolher um link
menuLinks.forEach((link) => {
    link.addEventListener('click', () => alternarMenu(false));
});

// Fecha com a tecla Esc e devolve o foco ao botão
document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && menu.classList.contains('menu-aberto')) {
        alternarMenu(false);
        menuBotao.focus();
    }
});

// Se a tela voltar para o tamanho de desktop, reseta o estado do menu
const telaDesktop = window.matchMedia('(min-width: 769px)');
telaDesktop.addEventListener('change', (evento) => {
    if (evento.matches) alternarMenu(false);
});


/* ══════════════════════════════════
   2. SOMBRA NO HEADER AO ROLAR
   ══════════════════════════════════ */
function atualizarSombra() {
    cabecalho.classList.toggle('cabecalho-rolou', window.scrollY > 10);
}

window.addEventListener('scroll', atualizarSombra, { passive: true });
atualizarSombra();


/* ══════════════════════════════════
   3. LINK ATIVO CONFORME A SEÇÃO VISÍVEL
   ══════════════════════════════════ */
function marcarLinkAtivo(idSecao) {
    menuLinks.forEach((link) => {
        const ativo = link.getAttribute('href') === `#${idSecao}`;
        link.classList.toggle('menu-link-ativo', ativo);

        if (ativo) {
            link.setAttribute('aria-current', 'true');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

const secoes = document.querySelectorAll('main section[id]');

// A última seção é curta e pode nunca chegar ao meio da tela:
// no fim da página, ela é sempre a ativa.
function estaNoFim() {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
}

const observador = new IntersectionObserver((entradas) => {
    if (estaNoFim()) return;   // o evento de scroll abaixo cuida desse caso

    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) marcarLinkAtivo(entrada.target.id);
    });
}, {
    // A seção é "ativa" quando cruza a faixa central da tela
    rootMargin: '-45% 0px -50% 0px'
});

secoes.forEach((secao) => observador.observe(secao));

window.addEventListener('scroll', () => {
    if (estaNoFim()) marcarLinkAtivo(secoes[secoes.length - 1].id);
}, { passive: true });
