export default (gsap) => {
    gsap.to('.hero_p_inner', {
        duration: 3, text: {
            value: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat eius blanditiis fugit, officiis voluptate corporis."
        },
        ease: 'linear'

    })

}