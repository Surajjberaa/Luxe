import gsap from "gsap"
import BentoSection from "../components/home/BentoSection"
import HeroSection from "../components/home/HeroSection"
import { ScrollTrigger } from "gsap/all";



function Home() {
    
//     gsap.registerPlugin(ScrollTrigger);    

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
      

    return (
        <div className="dark:bg-gradient-to-r h-full bg-fixed bg-cover bg-center overflow-hidden bg-[url()] home">
            {/* <img className="absolute top-0 -z-99 blur-md object-cover h-[100vh] w-full hero-image" src="https://gaapupgzgvpsestztgyn.supabase.co/storage/v1/object/sign/images/bg-img.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYmctaW1nLmpwZyIsImlhdCI6MTc0NDYyMjE2OSwiZXhwIjoyMDU5OTgyMTY5fQ.MZlDqbUN04kcN-WmBPe6YKCqr-VMwyeeWPNVuerbefw" /> */}
            <HeroSection />
            <BentoSection />
        </div>
    )
}

export default Home