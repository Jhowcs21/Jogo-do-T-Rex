const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");
const score = document.querySelector(".score");
let isJumping = false;
let count = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp" || e.code === "Space") && !isJumping) {
    jump();
  }
});

function jump() {
  isJumping = true;
  dino.classList.add("jump");

  setTimeout(() => {
    dino.classList.remove("jump");
    isJumping = false;
  }, 700);
}

setInterval(() => {
  let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  let cactoLeft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));
  
 

  if (cactoLeft > 40 && cactoLeft < 230 && dinoBottom <= 50 && !isJumping) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);
