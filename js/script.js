const audio = new Audio('overworld.mp3');
audio.play();

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reset = document.querySelector('.reset');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        reset.classList.remove('hidden');

        clearInterval(loop);

    }
}, 10);

document.addEventListener('keydown', jump);

function reloadPage() {
    window.location.reload();
}; 

