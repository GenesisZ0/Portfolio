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

// Transition entre pages : fondu de sortie avant de changer de page
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === '_blank' || a.hasAttribute('download') || !a.getAttribute('href')) return;
    const same = a.protocol === location.protocol && a.host === location.host;
    if (!same || a.pathname === location.pathname) return;   // externe ou simple ancre : pas de fondu
    e.preventDefault();
    document.documentElement.classList.add('leaving');
    setTimeout(() => { location.href = a.href; }, reduce ? 0 : 400);
  });
  // Bouton "retour" du navigateur : on retire l'état de sortie
  window.addEventListener('pageshow', e => {
    if (e.persisted) document.documentElement.classList.remove('leaving');
  });
})();
