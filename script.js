document.querySelector('a[href="#about-section"]').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('#about-section').scrollIntoView({
        behavior: 'smooth' 
    });
});

document.querySelector('a[href="#skill"]').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('#skill').scrollIntoView({
        behavior: 'smooth' 
    });
});

document.querySelector('a[href="#"]').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('#').scrollIntoView({
        behavior: 'smooth' 
    });
});