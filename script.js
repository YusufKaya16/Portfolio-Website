const toggleBtn = document.querySelector('#checkbox');
const navbar = document.querySelector('.navbar');
const home = document.querySelector('#home');

const body = document.querySelector('body');


toggleBtn.addEventListener('change', (event) => {

    if (event.target.checked) {
        body.classList.add('darkMode');

    }
    else {
        body.classList.remove('darkMode');
    }
})

const sliderText = document.querySelector('.slider-text');
const textAnimation = function () {
    setTimeout(() => {
        sliderText.textContent = 'Web Developer';
    }, 0);
    setTimeout(() => {
        sliderText.textContent = 'Back-end';
    }, 5999);

    setTimeout(() => {
        sliderText.textContent = 'Freelancer';
    }, 11999);
}

textAnimation();
setInterval(textAnimation, 18000);

const button = document.querySelector('#collapseBtn');
const collapse = document.querySelector('#mycollapse');
const row1 = document.querySelector('#row-1');

button.addEventListener('click', (event) => {

    console.log(body.scrollHeight);

    if (collapse.clientHeight) {
        collapse.style.height = '0';
        collapse.style.opacity = '0';
        collapse.style.visibility = 'hidden';
        button.textContent = 'Daha Fazla';
    }
    else {
        // scrollHeight elementin kapladığı yüksekliği verir.
        collapse.style.height = collapse.scrollHeight + 'px';
        collapse.style.opacity = '1';
        collapse.style.visibility = 'visible';
        button.textContent = 'Daha Az';
    }

})




