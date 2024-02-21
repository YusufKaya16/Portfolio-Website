const sliderText = document.querySelector('.slider-text');

const textAnimation = function () {
    setTimeout(() => {
        sliderText.textContent = 'Web Developer';
    }, 0);

    setTimeout(() => {
        sliderText.textContent = 'Back-end';
    }, 6000);

    setTimeout(() => {
        sliderText.textContent = 'Freelancer';
    }, 12000);
}

textAnimation();
setInterval(textAnimation, 18000);
