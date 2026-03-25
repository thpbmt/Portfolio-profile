// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();

// SCROLL REVEAL
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

// TYPING EFFECT
const nameText = "Trần Hoàng Phước";
const roleText = "Java Backend Developer (intern)";

let i = 0;
let j = 0;

function typeName() {
  if (i < nameText.length) {
    document.getElementById("typing-name").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeName, 80);
  } else {
    setTimeout(typeRole, 300);
  }
}

function typeRole() {
  if (j < roleText.length) {
    document.getElementById("typing-role").innerHTML += roleText.charAt(j);
    j++;
    setTimeout(typeRole, 60);
  }
}

typeName();

// RESIZE
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});