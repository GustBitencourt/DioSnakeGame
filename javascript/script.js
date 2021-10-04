let canvas = document.getElementById("snake"); //selecionando canvas
let context = canvas.getContext("2d"); //Js trata o plano como duas dimensões
let box = 32; //tamanho do campo do jogo

//criação cobra
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

let direction = "right";

//função que cria o background
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o jogo
}

//função que cria snake
function criarSnake() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "yellow"; //cor da cobra
        context.fillRect(snake[i].x, snake[i].y, box, box); //criando cobra
    }
}

function iniciarJogo() {
    criarBG();
    criarSnake();

    //posição de partida da cobra
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //movimento da cobra
    if(direction == "right") snakeX += box; 
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //responsavel pelo movimento
    snake.pop(); //retira o último elemento do array snake

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    //adiciona elemento a frente (no array)
    snake.unshift(newHead);
}


let jogo = setInterval(iniciarJogo, 100);   //passando intervalo para iniar jogo ser acionada

