let order = [];
let clickerdOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores

let shuffle0rder = () => {
    let color0rder = Math.floor(Math.random() * 4);
    order[order.length] = color0rder;
    clickerdOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor

let lightColor = (element, number) => {
    console.log(element)
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 205);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo

let check0rder = () => {
    for (let i in clickerdOrder) {
        if (clickerdOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickerdOrder.length == order.length) {
        alert('pontuação: ${score}\nvoce acertou! iniciando próximo nível!');
        nextlevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickerdOrder[clickerdOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        check0rder();
    }, 250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;

    } else if (color == 3) {
        return blue;

    }
}

//funcao para proximo nivel cd jogo
let nextlevel = () => {
    score++;
    shuffle0rder();
}

//funcao para gamer over
let gameOver = () => {
    alert('pontuação: ${score}!\nVocê perdeu o jogo!\nClique em ok para iniciar um jogo');
    order = [];
    clickerdOrder = [];

    playgame();
}

//funcao de inicio do jogo
let playgame = () => {
    alert('bem vindo ao Gênesis! Iniciando novo jogo');
    score = 0;

    nextlevel();
}

//eventos de clique para as cores 
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playgame()