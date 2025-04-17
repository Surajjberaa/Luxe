import gsap from "gsap"
import BentoSection from "../components/home/BentoSection"
import HeroSection from "../components/home/HeroSection"
import { ScrollTrigger } from "gsap/all";
import CardStackSection from "../components/home/CardStackSection";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";



function Home() {
    
    gsap.registerPlugin(ScrollTrigger);    
    const homeRef = useRef()
    const bgRef = useRef()

//    let tween =  gsap.to('.hero-image', {
//         y:200  ,
//         opacity: 0,
//         ease: "power2.inOut"
//     }),
//     st = ScrollTrigger.create({
//         trigger: ".body",
//         start: "top top",
//         scrub: true,
//         end: "500 bottom",
//         animation: tween,
//         markers: true
//       });

//       st.animation

    // useGSAP(() => {

    //     gsap.to(homeRef, {
    //         opacity: 0,
    //         scrollTrigger: {
    //             trigger: ,
    //             start: 'top 75%',
    //             end: 'top 50%',
    //             markers: true,
    //             scrub: 2
    //         }
    //     })

    // }, {scope: homeRef})
      

    return (
        <div className="dark:bg-gradient-to-r h-full bg-fixed bg-cover bg-center overflow-hidden home" ref={homeRef}>
            <img className=" fixed hidden md:block top-0 -z-99 object-cover h-[100vh] w-full heroImage" src="https://res.cloudinary.com/dggyfyynb/image/upload/v1744921573/minimal-black-background-with-low-light-1242066324683755610_opg9p2.jpg"  ref={bgRef}/>
            <HeroSection />
            <CardStackSection />
            <BentoSection />
        </div>
    )
}

export default Home