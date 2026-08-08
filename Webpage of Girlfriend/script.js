function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 80 + 10) + "%";
  elm.style.left = Math.floor(Math.random() * 80 + 10) + "%";
}

const moveRandom = document.querySelector("#move-random");
if (moveRandom) {
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
}

const images = document.querySelectorAll('.tenor-gif-embed');
images.forEach(img => {
  img.addEventListener('click', (e) => {
    createHeartExplosion(e.clientX, e.clientY);
  });
});

function createHeartExplosion(x, y) {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '💜';
    heart.classList.add('heart-particle');
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 100 + 50;
    const tx = Math.cos(angle) * distance + 'px';
    const ty = Math.sin(angle) * distance + 'px';
    const rot = (Math.random() * 90 - 45) + 'deg';
    
    heart.style.setProperty('--tx', tx);
    heart.style.setProperty('--ty', ty);
    heart.style.setProperty('--rot', rot);
    heart.style.left = (x - 12) + 'px';
    heart.style.top = (y - 12) + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}

document.querySelectorAll('.btn a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.id === 'move-random' || this.getAttribute('href') === '#') return;
    
    e.preventDefault();
    const href = this.getAttribute('href');
    
    document.body.style.transition = "opacity 0.4s ease";
    document.body.style.opacity = 0;
    
    setTimeout(() => {
      window.location.href = href;
    }, 400);
  });
});
