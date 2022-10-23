
// RESUMO DO SCRIPT
// Ao pressionar qualquer tecla do teclado o script vai executar a função jump 
// Função jump vai adiconar a classe jump-mario animada do css na imagem do mario 
// clase jump-mario é removida e fica pronta para ser acionada novamente 





// pegando elemento da img do mario / passando o seletor .mario do css
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');




const jump = () => {

    // adicionando uma classe a imagem do mario
    mario.classList.add('jump-mario');

    // removendo a classe da imagem do mario apos executar , para ficar disponivel para ser novamente executada
    setTimeout(() => {

        mario.classList.remove('jump-mario');

    }, 600);

}

// loop de verificação para o descolocamento esquerdo do pipe no caso 120px que foi passado na classe pipe no css
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    // console.log(pipePosition)
    // variavel para pegar a posição esquerda do pipe 

}, 10);

// Adicionando um evendo de keydown, click e touch - ao pressionar qualquer tecla ou apertar o click do mouse ou o touch em dispocitivos moveis ,executa uma função (jump)

// document.addEventListener('keydown', jump);  // Teclado  h

document.addEventListener('keydown', (e) => {
    console.log(e)

    if (e.code == 'Space') {

        jump()

    }

})

document.addEventListener('click', jump); // Mouse

document.addEventListener('touchstart', jump);  // Touch





