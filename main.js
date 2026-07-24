(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loader = document.getElementById('page-loader');

  document.body.classList.add('is-loading');

  window.addEventListener('load', () => {
    const delay = prefersReducedMotion ? 250 : 1650;
    window.setTimeout(() => {
      loader?.classList.add('is-hidden');
      document.body.classList.remove('is-loading');
    }, delay);
  });

  const header = document.querySelector('.site-header');
  const updateHeader = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 18);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const revealItems = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .16, rootMargin: '0px 0px -40px 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));

  const countItems = document.querySelectorAll('[data-count]');
  const animateCount = (element) => {
    const target = Number(element.dataset.count || 0);
    const duration = prefersReducedMotion ? 0 : 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = duration ? Math.min((now - start) / duration, 1) : 1;
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(target * eased).toString();
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .65 });
  countItems.forEach((item) => countObserver.observe(item));

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      const headerHeight = header?.getBoundingClientRect().height || 0;
      const extraSpace = id === '#hero-section' ? 0 : 24;
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
      const top = Math.max(0, targetTop - headerHeight - extraSpace);

      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  });

  const form = document.querySelector('.contact-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const select = form.querySelector('#servicio');
    const selected = select?.selectedOptions?.[0];
    const phone = selected?.dataset?.phone || '524401077770';
    const nombre = String(formData.get('nombre') || '').trim();
    const telefono = String(formData.get('telefono') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const servicio = selected?.textContent?.trim() || 'Servicio no especificado';
    const mensaje = String(formData.get('mensaje') || '').trim();

    if (!nombre || !telefono || !select?.value) {
      form.reportValidity();
      return;
    }

    const text = [
      'Hola Servicios Integrales 3D, quiero solicitar una cotización.',
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      email ? `Correo: ${email}` : '',
      `Servicio: ${servicio}`,
      mensaje ? `Mensaje: ${mensaje}` : ''
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  });
})();
