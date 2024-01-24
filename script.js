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

const mediaQ = () => {
    collapse.style.height = '0';
    collapse.style.opacity = '0';
    collapse.style.visibility = 'hidden';
    button.textContent = 'Daha Fazla';
}


button.addEventListener('click', (event) => {

    if (collapse.clientHeight) {
        mediaQ();
    }
    else {
        // scrollHeight elementin kapladığı yüksekliği verir.
        collapse.style.height = collapse.scrollHeight + 'px';
        collapse.style.opacity = '1';
        collapse.style.visibility = 'visible';
        button.textContent = 'Daha Az';
    }
})

const win = window.matchMedia('(max-width: 990px)');
win.addEventListener('change', () => {
    mediaQ();
});

const allLinkArr = navbar.querySelectorAll('.link');

allLinkArr.forEach(element => {
    element.addEventListener('click', function () {
        let activeElement = document.querySelector('.active');
        activeElement.className = activeElement.className.replace(" active", "");
        this.className += " active";
    })
});


window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100){
        // navbar.classList.add('navbarScrollEfect');
        navbar.style.backdropFilter = 'blur(20px)';
    }
    else{
        // navbar.classList.remove('navbarScrollEfect');
        navbar.style.backdropFilter = "";
    }
}

