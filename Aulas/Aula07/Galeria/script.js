/* ==========================================================================
   PROJETO 3 — GALERIA DE IMAGENS — Interações
   A galeria em si é só CSS. O JS existe apenas para o tema claro/escuro.
   ========================================================================== */

/* ══════════════════════════════════
   TEMA CLARO/ESCURO
   - O script no <head> já aplicou o tema certo antes da página aparecer.
   - Aqui o botão alterna o tema e salva a escolha no navegador.
   - Sem escolha salva, a página acompanha o tema do sistema.
   ══════════════════════════════════ */
const raiz = document.documentElement;
const temaBotao = document.getElementById('temaBotao');
const temaTexto = temaBotao.querySelector('.tema-texto');   // só existe nos botões com texto
const temaDoSistema = window.matchMedia('(prefers-color-scheme: dark)');

function lerTemaSalvo() {
    try {
        return localStorage.getItem('tema');   // "claro", "escuro" ou null
    } catch (erro) {
        return null;                           // navegador bloqueou o armazenamento
    }
}

function aplicarTema(escuro) {
    raiz.classList.toggle('tema-escuro', escuro);
    temaBotao.setAttribute('aria-pressed', String(escuro));

    const rotulo = escuro ? 'Ativar tema claro' : 'Ativar tema escuro';
    temaBotao.setAttribute('aria-label', rotulo);
    if (temaTexto) temaTexto.textContent = escuro ? 'Tema claro' : 'Tema escuro';
}

temaBotao.addEventListener('click', () => {
    const escuro = !raiz.classList.contains('tema-escuro');
    aplicarTema(escuro);

    try {
        localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
    } catch (erro) {
        // Sem armazenamento o tema funciona, só não fica salvo
    }
});

// Se o usuário nunca escolheu, acompanha a troca de tema do sistema
temaDoSistema.addEventListener('change', (evento) => {
    if (!lerTemaSalvo()) aplicarTema(evento.matches);
});

// Sincroniza o botão com o tema aplicado no <head>
aplicarTema(raiz.classList.contains('tema-escuro'));
