import gsap from "gsap"
import BentoSection from "../components/home/BentoSection"
import HeroSection from "../components/home/HeroSection"
import { ScrollTrigger } from "gsap/all";
import CardStackSection from "../components/home/CardStackSection";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";



function Home() {
    
    gsap.registerPlugin(ScrollTrigger);    
    const homeRef = useRef()
    const bgRef = useRef()

    useGSAP(()=>{
        gsap.to('.heroImage', {
            opacity: 0,
            duration: 2,
            delay: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                start: '108% top',
                end: 'bottom bottom',
                // markers: true,
                scrub: true
                
            }
        })
    })
      

    return (
        <div className="dark:bg-gradient-to-r h-full bg-fixed bg-cover bg-center overflow-hidden home" ref={homeRef}>
            <img className="heroImage fixed hidden md:block top-0 -z-99 object-cover h-[100vh] w-full heroImage" src="https://res.cloudinary.com/dggyfyynb/image/upload/v1744921573/minimal-black-background-with-low-light-1242066324683755610_opg9p2.jpg"  ref={bgRef}/>
            <HeroSection />
            <CardStackSection />
            <BentoSection />
        </div>
    )
}

export default Home