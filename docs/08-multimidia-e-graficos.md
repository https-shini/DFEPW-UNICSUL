# 08 — Multimídia e Recursos Gráficos

## Imagens

A tag `<img>` é auto-fechada e requer **dois atributos obrigatórios**: `src` (caminho) e `alt` (texto alternativo).

```html
<img src="foto.jpg" alt="Descrição da foto" width="600">
```

### O atributo `alt` não é opcional

Ele é lido por leitores de tela e exibido quando a imagem não carrega. Descreva o **conteúdo** da imagem, não escreva apenas "imagem" ou "foto".

```html
<!-- Ruim -->
<img src="banner.jpg" alt="imagem">

<!-- Bom -->
<img src="banner.jpg" alt="Pessoa programando em notebook com código na tela">
```

Exceção: imagens puramente decorativas devem levar `alt=""` (vazio), para que o leitor de tela as ignore em vez de anunciar o nome do arquivo.

### Imagem com legenda

```html
<figure>
    <img src="dashboard.png" alt="Dashboard do projeto">
    <figcaption>Figura 1 — Dashboard principal do sistema.</figcaption>
</figure>
```

`<figure>` + `<figcaption>` é a forma semanticamente correta de associar uma legenda a uma imagem. A associação fica explícita no DOM, não apenas visual.

---

## Vídeo e áudio nativos

```html
<!-- Vídeo nativo HTML5 -->
<video width="640" controls poster="thumb.jpg">
    <source src="video.mp4" type="video/mp4">
    Seu navegador não suporta vídeo.
</video>

<!-- Áudio nativo HTML5 -->
<audio controls>
    <source src="musica.mp3" type="audio/mpeg">
    Seu navegador não suporta áudio.
</audio>
```

O texto entre as tags é o **conteúdo alternativo**, exibido quando o navegador não consegue reproduzir a mídia.

Atributos úteis: `controls` (exibe os controles), `poster` (imagem de capa), `autoplay`, `loop`, `muted`, `preload`.

---

## Conteúdo incorporado

### iframe (vídeo do YouTube, mapas)

```html
<iframe width="560" height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="Descrição do vídeo"
        allowfullscreen>
</iframe>
```

### Object e embed — conteúdo alternativo

```html
<object data="documento.pdf" type="application/pdf"
        width="800" height="600">
    <p>Seu navegador não pode exibir PDFs.
       <a href="documento.pdf">Baixe o arquivo</a>.</p>
</object>
```

O padrão aqui se repete: sempre ofereça uma saída para quem não consegue ver o conteúdo incorporado.

---

## Otimização de mídia

Vídeos e áudios impactam significativamente o tempo de carregamento. Boas práticas:

- **Formatos otimizados** — H.264 para vídeo, MP3 para áudio.
- **Streaming adaptativo** para vídeos longos.
- **Lazy loading** para mídia abaixo da dobra da página (`loading="lazy"` em imagens e iframes).
- **FFmpeg** ajuda na compressão e conversão de formatos.

Lembrando o requisito da disciplina: tempo de carregamento abaixo de 5 segundos.

---

## Canvas × SVG

As duas tecnologias de gráficos web, e a decisão de qual usar é de arquitetura, não de gosto.

| | **Canvas** | **SVG** |
|---|-----------|---------|
| Natureza | bitmap (pixels) | vetorial (XML) |
| No DOM | um único elemento | cada forma é um nó |
| Escalabilidade | perde qualidade no zoom | infinita, sem perda |
| Interatividade | manual, via coordenadas | eventos por elemento (`hover`, `click`) |
| Performance | ótima com muitos elementos | cai com centenas de nós |
| Ideal para | gráficos dinâmicos, tempo real, jogos, manipulação pixel a pixel | logotipos, ícones, ilustrações, elementos interativos |

### Exemplo Canvas — animação

```javascript
function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar elementos animados
    const tempo = Date.now() * 0.002;
    const x = Math.cos(tempo) * 100 + 200;
    const y = Math.sin(tempo) * 50 + 150;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#e74c3c';
    ctx.fill();

    requestAnimationFrame(animar);
}
animar();
```

O ciclo é sempre o mesmo: limpar o quadro, calcular o novo estado, desenhar, agendar o próximo frame com `requestAnimationFrame`.

### Cenário de decisão (cai em prova)

> Um painel exibe centenas de pontos de dados atualizados em tempo real. Na mesma aplicação, há um logotipo e ícones interativos que precisam manter qualidade em qualquer zoom.

**Resposta:** Canvas para o painel, SVG para o logotipo e os ícones. Canvas entrega performance com muitos pontos porque não guarda objetos no DOM; SVG entrega escalabilidade e interatividade por elemento porque guarda. Nenhuma das duas é universalmente superior.

### Performance em gráficos web

Para aplicações com muitos elementos gráficos, bibliotecas especializadas otimizam a renderização automaticamente e oferecem APIs mais intuitivas:

- **D3.js** — visualização de dados
- **Three.js** — gráficos 3D
- **Chart.js** — gráficos estatísticos
