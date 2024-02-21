gsap.from('#navbar', {
    y: -200,
    duration: 1.5,
})

const generalObj = {
    opacity: 0,
    duration: 1,
}

gsap.from('.circle-container', {
    x: -600,
    ...generalObj,
    scrollTrigger: {
        trigger: '.circle-container',
        start: "center 100%",
        end: "center 0%",
    }
})

gsap.from('.home-information', {
    x: 600,
    ...generalObj,
    scrollTrigger: {
        trigger: '.home-information',
        start: "center 100%",
        end: "center 0%",
    }
})

gsap.from('.information', {
    y: 100,
    ...generalObj,
    scrollTrigger: {
        trigger: '.information',
        start: "center 100%",
        end: "center 0%",
    }
})

gsap.from('.skills', {
    y: 100,
    ...generalObj,
    scrollTrigger: {
        trigger: '.skills',
        start: "center 100%",
        end: "center 0%",
    }
})


// portfolio content animation
const contentObj = {
    y:100,
    opacity: 0,
}

gsap.from('#content-1', {
    duration: 1,
    delay: 0,
    ...contentObj,
    scrollTrigger : {
        trigger: '#content-1',
        start: "center 100%",
        end: "center 0%",
    }
})
gsap.from('#content-2', {
    duration: 1,
    delay: .3,
    ...contentObj,
    scrollTrigger : {
        trigger: '#content-2',
        start: "center 100%",
        end: "center 0%",
    }
})
gsap.from('#content-3', {
    duration: 1,
    delay: .6,
    ...contentObj,
    scrollTrigger : {
        trigger: '#content-3',
        start: "center 100%",
        end: "center 0%",
    }
})
gsap.from('#content-4', {
    duration: 1,
    delay: .9,
    ...contentObj,
    scrollTrigger : {
        trigger: '#content-4',
        start: "center 100%",
        end: "center 0%",
    }
})

gsap.from('#footer-content', {
    y:100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#footer-content",
        start: "center 100%",
        end: "center 0%",
    }
})



// scrollTrigger

