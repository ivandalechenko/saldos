export default (gsap) => {
    gsap.to('.roadmap_header', {
        text: {
            value: "ROADMAP"
        }, scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: '0% 80%',
            end: '15% 80%',
        }
    })
    gsap.fromTo('.roadmap_step_1', {
        y: -50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: '15% 80%',
            end: '25% 80%',
        }
    })
    gsap.to('.roadmap_step_content_1', {
        text: {
            value: "PRESALE"
        }, scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: '25% 80%',
            end: '40% 80%',
        }
    })
    gsap.fromTo('.roadmap_step_2', {
        y: -50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: '40% 80%',
            end: '50% 80%',
        }
    })
    gsap.to('.roadmap_step_content_2', {
        text: {
            value: "LISTING"
        }, scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: '50% 80%',
            end: '65% 80%',
        }
    })
    gsap.fromTo('.roadmap_step_3', {
        y: -50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: '65% 80%',
            end: '80% 80%',
        }
    })
    gsap.to('.roadmap_step_content_3', {
        text: {
            value: "DOMINATION"
        }, scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: '80% 80%',
            end: '100% 80%',
        }
    })
    gsap.fromTo('.roadmap_step_decor', {
        scale: 2,
        opacity: 0,
    }, {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: '80% 80%',
            end: '85% 80%',
        }
    })
}