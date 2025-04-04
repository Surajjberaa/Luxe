import { useGSAP } from '@gsap/react'
import { Buggati } from '../3d/Buggati'
import { Model } from '../3d/CarModel'
import Car3dExp from '../components/Car3dExp'
import { useEffect, useRef, useState } from 'react'
import { Particles } from '../components/magicui/particles'
import { useTheme } from '../contexts/ThemeContext'
import { useNavigate, useParams } from 'react-router-dom'

function Experience() {

  const { theme } = useTheme(); // ✅ Now reactive!
  const [color, setColor] = useState("#ffffff");

  const navigate = useNavigate()

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  // console.log(theme);


  const Experience = useRef()

  

  console.log(window.location.pathname);

  return (
    <div className='hero-car-section flex items-start justify-center gap-3 w-full h-full relative overflow-hidden'>
      <div className='hero-car flex items-center  gap-3 flex-col md:w-[70%] w-[100%] h-full mt-[100px]  '>

        <h1 className='md:text-6xl text-3xl' ref={Experience}>EXPERIENCE 3D</h1>
        <Car3dExp model={<Model />} name={"BMW M5"} />
        <Car3dExp model={<Buggati />} name={"Buggati Tourbillion"} />
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

export default Experience