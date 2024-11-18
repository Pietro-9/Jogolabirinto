const jogador = document.getElementById('jogador');
const meta = document.getElementById('meta');
const paredes = document.querySelectorAll('.parede');
const obstaculos = document.querySelectorAll('.obstaculo');
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
            alert('Colisão com a parede! Tente novamente.');
            reiniciarPosicao();
            break;
        }
    }
    
    for (const obstaculo of obstaculos) {
        const obstaculoRect = obstaculo.getBoundingClientRect();
        if (
            jogadorRect.left < obstaculoRect.right &&
            jogadorRect.right > obstaculoRect.left &&
            jogadorRect.top < obstaculoRect.bottom &&
            jogadorRect.bottom > obstaculoRect.top
        ) {
            alert('Colisão com o obstáculo! Tente novamente.');
            reiniciarPosicao();
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
        alert('Parabéns! Você completou o labirinto final e chegou ao tesouro!');
        reiniciarPosicao();
    }
}

function reiniciarPosicao() {
    posX = 0;
    posY = 0;
    jogador.style.top = posY + 'px';
    jogador.style.left = posX + 'px';
}

// Movimento dos obstáculos mais complexo
function moverObstaculos() {
    let direcao1 = 1;
    let direcao2 = -1;
    setInterval(() => {
        const obstaculo1 = document.getElementById('obstaculo1');
        const obstaculo2 = document.getElementById('obstaculo2');

        let left1 = parseInt(obstaculo1.style.left);
        let top2 = parseInt(obstaculo2.style.top);

        if (left1 <= 100 || left1 >= 350) {
            direcao1 *= -1;
        }
        if (top2 <= 200 || top2 >= 400) {
            direcao2 *= -1;
        }

        obstaculo1.style.left = (left1 + 3 * direcao1) + 'px';
        obstaculo2.style.top = (top2 + 3 * direcao2) + 'px';
    }, 50);
}

// Inicia o movimento dos obstáculos
moverObstaculos();
