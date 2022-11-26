import confetti from "canvas-confetti";

const myConfetti = confetti.create('', { resize: true });

var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  myConfetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  myConfetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

export const shootStars = () => {
  setTimeout(shoot, 0);
  setTimeout(shoot, 1000);
  setTimeout(shoot, 2000);
}


