const toggleBtn = document.querySelector('#checkbox');
const navbar = document.querySelector('.navbar');
const home = document.querySelector('#home');
const body = document.querySelector('body');
const collapseButton = document.querySelector('#collapseBtn');
const collapseSection = document.querySelector('#mycollapse');
const allLinkArr = navbar.querySelectorAll('.link');
const cvButton = document.querySelector('.btn-cv');

function allEvents() {
    toggleBtn.addEventListener('change', toggleBtnChange);
    collapseButton.addEventListener('click', collapseView);
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

const mediaQ = () => {
    collapseSection.style.height = '0';
    collapseSection.style.opacity = '0';
    collapseSection.style.visibility = 'hidden';
    collapseButton.textContent = 'Daha Fazla';
}

function collapseView(event) {
    if (collapseSection.clientHeight) {
        mediaQ();
    }
    else {
        collapseSection.style.height = collapseSection.scrollHeight + 'px';
        collapseSection.style.opacity = '1';
        collapseSection.style.visibility = 'visible';
        collapseButton.textContent = 'Daha Az';
    }

}

// active link
const win = window.matchMedia('(max-width: 990px)');
win.addEventListener('change', () => { mediaQ() });
allLinkArr.forEach(element => {
    element.addEventListener('click', function () {
        let activeElement = navbar.querySelector('.active');
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

