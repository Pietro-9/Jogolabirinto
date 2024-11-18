const jogador = document.getElementById('jogador');
const meta = document.getElementById('meta');
const paredes = document.querySelectorAll('.parede');
const labirinto = document.getElementById('labirinto');

let posX = 0;
let posY = 0;

document.addEventListener('keydown', (e) => {
    
    switch (e.key) {
        case 'ArrowUp':
            if(verificaLimiteCima()== true)
                posY -= 10;
            break;
        case 'ArrowDown':
            if(verificaLimiteBaixo()== true)
                posY += 10;
            break;
        case 'ArrowLeft':
            if(verificaLimiteEsquerda()== true)
                posX -= 10;
            break;
        case 'ArrowRight':
            if(verificaLimiteDireita()== true)
                posX += 10;
            break;
    }
    jogador.style.top = posY + 'px';
    jogador.style.left = posX + 'px';
    verificaColisao();
    verificaMeta();
    
  
});
function verificaLimiteCima(){
    const labirintoRect = labirinto.getBoundingClientRect();
    const jogadorRect = jogador.getBoundingClientRect();
    if(jogadorRect.top > labirintoRect.top + 5){
        return true 
    }
        return false
}
function verificaLimiteBaixo(){
    const labirintoRect = labirinto.getBoundingClientRect();
    const jogadorRect = jogador.getBoundingClientRect();
    if(jogadorRect.bottom < labirintoRect.bottom - 5){
        return true 
    }
        return false
}
function verificaLimiteEsquerda(){
    const labirintoRect = labirinto.getBoundingClientRect();
    const jogadorRect = jogador.getBoundingClientRect();
    if(jogadorRect.left > labirintoRect.left + 5){
        return true 
    }
        return false
}
function verificaLimiteDireita(){
    const labirintoRect = labirinto.getBoundingClientRect();
    const jogadorRect = jogador.getBoundingClientRect();
    if(jogadorRect.right < labirintoRect.right - 5){
        return true 
    }
        return false
}

function verificaColisao() {
    const jogadorRect = jogador.getBoundingClientRect();
    for (const parede of paredes) {
        const paredeRect = parede.getBoundingClientRect();
        if (
            jogadorRect.left < paredeRect.right &&
            jogadorRect.right > paredeRect.left &&
            jogadorRect.top < paredeRect.bottom &&
            jogadorRect.bottom > paredeRect.top
        ) {
            alert('Colisão! Você perdeu. Tente novamente.');
            posX = 0;
            posY = 0;
            jogador.style.top = posY + 'px';
            jogador.style.left = posX + 'px';
            break;
        }
    }
}

function verificaMeta() {
    const jogadorRect = jogador.getBoundingClientRect();
    const metaRect = meta.getBoundingClientRect();
    if (
        jogadorRect.left < metaRect.right &&
        jogadorRect.right > metaRect.left &&
        jogadorRect.top < metaRect.bottom &&
        jogadorRect.bottom > metaRect.top
    ) {
        alert('Parabéns! Você completou a Fase !');
        posX = 0;
        posY = 0;
        jogador.style.top = posY + 'px';
        jogador.style.left = posX + 'px';
    }
}
