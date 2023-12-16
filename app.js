
// home section
const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        homeSectionChanges('dark');
        navbarChanges('dark');
    }
    else {
        homeSectionChanges('light');
        navbarChanges('light');
    }
})

function homeSectionChanges(argument) {
    const homeSection = document.querySelector('#home');
    const photoCircle = document.querySelector('.circle-container');
    photoCircle.style.transition = 'background .2s linear';

    // homeSection.style.transition = 'background 1s linear';


    if (argument === 'dark') {
        homeSection.style.background = 'linear-gradient(to right, #696969 0%, #696969 30%, #000 30%, #000 100%)';
        photoCircle.style.background = '#000';
    }
    else if (argument === 'light') {
        homeSection.style.background = 'linear-gradient(to right, #696969 0%, #696969 30%, #fff 30%, #fff 100%)';
        photoCircle.style.background = '#fff';
    }
}

function navbarChanges(argument) {
    const navbarLinks = document.querySelector('nav').querySelectorAll('li a');
    for (let link of navbarLinks) {
        link.style.transition = 'color .7s ease';

    }
    if (argument === 'dark') {
        for (let link of navbarLinks) {
            link.style.color = '#fff';
        }
    }
    else if (argument === 'light') {
        for (let link of navbarLinks) {
            link.style.color = '#000';
        }
    }
}

