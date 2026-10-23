document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar'), burger = document.querySelector('.burger');
  if (nav && burger) {
    const toggle = o => { nav.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); };
    burger.addEventListener('click', () => toggle(!nav.classList.contains('open')));
    nav.addEventListener('click', e => { if (e.target.tagName === 'A') toggle(false); });
  }
  const items = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('visible')); return; }
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
  }), { threshold: 0.05 });
  items.forEach(el => io.observe(el));
});
