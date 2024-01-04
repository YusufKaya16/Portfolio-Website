const toggleBtn = document.querySelector('#checkbox');
const navbar = document.querySelector('.navbar');
const home = document.querySelector('#home');


toggleBtn.addEventListener('change', (event) => {

    if (event.target.checked) {
        navbar.classList.add('navbar-toggleStyle');
        home.classList.add('home-toggleStyle');

    }
    else {
        navbar.classList.remove('navbar-toggleStyle');
        home.classList.remove('home-toggleStyle');

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
const btnText = document.querySelector('.btn-text');
const buttonText = btnText.querySelector('.more-text');

button.addEventListener('click', () =>{
    if(collapse.clientHeight){
        collapse.style.height = 0;
        collapse.style.opacity = '0';
        buttonText.textContent = 'Daha Fazla';
        btnText.classList.remove('btnTextChangeClass');

    }
    else{
        collapse.style.height = (row1.clientHeight) +'px';
        collapse.style.opacity = '1';
        buttonText.textContent = 'Daha Az';
        btnText.classList.add('btnTextChangeClass');

    }
})



