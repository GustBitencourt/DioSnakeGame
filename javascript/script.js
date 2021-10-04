let canvas = document.getElementById("snake"); //selecionando canvas
let context = canvas.getContext("2d"); //Js trata o plano como duas dimensões
let box = 32; //tamanho do campo do jogo
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}
//função que cria o background
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o jogo
}

function criarSnake() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "yellow"; //cor da cobra
        context.fillRect(snake[i].x, snake[i].y, box, box); //criando cobra
    }
}


criarBG();
criarSnake();

