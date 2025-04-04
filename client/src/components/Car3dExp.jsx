'use client'

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react'


function GroundPlane() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -1, 0]}>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="#0A0A0A" />
        </mesh>
    );
}

function Car3dExp({ model, name }) {
    const [intensity, setIntensity] = useState(5.5)

    useEffect(() => {

        if (localStorage.getItem('theme') === 'light') {
            setIntensity(20.5)
        } else {
            setIntensity(8.5)
        }
    }, [localStorage.getItem('theme')])

    return (
            <div className='md:w-[70%] md:h-[50%] w-[100%] h-[100%] rounded-2xl  mb-10 z-10 '>
            <div className=' flex items-center justify-center flex-col gap-3 mt-10 font-[serif] relative '>
              <h1 className='text-4xl '>{name}</h1>
              <div className=' w-full h-full rounded-2xl   '>
                <Canvas camera={{ position: [0, 0, 3], fov: 50 }} shadows className='rounded-2xl w-[100%] h-[100%]'>
                  <Suspense fallback={null}>
                    <directionalLight intensity={intensity} castShadow={true} position={[5, 5, 5]} shadow-mapSize-width={1024}
                      shadow-mapSize-height={1024} />
                    <directionalLight intensity={intensity} castShadow={true} position={[5, 5, 0]} shadow-mapSize-width={1024}
                      shadow-mapSize-height={1024} />
                    {model}
                    <GroundPlane />
                    <OrbitControls enablePan={false} enableZoom={false} />
                    {/* <Environment preset="studio" environmentIntensity={0.2} /> */}
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
    )
}

export default Car3dExp