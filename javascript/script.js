let canvas = document.getElementById("snake"); //selecionando canvas
let context = canvas.getContext("2d"); //Js trata o plano como duas dimensões
let box = 32; //tamanho do campo do jogo

//criação cobra
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

let direction = "right"; //direção de inicio

let food = { //gerando a comida randomicamente
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//função que cria o background
function criarBG() {
    context.fillStyle = "orange";
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo usando x e y e a largura e altura setadas
}

//função que cria snake
function criarSnake() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "yellow"; //cor da cobra
        context.fillRect(snake[i].x, snake[i].y, box, box); //criando cobra
    }
}

function foodMaker() {
    context.fillStyle = "blue";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update); //evento que pega a tecla

function update(event) { //ifs com as tecla e validações de direções
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}


function iniciarJogo() {
    //ifs para fazer a cobra atravessar as "paredes"
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    //for que verifica se a cabeça da cobra acerta o corpo
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over!');
        }
    }

    criarBG();
    criarSnake();
    foodMaker();

    //posição de partida da cobra
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //movimento da cobra
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //Crescimento da cobra
    if(snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    //adiciona elemento a frente (no array) movimento
    snake.unshift(newHead);
}

//passando intervalo para iniar jogo ser acionada
let jogo = setInterval(iniciarJogo, 100);   

