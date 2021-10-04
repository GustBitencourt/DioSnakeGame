let canvas = document.getElementById("snake"); //selecionando canvas
let context = canvas.getContext("2d"); //Js trata o plano como duas dimensões
let box = 32; //tamanho do campo do jogo

//função que cria o background
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o jogo
}

criarBG();