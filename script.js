document.querySelector('a[href="#about-section"]').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('#about-section').scrollIntoView({
        behavior: 'smooth' 
    });
});

document.querySelector('a[href="#skill"]').addEventListener('click', function(e) {
    e.preventDefault(); 
    const skillElement = document.querySelector('#skill');
    const offset = 65;
    const scrollPosition = skillElement.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: scrollPosition - offset,
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#project"]').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('#project').scrollIntoView({
        behavior: 'smooth' 
    });
});






document.querySelector('a[href="#"]').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('#').scrollIntoView({
        behavior: 'smooth' 
    });
});




document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth' 
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
  
    function checkFade() {
      fadeElements.forEach(function(element) {
        const position = element.getBoundingClientRect();
  
        
        if (position.top < window.innerHeight && position.bottom >= 0) {
   
          if (!element.classList.contains('visible')) {
            element.classList.add('visible');
          }
        } else {
         
          element.classList.remove('visible');
        }
      });
    }
  
   
    checkFade();
    window.addEventListener('scroll', checkFade);
  });

