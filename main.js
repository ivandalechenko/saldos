import './style.scss'
import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger, TextPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin)
import heroBg from './heroBg'
import hideLoader from './hideLoader'
import showBuko from './showBuko.js'
import showHeroP from './showHeroP.js'
import showHeroHeader from './showHeroHeader.js'
import showHeroContent from './showHeroContent.js'
import showHeader from './showHeader.js'
import bukoAnim from './bukoAnim.js'
import roadmap from './roadmap.js'
import tokenomics from './tokenomics.js'
import numbers from './numbers.js'
import htb from './htb.js'



const bukoAnimated = new Image();
bukoAnimated.src = '/img/heroContent.gif';
window.onload = function () {
    setTimeout(() => {
        heroBg()
        hideLoader()
        // Тут анимки на главной страничке (на главном экране)
        setTimeout(async () => {
            await showHeroHeader(gsap, 1)
            await showHeroContent(gsap, 1)
            showHeroP(gsap)
            showHeader(gsap)
            await showBuko(gsap, 1)
            bukoAnim(bukoAnimated, 1)
        }, 500);

        roadmap(gsap)
        tokenomics(gsap)
        numbers(gsap)
        htb(gsap)


        // gsap.fromTo('.roadmap_header', {
        //     opacity: 0,
        //     scale: 0.8,
        // }, {
        //     opacity: 1,
        //     scale: 1,
        //     scrollTrigger: {
        //         trigger: '.indexIntroducing',
        //         scrub: 1,
        //         // markers: true,
        //         start: 'top 70%',
        //         end: '100% 70%',
        //     }
        // })

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

    }, 500);
};


