// RESUMO DO SCRIPT
// Ao pressionar qualquer tecla do teclado o script vai executar a função jump
// Função jump vai adiconar a classe jump-mario animada do css na imagem do mario
// clase jump-mario é removida e fica pronta para ser acionada novamente

// pegando elemento da img do mario / passando o seletor .mario do css
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const cloud = document.querySelector(".cloud");
const gameBoard = document.querySelector(".game-board");
const logo = document.querySelector(".logoSuperMario");
const legend = document.querySelector(".legend");
const again = document.querySelector(".again");

pipe.style.animationPlayState = "paused";
mario.style.animationPlayState = "paused";
cloud.style.animationPlayState = "paused";

document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key == "Enter" && gameBoard.classList.contains("start")) {
    startGame();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code == "Space" && !again.classList.contains("hide")) {
    document.location.reload(true);
  }
});

const startGame = function () {
  gameBoard.classList.remove("start");
  [mario, pipe, cloud].forEach((el) => {
    el.classList.remove("hide");
  });

  pipe.style.animationPlayState = "running";
  mario.style.animationPlayState = "running";
  cloud.style.animationPlayState = "running";

  [legend, logo].forEach((elem) => {
    elem.classList.add("hide");
  });
};

const gameOver = function () {
  [again, logo].forEach((elem) => {
    elem.classList.remove("hide");
  });
};

const jump = () => {
  // adicionando uma classe a imagem do mario
  mario.classList.add("jump-mario");

  // removendo a classe da imagem do mario apos executar , para ficar disponivel para ser novamente executada
  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 600);
};

// loop de verificação para o descolocamento esquerdo do pipe no caso 120px
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  //se o tubo chegou a 120px do mario e o seu bottom(jump) for menor que 80 o jogo faz a verificação que o mario esconstou no tubo e encerra o jogo!
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animationPlayState = "paused";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animationPlayState = "paused";
    mario.style.bottom = `${marioPosition}px`;

    cloud.style.animationPlayState = "paused";

    // imagem do mario game over ao encerrar o jogo !!!
    mario.src = "img/game-over.png";
    mario.style.width = "70px";
    mario.style.marginLeft = "50px";

    gameOver();

    clearInterval(loop);
  }
}, 10);

// Adicionando um evendo de keydown, click e touch - ao pressionar qualquer tecla ou apertar o click do mouse ou o touch em dispocitivos moveis ,executa uma função (jump)

// document.addEventListener('keydown', jump);  // Teclado  h

document.addEventListener("keydown", (e) => {
  if (e.code == "Space" && !gameBoard.classList.contains("start")) {
    jump();
  }
});

document.addEventListener("click", jump); // Mouse
document.addEventListener("touchstart", jump); // Touch
