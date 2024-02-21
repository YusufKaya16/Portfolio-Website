const toggleBtn = document.querySelector('#checkbox');
const navbar = document.querySelector('.navbar');
const body = document.querySelector('body')
const allLinkArr = navbar.querySelectorAll('.link');
const cvButton = document.querySelector('.btn-cv');

function allEvents() {
    toggleBtn.addEventListener('change', toggleBtnChange);
    cvButton.addEventListener('click', downloadCV);
}

allEvents();


function toggleBtnChange(event) {
    if (event.target.checked) {
        body.classList.add('darkMode');

    }
    else {
        body.classList.remove('darkMode');
    }
}

// active link
allLinkArr.forEach(element => {
    element.addEventListener('click', function () {
        const activeElement = navbar.querySelector('.active');
        activeElement.className = activeElement.className.replace(" active", "");
        this.className += " active";
    })
});

// navbar background
window.onscroll = function () {
    (document.documentElement.scrollTop > 100) ? navbar.style.backdropFilter = 'blur(20px)' : navbar.style.backdropFilter = '';
};

function downloadCV(event) {

    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href', 'CV/Yusuf_KAYA_CV.pdf');
    anchorElement.setAttribute('download', 'Yusuf_KAYA_CV');
    body.appendChild(anchorElement);
    anchorElement.click();
    body.removeChild(anchorElement);

}

