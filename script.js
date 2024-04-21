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
document.querySelector('a[href="#"]').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('#').scrollIntoView({
        behavior: 'smooth' 
    });
});



