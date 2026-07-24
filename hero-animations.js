(() => {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const particles = [];
  const pointer = { x: 0, y: 0, active: false };
  let width = 0;
  let height = 0;
  let raf = 0;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const target = Math.max(48, Math.min(120, Math.floor(width / 18)));
    particles.length = 0;
    for (let i = 0; i < target; i += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - .5) * .32,
        vy: (Math.random() - .5) * .32,
        r: Math.random() * 1.8 + .7,
        a: Math.random() * .5 + .25
      });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 198, 39, .85)';
    ctx.strokeStyle = 'rgba(255, 255, 255, .14)';

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      if (pointer.active) {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 150 && dist > 0) {
          p.x += dx / dist * .35;
          p.y += dy / dist * .35;
        }
      }

      ctx.globalAlpha = p.a;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      for (let j = index + 1; j < particles.length; j += 1) {
        const n = particles[j];
        const distance = Math.hypot(p.x - n.x, p.y - n.y);
        if (distance < 92) {
          ctx.globalAlpha = (1 - distance / 92) * .28;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
      }
    });

    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(draw);
  };

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', (event) => {
    pointer.active = true;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }, { passive: true });
  window.addEventListener('pointerleave', () => {
    pointer.active = false;
  });

  resize();
  draw();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      draw();
    }
  });
})();
