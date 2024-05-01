document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const aboutSectionLink = document.querySelector('a[href="#about-section"]');
  const skillLink = document.querySelector('a[href="#skill"]');
  const projectLink = document.querySelector('a[href="#project"]');
  const contactLink = document.querySelector('a[href="#contact"]');
  const aboutSection = document.querySelector('#about-section');
  const skillElement = document.querySelector('#skill');
  const projectSection = document.querySelector('#project');
  const contactSection = document.querySelector('#contact');

  function checkFade() {
    fadeElements.forEach(function(element) {
      const position = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (position.top < windowHeight && position.bottom >= 0) {
        if (!element.classList.contains('visible')) {
          element.classList.add('visible');
        }
      } else {
        element.classList.remove('visible');
      }
    });
  }

  function smoothScrollTo(element, offset) {
    const scrollPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: scrollPosition - offset,
      behavior: 'smooth'
    });
  }

  aboutSectionLink.addEventListener('click', function(e) {
      e.preventDefault();
      aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  skillLink.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo(skillElement, 65);
  });

  projectLink.addEventListener('click', function(e) {
      e.preventDefault();
      projectSection.scrollIntoView({ behavior: 'smooth' });
  });

  contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
  });

  checkFade();
  window.addEventListener('scroll', checkFade);
});