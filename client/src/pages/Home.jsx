import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from '../3d/CarModel'
import { Environment, OrbitControls } from '@react-three/drei'
import { Buggati } from '../3d/Buggati'
import { exp } from 'three/tsl'



 function Home() {

    const [intensity, setIntensity] = useState(5.5)

    useEffect(() => {
        if(localStorage.getItem('theme') === 'light'){
            setIntensity(20.5)
        }else{
            setIntensity(8.5)
        }
    }, [localStorage.getItem('theme')])

    return (
        <div className="dark:bg-gradient-to-r dark:from-gray-700 dark:to-black bg-gradient-to-r from-white to-[#BA7F95]  bg-fixed bg-cover bg-center h-[300vh]">
            <div className="hero-section flex h-[110vh] items-center justify-center flex-col gap-3 ">
                <h1 className='text-[2rem] md:text-[15rem] font-extrabold font-[serif] tracking-widest'>
                    LUXE
                </h1>
                <div>
                    <p className='font-[halimun] text-[13px] md:text-xl'>Experience Cars Like Never Before</p>
                </div>
            </div>
            <div className='hero-car-section flex items-center justify-center gap-3 w-full h-screen'>
                <div className='hero-car flex items-center justify-center gap-3 flex-col w-full h-full mt-[500px] '>
                    <h1 className='text-6xl'>EXPERIENCE 3D</h1>
                    <div className='w-[50%] h-[70%]  rounded-2xl '>
                        <div className=' flex items-center justify-center gap-3 mt-10 font-[serif]'>
                        <h1 className='text-4xl'>BMW M5</h1>
                        </div>
                    <Canvas camera={{ position: [0, 0, 3] }}>
                        <Suspense fallback={null}>
                            <directionalLight intensity={intensity} castShadow={true} />
                            <Model />
                            <OrbitControls enablePan={false} enableZoom={false}  />
                            {/* <Environment preset="studio" environmentIntensity={0.2} /> */}
                        </Suspense>
                    </Canvas>
                    </div>
                    <div className='w-[50%] h-[70%] rounded-2xl mb-52 '>
                        <div className=' flex items-center justify-center gap-3 mt-10 font-[serif]'>
                        <h1 className='text-4xl'>BMW M5</h1>
                        </div>
                    <Canvas camera={{ position: [0, 0, 3] } }>
                        <Suspense fallback={null}>
                            <directionalLight intensity={intensity} castShadow={true} />
                            <Buggati />
                            <OrbitControls enablePan={true} enableZoom={false}   />
                            {/* <Environment preset="studio" environmentIntensity={0.2}  /> */}
                        </Suspense>
                    </Canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home