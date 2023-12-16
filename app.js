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
    const textContent = document.querySelector('.information');
    const h1 = textContent.querySelector('h1');
    const h2 = textContent.querySelector('h2');
    const span = textContent.querySelector('h2 span');

    photoCircle.style.transition = 'background .2s linear';
    h1.style.transition = 'color .7s ease';
    h2.style.transition = 'color .7s ease';
    span.style.transition = 'color .7s ease';



    if (argument === 'dark') {
        homeSection.style.background = 'linear-gradient(to right, #696969 0%, #696969 30%, #000 30%, #000 100%)';
        photoCircle.style.background = '#000';
        h1.style.color = '#fff';
        h2.style.color = '#fff';
        span.style.color = 'orange';


    }
    else if (argument === 'light') {
        homeSection.style.background = 'linear-gradient(to right, #696969 0%, #696969 30%, #fff 30%, #fff 100%)';
        photoCircle.style.background = '#fff';
        textContent.querySelector('h1').style.color = '#000';
        textContent.querySelector('h2').style.color = '#000';
        textContent.querySelector('h2 span').style.color = 'var(--gray-color)';

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

