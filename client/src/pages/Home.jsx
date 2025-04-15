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
            {/* <img className=" fixed top-0 -z-99 blur-md object-cover h-[100vh] w-full heroImage" src="https://gaapupgzgvpsestztgyn.supabase.co/storage/v1/object/sign/images/glowing-black-diamond-in-space-1285204250548506644.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZ2xvd2luZy1ibGFjay1kaWFtb25kLWluLXNwYWNlLTEyODUyMDQyNTA1NDg1MDY2NDQuanBlZyIsImlhdCI6MTc0NDczNzU3MSwiZXhwIjoyMDYwMDk3NTcxfQ.tyWENwoIMKsVRZOeXYl-HxghLazScWNAl7h1QqpBKT0"  ref={bgRef}/> */}
            <HeroSection />
            <CardStackSection />
            <BentoSection />
        </div>
    )
}

export default Home