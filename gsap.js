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
        start: "bottom 100%",
        end: "bottom 0%",
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.from('.home-information', {
    x: 600,
    ...generalObj,
    scrollTrigger: {
        trigger: '.home-information',
        start: "bottom 100%",
        end: "bottom 0%",
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.from('.information', {
    y: 100,
    ...generalObj,
    scrollTrigger: {
        trigger: '.information',
        start: "top 100%",
        end: "top 0%",
        toggleActions: "restart reverse restart reverse",
    }
})

gsap.from('.skills', {
    y: 100,
    ...generalObj,
    scrollTrigger: {
        trigger: '.skills',
        start: "top 100%",
        end: "top 0%",
        toggleActions: "restart reverse restart reverse",
    }

})



// scrollTrigger

