const observer = new IntersectionObserver((entries)) => {

    entries.array.forEach((entry) => {
        console.log(entry)
        if(entry.Intersecting)
        {
            entry.target.classList.add('show');
        }
    }); 
};



const hiddenElements = document.querySelectorAll('.home');