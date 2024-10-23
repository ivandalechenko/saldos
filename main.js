import './style.scss'
import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)
import heroBg from './heroBg'
import hideLoader from './hideLoader'



window.onload = function () {
    setTimeout(() => {
        heroBg()


        // gsap.to('.indexUsp_header', {
        //     opacity: 1,
        //     duration: 2,
        //     delay: 1,
        // })

        // gsap.to('.indexUsp_p', { duration: 2, text: { value: "Blurring the lines between Web2 and Web3" } })
        // let mm = gsap.matchMedia();
        // mm.add("(min-width: 900px)", () => {
        //     teamList(ScrollTrigger, gsap)
        //     uspAnim(gsap)
        //     indexIntroducing(gsap)
        //     indexRoadmap(gsap)
        //     indexGetting(gsap)
        //     animOrbit(gsap)
        // });

        // mm.add("(max-width: 900px)", () => {
        //     animOrbit(gsap, 2)
        // });
        hideLoader()

    }, 500);
};


