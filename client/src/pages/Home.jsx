import React, { Suspense, useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Particles } from '../components/magicui/particles'
import { useTheme } from '../contexts/ThemeContext'
import { BlurFade } from '../components/magicui/blur-fade'



gsap.registerPlugin(useGSAP);


function Home() {

    const { theme } = useTheme(); // ✅ Now reactive!
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <div className="dark:bg-gradient-to-r h-full bg-fixed bg-cover bg-center overflow-hidden">
            <div className="hero-section flex h-[100vh] items-center justify-center flex-col gap-3 ">
                <div className='flex items-center justify-center gap-3 flex-col'>
                    <BlurFade delay={1} inView duration={4} className={'flex items-center justify-center gap-3 flex-col'}>

                        <h1 id='luxe' className='luxe text-[6rem] md:text-[15rem] font-extrabold font-[serif] tracking-widest select-none ' >
                            LUXE
                        </h1>
                        <div className='flex items-center justify-center gap-3 flex-col'>
                            <p className='font-[halimun] text-[13px] md:text-xl select-none '>Experience Cars Like Never Before</p>
                        </div>
                    </BlurFade>
                </div>
            </div>
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />
        </div>
    )
}

export default Home