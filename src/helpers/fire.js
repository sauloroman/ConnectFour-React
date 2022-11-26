import confetti from "canvas-confetti";

const myConffeti = confetti.create( "", { resize: true });
const count = 400;
const defaults = {
  startVelocity: 30,
  spread: 360,
  origin: { 
    x: 0.5,
    y: 0.8 
  }
};

export const fire = (particleRatio, opts) => {
  myConffeti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}

export const shootFire = () => {
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  
  fire(0.2, {
    spread: 60,
  });
  
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
  
}

setTimeout( () => {
  myConffeti.reset();
}, [3000] )