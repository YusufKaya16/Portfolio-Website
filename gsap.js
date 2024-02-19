
// navbar animation
const navbarLinks =document.querySelector('.navbar-nav');
const circleImg = document.querySelector('.circle-container');
const information = document.querySelector('.information');

gsap.from(navbarLinks, {
    y: -200,
    opacity: 0,
    duration: 2,
    delay: 1
})

gsap.from(circleImg, {
    x:-500,
    opacity: 0,
    duration: 1,
})
gsap.from(information, {
    x:-1000,
    opacity: 0,
    duration: 1,
    delay:1
})