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

    }, 500);
};


