export default (gsap) => {
    const persentPerEl = 90;
    const start = 2;
    // tokenomics_decor

    gsap.fromTo('.tokenomics_decor', {
        scale: 2,
        opacity: 0,
    }, {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 0)}px 80% `,
            end: `${persentPerEl * (start + 0)}px 80% `,
        }
    })

    gsap.to('.tokenomics_header', {
        text: {
            value: "TOKENOMICS"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 1)}px 80% `,
            end: `${persentPerEl * (start + 2)}px 80% `,
        }
    })


    gsap.fromTo('.tokenomics_element_1', {
        x: -100,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 4)}px 80% `,
            end: `${persentPerEl * (start + 5)}px 80% `,
        }
    })

    gsap.fromTo('.tokenomics_element_2', {
        y: 100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 4)}px 80% `,
            end: `${persentPerEl * (start + 5)}px 80% `,
        }
    })
    gsap.fromTo('.tokenomics_element_3', {
        x: 100,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 4)}px 80% `,
            end: `${persentPerEl * (start + 5)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_1_h', {
        text: {
            value: "SUPPLY"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_1_v', {
        text: {
            value: "33.3 %"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_2_h', {
        text: {
            value: "TAXES"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_2_v', {
        text: {
            value: "33.3 %"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_3_h', {
        text: {
            value: "LIQUIDITY"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_3_v', {
        text: {
            value: "33.3 %"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })

}