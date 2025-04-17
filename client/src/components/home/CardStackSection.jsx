import React, { useRef } from 'react'
import PinCards from './PinCards';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

const carsShowcase = [
    {
        title: "Lamborghini Huracán EVO",
        description: "A fusion of raw performance and Italian elegance, built to dominate roads with aggressive design and roaring V10 power.",
        specs: {
            engine: "5.2L Naturally Aspirated V10",
            horsepower: "631 hp",
            torque: "600 Nm",
            topSpeed: "325 km/h",
            acceleration: "0-100 km/h in 2.9 sec",
            drivetrain: "All-Wheel Drive (AWD)",
            transmission: "7-Speed Dual-Clutch Automatic",
            weight: "1,422 kg",
            price: "₹4.00 Cr (ex-showroom India)",
          },
        imgUrl: "https://gaapupgzgvpsestztgyn.supabase.co/storage/v1/object/sign/images/lamborghiniHurracan.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbGFtYm9yZ2hpbmlIdXJyYWNhbi5qcGciLCJpYXQiOjE3NDQ2NjMxMTgsImV4cCI6MjA2MDAyMzExOH0.pA33gyNJO6TuxPwbjCB69p6UixbUuvmvAqqx_skxizM"
    },
    {
        title: "Porsche 911 Turbo S",
        description: "A legendary icon reborn — precision engineering, luxurious comfort, and mind-blowing acceleration packed into a timeless silhouette.",
        specs: {
            engine: "3.8L Twin-Turbocharged Flat-6",
            horsepower: "641 hp",
            torque: "800 Nm",
            topSpeed: "330 km/h",
            acceleration: "0-100 km/h in 2.7 sec",
            drivetrain: "All-Wheel Drive (AWD)",
            transmission: "8-Speed PDK Automatic",
            weight: "1,640 kg",
            price: "₹3.13 Cr (ex-showroom India)",
          },
        imgUrl: "https://gaapupgzgvpsestztgyn.supabase.co/storage/v1/object/sign/images/Porsche%20911%20Turbo%20S.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUG9yc2NoZSA5MTEgVHVyYm8gUy5qcGciLCJpYXQiOjE3NDQ2NjMzOTgsImV4cCI6MjA2MDAyMzM5OH0.HkoaWqcT-RscbxA1sq8fq6A5ShcZzJabNc0b8_p8zu0"
    },
    {
        title: "Toyota Supra GR",
        description: "Sporty, sleek, and agile — a modern revival of a legend, designed for the pure thrill of driving enthusiasts.",
        specs: {
            engine: "3.0L Turbocharged Inline-6",
            horsepower: "382 hp",
            torque: "500 Nm",
            topSpeed: "250 km/h (electronically limited)",
            acceleration: "0-100 km/h in 4.1 sec",
            drivetrain: "Rear-Wheel Drive (RWD)",
            transmission: "8-Speed Automatic",
            weight: "1,570 kg",
            price: "₹85 Lakh (estimated, import)",
          },
        imgUrl: "https://gaapupgzgvpsestztgyn.supabase.co/storage/v1/object/sign/images/Toyota%20Supra%20GR.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvVG95b3RhIFN1cHJhIEdSLmpwZyIsImlhdCI6MTc0NDY2MzQ5OSwiZXhwIjoyMDYwMDIzNDk5fQ.5VrPHI9jVHOtyitBazDiDgj5Ig2yl7RY3ioaPhRhEr8"
    },
    {
        title: "Ferrari 812 Superfast",
        description: "A front-engine V12 masterpiece delivering jaw-dropping speed, unmistakable style, and a symphony of Italian craftsmanship.",
        specs: {
            engine: "6.5L Naturally Aspirated V12",
            horsepower: "789 hp",
            torque: "718 Nm",
            topSpeed: "340 km/h",
            acceleration: "0-100 km/h in 2.9 sec",
            drivetrain: "Rear-Wheel Drive (RWD)",
            transmission: "7-Speed Dual-Clutch Automatic",
            weight: "1,630 kg",
            price: "₹5.75 Cr (ex-showroom India)",
          },
        imgUrl: "https://gaapupgzgvpsestztgyn.supabase.co/storage/v1/object/sign/images/Ferrari%20812%20Superfast.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvRmVycmFyaSA4MTIgU3VwZXJmYXN0LmpwZyIsImlhdCI6MTc0NDY2Mzg1MywiZXhwIjoyMDYwMDIzODUzfQ.KbqbzsrNDmLQt-Ih6ZO9lWY8bQnQwgDlQk1EKC4aHHE"
    }
];

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


function CardStackSection() {

    const containerRef = useRef()

    useGSAP(() => {
        const cards = gsap.utils.toArray('.pinCards');
        console.log(cards.length);
        

        ScrollTrigger.create({
            trigger: cards[1],
            start: 'top 15%',
            endTrigger: cards[cards.length],
            end: 'top 65%',
            pin: '.intro',
            pinSpacing: false,
            // markers: true
        })


        cards.forEach((card, index) => {
            const isLastCard = index == cards.length;
            const cardInner = card.querySelector('.cardInner')

            if(!isLastCard){
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 15%',
                    endTrigger: '.outro',
                    end: 'top 65%',
                    pin: true,
                    pinSpacing: false
                });

                gsap.to(cardInner, {
                    y: `-${(cards.length - index) * 14}vh`,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 15%',
                        endTrigger: '.outro',
                        end: 'top 65%',
                        scrub: true,
                        // markers: true
                    }
                })
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill()
            })
        }

    }, { scope: containerRef })

    return (
        <div className='app hidden md:block' ref={containerRef}>
            <section className='hero w-[100vw] h-[100vh] relative overflow-hidden'>
                <img src="https://res.cloudinary.com/dggyfyynb/image/upload/v1744616967/MercedesSideView1_s1seba.jpg" alt="" />
            </section>
            <section className='intro w-[100vw] h-[100vh] relative p-[2em] flex items-center justify-end text-center '>
                <h1 className='mb-0 text-[4rem] font-[halimun]'>Creating masterpiece experiences for car enthusiasts that brings joy and leave lasting impressions.</h1>
            </section>
            <section className='cards font-[serif]'>
                {
                    carsShowcase.map((car, index) => (
                        <PinCards key={index} {...car} index={index} />
                    ))
                }
            </section>
            <section className='outro w-[100vw] h-[100vh] relative p-[2em]  flex items-center justify-end text-center '>
                <h1 className='mb-0 text-[4rem] font-[halimun] p-[100px]'>Let's build an experience that leaves a mark.</h1>
            </section>
        </div>
    )
}

export default CardStackSection